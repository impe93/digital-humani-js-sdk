import { mock, MockProxy } from 'jest-mock-extended';
import type { IHttpClient } from '../../services/HttpClient/IHttpClient';
import { ProjectRepository } from './project.repository';

describe('Given project repository class', () => {
  const mockResponse = 'Some value';
  const projectId = 'enterpriseId';

  let repo: ProjectRepository;
  let httpClient: MockProxy<IHttpClient>;

  beforeEach(() => {
    httpClient = mock<IHttpClient>();

    httpClient.get.mockResolvedValue(mockResponse);
    httpClient.post.mockResolvedValue(mockResponse);

    repo = new ProjectRepository(httpClient);
  });

  describe('When call getProjects', () => {
    it('Should make the api call to the right url', async () => {
      const finalUrl = `/project`;
      await repo.getProjects();
      expect(httpClient.get).toHaveBeenCalledWith(finalUrl);
    });

    it('Should return the result returned from the http client', async () => {
      const result = await repo.getProjects();
      expect(result).toBe(mockResponse);
    });
  });

  describe('When call getProjectDetails', () => {
    it('Should make the api call to the right url', async () => {
      const finalUrl = `/project/${projectId}`;
      await repo.getProjectDetails(projectId);
      expect(httpClient.get).toHaveBeenCalledWith(finalUrl);
    });

    it('Should return the result returned from the http client', async () => {
      const result = await repo.getProjectDetails(projectId);
      expect(result).toBe(mockResponse);
    });
  });
});
