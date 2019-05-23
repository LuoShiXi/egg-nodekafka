'use strict';

exports.keys = '123456';

exports.kafka = {
  client: {
    host: '127.0.0.1:9092',
    connectTimeout: 3000,
    requestTimeout: 5000,
  },
  agent: true,
  app: true,
};
