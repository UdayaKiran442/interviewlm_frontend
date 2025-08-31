"use client"
import { useState } from 'react';
import { Plus, Info, Bot, Clock, Brain, Trash } from 'lucide-react'

import { H3, H4, H5, Tagline } from "./ui/Typography";
import { Input } from './ui/Input';
import { Label } from './ui/Label';
import { Card } from './ui/Card';
import { IJobState, IRoundState } from '@/types/types';
import { Select } from './ui/Select';
import Button from './ui/Buttons';

interface Props {
    submitJob: (formData: FormData) => void;
}

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
                            <button onClick={addRound} className="flex items-center gap-2 !bg-blue-600 hover:!bg-blue-700 text-white font-bold px-4 py-2 rounded-xl">
                                <Plus size={16} />
                                Add Round
                            </button>
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
                            <Card className='border border-gray-300 rounded-2xl mt-2'>
                                {rounds.length === 0 ?
                                    <div className='flex flex-col justify-center items-center'>
                                        <Clock size={24} color='gray' />
                                        <Tagline>No interview rounds configured yet</Tagline>
                                        <Tagline className='!text-[0.8rem] !flex !items-center !gap-1'>Click "Add Round" to get started</Tagline>
                                    </div> :
                                    rounds.map((round, index) => (
                                        <div key={index} className="space-y-6">
                                            <div className='flex justify-between items-center'>
                                                <div className='flex items-center gap-2'>
                                                    <Brain size={16} />
                                                    <H5>Round {round.roundNumber}</H5>
                                                </div>
                                                <Trash className='cursor-pointer' size={16} color='red' />
                                            </div>
                                            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                                                <div className="space-y-2">
                                                    <Label id='roundType' label='Interview Type' />
                                                    <Select
                                                        id='roundType'
                                                        name='roundType'
                                                        className='w-full border border-gray-300 rounded-lg p-3'
                                                        value={round.roundType}
                                                        onChange={(e) => updateRound(index, 'roundType', e.target.value)}
                                                    >
                                                        <option value="Technical Interview">Technical Interview</option>
                                                        <option value="Behavioral Interview">Behavioral/HR/Culture fit Interview</option>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label id='roundName' label='Round Name' />
                                                    <Input
                                                        id='roundName'
                                                        name='roundName'
                                                        placeholder='e.g. Technical Interview - 1'
                                                        type='text'
                                                        value={round.roundName}
                                                        onChange={(e) => updateRound(index, 'roundName', e.target.value)}
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label id='duration' label='Duration(in minutes)' />
                                                    <Input
                                                        id='duration'
                                                        name='duration'
                                                        placeholder='e.g. 60'
                                                        type='number'
                                                        value={round.duration}
                                                        onChange={(e) => updateRound(index, 'duration', e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                                                <div className="space-y-2">
                                                    <Label id='difficulty' label='Difficulty' />
                                                    <Select
                                                        id='difficulty'
                                                        name='difficulty'
                                                        value={round.difficulty}
                                                        onChange={(e) => updateRound(index, 'difficulty', e.target.value)}
                                                    >
                                                        <option value="easy">Easy</option>
                                                        <option value="medium">Medium</option>
                                                        <option value="hard">Hard</option>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label id='questionType' label='Question Type' />
                                                    <Select
                                                        id='questionType'
                                                        name='questionType'
                                                        value={round.questionType}
                                                        onChange={(e) => updateRound(index, 'questionType', e.target.value)}
                                                    >
                                                        <option value="JD + Resume">JD + Resume</option>
                                                        <option value="JD">JD</option>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 mt-4">
                                                <input onChange={(e) => updateRound(index, 'isAI', e.target.checked)} type="checkbox" id="isAI" name="isAI" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <Bot className="h-4 w-4 text-blue-500" />
                                                <Label id="isAI" className='-ml-1.5' label="AI-Powered Interview" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label id='roundDescription' label='Round Description' />
                                                <textarea
                                                    id='roundDescription'
                                                    className='w-full border border-gray-300 rounded-lg p-3'
                                                    placeholder='Enter round description here'
                                                    name='roundDescription'
                                                    value={round.roundDescription ?? ""}
                                                    onChange={(e) => updateRound(index, 'roundDescription', e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                            </Card>
                        </div>
                    </div>
                </Card>
                <div className="mt-1.5">
                    <Button onClick={submitJob} className='!bg-blue-600 !hover:bg-blue-700 !text-white !font-bold !px-4 !py-2'>Publish Job</Button>
                </div>
            </div>
        </div>
    );
}