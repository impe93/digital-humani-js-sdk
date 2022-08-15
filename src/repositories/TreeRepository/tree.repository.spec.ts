import { mock, MockProxy } from 'jest-mock-extended';
import type { IHttpClient } from '../../services/HttpClient/IHttpClient';
import { TreeRepository } from './tree.repository';

describe('Given tree repository class', () => {
  const mockResponse = 'Some value';
  const enterpriseId = 'enterpriseId';
  const projectId = 'projectId';
  const user = 'user-1';
  const treeId = 'treeId';
  const plantTreeBody = {
    enterpriseId,
    user,
    projectId,
    treeCount: 4,
  };

  let repo: TreeRepository;
  let httpClient: MockProxy<IHttpClient>;

  beforeEach(() => {
    httpClient = mock<IHttpClient>();

    httpClient.get.mockResolvedValue(mockResponse);
    httpClient.post.mockResolvedValue(mockResponse);

    repo = new TreeRepository(httpClient);
  });

  describe('When call getTrees', () => {
    it('Should make the api call to the right url', async () => {
      const finalUrl = `/tree`;
      await repo.getTrees({ enterpriseId, user });
      expect(httpClient.get.mock.calls[0]?.[0]).toBe(finalUrl);
    });

    it('Should make the api call with the right params', async () => {
      await repo.getTrees({ enterpriseId, user });
      expect(httpClient.get.mock.calls[0]?.[1]).toStrictEqual({
        params: { enterpriseId, user },
      });
    });

    it('Should return the result returned from the http client', async () => {
      const result = await repo.getTrees({ enterpriseId, user });
      expect(result).toBe(mockResponse);
    });
  });

  describe('When call getTree', () => {
    it('Should make the api call to the right url', async () => {
      const finalUrl = `/tree/${treeId}`;
      await repo.getTree({ treeId });
      expect(httpClient.get).toBeCalledWith(finalUrl);
    });

    it('Should return the result returned from the http client', async () => {
      const result = await repo.getTree({ treeId });
      expect(result).toBe(mockResponse);
    });
  });

  describe('When call plantTrees', () => {
    it('Should make the api call to the right url', async () => {
      const finalUrl = `/tree`;
      await repo.plantTrees(plantTreeBody);
      expect(httpClient.post.mock.calls[0]?.[0]).toBe(finalUrl);
    });

    it('Should make the api call with the right body', async () => {
      await repo.plantTrees(plantTreeBody);
      expect(httpClient.post.mock.calls[0]?.[1]).toStrictEqual({
        body: plantTreeBody,
      });
    });

    it('Should return the result returned from the http client', async () => {
      const result = await repo.getTree({ treeId });
      expect(result).toBe(mockResponse);
    });
  });
});
