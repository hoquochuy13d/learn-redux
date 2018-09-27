"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tableName_1 = require("../constants/tableName");
const entity_1 = __importDefault(require("./entity"));
class Product extends entity_1.default {
    constructor() {
        super(tableName_1.PRODUCT);
    }
}
exports.default = Product;
//# sourceMappingURL=product.js.map