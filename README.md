# @meanie/express-errors

[![npm version](https://img.shields.io/npm/v/@meanie/express-errors.svg)](https://www.npmjs.com/package/@meanie/express-errors)
[![node dependencies](https://david-dm.org/meanie/express-errors.svg)](https://david-dm.org/meanie/express-errors)
[![github issues](https://img.shields.io/github/issues/meanie/express-errors.svg)](https://github.com/meanie/express-errors/issues)


A collection of error classes for use in Express or [Meanie Express Seed](https://github.com/meanie/express-seed) projects

![Meanie](https://raw.githubusercontent.com/meanie/meanie/master/meanie-logo-full.png)

## Installation

You can install this package using `yarn` or `npm`.

```shell
#yarn
yarn add @meanie/express-errors

#npm
npm install @meanie/express-errors --save
```

## Usage

```js
//Load needed error classes
const errors = require('@meanie/errors');
const {BadRequestError, NotFoundError} = errors;

//Use in middleware
module.exports = someMiddleware(req, res, next) {
  next(new BadRequestError('Bad things happened'));
}
```

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [@meanie/express-errors issue tracker](https://github.com/meanie/express-errors/issues).

## Contributing

Pull requests are welcome! If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## Credits

* Meanie logo designed by [Quan-Lin Sim](mailto:quan.lin.sim+meanie@gmail.com)

## License
(MIT License)

Copyright 2016-2017, [Adam Reis](https://adam.reis.nz)
