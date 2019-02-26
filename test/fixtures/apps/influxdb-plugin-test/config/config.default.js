'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1549934226040_9131';
  // add your config here

  config.influxdbPlugin = {
    url: 'http://172.72.101.241:8086/telegraf',
  };
  return config;
};
