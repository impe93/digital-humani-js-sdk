import type { IHttpClient } from '../../services/HttpClient/IHttpClient';
import type { IEnterpriseRepository } from './enterprise.interface';
import type {
  Enterprise,
  GetTreeCountRequest,
  Count,
} from './enterprise.models';

export class EnterpriseRepository implements IEnterpriseRepository {
  constructor(private httpClient: IHttpClient) {}

  public readonly getEnterprise = (enterpriseId: string) => {
    return this.httpClient.get<Enterprise>(`/enterprise/${enterpriseId}`);
  };

  public readonly getTreeCount = ({
    endDate,
    enterpriseId,
    month,
    startDate,
  }: GetTreeCountRequest) => {
    if (month) {
      return this.getTreeCountByMonth(enterpriseId, month);
    } else if (startDate && endDate) {
      return this.getTreeCountByDateRange(enterpriseId, startDate, endDate);
    }

    throw new Error(
      'All parameters are undefined. At least the month param or startDate and endDate params must have a value',
    );
  };

  private readonly getTreeCountByMonth = (
    enterpriseId: string,
    month: string,
  ) => {
    return this.httpClient.get<Count>(
      `/enterprise/${enterpriseId}/treeCount/${month}`,
    );
  };

  private readonly getTreeCountByDateRange = (
    enterpriseId: string,
    startDate: string,
    endDate: string,
  ) => {
    return this.httpClient.get<Count>(`/enterprise/${enterpriseId}/treeCount`, {
      params: {
        startDate,
        endDate,
      },
    });
  };
}
