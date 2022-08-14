import type {
  GetTreeRequest,
  GetTreesRequest,
  GetTreesResponse,
  PlanteTreesRequest,
  Tree,
} from './trees.models';

export interface ITreesRepository {
  readonly getTrees: (params: GetTreesRequest) => Promise<GetTreesResponse>;
  readonly getTree: (params: GetTreeRequest) => Promise<Tree>;
  readonly plantTrees: (body: PlanteTreesRequest) => Promise<Tree>;
}
