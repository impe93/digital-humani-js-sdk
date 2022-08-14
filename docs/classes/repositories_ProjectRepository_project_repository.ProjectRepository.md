[DigitalHumani JS SDK](../README.md) / [repositories/ProjectRepository/project.repository](../modules/repositories_ProjectRepository_project_repository.md) / ProjectRepository

# Class: ProjectRepository

[repositories/ProjectRepository/project.repository](../modules/repositories_ProjectRepository_project_repository.md).ProjectRepository

## Implements

- `IProjectRepository`

## Table of contents

### Constructors

- [constructor](repositories_ProjectRepository_project_repository.ProjectRepository.md#constructor)

### Methods

- [getProjectDetails](repositories_ProjectRepository_project_repository.ProjectRepository.md#getprojectdetails)
- [getProjects](repositories_ProjectRepository_project_repository.ProjectRepository.md#getprojects)

## Constructors

### constructor

• **new ProjectRepository**(`httpClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpClient` | `IHttpClient` |

#### Defined in

[repositories/ProjectRepository/project.repository.ts:6](https://github.com/impe93/digital-humani-js-sdk/blob/7bf8f8e/src/repositories/ProjectRepository/project.repository.ts#L6)

## Methods

### getProjectDetails

▸ `Readonly` **getProjectDetails**(`projectId`): `Promise`<`Project`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `projectId` | `string` |

#### Returns

`Promise`<`Project`\>

#### Implementation of

IProjectRepository.getProjectDetails

#### Defined in

[repositories/ProjectRepository/project.repository.ts:12](https://github.com/impe93/digital-humani-js-sdk/blob/7bf8f8e/src/repositories/ProjectRepository/project.repository.ts#L12)

___

### getProjects

▸ `Readonly` **getProjects**(): `Promise`<`ProjectPartial`[]\>

#### Returns

`Promise`<`ProjectPartial`[]\>

#### Implementation of

IProjectRepository.getProjects

#### Defined in

[repositories/ProjectRepository/project.repository.ts:8](https://github.com/impe93/digital-humani-js-sdk/blob/7bf8f8e/src/repositories/ProjectRepository/project.repository.ts#L8)
