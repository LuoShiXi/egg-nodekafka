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
    }
    logger.info(result, '-------------------------');
    ctx.status = 200;
    ctx.body = { result: 'success' };
    return;
  }
}

module.exports = HomeController;
