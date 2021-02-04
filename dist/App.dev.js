"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNavigation = require("react-navigation");

var _reactNavigationStack = require("react-navigation-stack");

var _SearchScreen = _interopRequireDefault(require("./src/screens/SearchScreen"));

var _SingleRestaurantScreen = _interopRequireDefault(require("./src/screens/SingleRestaurantScreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var navigator = (0, _reactNavigationStack.createStackNavigator)({
  Search: _SearchScreen["default"],
  SingleResScr: _SingleRestaurantScreen["default"]
}, {
  initialRouteName: 'Search',
  defaulNavigationOptions: {
    title: 'Business Search'
  }
});

var _default = (0, _reactNavigation.createAppContainer)(navigator);

exports["default"] = _default;