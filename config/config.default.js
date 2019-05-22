'use strict';

/**
 * egg-kafka-js default config
 * @member Config#kafkaJs
 * @property {String} SOME_KEY - some description
 */
exports.kafka = {
  client: {
    host: '127.0.0.1:9092',
  },
  agent: true,
  app: true,
};
