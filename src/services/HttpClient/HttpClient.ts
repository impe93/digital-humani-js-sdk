import axios, { AxiosInstance } from 'axios';
import type {
  DeleteRequestConfig,
  GetRequestConfig,
  IHttpClient,
  PatchRequestConfig,
  PostRequestConfig,
  PutRequestConfig,
} from './IHttpClient';

/**
 * `HttpClientInitParams` is an object with an optional property `axiosInstance` of type
 * `AxiosInstance`.
 * @property {AxiosInstance} axiosInstance - An instance of Axios that will be used to make the HTTP
 * requests.
 */
export type HttpClientInitParams = {
  axiosInstance?: AxiosInstance;
};

/* It's a wrapper around the axios library that adds the Digital Humani API key to the header of every
request */
export class DuHttpClient implements IHttpClient {
  private readonly axiosInstance: AxiosInstance;

  /**
   * It creates a new instance of the HttpClient class.
   * @param {HttpClientInitParams}  - `axiosInstance`: An instance of axios. If you don't provide one,
   * the SDK will create one for you.
   */
  constructor({ axiosInstance }: HttpClientInitParams) {
    const env = process.env['DIGITALHUMANI_ENV'];
    const apiKey = process.env['DIGITALHUMANI_API_KEY'];

    if (env !== 'prod' && env !== 'sandbox') {
      throw new Error(
        "Impossible to initialize digital humani sdk because envirnoment has not been provided or the provided value is different from 'sandbox' and 'prod'.",
      );
    }

    if (!apiKey) {
      throw new Error(
        'Impossible to initialize digital humani sdk because the API key has not been found.',
      );
    }

    let baseUrl;

    if (env === 'sandbox') {
      baseUrl = 'https://api.sandbox.digitalhumani.com';
    } else {
      baseUrl = 'https://api.digitalhumani.com';
    }

    this.axiosInstance = axiosInstance ?? axios.create({});
    this.axiosInstance.defaults.baseURL = baseUrl;
    this.axiosInstance.defaults.timeout = 30000;
    this.axiosInstance.defaults.headers.common = {
      'Content-Type': 'application/json',
      'X-Api-Key': apiKey,
    };
  }

  public get = async <T>(
    url: string,
    configs: GetRequestConfig = {},
  ): Promise<T> => {
    const { ...options } = configs;
    const res = await this.axiosInstance.get<T>(url, {
      ...options,
      headers: { ...configs?.headers },
    });
    return res.data;
  };

  public post = async <T, P>(
    url: string,
    configs: PostRequestConfig<P> = {},
  ): Promise<T> => {
    const res = await this.axiosInstance.post<T>(url, configs?.body, {
      headers: { ...configs?.headers },
    });

    return res.data;
  };

  public put = async <T, P>(
    url: string,
    configs: PutRequestConfig<P> = {},
  ): Promise<T> => {
    const res = await this.axiosInstance.put<T>(url, configs?.body, {
      headers: { ...configs?.headers },
    });

    return res.data;
  };

  public patch = async <T, P>(
    url: string,
    configs: PatchRequestConfig<P> = {},
  ): Promise<T> => {
    const res = await this.axiosInstance.patch<T>(url, configs?.body, {
      headers: { ...configs?.headers },
    });

    return res.data;
  };

  public delete = async <T>(
    url: string,
    configs: DeleteRequestConfig = {},
  ): Promise<T> => {
    const { ...options } = configs;
    const res = await this.axiosInstance.delete<T>(url, {
      ...options,
      headers: { ...configs?.headers },
    });

    return res.data;
  };
}
