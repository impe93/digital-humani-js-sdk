[DigitalHumani JS SDK](../README.md) / [services/HttpClient/IHttpClient](../modules/services_HttpClient_IHttpClient.md) / IHttpClient

# Interface: IHttpClient

[services/HttpClient/IHttpClient](../modules/services_HttpClient_IHttpClient.md).IHttpClient

## Implemented by

- [`DuHttpClient`](../classes/services_HttpClient_HttpClient.DuHttpClient.md)

## Table of contents

### Properties

- [delete](services_HttpClient_IHttpClient.IHttpClient.md#delete)
- [get](services_HttpClient_IHttpClient.IHttpClient.md#get)
- [patch](services_HttpClient_IHttpClient.IHttpClient.md#patch)
- [post](services_HttpClient_IHttpClient.IHttpClient.md#post)
- [put](services_HttpClient_IHttpClient.IHttpClient.md#put)

## Properties

### delete

• `Readonly` **delete**: <T\>(`url`: `string`, `configs?`: [`GetRequestConfig`](../modules/services_HttpClient_IHttpClient.md#getrequestconfig)) => `Promise`<`T`\>

#### Type declaration

▸ <`T`\>(`url`, `configs?`): `Promise`<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `configs?` | [`GetRequestConfig`](../modules/services_HttpClient_IHttpClient.md#getrequestconfig) |

##### Returns

`Promise`<`T`\>

#### Defined in

[services/HttpClient/IHttpClient.ts:43](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/services/HttpClient/IHttpClient.ts#L43)

___

### get

• `Readonly` **get**: <T\>(`url`: `string`, `configs?`: [`GetRequestConfig`](../modules/services_HttpClient_IHttpClient.md#getrequestconfig)) => `Promise`<`T`\>

#### Type declaration

▸ <`T`\>(`url`, `configs?`): `Promise`<`T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `configs?` | [`GetRequestConfig`](../modules/services_HttpClient_IHttpClient.md#getrequestconfig) |

##### Returns

`Promise`<`T`\>

#### Defined in

[services/HttpClient/IHttpClient.ts:26](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/services/HttpClient/IHttpClient.ts#L26)

___

### patch

• `Readonly` **patch**: <T, P\>(`url`: `string`, `configs?`: [`PatchRequestConfig`](../modules/services_HttpClient_IHttpClient.md#patchrequestconfig)<`P`\>) => `Promise`<`T`\>

#### Type declaration

▸ <`T`, `P`\>(`url`, `configs?`): `Promise`<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `configs?` | [`PatchRequestConfig`](../modules/services_HttpClient_IHttpClient.md#patchrequestconfig)<`P`\> |

##### Returns

`Promise`<`T`\>

#### Defined in

[services/HttpClient/IHttpClient.ts:38](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/services/HttpClient/IHttpClient.ts#L38)

___

### post

• `Readonly` **post**: <T, P\>(`url`: `string`, `configs?`: [`PostRequestConfig`](../modules/services_HttpClient_IHttpClient.md#postrequestconfig)<`P`\>) => `Promise`<`T`\>

#### Type declaration

▸ <`T`, `P`\>(`url`, `configs?`): `Promise`<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `configs?` | [`PostRequestConfig`](../modules/services_HttpClient_IHttpClient.md#postrequestconfig)<`P`\> |

##### Returns

`Promise`<`T`\>

#### Defined in

[services/HttpClient/IHttpClient.ts:28](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/services/HttpClient/IHttpClient.ts#L28)

___

### put

• `Readonly` **put**: <T, P\>(`url`: `string`, `configs?`: [`PutRequestConfig`](../modules/services_HttpClient_IHttpClient.md#putrequestconfig)<`P`\>) => `Promise`<`T`\>

#### Type declaration

▸ <`T`, `P`\>(`url`, `configs?`): `Promise`<`T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `P` | `any` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `configs?` | [`PutRequestConfig`](../modules/services_HttpClient_IHttpClient.md#putrequestconfig)<`P`\> |

##### Returns

`Promise`<`T`\>

#### Defined in

[services/HttpClient/IHttpClient.ts:33](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/services/HttpClient/IHttpClient.ts#L33)
