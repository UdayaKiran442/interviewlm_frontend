"use client"
import Form from 'next/form'
import { Plus, Info } from 'lucide-react'

import { H3, H4, H5, Tagline } from "./ui/Typography";
import { Input } from './ui/Input';
import { Label } from './ui/Label';
import { Card } from './ui/Card';

interface Props {
    submitJob: (formData: FormData) => void;
}

export default function CreateJob({ submitJob }: Props) {
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
                                    <Input id='jobTitle' placeholder='e.g. Software Engineer' name='jobTitle' />
                                </div>
                                <div className="space-y-2">
                                    <Label id='jobLocation' label='Job Location' className="block text-sm font-bold text-gray-700" />
                                    <Input id='jobLocation' placeholder='e.g. Hyderabad, Bangalore, Remote' name='jobLocation' />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label id='salary' label='Salary' className="block text-sm font-bold text-gray-700" />
                                    <Input id='salary' placeholder='e.g. 8-10LPA' name='salary' />
                                </div>
                                <div className="space-y-2">
                                    <Label id='experience' label='Experience' className="block text-sm font-bold text-gray-700" />
                                    <Input id='experience' placeholder='e.g. 2-3 years, 0-2 years' name='experience' />
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
                            <button className="flex items-center gap-2 !bg-blue-600 hover:!bg-blue-700 text-white font-bold px-4 py-2 rounded-xl">
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
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}