"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("../services/service"));
const tableName_1 = require("../constants/tableName");
class ProductController extends service_1.default {
    constructor() {
        super(tableName_1.PRODUCT);
    }
}
exports.default = ProductController;
//# sourceMappingURL=productController.js.map