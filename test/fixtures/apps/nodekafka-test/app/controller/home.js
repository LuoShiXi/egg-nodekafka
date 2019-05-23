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
      ctx.body = { result: 'fail' };
      ctx.status = 200;
      return;
    }
    logger.info(result, '-------------------------');
    ctx.status = 200;
    ctx.body = { result: 'success' };
    return;
  }
}

module.exports = HomeController;
