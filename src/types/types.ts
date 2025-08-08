export type IHRUser = {
    userId: string;
    hrId: string;
    companyId: string;
    name: string;
    email: string;
    phone: string;
    role: string;
    roles: string[];
    isOrgAdmin: boolean;
}

export type ILoginAPIHRResponse = {
    success: boolean;
    res: IHRUser;
}

export type IJob = {
    jobId: string;
    hrId: string;
    companyId: string;
    jobTitle: string;
    jobDescription: string;
    department: string;
    package: string;
    maximumApplications: number;
    applications: number;
    inProgress: number;
    rejected: number;
    interviewing: number;
    hired: number;
    isJobOpen: boolean;
    isScreeningDone: boolean;
    createdAt: string;
    updatedAt: string;
}

export type IHRJobsAPIResponse = {
    success: boolean;
    message: string;
    jobs: IJob[];
}