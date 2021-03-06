'use strict';

var co = require('co'),
  mysql = require('../index'),
  config = require('../test/config'),
  times = 100000,
  start = Date.now(),
  flag = 0,
  pool = mysql.createPool(config);

for (var i = 0; i < times; i++) {
  co(function * () {
    yield pool.query('SELECT 1 AS q');
    flag++;
    if (flag === times) {
      console.log('due time: ', Date.now() - start);
    }
  })();
}