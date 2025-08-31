"use client"
import { useState } from 'react';
import Form from 'next/form'
import { Plus, Info, Check, Bot, Clock, Brain, Delete, DeleteIcon, Trash } from 'lucide-react'

import { H3, H4, H5, Tagline } from "./ui/Typography";
import { Input } from './ui/Input';
import { Label } from './ui/Label';
import { Card } from './ui/Card';
import { IRoundState } from '@/types/types';
import { Select } from './ui/Select';

interface Props {
    submitJob: (formData: FormData) => void;
}

export default function CreateJob({ submitJob }: Props) {
    const [rounds, setRounds] = useState<IRoundState[]>([])
    function addRound() {
        setRounds(prevRounds => [
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
        ]);
    }

    return (
        <div className="min-h-screen w-full bg-gray-100">
            <div className="ml-[20%]">
                <div className="p-4">
                    <H3>Create New Job Posting</H3>
                    <Tagline>Configure your job posting and interview process</Tagline>
                </div>
                <Card>
                    <div className="mb-6">
                        <H4>Job Details</H4>
                        <Tagline>Basic information about the position</Tagline>
                    </div>
                    <Form action={submitJob} className="w-full">
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label id='jobTitle' label='Job Title' className="block text-sm font-bold text-gray-700" />
                                    <Input id='jobTitle' placeholder='e.g. Software Engineer' name='jobTitle' type='text' />
                                </div>
                                <div className="space-y-2">
                                    <Label id='jobLocation' label='Job Location' className="block text-sm font-bold text-gray-700" />
                                    <Input id='jobLocation' placeholder='e.g. Hyderabad, Bangalore, Remote' name='jobLocation' type='text' />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label id='salary' label='Salary' className="block text-sm font-bold text-gray-700" />
                                    <Input id='salary' placeholder='e.g. 8-10LPA' name='salary' type='text' />
                                </div>
                                <div className="space-y-2">
                                    <Label id='experience' label='Experience' className="block text-sm font-bold text-gray-700" />
                                    <Input id='experience' placeholder='e.g. 2-3 years, 0-2 years' name='experience' type='text' />
                                </div>
                            </div>
                            <div className="">
                                <div className="space-y-2">
                                    <Label id='jobDescription' label='Job Description' className="block text-sm font-bold text-gray-700" />
                                    <textarea id='jobDescription' rows={10} cols={200} className='w-full border border-gray-300 rounded-lg p-3' placeholder='Enter Job Description here' name='jobDescription' />
                                </div>
                            </div>
                        </div>
                    </Form>
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
                                                    <Select id='roundType' name='roundType' className='w-full border border-gray-300 rounded-lg p-3'>
                                                        <option value="Technical Interview">Technical Interview</option>
                                                        <option value="Behavioral Interview">Behavioral/HR/Culture fit Interview</option>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label id='roundName' label='Round Name' />
                                                    <Input id='roundName' name='roundName' placeholder='e.g. Technical Interview - 1' type='text' />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label id='duration' label='Duration(in minutes)' />
                                                    <Input id='duration' name='duration' placeholder='e.g. 60' type='number' />
                                                </div>
                                            </div>
                                            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                                                <div className="space-y-2">
                                                    <Label id='difficulty' label='Difficulty' />
                                                    <Select id='difficulty' name='difficulty'>
                                                        <option value="easy">Easy</option>
                                                        <option value="medium">Medium</option>
                                                        <option value="hard">Hard</option>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label id='questionType' label='Question Type' />
                                                    <Select id='questionType' name='questionType'>
                                                        <option value="JD + Resume">JD + Resume</option>
                                                        <option value="JD">JD</option>
                                                    </Select>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-2 mt-4">
                                                <input type="checkbox" id="isAI" name="isAI" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <Bot className="h-4 w-4 text-blue-500" />
                                                <Label id="isAI" className='-ml-1.5' label="AI-Powered Interview" />
                                            </div>
                                            <div>
                                                <Label id='roundDescription' label='Round Description' />
                                                <textarea id='roundDescription' rows={5} cols={50} className='w-full border border-gray-300 rounded-lg p-3 mt-1.5' placeholder='Enter Round Description here' name='roundDescription' />
                                            </div>
                                        </div>
                                    ))}
                            </Card>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}