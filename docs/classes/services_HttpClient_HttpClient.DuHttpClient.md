[DigitalHumani JS SDK](../README.md) / [services/HttpClient/HttpClient](../modules/services_HttpClient_HttpClient.md) / DuHttpClient

# Class: DuHttpClient

[services/HttpClient/HttpClient](../modules/services_HttpClient_HttpClient.md).DuHttpClient

## Implements

- [`IHttpClient`](../interfaces/services_HttpClient_IHttpClient.IHttpClient.md)

## Table of contents

### Constructors

- [constructor](services_HttpClient_HttpClient.DuHttpClient.md#constructor)

### Methods

- [delete](services_HttpClient_HttpClient.DuHttpClient.md#delete)
- [get](services_HttpClient_HttpClient.DuHttpClient.md#get)
- [patch](services_HttpClient_HttpClient.DuHttpClient.md#patch)
- [post](services_HttpClient_HttpClient.DuHttpClient.md#post)
- [put](services_HttpClient_HttpClient.DuHttpClient.md#put)

## Constructors

### constructor

• **new DuHttpClient**(`params?`)

It creates a new instance of the HttpClient class.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | [`HttpClientInitParams`](../modules/services_HttpClient_HttpClient.md#httpclientinitparams) |

#### Defined in

[services/HttpClient/HttpClient.ts:31](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/services/HttpClient/HttpClient.ts#L31)

## Methods

### delete

▸ **delete**<`T`\>(`url`, `configs?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `configs` | [`GetRequestConfig`](../modules/services_HttpClient_IHttpClient.md#getrequestconfig) |

#### Returns

`Promise`<`T`\>

#### Implementation of

IHttpClient.delete

#### Defined in

[services/HttpClient/HttpClient.ts:109](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/services/HttpClient/HttpClient.ts#L109)

___

### get

▸ **get**<`T`\>(`url`, `configs?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `configs` | [`GetRequestConfig`](../modules/services_HttpClient_IHttpClient.md#getrequestconfig) |

#### Returns

`Promise`<`T`\>

#### Implementation of

IHttpClient.get

#### Defined in

[services/HttpClient/HttpClient.ts:64](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/services/HttpClient/HttpClient.ts#L64)

___

### patch

▸ **patch**<`T`, `P`\>(`url`, `configs?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `P` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `configs` | [`PatchRequestConfig`](../modules/services_HttpClient_IHttpClient.md#patchrequestconfig)<`P`\> |

#### Returns

`Promise`<`T`\>

#### Implementation of

IHttpClient.patch

#### Defined in

[services/HttpClient/HttpClient.ts:98](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/services/HttpClient/HttpClient.ts#L98)

___

### post

▸ **post**<`T`, `P`\>(`url`, `configs?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `P` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `configs` | [`PostRequestConfig`](../modules/services_HttpClient_IHttpClient.md#postrequestconfig)<`P`\> |

#### Returns

`Promise`<`T`\>

#### Implementation of

IHttpClient.post

#### Defined in

[services/HttpClient/HttpClient.ts:76](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/services/HttpClient/HttpClient.ts#L76)

___

### put

▸ **put**<`T`, `P`\>(`url`, `configs?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `P` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `configs` | [`PutRequestConfig`](../modules/services_HttpClient_IHttpClient.md#putrequestconfig)<`P`\> |

#### Returns

`Promise`<`T`\>

#### Implementation of

IHttpClient.put

#### Defined in

[services/HttpClient/HttpClient.ts:87](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/services/HttpClient/HttpClient.ts#L87)
