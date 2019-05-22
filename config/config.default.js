'use strict';

/**
 * egg-eggplugin default config
 * @member Config#kafka
 * @property {String} SOME_KEY - some description
 */
exports.kafka = {
  client: {
    host: '127.0.0.1:2181' },
  app: true, // 默认附加到app
  agent: true, // 默认附加到agent
};
