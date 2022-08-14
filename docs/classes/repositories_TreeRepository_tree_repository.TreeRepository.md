[DigitalHumani JS SDK](../README.md) / [repositories/TreeRepository/tree.repository](../modules/repositories_TreeRepository_tree_repository.md) / TreeRepository

# Class: TreeRepository

[repositories/TreeRepository/tree.repository](../modules/repositories_TreeRepository_tree_repository.md).TreeRepository

## Implements

- [`ITreeRepository`](../interfaces/repositories_TreeRepository_tree_interface.ITreeRepository.md)

## Table of contents

### Constructors

- [constructor](repositories_TreeRepository_tree_repository.TreeRepository.md#constructor)

### Methods

- [getTree](repositories_TreeRepository_tree_repository.TreeRepository.md#gettree)
- [getTrees](repositories_TreeRepository_tree_repository.TreeRepository.md#gettrees)
- [plantTrees](repositories_TreeRepository_tree_repository.TreeRepository.md#planttrees)

## Constructors

### constructor

• **new TreeRepository**(`httpClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpClient` | [`IHttpClient`](../interfaces/services_HttpClient_IHttpClient.IHttpClient.md) |

#### Defined in

[repositories/TreeRepository/tree.repository.ts:12](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/repositories/TreeRepository/tree.repository.ts#L12)

## Methods

### getTree

▸ `Readonly` **getTree**(`__namedParameters`): `Promise`<[`Tree`](../interfaces/repositories_TreeRepository_tree_models.Tree.md)\>

Used to get a planted tree details by ID

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `__namedParameters` | [`GetTreeRequest`](../interfaces/repositories_TreeRepository_tree_models.GetTreeRequest.md) | This object contain only the treeId to search |

#### Returns

`Promise`<[`Tree`](../interfaces/repositories_TreeRepository_tree_models.Tree.md)\>

An object with all the informations about the tree

#### Implementation of

ITreeRepository.getTree

#### Defined in

[repositories/TreeRepository/tree.repository.ts:26](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/repositories/TreeRepository/tree.repository.ts#L26)

___

### getTrees

▸ `Readonly` **getTrees**(`__namedParameters`): `Promise`<[`GetTreesResponse`](../interfaces/repositories_TreeRepository_tree_models.GetTreesResponse.md)\>

Used to get how many trees has planted the user passed as a parameter.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `__namedParameters` | [`GetTreesRequest`](../interfaces/repositories_TreeRepository_tree_models.GetTreesRequest.md) | Those params are used to understand wich trees to get |

#### Returns

`Promise`<[`GetTreesResponse`](../interfaces/repositories_TreeRepository_tree_models.GetTreesResponse.md)\>

A response with the user, enterpriseId and the planted tree count.

#### Implementation of

ITreeRepository.getTrees

#### Defined in

[repositories/TreeRepository/tree.repository.ts:14](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/repositories/TreeRepository/tree.repository.ts#L14)

___

### plantTrees

▸ `Readonly` **plantTrees**(`body`): `Promise`<[`Tree`](../interfaces/repositories_TreeRepository_tree_models.Tree.md)\>

Used to get a planted tree details by ID

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`PlanteTreesRequest`](../modules/repositories_TreeRepository_tree_models.md#plantetreesrequest) |

#### Returns

`Promise`<[`Tree`](../interfaces/repositories_TreeRepository_tree_models.Tree.md)\>

An object with all the informations about the tree

#### Implementation of

ITreeRepository.plantTrees

#### Defined in

[repositories/TreeRepository/tree.repository.ts:30](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/repositories/TreeRepository/tree.repository.ts#L30)
