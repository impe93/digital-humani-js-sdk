import type { IHttpClient } from '../../services/HttpClient/IHttpClient';
import type { IProjectRepository } from './project.interface';
import type { ProjectPartial, Project } from './project.models';

export class ProjectRepository implements IProjectRepository {
  constructor(private httpClient: IHttpClient) {}

  public readonly getProjects = async () => {
    return this.httpClient.get<ProjectPartial[]>('/project');
  };

  public readonly getProjectDetails = async (projectId: string) => {
    return this.httpClient.get<Project>(`/project/${projectId}`);
  };
}
