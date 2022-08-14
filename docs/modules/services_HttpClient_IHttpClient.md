[DigitalHumani JS SDK](../README.md) / services/HttpClient/IHttpClient

# Module: services/HttpClient/IHttpClient

## Table of contents

### Enumerations

- [StatusCode](../enums/services_HttpClient_IHttpClient.StatusCode.md)

### Interfaces

- [IHttpClient](../interfaces/services_HttpClient_IHttpClient.IHttpClient.md)

### Type Aliases

- [BaseConfig](services_HttpClient_IHttpClient.md#baseconfig)
- [DeleteRequestConfig](services_HttpClient_IHttpClient.md#deleterequestconfig)
- [GetRequestConfig](services_HttpClient_IHttpClient.md#getrequestconfig)
- [PatchRequestConfig](services_HttpClient_IHttpClient.md#patchrequestconfig)
- [PostRequestConfig](services_HttpClient_IHttpClient.md#postrequestconfig)
- [PutRequestConfig](services_HttpClient_IHttpClient.md#putrequestconfig)

## Type Aliases

### BaseConfig

Ƭ **BaseConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `headers?` | `Record`<`string`, `string`\> |

#### Defined in

[services/HttpClient/IHttpClient.ts:8](https://github.com/impe93/digital-humani-js-sdk/blob/d0c7cfd/src/services/HttpClient/IHttpClient.ts#L8)

___

### DeleteRequestConfig

Ƭ **DeleteRequestConfig**: [`GetRequestConfig`](services_HttpClient_IHttpClient.md#getrequestconfig)

#### Defined in

[services/HttpClient/IHttpClient.ts:23](https://github.com/impe93/digital-humani-js-sdk/blob/d0c7cfd/src/services/HttpClient/IHttpClient.ts#L23)

___

### GetRequestConfig

Ƭ **GetRequestConfig**: { `params?`: `Record`<`string`, `string`\>  } & [`BaseConfig`](services_HttpClient_IHttpClient.md#baseconfig)

#### Defined in

[services/HttpClient/IHttpClient.ts:12](https://github.com/impe93/digital-humani-js-sdk/blob/d0c7cfd/src/services/HttpClient/IHttpClient.ts#L12)

___

### PatchRequestConfig

Ƭ **PatchRequestConfig**<`T`\>: [`PostRequestConfig`](services_HttpClient_IHttpClient.md#postrequestconfig)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[services/HttpClient/IHttpClient.ts:22](https://github.com/impe93/digital-humani-js-sdk/blob/d0c7cfd/src/services/HttpClient/IHttpClient.ts#L22)

___

### PostRequestConfig

Ƭ **PostRequestConfig**<`T`\>: { `body?`: `Record`<`string`, `T`\> \| `string` ; `params?`: `Record`<`string`, `string`\>  } & [`BaseConfig`](services_HttpClient_IHttpClient.md#baseconfig)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[services/HttpClient/IHttpClient.ts:16](https://github.com/impe93/digital-humani-js-sdk/blob/d0c7cfd/src/services/HttpClient/IHttpClient.ts#L16)

___

### PutRequestConfig

Ƭ **PutRequestConfig**<`T`\>: [`PostRequestConfig`](services_HttpClient_IHttpClient.md#postrequestconfig)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[services/HttpClient/IHttpClient.ts:21](https://github.com/impe93/digital-humani-js-sdk/blob/d0c7cfd/src/services/HttpClient/IHttpClient.ts#L21)
