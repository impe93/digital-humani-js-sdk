[DigitalHumani JS SDK](../README.md) / [repositories/EnterpriseRepository/enterprise.repository](../modules/repositories_EnterpriseRepository_enterprise_repository.md) / EnterpriseRepository

# Class: EnterpriseRepository

[repositories/EnterpriseRepository/enterprise.repository](../modules/repositories_EnterpriseRepository_enterprise_repository.md).EnterpriseRepository

## Implements

- `IEnterpriseRepository`

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
| `httpClient` | `IHttpClient` |

#### Defined in

[repositories/EnterpriseRepository/enterprise.repository.ts:10](https://github.com/impe93/digital-humani-js-sdk/blob/7bf8f8e/src/repositories/EnterpriseRepository/enterprise.repository.ts#L10)

## Methods

### getEnterprise

▸ `Readonly` **getEnterprise**(`enterpriseId`): `Promise`<`Enterprise`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `enterpriseId` | `string` |

#### Returns

`Promise`<`Enterprise`\>

#### Implementation of

IEnterpriseRepository.getEnterprise

#### Defined in

[repositories/EnterpriseRepository/enterprise.repository.ts:12](https://github.com/impe93/digital-humani-js-sdk/blob/7bf8f8e/src/repositories/EnterpriseRepository/enterprise.repository.ts#L12)

___

### getTreeCount

▸ `Readonly` **getTreeCount**(`__namedParameters`): `Promise`<`Count`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `GetTreeCountRequest` |

#### Returns

`Promise`<`Count`\>

#### Implementation of

IEnterpriseRepository.getTreeCount

#### Defined in

[repositories/EnterpriseRepository/enterprise.repository.ts:16](https://github.com/impe93/digital-humani-js-sdk/blob/7bf8f8e/src/repositories/EnterpriseRepository/enterprise.repository.ts#L16)
