"use client"

import { UserPlus } from "lucide-react";
import { ButtonSecondary } from "./ui/Buttons";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { H3, H4, Tagline } from "./ui/Typography";


export default function ManageReviewers() {
    return (
        <div className="p-6 min-h-screen w-full bg-gray-100">
            <div>
                <H3 className="text-blue-600">Manage Reviewers</H3>
                <Tagline>Add and manage reviewers for candidate evaluations</Tagline>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-3.5 gap-4">
                <div>
                    <Card className="rounded-xl w-[75%]">
                        <H4>Add New Reviewer</H4>
                        <Tagline>Enter reviewer details to add them to the system</Tagline>
                        <div className="mt-4">
                            <div className="border-t-4 border-gray-500">
                                <Label id="name" label="Name" className="mb-1.5" />
                                <Input id="name" type="text" placeholder="e.g. John Doe" name="name" />
                            </div>
                            <div className="mt-2.5">
                                <Label id="email" label="Email" className="mb-1.5" />
                                <Input id="email" type="email" placeholder="e.g. john.doe@example.com" name="email" />
                            </div>
                            <div className="mt-2.5">
                                <Label id="phone" label="Phone" className="mb-1.5" />
                                <Input id="phone" type="tel" placeholder="e.g. 123-456-7890" name="phone" />
                            </div>
                            <div className="mt-2.5">
                                <Label id="jobTitle" label="Job Title" className="mb-1.5" />
                                <Input id="jobTitle" type="text" placeholder="e.g. Senior Software Engineer" name="jobTitle" />
                            </div>
                            <div className="mt-2.5">
                                <ButtonSecondary className="w-full flex items-center gap-2 justify-center">
                                    <UserPlus size={18} />
                                    Add Reviewer
                                </ButtonSecondary>
                            </div>
                        </div>
                    </Card>
                </div>
                <div>
                    Manage Reviewers
                </div>
            </div>
        </div>
    );
}