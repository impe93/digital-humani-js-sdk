export interface Enterprise {
    created: string;
    updated: string;
    id: string;
    name: string;
    contact: Contact;
}
export interface Contact {
    name: string;
}
export interface Count {
    count: number;
}
export declare type GetMonthlyTreeCountRequest = {
    enterpriseId: string;
    month: string;
    startDate: undefined;
    endDate: undefined;
};
export declare type GetUserTreeCountRequest = {
    enterpriseId: string;
    startDate: string;
    endDate: string;
    month: undefined;
};
export declare type GetTreeCountRequest = GetMonthlyTreeCountRequest | GetUserTreeCountRequest;
//# sourceMappingURL=enterprise.models.d.ts.map