import { AxiosInstance } from 'axios';
import type { DeleteRequestConfig, GetRequestConfig, IHttpClient, PatchRequestConfig, PostRequestConfig, PutRequestConfig } from './IHttpClient';
/**
 * `HttpClientInitParams` is an object with an optional property `axiosInstance` of type
 * `AxiosInstance`.
 * @property {AxiosInstance} axiosInstance - An instance of Axios that will be used to make the HTTP
 * requests.
 */
export declare type HttpClientInitParams = {
    axiosInstance?: AxiosInstance;
};
export declare class DuHttpClient implements IHttpClient {
    private readonly axiosInstance;
    /**
     * It creates a new instance of the HttpClient class.
     * @param {HttpClientInitParams}  - `axiosInstance`: An instance of axios. If you don't provide one,
     * the SDK will create one for you.
     */
    constructor(params?: HttpClientInitParams);
    get: <T>(url: string, configs?: GetRequestConfig) => Promise<T>;
    post: <T, P>(url: string, configs?: PostRequestConfig<P>) => Promise<T>;
    put: <T, P>(url: string, configs?: PutRequestConfig<P>) => Promise<T>;
    patch: <T, P>(url: string, configs?: PatchRequestConfig<P>) => Promise<T>;
    delete: <T>(url: string, configs?: DeleteRequestConfig) => Promise<T>;
}
//# sourceMappingURL=HttpClient.d.ts.map