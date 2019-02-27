// app.js
'use strict';
const Influx = require('influx');
module.exports = app => {
  app.addSingleton('influxdbPlugin', createInfluxdb);
};

async function createInfluxdb(config, app) {
  const {
    logger,
  } = app;
  const client = new Influx.InfluxDB(config);
  const hosts = await client.ping(5000);
  hosts.forEach(host => {
    if (host.online) {
      logger.info(`${host.url.host} responded in ${host.rtt}ms running InfluxDB ${host.version})`);
    } else {
      logger.info(`InfluxDB ${host.url.host} is offline :(`);
    }
  });
  return client;
}