[DigitalHumani JS SDK](../README.md) / [repositories/ProjectRepository/project.repository](../modules/repositories_ProjectRepository_project_repository.md) / ProjectRepository

# Class: ProjectRepository

[repositories/ProjectRepository/project.repository](../modules/repositories_ProjectRepository_project_repository.md).ProjectRepository

## Implements

- [`IProjectRepository`](../interfaces/repositories_ProjectRepository_project_interface.IProjectRepository.md)

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
| `httpClient` | [`IHttpClient`](../interfaces/services_HttpClient_IHttpClient.IHttpClient.md) |

#### Defined in

[repositories/ProjectRepository/project.repository.ts:6](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/repositories/ProjectRepository/project.repository.ts#L6)

## Methods

### getProjectDetails

▸ `Readonly` **getProjectDetails**(`projectId`): `Promise`<[`Project`](../interfaces/repositories_ProjectRepository_project_models.Project.md)\>

Get details of the project with id passed as parameter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `projectId` | `string` | The project ID of the project to get |

#### Returns

`Promise`<[`Project`](../interfaces/repositories_ProjectRepository_project_models.Project.md)\>

#### Implementation of

IProjectRepository.getProjectDetails

#### Defined in

[repositories/ProjectRepository/project.repository.ts:12](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/repositories/ProjectRepository/project.repository.ts#L12)

___

### getProjects

▸ `Readonly` **getProjects**(): `Promise`<[`ProjectPartial`](../modules/repositories_ProjectRepository_project_models.md#projectpartial)[]\>

Get available Projects

#### Returns

`Promise`<[`ProjectPartial`](../modules/repositories_ProjectRepository_project_models.md#projectpartial)[]\>

A PartialProject with the english labels

#### Implementation of

IProjectRepository.getProjects

#### Defined in

[repositories/ProjectRepository/project.repository.ts:8](https://github.com/impe93/digital-humani-js-sdk/blob/8605906/src/repositories/ProjectRepository/project.repository.ts#L8)
