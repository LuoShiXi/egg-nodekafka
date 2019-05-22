# egg-kafka-js

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-kafka-js.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-kafka-js
[travis-image]: https://img.shields.io/travis/eggjs/egg-kafka-js.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-kafka-js
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-kafka-js.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-kafka-js?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-kafka-js.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-kafka-js
[snyk-image]: https://snyk.io/test/npm/egg-kafka-js/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-kafka-js
[download-image]: https://img.shields.io/npm/dm/egg-kafka-js.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-kafka-js

<!--
Description here.
-->

## Install

```bash
$ npm i egg-kafka-js --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.kafkaJs = {
  enable: true,
  package: 'egg-kafka-js',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.kafkaJs = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
