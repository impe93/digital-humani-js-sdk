# DigitalHumani JS SDK

[![Continuous Integrations](https://github.com/impe93/digital-humani-js-sdk/actions/workflows/continuous-integrations.yaml/badge.svg?branch=main)](https://github.com/impe93/digital-humani-js-sdk/actions/workflows/continuous-integrations.yaml)
[![License](https://badgen.net/github/license/impe93/digital-humani-js-sdk)](./LICENSE)
[![Package tree-shaking](https://badgen.net/bundlephobia/tree-shaking/digital-humani-js-sdk)](https://bundlephobia.com/package/digital-humani-js-sdk)
[![Package minified & gzipped size](https://badgen.net/bundlephobia/minzip/digital-humani-js-sdk)](https://bundlephobia.com/package/digital-humani-js-sdk)
[![Package dependency count](https://badgen.net/bundlephobia/dependency-count/reactdigital-humani-js-sdk)](https://bundlephobia.com/package/digital-humani-js-sdk)

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install digital-humani-js-sdk --save
```

Or if you're using Yarn

```sh
yarn add digital-humani-js-sdk
```

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

## Documentation

[Documentation generated from source files by Typedoc](./docs/README.md).

## License

Released under [MIT License](./LICENSE).
