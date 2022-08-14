[DigitalHumani JS SDK](../README.md) / [repositories/UserRepository/user.repository](../modules/repositories_UserRepository_user_repository.md) / UserRepository

# Class: UserRepository

[repositories/UserRepository/user.repository](../modules/repositories_UserRepository_user_repository.md).UserRepository

## Implements

- `IUserRepository`

## Table of contents

### Constructors

- [constructor](repositories_UserRepository_user_repository.UserRepository.md#constructor)

### Methods

- [getWhoAmI](repositories_UserRepository_user_repository.UserRepository.md#getwhoami)

## Constructors

### constructor

• **new UserRepository**(`httpClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpClient` | `IHttpClient` |

#### Defined in

[repositories/UserRepository/user.repository.ts:6](https://github.com/impe93/digital-humani-js-sdk/blob/7bf8f8e/src/repositories/UserRepository/user.repository.ts#L6)

## Methods

### getWhoAmI

▸ `Readonly` **getWhoAmI**(): `Promise`<`User`\>

#### Returns

`Promise`<`User`\>

#### Implementation of

IUserRepository.getWhoAmI

#### Defined in

[repositories/UserRepository/user.repository.ts:8](https://github.com/impe93/digital-humani-js-sdk/blob/7bf8f8e/src/repositories/UserRepository/user.repository.ts#L8)
