# @reis/errors

[![npm version](https://img.shields.io/npm/v/@reis/errors.svg)](https://www.npmjs.com/package/@reis/errors)
[![github issues](https://img.shields.io/github/issues/adamreisnz/errors.svg)](https://github.com/adamreisnz/errors/issues)


A collection of common error classes

## Installation

You can install this package using `yarn` or `npm`.

```shell
#yarn
yarn add @reis/errors

#npm
npm install @reis/errors --save
```

## Usage

```js
//Load needed error classes
import {BadRequestError, NotFoundError} from '@reis/errors'

//Use in some function
export function someMiddleware() {
  throw new BadRequestError('Bad things happened')
}
```

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [errors issue tracker](https://github.com/adamreisnz/errors/issues).

## License

(MIT License)

Copyright 2016-2023, Adam Reis
