import type { IHttpClient } from '../../services/HttpClient/IHttpClient';
import type { IEnterpriseRepository } from './enterprise.interface';
import type { Enterprise, GetTreeCountRequest, Count } from './enterprise.models';
export declare class EnterpriseRepository implements IEnterpriseRepository {
    private httpClient;
    constructor(httpClient: IHttpClient);
    readonly getEnterprise: (enterpriseId: string) => Promise<Enterprise>;
    readonly getTreeCount: ({ endDate, enterpriseId, month, startDate, }: GetTreeCountRequest) => Promise<Count>;
    private readonly getTreeCountByMonth;
    private readonly getTreeCountByDateRange;
}
//# sourceMappingURL=enterprise.repository.d.ts.map