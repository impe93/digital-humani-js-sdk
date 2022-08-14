[DigitalHumani JS SDK](../README.md) / repositories/EnterpriseRepository/enterprise.models

# Module: repositories/EnterpriseRepository/enterprise.models

## Table of contents

### Interfaces

- [Contact](../interfaces/repositories_EnterpriseRepository_enterprise_models.Contact.md)
- [Count](../interfaces/repositories_EnterpriseRepository_enterprise_models.Count.md)
- [Enterprise](../interfaces/repositories_EnterpriseRepository_enterprise_models.Enterprise.md)

### Type Aliases

- [GetMonthlyTreeCountRequest](repositories_EnterpriseRepository_enterprise_models.md#getmonthlytreecountrequest)
- [GetTreeCountRequest](repositories_EnterpriseRepository_enterprise_models.md#gettreecountrequest)
- [GetUserTreeCountRequest](repositories_EnterpriseRepository_enterprise_models.md#getusertreecountrequest)

## Type Aliases

### GetMonthlyTreeCountRequest

Ƭ **GetMonthlyTreeCountRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `endDate?` | `undefined` |
| `enterpriseId` | `string` |
| `month` | `string` |
| `startDate?` | `undefined` |

#### Defined in

[repositories/EnterpriseRepository/enterprise.models.ts:17](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/repositories/EnterpriseRepository/enterprise.models.ts#L17)

___

### GetTreeCountRequest

Ƭ **GetTreeCountRequest**: [`GetMonthlyTreeCountRequest`](repositories_EnterpriseRepository_enterprise_models.md#getmonthlytreecountrequest) \| [`GetUserTreeCountRequest`](repositories_EnterpriseRepository_enterprise_models.md#getusertreecountrequest)

#### Defined in

[repositories/EnterpriseRepository/enterprise.models.ts:31](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/repositories/EnterpriseRepository/enterprise.models.ts#L31)

___

### GetUserTreeCountRequest

Ƭ **GetUserTreeCountRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `endDate` | `string` |
| `enterpriseId` | `string` |
| `month?` | `undefined` |
| `startDate` | `string` |

#### Defined in

[repositories/EnterpriseRepository/enterprise.models.ts:24](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/repositories/EnterpriseRepository/enterprise.models.ts#L24)
