import type { Project, ProjectPartial } from './projects.models';

export interface IProjectsRepository {
  readonly getProjects: () => Promise<ProjectPartial[]>;
  readonly getProjectDetails: (projectId: string) => Promise<Project>;
}
