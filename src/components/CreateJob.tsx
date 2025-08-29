"use client"
import Form from 'next/form'

import { H3, H4, Tagline } from "./ui/Typography";

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
                <div className="p-8 bg-white w-full max-w-4xl rounded-lg shadow-sm">
                    <div className="mb-6">
                        <H4>Job Details</H4>
                        <Tagline>Basic information about the position</Tagline>
                    </div>
                    <Form action={submitJob} className="w-full">
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
                                    <input
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        type="text"
                                        placeholder="e.g. Software Engineer"
                                        name="jobTitle"
                                        id="jobTitle"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="jobLocation" className="block text-sm font-medium text-gray-700">Location</label>
                                    <input
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                                        type="text"
                                        placeholder="e.g. Hyderabad, Bangalore, Remote"
                                        name="jobLocation"
                                        id="jobLocation"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}