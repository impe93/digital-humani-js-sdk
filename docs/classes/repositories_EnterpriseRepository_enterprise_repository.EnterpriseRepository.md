[DigitalHumani JS SDK](../README.md) / [repositories/EnterpriseRepository/enterprise.repository](../modules/repositories_EnterpriseRepository_enterprise_repository.md) / EnterpriseRepository

# Class: EnterpriseRepository

[repositories/EnterpriseRepository/enterprise.repository](../modules/repositories_EnterpriseRepository_enterprise_repository.md).EnterpriseRepository

## Implements

- [`IEnterpriseRepository`](../interfaces/repositories_EnterpriseRepository_enterprise_interface.IEnterpriseRepository.md)

## Table of contents

### Constructors

- [constructor](repositories_EnterpriseRepository_enterprise_repository.EnterpriseRepository.md#constructor)

### Methods

- [getEnterprise](repositories_EnterpriseRepository_enterprise_repository.EnterpriseRepository.md#getenterprise)
- [getTreeCount](repositories_EnterpriseRepository_enterprise_repository.EnterpriseRepository.md#gettreecount)

## Constructors

### constructor

• **new EnterpriseRepository**(`httpClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpClient` | [`IHttpClient`](../interfaces/services_HttpClient_IHttpClient.IHttpClient.md) |

#### Defined in

[repositories/EnterpriseRepository/enterprise.repository.ts:10](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/repositories/EnterpriseRepository/enterprise.repository.ts#L10)

## Methods

### getEnterprise

▸ `Readonly` **getEnterprise**(`enterpriseId`): `Promise`<[`Enterprise`](../interfaces/repositories_EnterpriseRepository_enterprise_models.Enterprise.md)\>

This method is used to get an enterprise by its ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enterpriseId` | `string` | Enterprise ID, is used to get the right enterprise details |

#### Returns

`Promise`<[`Enterprise`](../interfaces/repositories_EnterpriseRepository_enterprise_models.Enterprise.md)\>

The associated enterprise

#### Implementation of

IEnterpriseRepository.getEnterprise

#### Defined in

[repositories/EnterpriseRepository/enterprise.repository.ts:12](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/repositories/EnterpriseRepository/enterprise.repository.ts#L12)

___

### getTreeCount

▸ `Readonly` **getTreeCount**(`__namedParameters`): `Promise`<[`Count`](../interfaces/repositories_EnterpriseRepository_enterprise_models.Count.md)\>

**`Throws`**

Throw an error when the explained parameters logic is not satisfied.

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`GetTreeCountRequest`](../modules/repositories_EnterpriseRepository_enterprise_models.md#gettreecountrequest) |

#### Returns

`Promise`<[`Count`](../interfaces/repositories_EnterpriseRepository_enterprise_models.Count.md)\>

an object with `count` field that rapresent the enterprise buyed trees.

#### Implementation of

IEnterpriseRepository.getTreeCount

#### Defined in

[repositories/EnterpriseRepository/enterprise.repository.ts:16](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/repositories/EnterpriseRepository/enterprise.repository.ts#L16)
