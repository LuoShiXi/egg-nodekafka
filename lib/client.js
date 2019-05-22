'use strict';

const kafka = require('kafka-node');

/**
 * Kafka Client
 * @param {Object} options The Options for New KafkaClient connects directly to Kafka brokers.
 * @param {string} options.kafkaHost A string of kafka broker/host combination delimited by comma for example: kafka-1.us-east-1.myapp.com:9093,kafka-2.us-east-1.myapp.com:9093 default: localhost:9092.
 */
module.exports = function(...options) {
  return new kafka.KafkaClient(...options);
};
