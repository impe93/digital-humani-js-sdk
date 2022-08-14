[DigitalHumani JS SDK](../README.md) / [repositories/UserRepository/user.interface](../modules/repositories_UserRepository_user_interface.md) / IUserRepository

# Interface: IUserRepository

[repositories/UserRepository/user.interface](../modules/repositories_UserRepository_user_interface.md).IUserRepository

## Implemented by

- [`UserRepository`](../classes/repositories_UserRepository_user_repository.UserRepository.md)

## Table of contents

### Properties

- [getWhoAmI](repositories_UserRepository_user_interface.IUserRepository.md#getwhoami)

## Properties

### getWhoAmI

• `Readonly` **getWhoAmI**: () => `Promise`<[`User`](repositories_UserRepository_user_models.User.md)\>

#### Type declaration

▸ (): `Promise`<[`User`](repositories_UserRepository_user_models.User.md)\>

Used to get information about the user that made the API call

##### Returns

`Promise`<[`User`](repositories_UserRepository_user_models.User.md)\>

Details of the user that mad the api call

#### Defined in

[repositories/UserRepository/user.interface.ts:8](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/repositories/UserRepository/user.interface.ts#L8)
