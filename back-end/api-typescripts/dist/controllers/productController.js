"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = __importDefault(require("../entity/product"));
let router = express_1.Router();
let product = new product_1.default();
router.get('/list', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        let data = yield product.getList();
        if (!data)
            throw 'NOT_FOUND';
        res.json(data);
    }
    catch (err) {
        next(err);
    }
}));
router.get('/find', (req, res, next) => {
});
exports.default = router;
//# sourceMappingURL=productController.js.map