[DigitalHumani JS SDK](../README.md) / [repositories/UserRepository/user.repository](../modules/repositories_UserRepository_user_repository.md) / UserRepository

# Class: UserRepository

[repositories/UserRepository/user.repository](../modules/repositories_UserRepository_user_repository.md).UserRepository

## Implements

- [`IUserRepository`](../interfaces/repositories_UserRepository_user_interface.IUserRepository.md)

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
| `httpClient` | [`IHttpClient`](../interfaces/services_HttpClient_IHttpClient.IHttpClient.md) |

#### Defined in

[repositories/UserRepository/user.repository.ts:6](https://github.com/impe93/digital-humani-js-sdk/blob/d0c7cfd/src/repositories/UserRepository/user.repository.ts#L6)

## Methods

### getWhoAmI

▸ `Readonly` **getWhoAmI**(): `Promise`<[`User`](../interfaces/repositories_UserRepository_user_models.User.md)\>

Used to get information about the user that made the API call

#### Returns

`Promise`<[`User`](../interfaces/repositories_UserRepository_user_models.User.md)\>

Details of the user that mad the api call

#### Implementation of

IUserRepository.getWhoAmI

#### Defined in

[repositories/UserRepository/user.repository.ts:8](https://github.com/impe93/digital-humani-js-sdk/blob/d0c7cfd/src/repositories/UserRepository/user.repository.ts#L8)
