"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _axios["default"].create({
  baseURL: "http://localhost:8095/v1",
  headers: {
    "Content-type": "application/json"
  }
});

exports["default"] = _default;
//# sourceMappingURL=http-common.dev.js.map
