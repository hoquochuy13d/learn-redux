import {Request,Response,NextFunction,Router} from 'express';
import { Product,Product1 } from '../entity';
let  router = Router();
let product = new Product();
router.get('/list',async (req:Request ,res: Response,next: NextFunction)=> {
    try {
       let data = await product.getList();
       if(!data) throw 'NOT_FOUND';
       res.json(data);
    } catch (err) {
        next(err);
    }
})
router.get('/find', (req:Request ,res: Response,next: NextFunction)=> {

})
export default router;
