import type { IHttpClient } from '../../services/HttpClient/IHttpClient';
import type { ITreesRepository } from './trees.interface';
import type {
  GetTreesRequest,
  GetTreesResponse,
  GetTreeRequest,
  Tree,
  PlanteTreesRequest,
} from './trees.models';

export class TreesRepository implements ITreesRepository {
  constructor(private httpClient: IHttpClient) {}

  public readonly getTrees = async ({
    enterpriseId,
    user,
  }: GetTreesRequest) => {
    return this.httpClient.get<GetTreesResponse>('/tree', {
      params: {
        enterpriseId,
        user,
      },
    });
  };

  public readonly getTree = ({ treeId }: GetTreeRequest) => {
    return this.httpClient.get<Tree>(`/tree/${treeId}`);
  };

  public readonly plantTrees = (body: PlanteTreesRequest) => {
    return this.httpClient.post<Tree>('/tree', { body });
  };
}
