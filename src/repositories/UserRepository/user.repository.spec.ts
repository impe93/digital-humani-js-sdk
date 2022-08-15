import { mock, MockProxy } from 'jest-mock-extended';
import type { IHttpClient } from '../../services/HttpClient/IHttpClient';
import { UserRepository } from './user.repository';

describe('Given project repository class', () => {
  const mockResponse = 'Some value';

  let repo: UserRepository;
  let httpClient: MockProxy<IHttpClient>;

  beforeEach(() => {
    httpClient = mock<IHttpClient>();

    httpClient.get.mockResolvedValue(mockResponse);

    repo = new UserRepository(httpClient);
  });

  describe('When call getProjects', () => {
    it('Should make the api call to the right url', async () => {
      const finalUrl = `/user/whoami`;
      await repo.getWhoAmI();
      expect(httpClient.get).toHaveBeenCalledWith(finalUrl);
    });

    it('Should return the result returned from the http client', async () => {
      const result = await repo.getWhoAmI();
      expect(result).toBe(mockResponse);
    });
  });
});
