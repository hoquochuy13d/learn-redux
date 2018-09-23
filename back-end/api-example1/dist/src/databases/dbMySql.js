'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var con = _mysql2.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abc12345'
    // database: 'react_native_ex1'
});
var dbMysql = new Promise(function (resolve, reject) {
    con.connect(function (err) {
        if (err) {
            reject(new Error('NOT_CONNECTED_DATABASE'));
        } else {
            resolve(con);
        }
    });
});
exports.default = dbMysql;