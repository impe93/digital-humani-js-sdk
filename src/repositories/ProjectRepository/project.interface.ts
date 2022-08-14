import type { Project, ProjectPartial } from './project.models';

export interface IProjectsRepository {
  readonly getProjects: () => Promise<ProjectPartial[]>;
  readonly getProjectDetails: (projectId: string) => Promise<Project>;
}
