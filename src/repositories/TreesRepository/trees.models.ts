export interface GetTreesRequest {
  enterpriseId: string;
  user: string;
}

export interface GetTreesResponse {
  enterpriseId: string;
  user: string;
  count: number;
}

export interface GetTreeRequest {
  treeId: string;
}

export interface Tree {
  projectId: string;
  created: string;
  uuid: string;
  user: string;
  treeCount: number;
  enterpriseId: string;
}

export type PlanteTreesRequest = Omit<Tree, 'created' | 'uuid'>;
