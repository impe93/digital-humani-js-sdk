import { DuHttpClient } from './HttpClient';
import type { AxiosInstance } from 'axios';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

describe('Given PlanterHttpClient', () => {
  const sandboxUrl = `https://api.sandbox.digitalhumani.com`;
  const prodUrl = `https://api.digitalhumani.com`;

  const requestUrl = `http://localhost:3000`;
  const apiKey = '1234';
  const mockedReturnValue = {
    data: 'value',
  };

  let client: DuHttpClient;
  let axiosMock: DeepMockProxy<AxiosInstance>;

  beforeEach(() => {
    axiosMock = mockDeep<AxiosInstance>();

    axiosMock.get.mockResolvedValue(mockedReturnValue);
    axiosMock.put.mockResolvedValue(mockedReturnValue);
    axiosMock.post.mockResolvedValue(mockedReturnValue);
    axiosMock.patch.mockResolvedValue(mockedReturnValue);
    axiosMock.delete.mockResolvedValue(mockedReturnValue);

    global.process.env['DIGITALHUMANI_ENV'] = 'sandbox';
    global.process.env['DIGITALHUMANI_API_KEY'] = apiKey;

    client = new DuHttpClient({ axiosInstance: axiosMock });
  });

  describe('When just initialized', () => {
    describe("When it's not specified the digital humani environment", () => {
      it('Should throw an error', () => {
        global.process.env['DIGITALHUMANI_ENV'] = undefined;
        expect(
          () => new DuHttpClient({ axiosInstance: axiosMock }),
        ).toThrowError();
      });
    });

    describe("When it's not specified the digital humani API Key", () => {
      it('Should throw an error', () => {
        delete global.process.env['DIGITALHUMANI_API_KEY'];
        expect(
          () => new DuHttpClient({ axiosInstance: axiosMock }),
        ).toThrowError();
      });
    });

    describe('When env is sandbox', () => {
      it('Should initialize default baseURL to the sandbox digital humani URL ', () => {
        expect(axiosMock.defaults.baseURL).toBe(sandboxUrl);
      });
    });

    describe('When env is prod', () => {
      it('Should initialize default baseURL to the prod digital humani URL ', () => {
        global.process.env['DIGITALHUMANI_ENV'] = 'prod';
        client = new DuHttpClient({ axiosInstance: axiosMock });

        expect(axiosMock.defaults.baseURL).toBe(prodUrl);
      });
    });
    it('Should initialize default content type to application/json', () => {
      expect(axiosMock.defaults.headers.common['Content-Type']).toBe(
        'application/json',
      );
    });
    it('Should initialize default timeout to 30s', () => {
      expect(axiosMock.defaults.timeout).toBe(30000);
    });
  });

  describe('When call get method', () => {
    it('Should make the request with the url passed as a parameter', async () => {
      await client.get(requestUrl);
      expect(axiosMock.get).toBeCalledWith(requestUrl, {
        headers: {},
      });
    });

    describe('When pass as a second parameters an object with key "params"', () => {
      it('Should make the request with the params passed as a parameter', async () => {
        const configsToSet = {
          headers: {},
          params: {
            param1: 'first',
            param2: 'second',
          },
        };
        await client.get(requestUrl, configsToSet);
        expect(axiosMock.get).toBeCalledWith(requestUrl, configsToSet);
      });
    });

    describe('When pass as a second parameters an object with key "headers"', () => {
      it('Should make the request with the headers passed as a parameter', async () => {
        const configsToSet = {
          headers: {
            header1: 'first',
            header2: 'second',
          },
        };
        await client.get(requestUrl, configsToSet);
        expect(axiosMock.get).toBeCalledWith(requestUrl, configsToSet);
      });
    });

    it('Should return the response data', async () => {
      const res = await client.get(requestUrl);
      expect(res).toBe(mockedReturnValue.data);
    });
  });

  describe('When call post method', () => {
    it('Should make the request with the url passed as a parameter', async () => {
      await client.post(requestUrl);
      expect(axiosMock.post).toBeCalledWith(requestUrl, undefined, {
        headers: {},
      });
    });

    describe('When pass as a second parameters an object with key "body"', () => {
      it('Should make the request with the params passed as a parameter', async () => {
        const mockBody = {
          param1: 'first',
          param2: 'second',
        };
        const configsToSet = {
          body: mockBody,
          headers: {},
        };
        await client.post(requestUrl, configsToSet);
        expect(axiosMock.post).toBeCalledWith(requestUrl, mockBody, {
          headers: configsToSet.headers,
        });
      });
    });

    describe('When pass as a second parameters an object with key "headers"', () => {
      it('Should make the request with the headers passed as a parameter', async () => {
        const configsToSet = {
          headers: {
            header1: 'first',
            header2: 'second',
          },
        };
        await client.post(requestUrl, configsToSet);
        expect(axiosMock.post).toBeCalledWith(
          requestUrl,
          undefined,
          configsToSet,
        );
      });
    });

    it('Should return the response data', async () => {
      const res = await client.post(requestUrl);
      expect(res).toBe(mockedReturnValue.data);
    });
  });

  describe('When call put method', () => {
    it('Should make the request with the url passed as a parameter', async () => {
      await client.put(requestUrl);
      expect(axiosMock.put).toBeCalledWith(requestUrl, undefined, {
        headers: {},
      });
    });

    describe('When pass as a second parameters an object with key "body"', () => {
      it('Should make the request with the params passed as a parameter', async () => {
        const mockBody = {
          param1: 'first',
          param2: 'second',
        };
        const configsToSet = {
          body: mockBody,
        };
        await client.put(requestUrl, configsToSet);
        expect(axiosMock.put).toBeCalledWith(requestUrl, mockBody, {
          headers: {},
        });
      });
    });

    describe('When pass as a second parameters an object with key "headers"', () => {
      it('Should make the request with the headers passed as a parameter', async () => {
        const configsToSet = {
          headers: {
            header1: 'first',
            header2: 'second',
          },
        };
        await client.put(requestUrl, configsToSet);
        expect(axiosMock.put).toBeCalledWith(
          requestUrl,
          undefined,
          configsToSet,
        );
      });
    });

    it('Should return the response data', async () => {
      const res = await client.put(requestUrl);
      expect(res).toBe(mockedReturnValue.data);
    });
  });

  describe('When call patch method', () => {
    it('Should make the request with the url passed as a parameter', async () => {
      await client.patch(requestUrl);
      expect(axiosMock.patch).toBeCalledWith(requestUrl, undefined, {
        headers: {},
      });
    });

    describe('When pass as a second parameters an object with key "body"', () => {
      it('Should make the request with the params passed as a parameter', async () => {
        const mockBody = {
          param1: 'first',
          param2: 'second',
        };
        const configsToSet = {
          body: mockBody,
        };
        await client.patch(requestUrl, configsToSet);
        expect(axiosMock.patch).toBeCalledWith(requestUrl, mockBody, {
          headers: {},
        });
      });
    });

    describe('When pass as a second parameters an object with key "headers"', () => {
      it('Should make the request with the headers passed as a parameter', async () => {
        const configsToSet = {
          headers: {
            header1: 'first',
            header2: 'second',
          },
        };
        await client.patch(requestUrl, configsToSet);
        expect(axiosMock.patch).toBeCalledWith(
          requestUrl,
          undefined,
          configsToSet,
        );
      });
    });

    it('Should return the response data', async () => {
      const res = await client.patch(requestUrl);
      expect(res).toBe(mockedReturnValue.data);
    });
  });

  describe('When call delete method', () => {
    it('Should make the request with the url passed as a parameter', async () => {
      await client.delete(requestUrl);
      expect(axiosMock.delete).toBeCalledWith(requestUrl, {
        headers: {},
      });
    });

    describe('When pass as a second parameters an object with key "params"', () => {
      it('Should make the request with the params passed as a parameter', async () => {
        const configsToSet = {
          params: {
            param1: 'first',
            param2: 'second',
          },
        };
        await client.delete(requestUrl, configsToSet);
        expect(axiosMock.delete).toBeCalledWith(requestUrl, {
          headers: {},
          ...configsToSet,
        });
      });
    });

    describe('When pass as a second parameters an object with key "headers"', () => {
      it('Should make the request with the headers passed as a parameter', async () => {
        const configsToSet = {
          headers: {
            header1: 'first',
            header2: 'second',
          },
        };
        await client.delete(requestUrl, configsToSet);
        expect(axiosMock.delete).toBeCalledWith(requestUrl, configsToSet);
      });
    });

    it('Should return the response data', async () => {
      const res = await client.delete(requestUrl);
      expect(res).toBe(mockedReturnValue.data);
    });
  });
});
