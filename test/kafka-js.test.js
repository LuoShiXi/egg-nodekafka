'use strict';

const mock = require('egg-mock');

describe('test/kafka-js.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/kafka-js-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, kafkaJs')
      .expect(200);
  });
});
