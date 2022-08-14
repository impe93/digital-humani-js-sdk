[DigitalHumani JS SDK](../README.md) / [repositories/ProjectRepository/project.interface](../modules/repositories_ProjectRepository_project_interface.md) / IProjectRepository

# Interface: IProjectRepository

[repositories/ProjectRepository/project.interface](../modules/repositories_ProjectRepository_project_interface.md).IProjectRepository

## Implemented by

- [`ProjectRepository`](../classes/repositories_ProjectRepository_project_repository.ProjectRepository.md)

## Table of contents

### Properties

- [getProjectDetails](repositories_ProjectRepository_project_interface.IProjectRepository.md#getprojectdetails)
- [getProjects](repositories_ProjectRepository_project_interface.IProjectRepository.md#getprojects)

## Properties

### getProjectDetails

• `Readonly` **getProjectDetails**: (`projectId`: `string`) => `Promise`<[`Project`](repositories_ProjectRepository_project_models.Project.md)\>

#### Type declaration

▸ (`projectId`): `Promise`<[`Project`](repositories_ProjectRepository_project_models.Project.md)\>

Get details of the project with id passed as parameter

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `projectId` | `string` | The project ID of the project to get |

##### Returns

`Promise`<[`Project`](repositories_ProjectRepository_project_models.Project.md)\>

#### Defined in

[repositories/ProjectRepository/project.interface.ts:14](https://github.com/impe93/digital-humani-js-sdk/blob/d0c7cfd/src/repositories/ProjectRepository/project.interface.ts#L14)

___

### getProjects

• `Readonly` **getProjects**: () => `Promise`<[`ProjectPartial`](../modules/repositories_ProjectRepository_project_models.md#projectpartial)[]\>

#### Type declaration

▸ (): `Promise`<[`ProjectPartial`](../modules/repositories_ProjectRepository_project_models.md#projectpartial)[]\>

Get available Projects

##### Returns

`Promise`<[`ProjectPartial`](../modules/repositories_ProjectRepository_project_models.md#projectpartial)[]\>

A PartialProject with the english labels

#### Defined in

[repositories/ProjectRepository/project.interface.ts:8](https://github.com/impe93/digital-humani-js-sdk/blob/d0c7cfd/src/repositories/ProjectRepository/project.interface.ts#L8)
