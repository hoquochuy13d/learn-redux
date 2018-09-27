"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const configConnect = {
    host: 'localhost',
    port: 3306,
    ssl: {
        // DO NOT DO THIS
        // set up your ca correctly to trust the connection
        rejectUnauthorized: false
    },
    user: 'root',
    password: '123456',
    database: 'example1'
};
const connect = mysql_1.default.createConnection(configConnect);
let dbMySql = new Promise((resolve, reject) => {
    connect.connect((err) => {
        if (err) {
            reject(err);
        }
        resolve(connect);
    });
});
exports.default = dbMySql;
//# sourceMappingURL=mySql.js.map