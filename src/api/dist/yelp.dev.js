"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _axios["default"].create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer KqfbkxcjbMjjqO1g3EfDZvJSpOH_us8PQEOePqD8ymmoskLIaPr8uc2Gmb6Dzg00oZQYG_2Y9BbBTWiS_cDi5j9spYuvLDJYcePw0kEFFvRpE3RyiBXwJnfy_tDoX3Yx'
  }
});

exports["default"] = _default;