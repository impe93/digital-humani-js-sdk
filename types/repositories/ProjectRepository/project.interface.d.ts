import type { Project, ProjectPartial } from './project.models';
export interface IProjectRepository {
    readonly getProjects: () => Promise<ProjectPartial[]>;
    readonly getProjectDetails: (projectId: string) => Promise<Project>;
}
//# sourceMappingURL=project.interface.d.ts.map