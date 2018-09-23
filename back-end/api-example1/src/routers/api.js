import express from 'express';
import ProductController from '../controllers/testController';
let  router = express.Router();
router.get('/',async (req,res,next)=> {
    let tt = await ProductController.list();
    console.log(tt);
   res.json({
       aaaa: tt
   })
})
export default router;