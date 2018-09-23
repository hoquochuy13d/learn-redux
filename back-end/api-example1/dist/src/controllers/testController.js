'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _service = require('../services/service');

var _service2 = _interopRequireDefault(_service);

var _tableName = require('../constants/tableName');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductController = function (_Service) {
    _inherits(ProductController, _Service);

    function ProductController() {
        _classCallCheck(this, ProductController);

        var _this = _possibleConstructorReturn(this, (ProductController.__proto__ || Object.getPrototypeOf(ProductController)).call(this));

        _this.tableName = _tableName.Product;
        return _this;
    }

    _createClass(ProductController, [{
        key: 'list',
        value: function list() {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                _this2.getAll().then(function (data) {
                    resolve(data);
                }).catch(function (err) {
                    reject(err);
                });
            });
        }
    }]);

    return ProductController;
}(_service2.default);

exports.default = new ProductController();