import Service from '../services/service';
import { PRODUCT } from '../constants/tableName';

export default class ProductController extends Service {
    constructor(){
        super(PRODUCT);
    }
   
}
