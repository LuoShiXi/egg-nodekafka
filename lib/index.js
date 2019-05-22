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
   * Producer Instance
   * @param {boolean} args optional parameters
   * @return {Producer} -
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
