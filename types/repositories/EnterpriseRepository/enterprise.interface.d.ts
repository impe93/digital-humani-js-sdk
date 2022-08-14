import type { Count, Enterprise, GetTreeCountRequest } from './enterprise.models';
export interface IEnterpriseRepository {
    readonly getEnterprise: (enterpriseId: string) => Promise<Enterprise>;
    readonly getTreeCount: (params: GetTreeCountRequest) => Promise<Count>;
}
//# sourceMappingURL=enterprise.interface.d.ts.map