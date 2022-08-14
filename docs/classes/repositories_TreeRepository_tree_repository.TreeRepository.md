[DigitalHumani JS SDK](../README.md) / [repositories/TreeRepository/tree.repository](../modules/repositories_TreeRepository_tree_repository.md) / TreeRepository

# Class: TreeRepository

[repositories/TreeRepository/tree.repository](../modules/repositories_TreeRepository_tree_repository.md).TreeRepository

## Implements

- `ITreeRepository`

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
| `httpClient` | `IHttpClient` |

#### Defined in

[repositories/TreeRepository/tree.repository.ts:12](https://github.com/impe93/digital-humani-js-sdk/blob/f143a90/src/repositories/TreeRepository/tree.repository.ts#L12)

## Methods

### getTree

▸ `Readonly` **getTree**(`__namedParameters`): `Promise`<`Tree`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `GetTreeRequest` |

#### Returns

`Promise`<`Tree`\>

#### Implementation of

ITreeRepository.getTree

#### Defined in

[repositories/TreeRepository/tree.repository.ts:26](https://github.com/impe93/digital-humani-js-sdk/blob/f143a90/src/repositories/TreeRepository/tree.repository.ts#L26)

___

### getTrees

▸ `Readonly` **getTrees**(`__namedParameters`): `Promise`<`GetTreesResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `GetTreesRequest` |

#### Returns

`Promise`<`GetTreesResponse`\>

#### Implementation of

ITreeRepository.getTrees

#### Defined in

[repositories/TreeRepository/tree.repository.ts:14](https://github.com/impe93/digital-humani-js-sdk/blob/f143a90/src/repositories/TreeRepository/tree.repository.ts#L14)

___

### plantTrees

▸ `Readonly` **plantTrees**(`body`): `Promise`<`Tree`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `PlanteTreesRequest` |

#### Returns

`Promise`<`Tree`\>

#### Implementation of

ITreeRepository.plantTrees

#### Defined in

[repositories/TreeRepository/tree.repository.ts:30](https://github.com/impe93/digital-humani-js-sdk/blob/f143a90/src/repositories/TreeRepository/tree.repository.ts#L30)
