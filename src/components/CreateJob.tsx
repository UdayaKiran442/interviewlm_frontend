"use client"
import { useState } from 'react';
import { Plus, Info } from 'lucide-react'

import { H3, H4, H5, Tagline } from "./ui/Typography";
import { Input } from './ui/Input';
import { Label } from './ui/Label';
import { Card } from './ui/Card';
import { ButtonSecondary } from './ui/Buttons';
import { Rounds } from './ui/Rounds';
import { ICreateJobPayload, IJobState, IRoundState } from '@/types/types';
import { useSelector } from 'react-redux';
import { createJobAPI } from '@/actions/job';
import { SearchDropDown } from './ui/SearchDropdown';


export default function CreateJob() {
    const [jobDetails, setJobDetails] = useState<IJobState>({
        jobTitle: "",
        location: "",
        package: "",
        experience: "",
        jobDescription: "",
        maximumApplications: null,
        jobReviewers: []
    })
    const [rounds, setRounds] = useState<IRoundState[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const { user } = useSelector((state: any) => state.auth)

    function addRound() {
        setRounds(prevRounds => {
            const newRounds = [
                ...prevRounds,
                {
                    roundType: "Technical Interview",
                    difficulty: "medium",
                    duration: 60,
                    isAI: true,
                    questionType: "JD + Resume",
                    roundDescription: "",
                    roundName: "",
                    roundNumber: prevRounds.length + 2,
                },
            ];
            return newRounds;
        });
    }

    function updateRound(index: number, field: keyof IRoundState, value: any) {
        setRounds(prevRounds => {
            const updatedRounds = prevRounds.map((round, i) =>
                i === index ? { ...round, [field]: value } : round
            );
            return updatedRounds;
        });
    };

    function updateJobDetails(field: keyof IJobState, value: any) {
        setJobDetails(prevJobDetails => {
            const updatedJobDetails = { ...prevJobDetails, [field]: value };
            return updatedJobDetails;
        });
    }

    async function submitJob() {
        try {
            const screeningRound: IRoundState = {
                roundType: "Resume Screening",
                isAI: false,
                roundName: "Resume Screening",
                roundNumber: 1
            }
            const payload: ICreateJobPayload = {
                ...jobDetails as IJobState,
                companyId: user?.companyId,
                department: "Engineering",
                jobReviewers: [],
                rounds: [...rounds, screeningRound]
            }
            console.log(payload)
            // send payload to backend
            setIsLoading(true)
            const response = await createJobAPI(payload)
            setIsLoading(false)
            if (response.success) {
                // popup success
                setJobDetails({
                    jobTitle: "",
                    location: "",
                    package: "",
                    experience: "",
                    jobDescription: "",
                    maximumApplications: null
                })
                setRounds([])
            }
        } catch (error) {
            // popup error
            setIsLoading(false)
        }
    }
    return (
        <div className="min-h-screen w-full bg-gray-100">
            <div className="ml-[20%] flex flex-col">
                <div className="p-4">
                    <H3>Create New Job Posting</H3>
                    <Tagline>Configure your job posting and interview process</Tagline>
                </div>
                <Card>
                    <div className="mb-6">
                        <H4>Job Details</H4>
                        <Tagline>Basic information about the position</Tagline>
                    </div>
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label id='jobTitle' label='Job Title' className="block text-sm font-bold text-gray-700" />
                                <Input id='jobTitle' placeholder='e.g. Software Engineer' name='jobTitle' type='text' value={jobDetails.jobTitle} onChange={(e) => updateJobDetails('jobTitle', e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label id='jobLocation' label='Job Location' className="block text-sm font-bold text-gray-700" />
                                <Input id='jobLocation' placeholder='e.g. Hyderabad, Bangalore, Remote' name='jobLocation' type='text' value={jobDetails.location} onChange={(e) => updateJobDetails('location', e.target.value)} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label id='package' label='Package' className="block text-sm font-bold text-gray-700" />
                                <Input id='package' placeholder='e.g. 8-10LPA' name='package' type='text' value={jobDetails.package} onChange={(e) => updateJobDetails('package', e.target.value)} />
                            </div>
                            <div className="space-y-2">
                                <Label id='experience' label='Experience' className="block text-sm font-bold text-gray-700" />
                                <Input id='experience' placeholder='e.g. 2-3 years, 0-2 years' name='experience' type='text' value={jobDetails.experience} onChange={(e) => updateJobDetails('experience', e.target.value)} />
                            </div>
                        </div>
                        <div className="">
                            <div className="space-y-2">
                                <Label id='jobDescription' label='Job Description' className="block text-sm font-bold text-gray-700" />
                                <textarea id='jobDescription' rows={5} cols={100} className='w-full border border-gray-300 rounded-lg p-3' placeholder='Enter Job Description here' name='jobDescription' value={jobDetails.jobDescription} onChange={(e) => updateJobDetails('jobDescription', e.target.value)} />
                            </div>
                        </div>
                        <div>
                            <SearchDropDown jobDetails={jobDetails} setJobDetails={setJobDetails} />
                        </div>
                    </div>
                </Card>
                <Card className='mt-10'>
                    <div className="mb-6">
                        <H3>Interview Process</H3>
                        <Tagline>Configure interview rounds and assessments</Tagline>
                    </div>
                    <div>
                        <div className='flex justify-between items-center'>
                            {/* title and button */}
                            <H5>Interview Rounds</H5>
                            <ButtonSecondary disabled={isLoading} onClick={addRound} className="flex items-center gap-2">
                                <Plus size={16} />
                                Add Round
                            </ButtonSecondary>
                        </div>
                        {/* Tagline */}
                        <Tagline className='!-mt-2 !text-sm'>Design your interview process by adding and configuring different assessment stages.</Tagline>
                        <div>
                            {/* round 1 info */}
                            <Tagline className='!text-[0.8rem] !flex !items-center !gap-1'>
                                <Info size={10} />
                                Round 1 is automatically set as resume screening
                            </Tagline>
                        </div>
                        <div>
                            {/* Rounds info */}
                            <Rounds rounds={rounds} updateRound={updateRound} />
                        </div>
                    </div>
                </Card>
                <Card className='mt-10'>
                    <H3>Application Settings</H3>
                    <Tagline>Configure application limits and filtering</Tagline>
                    <div className="mt-5 grid grid-cols-1 gap-6">
                        <div>
                            <Label id='maximumApplications' label='Maximum Applications' />
                            <Input id='maximumApplications' placeholder='e.g. 10' name='maximumApplications' type='number' value={jobDetails.maximumApplications ?? 0} onChange={(e) => updateJobDetails('maximumApplications', e.target.value)} />
                        </div>
                    </div>
                </Card>
                <div className="mt-1.5 mb-7">
                    <ButtonSecondary disabled={isLoading} onClick={submitJob}>{isLoading ? "Publishing Job..." : "Publish Job"}</ButtonSecondary>
                </div>
            </div>
        </div>
    );
}