# egg-influxdb-plugin

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-influxdb-plugin.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-influxdb-plugin
[travis-image]: https://img.shields.io/travis/eggjs/egg-influxdb-plugin.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-influxdb-plugin
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-influxdb-plugin.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-influxdb-plugin?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-influxdb-plugin.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-influxdb-plugin
[snyk-image]: https://snyk.io/test/npm/egg-influxdb-plugin/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-influxdb-plugin
[download-image]: https://img.shields.io/npm/dm/egg-influxdb-plugin.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-influxdb-plugin

<!--
Description here.
-->

## Install

```bash
$ yarn add git+https://github.com/zjl1985/egg-influxdb-plugin
```

## Usage

```js
// {app_root}/config/plugin.js
exports.influxdbPlugin = {
  enable: true,
  package: 'egg-influxdb-plugin',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.influxdbPlugin = {
  client: {
      host: '172.72.101.241',
      database: 'telegraf',
      measurement: 'opc',
      fields: {
        value: Influx.FieldType.FLOAT
      },
      tags: [
        'quality','tagCode'
      ]
    }
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
