### look first
```js
var mysql = require('mysql'),
  co = require('co'),
  thunkify = require('thunkify');

var pool = mysql.createPool({
  user: 'root'
});
pool.query = thunkify(pool.query);

co(function * () {
  var rows = yield pool.query('SELECT 1 + 2 AS q');
  console.log(rows[0]);
})();
```
## yes, you should not use `co-mysql`! >_<

[![NPM](https://nodei.co/npm/co-mysql.png?downloads=true)](https://nodei.co/npm/co-mysql/)

## [node-mysql](https://github.com/felixge/node-mysql) wrapper for [co](https://github.com/visionmedia/co) or [koa](https://github.com/koajs/koa)

### install
```bash
npm install co-mysql
```

### how to use
```js
var co = require('co'),
  mysql = require('co-mysql');

co(function*() {
  var connection = mysql.createConnection(options);
  connection.connect();
  var result = yield connection.query('SELECT 10086 + 10000 AS q');
  connection.end();
})();
```

### use pool
```js
var co = require('co'),
  mysql = require('co-mysql');

co(function*() {
  var pool = mysql.createPool(options);
  var result = yield pool.query('SELECT 1');
  pool.end();
})();
```

### License
MIT
