"use client"
import Form from 'next/form'

import { H3, H4, Tagline } from "./ui/Typography";
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
            </div>
        </div>
    );
}