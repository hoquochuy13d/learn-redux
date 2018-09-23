'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _testController = require('../controllers/testController');

var _testController2 = _interopRequireDefault(_testController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.get('/', async function (req, res, next) {
    var tt = await _testController2.default.list();
    console.log(tt);
    res.json({
        aaaa: tt
    });
});
exports.default = router;