// app.js
'use strict';
const assert = require('assert');
const Influx = require('influx');
module.exports = app => {
  // 第一个参数 mysql 指定了挂载到 app 上的字段，我们可以通过 `app.mysql` 访问到 MySQL singleton 实例
  // 第二个参数 createMysql 接受两个参数(config, app)，并返回一个 MySQL 的实例
  app.addSingleton('influx', createInfluxdb);
};


function createInfluxdb(config, app) {
  assert(config.url);
  const { logger } = app;

  let client;
  if (config.type) {
    if (config.type === 'url') {
      client = new Influx.InfluxDB(config.url);
    } else {
      assert(config.client.host && config.client.database);
      client = new Influx.InfluxDB(config.client);
    }
  } else {
    client = new Influx.InfluxDB(config.url);
  }
  logger.info('influx!');
  return client;
}
