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
[travis-url]: https://travis-ci.org/luoshixi/egg-nodekafka
[codecov-image]: https://img.shields.io/codecov/c/github/luoshixi/egg-nodekafka.svg?style=flat-square
[codecov-url]: https://codecov.io/github/LuoShiXi/egg-nodekafka?branch=master
[david-image]: https://img.shields.io/david/luoshixi/egg-nodekafka.svg?style=flat-square
[david-url]: https://david-dm.org/luoshixi/egg-nodekafka
[snyk-image]: https://snyk.io/test/npm/egg-nodekafka/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-nodekafka
[download-image]: https://img.shields.io/npm/dm/egg-nodekafka.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-nodekafka

<!--
Description here.
-->

## 依赖说明

### 依赖的 egg 版本

egg-nodekafka 版本 | egg 2.x
--- | ---
2.16 | 😁
0.x | ❌

### 依赖的插件
<!--

如果有依赖其它插件，请在这里特别说明。如

- security
- multipart

-->

## 开启插件

```js
// config/plugin.js
exports.kafka = {
  enable: true,
  package: 'egg-nodekafka',
};
```

## 使用场景

- 基于kafka-node模块；
- 为了在egg框架下，对kafka的支持；
- 使用此插件需了解egg框架及插件机制

## 详细配置

请到 [config/config.default.js](config/config.default.js) 查看详细配置项说明。

## 单元测试

<!-- 描述如何在单元测试中使用此插件，例如 schedule 如何触发。无则省略。-->

## 提问交流

请到 [issues](https://github.com/LuoShiXi/egg-nodekafka/issues) 异步交流。

## License

[MIT](LICENSE)
