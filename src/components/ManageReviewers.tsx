"use client"

import { Link2, Mail, Phone, UserPlus } from "lucide-react";
import Button, { ButtonSecondary } from "./ui/Buttons";
import { Card } from "./ui/Card";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { H3, H4, H5, Tagline } from "./ui/Typography";
import ProfileIcon from "./ui/ProfileIcon";
import TitleCapsule from "./ui/TitleCapsule";
import { IReviewer } from "@/types/types";


export default function ManageReviewers({ reviewers }: { reviewers: IReviewer[] }) {
    return (
        <div className="p-6 min-h-screen w-full bg-gray-100">
            <div>
                <H3 className="text-blue-600">Manage Reviewers</H3>
                <Tagline>Add and manage reviewers for candidate evaluations</Tagline>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 mt-3.5">
                <div>
                    <Card className="rounded-xl w-[75%]">
                        <H4>Add New Reviewer</H4>
                        <Tagline>Enter reviewer details to add them to the system</Tagline>
                        <div>
                            <div className="pt-4">
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
                    <Card className="rounded-xl">
                        <H4>Reviewer Directory</H4>
                        <Tagline>Manage and view all reviewers</Tagline>
                        {reviewers.map((reviewer) => (
                            <div key={reviewer.reviewerId}>
                                <div className="mt-10 flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        {/* profile icon */}
                                        <ProfileIcon name="KD" />
                                        <div>
                                            {/* profile details */}
                                            <div className="flex items-center gap-2">
                                                {/* name */}
                                                <H5>{reviewer.name}</H5>
                                                {/* job title */}
                                                <TitleCapsule title={reviewer.reviewerJobTitle} />
                                            </div>
                                            <div className="flex items-center gap-5">
                                                {/* phone */}
                                                <Tagline className="text-[0.75rem] flex items-center justify-center gap-1">
                                                    <Phone size={12} />
                                                    {reviewer.phone && reviewer.phone}
                                                </Tagline>
                                                {/* email */}
                                                <Tagline className="text-[0.75rem] flex items-center justify-center gap-1">
                                                    <Mail size={12} />
                                                    {reviewer.email}
                                                </Tagline>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        {/* action buttons */}
                                        <Button className="px-6 py-1 flex items-center gap-2 hover:!bg-blue-200">
                                            <Link2 size={16} />
                                            Assign Job
                                        </Button>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <Tagline className="text-sm">Assigned to {reviewer.jobs.length} jobs:</Tagline>
                                    <div>
                                        {/* job title capsule */}
                                        {reviewer.jobs.map((job) => (
                                            <div className="flex gap-1 mt-1.5" key={job.jobId}>
                                                <TitleCapsule title={job.jobTitle} />
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </div>
                        ))}

                    </Card>
                </div>
            </div>
        </div>
    );
}