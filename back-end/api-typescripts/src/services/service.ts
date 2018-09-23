import dbMySql from '../databases/mySql';
import {MysqlError} from 'mysql';
class Service {
    private tableName: string;
    constructor(tableName: string){
        this.tableName = tableName;
    }
    getList() {
        return new Promise ((resolve,reject)=>{
            let strQuery = `SELECT * FROM ${this.tableName}`;
            dbMySql.then(db =>  {
                db.query(strQuery,(err,data) => {
                    if(err) {
                        reject(err)
                    }
                    resolve(data);
                })
            })
        })
    }
    find(filter:any){
        let arr = Object.keys(filter);
        let where = '';
        if(arr.length > 0) {
            where += `WHERE `;
        }
        for (let index = 0; index < arr.length; index++) {
            if(index === arr.length -1){
                where += ` ${arr[index]} = '${filter[arr[index]]}' `;
               
            } else {
                where += ` ${arr[index]} = '${filter[arr[index]]}' AND`;
            }     
        }
        let strQuery = `SELECT * FROM ${this.tableName} ${where}`;
        console.log(strQuery);
        return new Promise ((resolve,reject)=>{
            dbMySql.then(db =>  {
                db.query(strQuery,(err,data) => {
                    if(err) {
                        reject(err)
                    }
                    resolve(data);
                })
            })
        })
    }           
}
export default Service