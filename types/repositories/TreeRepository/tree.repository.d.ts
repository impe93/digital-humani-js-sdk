import type { IHttpClient } from '../../services/HttpClient/IHttpClient';
import type { ITreeRepository } from './tree.interface';
import type { GetTreesRequest, GetTreesResponse, GetTreeRequest, Tree, PlanteTreesRequest } from './tree.models';
export declare class TreeRepository implements ITreeRepository {
    private httpClient;
    constructor(httpClient: IHttpClient);
    readonly getTrees: ({ enterpriseId, user, }: GetTreesRequest) => Promise<GetTreesResponse>;
    readonly getTree: ({ treeId }: GetTreeRequest) => Promise<Tree>;
    readonly plantTrees: (body: PlanteTreesRequest) => Promise<Tree>;
}
//# sourceMappingURL=tree.repository.d.ts.map