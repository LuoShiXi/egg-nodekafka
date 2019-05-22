'use strict';

const kafkaClient = require('./client');
const promiseProducer = require('./producer');

module.exports = app => {
  app.addSingleton('kafka', createOneClient);
};

function createOneClient(config, app) {
  config.host = config.host ? config.host : '';
  app.coreLogger.info('[egg-kafka] connecting %s', config.host);

  const client = kafkaClient({ kafkaHost: config.host });

  /**
   * Producer
   *@class Producer([options])
   *@param args options or other, now only options is json object, required: false
   *@argument options: options for producer
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
    if (args.length === 1) {
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
