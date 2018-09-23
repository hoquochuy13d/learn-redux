
class Service {
    constructor(tableName){
        this.tableName =tableName;
    }
    getAll() {
        return new Promise ((resolve,reject)=>{
            resolve(this.tableName);
        })
     }
}
export default Service;