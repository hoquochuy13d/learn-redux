import {Request,Response,NextFunction,Router} from 'express';
import ProductController from '../controllers/productController';
let  router = Router();
    router.use('/Product',ProductController);
    router.use('/aaaaa',ProductController);
export default router;