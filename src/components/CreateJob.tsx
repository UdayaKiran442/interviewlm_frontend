"use client"
import { useState } from 'react';
import { Plus, Info } from 'lucide-react'

import { H3, H4, H5, Tagline } from "./ui/Typography";
import { Input } from './ui/Input';
import { Label } from './ui/Label';
import { Card } from './ui/Card';
import { IJobState, IRoundState } from '@/types/types';
import { ButtonSecondary } from './ui/Buttons';
import { Rounds } from './ui/Rounds';


export default function CreateJob() {
    const [jobDetails, setJobDetails] = useState<IJobState>({
        jobTitle: "",
        jobLocation: "",
        salary: "",
        experience: "",
        jobDescription: "",
    })
    const [rounds, setRounds] = useState<IRoundState[]>([])
    function addRound() {
        setRounds(prevRounds => {
            const newRounds = [
                ...prevRounds,
                {
                    roundType: "Technical Interview",
                    difficulty: "medium",
                    duration: 60,
                    isAI: false,
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

    function submitJob() {
        console.log(jobDetails, rounds);
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
                                <Input id='jobLocation' placeholder='e.g. Hyderabad, Bangalore, Remote' name='jobLocation' type='text' value={jobDetails.jobLocation} onChange={(e) => updateJobDetails('jobLocation', e.target.value)} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label id='salary' label='Salary' className="block text-sm font-bold text-gray-700" />
                                <Input id='salary' placeholder='e.g. 8-10LPA' name='salary' type='text' value={jobDetails.salary} onChange={(e) => updateJobDetails('salary', e.target.value)} />
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
                            <ButtonSecondary onClick={addRound} className="flex items-center gap-2">
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
                <div className="mt-1.5">
                    <ButtonSecondary onClick={submitJob}>Publish Job</ButtonSecondary>
                </div>
            </div>
        </div>
    );
}