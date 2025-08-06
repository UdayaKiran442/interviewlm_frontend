"use client"
import { useSelector } from "react-redux";

import { IHRUser } from "@/types/types";

export default function JobsPage() {
    const { user }: { user: IHRUser } = useSelector((state: any) => state.auth)
    return (
        <div>
            <p>{user?.name}</p>
        </div>
    );
}