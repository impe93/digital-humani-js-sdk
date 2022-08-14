export enum StatusCode {
  OK = 200,
  CREATED = 201,
  TOKEN_EXPIRED = 401,
  SERVER_ERROR = 500,
}

export type BaseConfig = {
  headers?: Record<string, string>;
};

export type GetRequestConfig = {
  params?: Record<string, string>;
} & BaseConfig;

export type PostRequestConfig<T> = {
  params?: Record<string, string>;
  body?: Record<string, T> | string;
} & BaseConfig;

export type PutRequestConfig<T> = PostRequestConfig<T>;
export type PatchRequestConfig<T> = PostRequestConfig<T>;
export type DeleteRequestConfig = GetRequestConfig;

export interface IHttpClient {
  readonly get: <T>(url: string, configs?: GetRequestConfig) => Promise<T>;

  readonly post: <T, P = any>(
    url: string,
    configs?: PostRequestConfig<P>,
  ) => Promise<T>;

  readonly put: <T, P = any>(
    url: string,
    configs?: PutRequestConfig<P>,
  ) => Promise<T>;

  readonly patch: <T, P = any>(
    url: string,
    configs?: PatchRequestConfig<P>,
  ) => Promise<T>;

  readonly delete: <T>(
    url: string,
    configs?: DeleteRequestConfig,
  ) => Promise<T>;
}
