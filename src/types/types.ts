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
    package: string | null;
    location: string | null;
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

export type IRoundState = {
    roundType: string;
    roundName: string;
    roundNumber: number;
    questionType?: string;
    duration?: number;
    difficulty?: string;
    roundDescription?: string;
    isAI?: boolean;
}

export type IJobState = {
    jobTitle: string;
    location: string;
    package: string;
    experience: string;
    jobDescription: string;
    maximumApplications: number | null;
    jobReviewers: string[];
}

export type ICreateJobPayload = {
    companyId: string;
    jobTitle: string;
    jobDescription: string;
    department: string;
    package: string | null;
    location: string | null;
    maximumApplications: number | null;
    jobReviewers?: string[];
    rounds: IRoundState[];
}

export type IReviewer = {
    reviewerId: string;
    name: string;
    email: string;
    phone: string | null;
    reviewerJobTitle: string;
    jobs: [
        {
            jobId: string;
            jobTitle: string
        }
    ]
}

export type IGetReviewersForCompanyAPIResponse = {
    success: boolean;
    message: string;
    reviewers: IReviewer[];
}

export type IAddReviewer = {
    name: string;
    email: string;
    phone: string;
    jobTitle: string;
}

export type IResponse = {
    success: boolean
    message: string
}

export type ISearchReviewerAPIResponse = {
    success: boolean;
    reviewers: IReviewer[]
}

export type IGetApplicationsForJobAPIResponse = {
    success: boolean;
    message: string;
    applications: {
        applicationId: string,
        candidateId: string,
        currentRound: string,
        firstName: string,
        middleName: string | null,
        lastName: string,
        totalExperience: string | null,
        email: string,
        phone: string,
        jobId: string,
        status: string,
        appliedAt: string,
        roundResults: IRoundResults,
    }[]
}

export type IRoundResults = {
    roundResultId: string,
    roundId: string,
    applicationId: string,
    isQualified: boolean | null,
    feedback: {
        feedback: string,
        keywordMatch: number,
        experienceMatch: number,
        skillMatch: number,
        aiScore: number,
        strengths: string[],
        concerns: string[],
        aiRecommendation: string,
    } | null,
    verdictBy: string | null,
    roundType: string,
    roundName: string,
    roundNumber: number
}[]