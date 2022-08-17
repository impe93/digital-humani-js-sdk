# DigitalHumani JS SDK

[![Continuous Integrations](https://github.com/impe93/digital-humani-js-sdk/actions/workflows/continuous-integrations.yaml/badge.svg?branch=main)](https://github.com/impe93/digital-humani-js-sdk/actions/workflows/continuous-integrations.yaml)
[![License](https://badgen.net/github/license/impe93/digital-humani-js-sdk)](./LICENSE)
![Lines Coverage](./coverage/badge-lines.svg)

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install digital-humani-js-sdk --save
```

Or if you're using Yarn

```sh
yarn add digital-humani-js-sdk
```

---

## Getting started

### Setting the environment variables

To work, the library require 2 env variables:

```
DIGITALHUMANI_ENV=<prod | sandbox>
DIGITALHUMANI_API_KEY=<your-api-key>
```

Those variables are used to initialize the SDK.

### Use the SDK

The main class is a singleton that is instanciated the first time that is called. The fields of the main class are repositories. Every repository has methods that are used to interact with the API of Digital Humani.

```typescript
import dh from 'digital-humani-js-sdk';

// dh.i is a shortcut of dh.instance
dh.i.projectRepo.getProjects().then((projects) => console.log(projects));
```

---

## Documentation

### Singleton instance

As said before, the default export of the library is a singleton. Is possible access the singleton instance in 2 ways:

```typescript
import dh from 'digital-humani-js-sdk';

// By using `instance` field
const dhInstance = dh.instance;

// By using `i` field
const dhInstance = dh.i;
```

The second form is internally calling `dh.instance` and it's only a compressed form to say the same thing.

The singleton instance has public repositories fields for every main area of the Digital Humani API. Every repository expose methods that, under the hood, made the correct API call to the right end point (based on the app environment).

The available repositories are:

- Enterprise &rarr; Manage API call on path `/enterprise`
- Project &rarr; Manage API call on path `/project`
- Tree &rarr; Manage API call on path `/tree`
- User &rarr; Manage API call on path `/user`

### Enterprise Repository

Enterprise repositories has 2 available methods

#### `getEnterprise()`

This method allows you to retrieve the details of your enterprise.

The accepted param is:

| Name           | Type     |
| -------------- | -------- |
| `enterpriseId` | `string` |

and return an enterprise object that looks like this:

```json
{
  "created": "2018-12-12T09:07:00.725Z",
  "updated": "2019-03-30T15:03:42.095Z",
  "id": "11111111",
  "name": "Test - Cable Company ABC",
  "contact": {
    "name": "Jane Doe"
  }
}
```

#### `getTreeCount()`

This method allows you to retrieve the number of trees planted by an enterprise for a specific month or by any range of date, the method behaviour depends on the passed input parameters.

The accepted param is an object that has this fields:

| Name           | Type                    |
| -------------- | ----------------------- |
| `enterpriseId` | `string`                |
| `endDate`      | `string` or `undefined` |
| `startDate`    | `string` or `undefined` |
| `month`        | `string` or `undefined` |

Montly search has precedence over date search, so if all three parameters `month`, `startDate`, `endDate` are passed, the method will return the count by month.

and return an object that looks like this:

```json
{
  "count": 57
}
```

### Project Repository

Project repository has 2 available methods

#### `getProjects()`

This method retrieves all the reforestation projects available.

and return an a list of objects that looks like this:

```json
[
  {
    "id": "91111111",
    "name": "California OneTreePlanted",
    "reforestationProjectDescription_en": "Reforestation project in California, United States",
    "reforestationProjectState_en": "California",
    "reforestationProjectCountry_en": "United States",
    "reforestationProjectWebsite_en": "https://onetreeplanted.org/united-states/products/california-forests",
    "reforestationCompanyName_en": "OneTreePlanted"
  }
]
```

#### `getProjectDetails()`

This method allows you to retrieve the details of a single reforestation project

The accepted param is:

| Name        | Type     |
| ----------- | -------- |
| `projectId` | `string` |

and return a project object that looks like this:

```json
{
  "reforestationCompanyName_fr": "WeForest",
  "reforestationProjectImageURL_en": "https://www.weforest.org/sites/IMG_20190423_132725_0.jpg",
  "reforestationCompanyName_en": "WeForest",
  "reforestationProjectCountry_en": "India",
  "reforestationCompanyAddress_en": "Ogentroostlaan 15, 3090 Overijse, Belgium",
  "created": "2018-12-12T09:05:00.725Z",
  "reforestationProjectWebsite_en": "https://www.weforest.org/project/india-khasi-hills",
  "name": "Khasi Hills in India, WeForest",
  "reforestationProjectWebsite_fr": "https://www.weforest.org/project/india-khasi-hills",
  "reforestationProjectCountry_fr": "Inde",
  "updated": "2019-05-19T19:24:10.761Z",
  "reforestationProjectDescription_fr": "Projet de reforestation aux Khasi Hills en Inde",
  "reforestationProjectDescription_en": "Reforestation project in the Khasi Hills in India",
  "reforestationCompanyWebsite_fr": "https://www.weforest.org/",
  "reforestationCompanyWebsite_en": "https://www.weforest.org/",
  "reforestationCompanyAddress_fr": "Ogentroostlaan 15, 3090 Overijse, Belgique",
  "description": "Khasi Hills in India, WeForest",
  "id": "96666666",
  "reforestationProjectImageURL_fr": "https://www.weforest.org/sites/default/IMG_20190423_132725_0.jpg"
}
```

### Tree Repository

Tree repository has 3 available methods.

#### `getTrees()`

This method allows you to retrieve the number of trees planted by a specific user.

The accepted param is an object that has this fields:

| Name           | Type     | Description                                                                 |
| -------------- | -------- | --------------------------------------------------------------------------- |
| `enterpriseId` | `string` | Id of your enterprise                                                       |
| `user`         | `string` | End user by whom the trees were planted. Example of an user: email@test.com |

and return an a object that looks like this:

```json
{
  "enterpriseId": "48a45261",
  "user": "test_user_1",
  "count": 4
}
```

#### `getTree()`

The following method sends the request to plant one or many trees.

The accepted param is an object that has this field:

| Name     | Type     | Description           |
| -------- | -------- | --------------------- |
| `treeId` | `string` | Id of your enterprise |

and return an a object that looks like this:

```json
{
  "projectId": "81818182",
  "created": "2020-04-11T18:01:40.441Z",
  "uuid": "bcd35c97-d66c-412e-89ae-ecbac0f629ac",
  "user": "test@email.com",
  "treeCount": 1,
  "enterpriseId": "33333333"
}
```

#### `plantTrees()`

The following method sends the request to plant one or many trees.

The accepted param is an object that has this fields:

| Name           | Type     | Description                                                                 |
| -------------- | -------- | --------------------------------------------------------------------------- |
| `enterpriseId` | `string` | Id of your enterprise                                                       |
| `user`         | `string` | End user by whom the trees were planted. Example of an user: email@test.com |
| `projectId`    | `string` | Id of the reforestation project for where you want the trees to be planted. |
| `treeCount`    | `number` | Number of trees requested to plant                                          |

and return an a object that looks like this:

```json
{
  "uuid": "eef9f369-9ae0-45b8-ab07-10650f53a71e",
  "created": "2019-05-17T00:36:25.797Z",
  "treeCount": 2,
  "enterpriseId": "11111111",
  "projectId": "93333333",
  "user": "email@test.com"
}
```

### User Repository

Tree repository has 1 available method.

#### `getWhoAmI()`

This method allows you to retrieve the details of your authenticated user.

The return is an a object that looks like this:

```json
{
  "id": "abcd1234",
  "email": "test@test.com",
  "firstName": "Test",
  "lastName": "User",
  "enterpriseId": "1111111"
}
```

## License

Released under [MIT License](./LICENSE).
