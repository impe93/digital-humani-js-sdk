import type { IHttpClient } from '../../services/HttpClient/IHttpClient';
import type { IProjectsRepository } from './projects.interface';
import type { ProjectPartial, Project } from './projects.models';

export class ProjectsRepository implements IProjectsRepository {
  constructor(private httpClient: IHttpClient) {}

  public readonly getProjects = async () => {
    return this.httpClient.get<ProjectPartial[]>('/project');
  };

  public readonly getProjectDetails = async (projectId: string) => {
    return this.httpClient.get<Project>(`/project/${projectId}`);
  };
}
