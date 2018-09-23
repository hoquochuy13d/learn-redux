"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controllers/productController"));
let router = express_1.Router();
let producController = new productController_1.default();
router.get('/', (req, res, next) => {
    producController.getList().then(data => {
        res.json(data);
    }).catch(err => {
        next(err);
    });
});
router.get('/find', (req, res, next) => {
    producController.find({
        name: 'SP 12'
    }).then(data => {
        res.json(data);
    }).catch(err => {
        next(err);
    });
});
exports.default = router;
//# sourceMappingURL=router.js.map