"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mySql_1 = __importDefault(require("../databases/mySql"));
class Service {
    constructor(tableName) {
        this.tableName = tableName;
    }
    getList() {
        return new Promise((resolve, reject) => {
            let strQuery = `SELECT * FROM ${this.tableName}`;
            mySql_1.default.then(db => {
                db.query(strQuery, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                });
            });
        });
    }
    find(filter) {
        let arr = Object.keys(filter);
        let where = '';
        if (arr.length > 0) {
            where += `WHERE `;
        }
        for (let index = 0; index < arr.length; index++) {
            if (index === arr.length - 1) {
                where += ` ${arr[index]} = '${filter[arr[index]]}' `;
            }
            else {
                where += ` ${arr[index]} = '${filter[arr[index]]}' AND`;
            }
        }
        let strQuery = `SELECT * FROM ${this.tableName} ${where}`;
        console.log(strQuery);
        return new Promise((resolve, reject) => {
            mySql_1.default.then(db => {
                db.query(strQuery, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                });
            });
        });
    }
}
exports.default = Service;
//# sourceMappingURL=service.js.map