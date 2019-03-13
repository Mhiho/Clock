/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_TIME = exports.FETCH_TIME = 'fetch_time';
var FETCH_TIME_SET = exports.FETCH_TIME_SET = 'fetch_time_set';

var fetchTime = exports.fetchTime = function fetchTime() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var firstDayOfSpring, predate, days, hours, minutes, seconds, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              firstDayOfSpring = 1553122800000;
              predate = firstDayOfSpring - JSON.stringify(new Date().getTime());
              days = Math.floor(predate / (24 * 60 * 60 * 1000));
              hours = Math.abs(days * 24 - Math.floor(predate / (60 * 60 * 1000)));
              minutes = Math.abs(days * 24 * 60 + hours * 60 - Math.floor(predate / (60 * 1000)));
              seconds = Math.abs(days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 - Math.floor(predate / 1000));
              _context.next = 8;
              return days;

            case 8:
              _context.t0 = _context.sent;
              _context.t1 = _context.t0 + ' days  ';
              _context.t2 = hours;
              _context.t3 = _context.t1 + _context.t2;
              _context.t4 = _context.t3 + ' hours  ';
              _context.t5 = minutes;
              _context.t6 = _context.t4 + _context.t5;
              _context.t7 = _context.t6 + ' minutes  ';
              _context.t8 = seconds;
              _context.t9 = _context.t7 + _context.t8;
              res = _context.t9 + ' seconds';

              dispatch({
                type: FETCH_TIME,
                payload: res
              });

            case 20:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};
var set = exports.set = function set(time) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var timestring, t, gt, predate, days, hours, minutes, seconds, res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              timestring = time + "T00:00:00.000Z";
              t = new Date(timestring);
              gt = t.getTime();
              predate = gt - JSON.stringify(new Date().getTime());
              days = Math.floor(predate / (24 * 60 * 60 * 1000));
              hours = Math.abs(days * 24 - Math.floor(predate / (60 * 60 * 1000)));
              minutes = Math.abs(days * 24 * 60 + hours * 60 - Math.floor(predate / (60 * 1000)));
              seconds = Math.abs(days * 24 * 60 * 60 + hours * 60 * 60 + minutes * 60 - Math.floor(predate / 1000));
              _context2.next = 10;
              return days;

            case 10:
              _context2.t0 = _context2.sent;
              _context2.t1 = _context2.t0 + ' days  ';
              _context2.t2 = hours;
              _context2.t3 = _context2.t1 + _context2.t2;
              _context2.t4 = _context2.t3 + ' hours  ';
              _context2.t5 = minutes;
              _context2.t6 = _context2.t4 + _context2.t5;
              _context2.t7 = _context2.t6 + ' minutes  ';
              _context2.t8 = seconds;
              _context2.t9 = _context2.t7 + _context2.t8;
              res = _context2.t9 + ' seconds';

              dispatch({
                type: FETCH_TIME_SET,
                payload: res
              });

            case 22:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(7);

var _renderer = __webpack_require__(8);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(13);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = __webpack_require__(18);

var mongoose = __webpack_require__(19);
var bodyParser = __webpack_require__(20);

var app = express();

app.use(express.static('public'));
app.get('*', function (req, res) {

  var store = (0, _createStore2.default)();

  res.send((0, _renderer2.default)(req, store));
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Server listening');
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(9);

var _reactRouterDom = __webpack_require__(2);

var _Routes = __webpack_require__(10);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: {} },
      _react2.default.createElement(_Routes2.default, null)
    )
  ));
  return '\n  <html>\n    <head>\n    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">\n    </head>\n    <body>\n      <div id="root">' + content + '</div>\n      <script src="bundle.js">\n      </script>\n    </body>\n\n  </html>';
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _Clock = __webpack_require__(11);

var _Clock2 = _interopRequireDefault(_Clock);

var _SetTime = __webpack_require__(12);

var _SetTime2 = _interopRequireDefault(_SetTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Clock2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/settime', component: _SetTime2.default })
  );
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(1);

var _reactRouterDom = __webpack_require__(2);

var _Button = __webpack_require__(4);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Clock = function (_Component) {
  _inherits(Clock, _Component);

  function Clock() {
    _classCallCheck(this, Clock);

    return _possibleConstructorReturn(this, (Clock.__proto__ || Object.getPrototypeOf(Clock)).apply(this, arguments));
  }

  _createClass(Clock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.interval = setInterval(function () {
        return _this2.props.fetchTime();
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          { style: { color: 'cornflowerblue', marginLeft: '0.5%' } },
          'So we waiting the first day of Spring!'
        ),
        _react2.default.createElement(
          'div',
          { style: { color: '#8f3eda', fontSize: '1.5em', marginLeft: '0.5%' } },
          this.props.time
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _Button2.default,
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { style: { textDecoration: 'none' }, to: '/settime' },
            ' Set the countdown '
          )
        )
      );
    }
  }]);

  return Clock;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return { time: state.timeTo };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchTime: _actions.fetchTime })(Clock);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(1);

var actionCreators = _interopRequireWildcard(_actions);

var _Button = __webpack_require__(4);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SetTime = function (_Component) {
  _inherits(SetTime, _Component);

  function SetTime() {
    _classCallCheck(this, SetTime);

    return _possibleConstructorReturn(this, (SetTime.__proto__ || Object.getPrototypeOf(SetTime)).apply(this, arguments));
  }

  _createClass(SetTime, [{
    key: 'formHandler',
    value: function formHandler(event) {
      var _this2 = this;

      var name = this._name.value;
      setInterval(function () {
        return _this2.props.timeSet(name);
      }, 1000);
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit(e) {
      e.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { onSubmit: this.onSubmit },
          _react2.default.createElement(
            'label',
            null,
            _react2.default.createElement(
              'h1',
              { style: { color: 'cornflowerblue', marginLeft: '0.5%' } },
              'Set Date:'
            )
          ),
          _react2.default.createElement('input', {
            style: { height: '42px', background: '#eaeaea', color: '#551a8b', marginLeft: '0.5%', fontSize: '1.5em' },
            type: 'date',
            ref: function ref(input) {
              return _this3._name = input;
            }
          }),
          _react2.default.createElement(
            _Button2.default,
            { style: { marginBottom: '0.3%', marginLeft: '1%' }, onClick: function onClick() {
                return _this3.formHandler();
              } },
            'Start the Countdown!'
          )
        ),
        _react2.default.createElement(
          'div',
          { style: { color: '#6821ab', fontSize: '1.5em', marginLeft: '0.5%' } },
          this.props.time
        )
      );
    }
  }]);

  return SetTime;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    time: state.time
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    timeSet: function timeSet(time) {
      return dispatch(actionCreators.set(time));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(SetTime);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(5);

var _reduxThunk = __webpack_require__(14);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(15);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
  return store;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(5);

var _timeTo = __webpack_require__(16);

var _timeTo2 = _interopRequireDefault(_timeTo);

var _timeSet = __webpack_require__(17);

var _timeSet2 = _interopRequireDefault(_timeSet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  timeTo: _timeTo2.default,
  time: _timeSet2.default
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_TIME:
      return action.payload;
    default:
      return state;
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_TIME_SET:
      return action.payload;
    default:
      return state;
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ })
/******/ ]);