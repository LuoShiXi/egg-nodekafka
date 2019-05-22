'use strict';

const mock = require('egg-mock');

describe('test/eggplugin.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/eggplugin-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, eggplugin')
      .expect(200);
  });
});
