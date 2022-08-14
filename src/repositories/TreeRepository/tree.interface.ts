import type {
  GetTreeRequest,
  GetTreesRequest,
  GetTreesResponse,
  PlanteTreesRequest,
  Tree,
} from './tree.models';

export interface ITreeRepository {
  /**
   * Used to get how many trees has planted the user passed as a parameter.
   * @param {GetTreesRequest} params Those params are used to understand wich trees to get
   * @return {GetTreesResponse} A response with the user, enterpriseId and the planted tree count.
   */
  readonly getTrees: (params: GetTreesRequest) => Promise<GetTreesResponse>;

  /**
   * Used to get a planted tree details by ID
   * @param {GetTreeRequest} params This object contain only the treeId to search
   * @return {Tree} An object with all the informations about the tree
   */
  readonly getTree: (params: GetTreeRequest) => Promise<Tree>;

  /**
   * Used to get a planted tree details by ID
   * @param {GetTreeRequest} params This object contain only the treeId to search
   * @return {Tree} An object with all the informations about the tree
   */
  readonly plantTrees: (body: PlanteTreesRequest) => Promise<Tree>;
}
