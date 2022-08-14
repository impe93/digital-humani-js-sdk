[DigitalHumani JS SDK](../README.md) / [repositories/EnterpriseRepository/enterprise.interface](../modules/repositories_EnterpriseRepository_enterprise_interface.md) / IEnterpriseRepository

# Interface: IEnterpriseRepository

[repositories/EnterpriseRepository/enterprise.interface](../modules/repositories_EnterpriseRepository_enterprise_interface.md).IEnterpriseRepository

## Implemented by

- [`EnterpriseRepository`](../classes/repositories_EnterpriseRepository_enterprise_repository.EnterpriseRepository.md)

## Table of contents

### Properties

- [getEnterprise](repositories_EnterpriseRepository_enterprise_interface.IEnterpriseRepository.md#getenterprise)
- [getTreeCount](repositories_EnterpriseRepository_enterprise_interface.IEnterpriseRepository.md#gettreecount)

## Properties

### getEnterprise

• `Readonly` **getEnterprise**: (`enterpriseId`: `string`) => `Promise`<[`Enterprise`](repositories_EnterpriseRepository_enterprise_models.Enterprise.md)\>

#### Type declaration

▸ (`enterpriseId`): `Promise`<[`Enterprise`](repositories_EnterpriseRepository_enterprise_models.Enterprise.md)\>

This method is used to get an enterprise by its ID

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `enterpriseId` | `string` | Enterprise ID, is used to get the right enterprise details |

##### Returns

`Promise`<[`Enterprise`](repositories_EnterpriseRepository_enterprise_models.Enterprise.md)\>

The associated enterprise

#### Defined in

[repositories/EnterpriseRepository/enterprise.interface.ts:13](https://github.com/impe93/digital-humani-js-sdk/blob/d0c7cfd/src/repositories/EnterpriseRepository/enterprise.interface.ts#L13)

___

### getTreeCount

• `Readonly` **getTreeCount**: (`params`: [`GetTreeCountRequest`](../modules/repositories_EnterpriseRepository_enterprise_models.md#gettreecountrequest)) => `Promise`<[`Count`](repositories_EnterpriseRepository_enterprise_models.Count.md)\>

#### Type declaration

▸ (`params`): `Promise`<[`Count`](repositories_EnterpriseRepository_enterprise_models.Count.md)\>

**`Throws`**

Throw an error when the explained parameters logic is not satisfied.

##### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`GetTreeCountRequest`](../modules/repositories_EnterpriseRepository_enterprise_models.md#gettreecountrequest) |

##### Returns

`Promise`<[`Count`](repositories_EnterpriseRepository_enterprise_models.Count.md)\>

an object with `count` field that rapresent the enterprise buyed trees.

#### Defined in

[repositories/EnterpriseRepository/enterprise.interface.ts:21](https://github.com/impe93/digital-humani-js-sdk/blob/d0c7cfd/src/repositories/EnterpriseRepository/enterprise.interface.ts#L21)
