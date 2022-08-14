import type { IHttpClient } from '../../services/HttpClient/IHttpClient';
import type { IProjectRepository } from './project.interface';
import type { ProjectPartial, Project } from './project.models';
export declare class ProjectRepository implements IProjectRepository {
    private httpClient;
    constructor(httpClient: IHttpClient);
    readonly getProjects: () => Promise<ProjectPartial[]>;
    readonly getProjectDetails: (projectId: string) => Promise<Project>;
}
//# sourceMappingURL=project.repositories.d.ts.map