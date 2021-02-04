"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _yelp = _interopRequireDefault(require("../api/yelp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = function _default() {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      results = _useState2[0],
      setResults = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      errorMsg = _useState4[0],
      setErrorMsg = _useState4[1];

  var searchApi = function searchApi(term) {
    var response;
    return regeneratorRuntime.async(function searchApi$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('Triggering a search for the term = ' + term);
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_yelp["default"].get('/search', {
              params: {
                limit: 50,
                term: term,
                location: 'san jose'
              }
            }));

          case 4:
            response = _context.sent;
            setResults(response.data.businesses);
            setErrorMsg('');
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            setErrorMsg('Something went wrong!');

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };

  (0, _react.useEffect)(function () {
    searchApi('beef');
  }, []);
  return [searchApi, results, errorMsg];
};

exports["default"] = _default;