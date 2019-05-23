'use strict';

const kafkaClient = require('./client');
const promiseProducer = require('./producer');

module.exports = app => {
  app.addSingleton('kafka', createOneClient);
};

function createOneClient(config, app) {
  app.coreLogger.info('clientOptions config: ', config);
  config.kafkaHost = config.host ? config.host : '';
  app.coreLogger.info('[egg-kafka] connecting %s', config.kafkaHost);
  delete config.host;
  const client = kafkaClient({ ...config });

  /**
   * Producer
   *@class Producer([options])
   *@param {Object} args options or other, now only options is json object, required: false
   *@prop {Object} args.options options for producer
   *@example   {
      // Configuration for when to consider a message as acknowledged, default 1
      requireAcks: 1,
      // The amount of time in milliseconds to wait for all acks before considered, default 100ms
      ackTimeoutMs: 100,
      // Partitioner type (default = 0, random = 1, cyclic = 2, keyed = 3), default 0
      partitionerType: 2
    }
 */

  function producer(...args) {
    if (args.length !== 0) {
      return promiseProducer(client, args[0], app.coreLogger);
    }
    return promiseProducer(client, app.coreLogger);
  }

  const object = {
    client,
    producer,
  };

  return object;
}
