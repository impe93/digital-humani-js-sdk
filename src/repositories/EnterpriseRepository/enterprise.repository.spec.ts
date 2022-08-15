import { mock, MockProxy } from 'jest-mock-extended';
import type { IHttpClient } from '../../services/HttpClient/IHttpClient';
import { EnterpriseRepository } from './enterprise.repository';

describe('Given enterprise repository class', () => {
  const mockResponse = 'Some value';
  const enterpriseId = 'enterpriseId';

  let repo: EnterpriseRepository;
  let httpClient: MockProxy<IHttpClient>;

  beforeEach(() => {
    httpClient = mock<IHttpClient>();

    httpClient.get.mockResolvedValue(mockResponse);
    httpClient.post.mockResolvedValue(mockResponse);

    repo = new EnterpriseRepository(httpClient);
  });

  describe('When call getEnterprise', () => {
    it('Should make the api call to the right url', async () => {
      const finalUrl = `/enterprise/${enterpriseId}`;
      await repo.getEnterprise(enterpriseId);
      expect(httpClient.get).toHaveBeenCalledWith(finalUrl);
    });

    it('Should return the result returned from the http client', async () => {
      const result = await repo.getEnterprise(enterpriseId);
      expect(result).toBe(mockResponse);
    });
  });

  describe('When call getTreeCount', () => {
    describe('When month has a value', () => {
      const month = 'YYYY-MM';

      it('Should make the api call to the right url', async () => {
        const finalUrl = `/enterprise/${enterpriseId}/treeCount/${month}`;
        await repo.getTreeCount({ enterpriseId, month });
        expect(httpClient.get).toHaveBeenCalledWith(finalUrl);
      });
      it('Should return the result returned from the http client', async () => {
        const result = await repo.getTreeCount({ enterpriseId, month });
        expect(result).toBe(mockResponse);
      });
    });

    describe('When endDate and startDate are passed to the object parameter', () => {
      const startDate = 'yyyy-mm-dd';
      const endDate = 'YYYY-MM-DD';

      it('Should make the api call to the right url', async () => {
        const finalUrl = `/enterprise/${enterpriseId}/treeCount`;
        await repo.getTreeCount({ enterpriseId, startDate, endDate });
        expect(httpClient.get.mock.calls[0]?.[0]).toBe(finalUrl);
      });

      it('Should put the right query parameters', async () => {
        await repo.getTreeCount({ enterpriseId, startDate, endDate });
        expect(httpClient.get.mock.calls[0]?.[1]).toStrictEqual({
          params: { startDate, endDate },
        });
      });

      it('Should return the result returned from the http client', async () => {
        const result = await repo.getTreeCount({
          enterpriseId,
          startDate,
          endDate,
        });
        expect(result).toBe(mockResponse);
      });
    });
  });
});
