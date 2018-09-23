import {Request,Response,NextFunction,Router} from 'express';
import ProductController from '../controllers/productController';
let  router = Router();
let producController = new ProductController();
router.get('/', (req:Request ,res: Response,next: NextFunction)=> {
    producController.getList().then(data => {
        res.json(data);
    }).catch(err => {
        next(err);
    });
})
router.get('/find', (req:Request ,res: Response,next: NextFunction)=> {
    producController.find({
        name: 'SP 12'
    }).then(data => {
        res.json(data);
    }).catch(err => {
        next(err);
    });
})
export default router;