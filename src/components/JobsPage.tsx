"use client"
import { IJob } from "@/types/types";

export default function JobsPage({ jobs }: { jobs: IJob[] }) {
    return (
        <div>
            <p>{jobs.length}</p>
        </div>
    );
}