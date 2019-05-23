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
[codecov-image]: https://img.shields.io/codecov/c/github/luoshixi/egg-nodekafka.svg?style=flat-square
[codecov-url]: https://codecov.io/github/LuoShiXi/egg-nodekafka?branch=master
[david-image]: https://img.shields.io/david/luoshixi/egg-nodekafka.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-nodekafka
[snyk-image]: https://snyk.io/test/npm/egg-nodekafka/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-nodekafka
[download-image]: https://img.shields.io/npm/dm/egg-nodekafka.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-nodekafka

> 近期不断完善, 目前仅支持 kafka: Producer 和 KafkaClient.

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
    host: '127.0.0.1:9092, 127.0.0.1:9093', // 多个ip可用逗号分隔
  },
  agent: true, // 支持在agent中使用kafka对象，如agent.kafka(名称视具体配置)
  app: true, // 同上
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
      logger.error(error);
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
### sendAsync(payloads)
* payloads: Array,array of ProduceRequest, ProduceRequest is a JSON object like:

* 更多参考：https://github.com/SOHU-Co/kafka-node#sendpayloads-cb
* 说明： 本方法已将kafka-node官方api中send(payloads, cb),回调函数进行封装，可直接 await producer.sendAsync(payloads) 进行生产，并可得到返回结果。
```js
{
   topic: 'topicName',
   messages: ['message body'], // multi messages should be a array, single message can be just a string or a KeyedMessage instance
   key: 'theKey', // string or buffer, only needed when using keyed partitioner
   partition: 0, // default 0
   attributes: 2, // default: 0
   timestamp: Date.now() // <-- defaults to Date.now() (only available with kafka v0.10+)
}
```
<!-- example here -->

## 目前插件支持的对象
* producer
* client
> 以上两个对象可以通过 app.kafka.producer(options: objectjson) 和 app.kafka.client 获取。

> app.kafka.client 的options配置选项即为config.{$env}.js中exports.kafka的配置信息，options参数配置选项请查看 https://github.com/SOHU-Co/kafka-node#options ，配置方式如下：
```js
// {app_root}/config/config.{$env}.js
exports.kafka = {
  client: {
    host: '127.0.0.1:9092, 127.0.0.1:9093', // 多个ip可用逗号分隔
    connectTimeout: 10000,
    requestTimeout: 30000,
    sslOptions: {},
    // 更多参考： https://github.com/SOHU-Co/kafka-node#options
  },
  agent: true, // 支持在agent中使用kafka对象，如agent.kafka(名称视具体配置)
  app: true, // 同上
};
```

## Questions & Suggestions

Please open an issue [here](https://github.com/LuoShiXi/egg-nodekafka/issues).

## License

[MIT](LICENSE)
