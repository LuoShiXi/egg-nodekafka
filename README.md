# egg-nodekafka

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-nodekafka.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-nodekafka
[travis-image]: https://travis-ci.org/LuoShiXi/egg-nodekafka.svg?branch=master
[travis-url]: https://travis-ci.org/eggjs/egg-nodekafka
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-nodekafka.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/LuoShiXi/egg-nodekafka
[david-image]: https://img.shields.io/david/luoshixi/egg-nodekafka.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-nodekafka
[snyk-image]: https://snyk.io/test/npm/egg-nodekafka/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-nodekafka
[download-image]: https://img.shields.io/npm/dm/egg-nodekafka.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-nodekafka

> 近期不断完善, 目前仅支持 kafka Producer.

<!--
Description here.
-->

## Install

```bash
$ npm i egg-nodekafka --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.kafka = {
  enable: true,
  package: 'egg-nodekafka',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.kafka = {
  client: {
    host: '127.0.0.1:9092, 127.0.0.1:9093',
  },
  agent: true,
  app: true,
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example
```js
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  async index() {
    const { app, logger, ctx } = this;
    const producer = app.kafka.producer();
    let result;
    try {
      result = await producer.sendAsync([{
        topic: 'topic1',
        messages: 'test' + new Date().toISOString(),
        partition: 0,
      }]); 
    } catch (error) {
      app.coreLogger.error(error);
      ctx.status = 201;
      return;
    }
    logger.info(result, '-------------------------');
    ctx.status = 200;
    ctx.body = { result: 'success', value: JSON.stringify(result) };
  }
}

module.exports = HomeController;
```
<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/LuoShiXi/egg-nodekafka/issues).

## License

[MIT](LICENSE)
