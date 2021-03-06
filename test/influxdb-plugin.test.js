'use strict';

const mock = require('egg-mock');

describe('test/influxdb-plugin.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/influxdb-plugin-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, influxdbPlugin')
      .expect(200);
  });
});
