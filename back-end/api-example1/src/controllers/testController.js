import express from 'express';
import Service from '../services/service';
import { Product} from '../constants/tableName';
 class ProductController extends Service {
    constructor(){
        super();
        this.tableName = Product
    }
    list(){
        return new Promise((resolve,reject)=>{ 
            this.getAll().then(data => {
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
        
    }
}
export default new ProductController();