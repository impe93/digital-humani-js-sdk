[DigitalHumani JS SDK](../README.md) / [repositories/TreeRepository/tree.interface](../modules/repositories_TreeRepository_tree_interface.md) / ITreeRepository

# Interface: ITreeRepository

[repositories/TreeRepository/tree.interface](../modules/repositories_TreeRepository_tree_interface.md).ITreeRepository

## Implemented by

- [`TreeRepository`](../classes/repositories_TreeRepository_tree_repository.TreeRepository.md)

## Table of contents

### Properties

- [getTree](repositories_TreeRepository_tree_interface.ITreeRepository.md#gettree)
- [getTrees](repositories_TreeRepository_tree_interface.ITreeRepository.md#gettrees)
- [plantTrees](repositories_TreeRepository_tree_interface.ITreeRepository.md#planttrees)

## Properties

### getTree

• `Readonly` **getTree**: (`params`: [`GetTreeRequest`](repositories_TreeRepository_tree_models.GetTreeRequest.md)) => `Promise`<[`Tree`](repositories_TreeRepository_tree_models.Tree.md)\>

#### Type declaration

▸ (`params`): `Promise`<[`Tree`](repositories_TreeRepository_tree_models.Tree.md)\>

Used to get a planted tree details by ID

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetTreeRequest`](repositories_TreeRepository_tree_models.GetTreeRequest.md) | This object contain only the treeId to search |

##### Returns

`Promise`<[`Tree`](repositories_TreeRepository_tree_models.Tree.md)\>

An object with all the informations about the tree

#### Defined in

[repositories/TreeRepository/tree.interface.ts:22](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/repositories/TreeRepository/tree.interface.ts#L22)

___

### getTrees

• `Readonly` **getTrees**: (`params`: [`GetTreesRequest`](repositories_TreeRepository_tree_models.GetTreesRequest.md)) => `Promise`<[`GetTreesResponse`](repositories_TreeRepository_tree_models.GetTreesResponse.md)\>

#### Type declaration

▸ (`params`): `Promise`<[`GetTreesResponse`](repositories_TreeRepository_tree_models.GetTreesResponse.md)\>

Used to get how many trees has planted the user passed as a parameter.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `params` | [`GetTreesRequest`](repositories_TreeRepository_tree_models.GetTreesRequest.md) | Those params are used to understand wich trees to get |

##### Returns

`Promise`<[`GetTreesResponse`](repositories_TreeRepository_tree_models.GetTreesResponse.md)\>

A response with the user, enterpriseId and the planted tree count.

#### Defined in

[repositories/TreeRepository/tree.interface.ts:15](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/repositories/TreeRepository/tree.interface.ts#L15)

___

### plantTrees

• `Readonly` **plantTrees**: (`body`: [`PlanteTreesRequest`](../modules/repositories_TreeRepository_tree_models.md#plantetreesrequest)) => `Promise`<[`Tree`](repositories_TreeRepository_tree_models.Tree.md)\>

#### Type declaration

▸ (`body`): `Promise`<[`Tree`](repositories_TreeRepository_tree_models.Tree.md)\>

Used to get a planted tree details by ID

##### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`PlanteTreesRequest`](../modules/repositories_TreeRepository_tree_models.md#plantetreesrequest) |

##### Returns

`Promise`<[`Tree`](repositories_TreeRepository_tree_models.Tree.md)\>

An object with all the informations about the tree

#### Defined in

[repositories/TreeRepository/tree.interface.ts:29](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/repositories/TreeRepository/tree.interface.ts#L29)
