import type { GetTreeRequest, GetTreesRequest, GetTreesResponse, PlanteTreesRequest, Tree } from './tree.models';
export interface ITreeRepository {
    readonly getTrees: (params: GetTreesRequest) => Promise<GetTreesResponse>;
    readonly getTree: (params: GetTreeRequest) => Promise<Tree>;
    readonly plantTrees: (body: PlanteTreesRequest) => Promise<Tree>;
}
//# sourceMappingURL=tree.interface.d.ts.map