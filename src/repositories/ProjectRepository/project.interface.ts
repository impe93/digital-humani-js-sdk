import type { Project, ProjectPartial } from './project.models';

export interface IProjectRepository {
  /**
   * Get available Projects
   * @returns A PartialProject with the english labels
   */
  readonly getProjects: () => Promise<ProjectPartial[]>;

  /**
   * Get details of the project with id passed as parameter
   * @param projectId The project ID of the project to get
   */
  readonly getProjectDetails: (projectId: string) => Promise<Project>;
}
