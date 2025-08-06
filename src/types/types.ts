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