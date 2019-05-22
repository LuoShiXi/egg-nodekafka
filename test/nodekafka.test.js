'use strict';

const mock = require('egg-mock');

describe('test/nodekafka.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/nodekafka-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect(200);
  });
});
