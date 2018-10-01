"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _arrow = _interopRequireDefault(require("./arrow.png"));

var _arrowL = _interopRequireDefault(require("./arrow-l.png"));

require("./timeline.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Timeline =
/*#__PURE__*/
function (_Component) {
  _inherits(Timeline, _Component);

  function Timeline(props) {
    var _this;

    _classCallCheck(this, Timeline);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Timeline).call(this, props));
    _this.setDivider = _this.setDivider.bind(_assertThisInitialized(_assertThisInitialized(_this)));

    if (_this.props.children) {
      _this.children = {
        objs: _toConsumableArray(_this.props.children),
        hasChildren: true
      };
    } else if (_this.props.objects && _this.props.component) {
      _this.children = {
        objs: _toConsumableArray(_this.props.objects),
        hasChildren: false
      };
    } else {
      _this.children = {
        objs: []
      };
    }

    return _this;
  }

  _createClass(Timeline, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setDivider();
      window.addEventListener('resize', this.setDivider);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setDivider);
    }
  }, {
    key: "setDivider",
    value: function setDivider() {
      var h = document.getElementById("tl-main").offsetHeight;
      this.refs.divider.style.height = h + "px";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: "tl-container"
      }, _react.default.createElement("div", {
        className: "tl-body".concat(this.children.objs.length === 1 ? " tl-single" : "")
      }, _react.default.createElement("div", {
        ref: "divider",
        className: "tl-divider",
        id: "tl-divider",
        style: {
          backgroundColor: this.props.dividerColor
        }
      }), _react.default.createElement("div", {
        className: "tl-row tl-main",
        id: "tl-main"
      }, _react.default.createElement("div", {
        className: "tl-col tl-col-1"
      }, this.children.objs.map(function (e, k) {
        if (k % 2 === 0 && k < _this2.children.objs.length / 2) {
          return _react.default.createElement(TlItem, _extends({
            pos: 0,
            key: k
          }, _this2.props, {
            dis: "tl-show-on-all",
            content: e
          }));
        } else if (k % 2 === 0) {
          return _react.default.createElement(TlItem, _extends({
            pos: 0,
            key: k
          }, _this2.props, {
            dis: "tl-show-on-large",
            content: e
          }));
        } else if (k < _this2.children.objs.length / 2) {
          return _react.default.createElement(TlItem, _extends({
            pos: 0,
            key: k
          }, _this2.props, {
            dis: "tl-show-on-small",
            content: e
          }));
        } else {
          return null;
        }
      })), this.children.objs.length > 1 ? _react.default.createElement("div", {
        className: "tl-col tl-col-2"
      }, _react.default.createElement("div", {
        className: "tl-padding tl-show-on-large"
      }), this.children.objs.map(function (e, k) {
        if (k % 2 === 1 && k >= _this2.children.objs.length / 2) {
          return _react.default.createElement(TlItem, _extends({
            pos: 1,
            key: k
          }, _this2.props, {
            dis: "tl-show-on-all",
            content: e
          }));
        } else if (k % 2 === 1) {
          return _react.default.createElement(TlItem, _extends({
            pos: 1,
            key: k
          }, _this2.props, {
            dis: "tl-show-on-large",
            content: e
          }));
        } else if (k >= _this2.children.objs.length / 2) {
          return _react.default.createElement(TlItem, _extends({
            pos: 1,
            key: k
          }, _this2.props, {
            dis: "tl-show-on-small",
            content: e
          }));
        } else {
          return null;
        }
      })) : null)));
    }
  }]);

  return Timeline;
}(_react.Component);

_defineProperty(Timeline, "propTypes", {
  itemClass: _propTypes.default.string,
  itemAttributes: _propTypes.default.object,
  children: _propTypes.default.any,
  objects: _propTypes.default.array,
  component: _propTypes.default.any,
  dividerColor: _propTypes.default.string,
  pointColor: _propTypes.default.string
});

_defineProperty(Timeline, "defaultProps", {});

var TlItem = function TlItem(props) {
  var Comp = props.component;
  return _react.default.createElement("div", _extends({
    className: "tl-wrapper ".concat(props.dis, " ").concat(props.itemClass || "")
  }, props.itemAttributes), _react.default.createElement("div", {
    className: "tl-item"
  }, _react.default.createElement("div", {
    className: "tl-point",
    style: {
      backgroundColor: props.pointColor
    }
  }), _react.default.createElement("div", {
    className: "tl"
  }, _react.default.createElement("div", {
    className: "tl-pointer"
  }, _react.default.createElement("img", {
    className: "tl-arrow-r",
    src: _arrow.default,
    alt: ""
  }), props.pos === 1 ? _react.default.createElement("img", {
    className: "tl-arrow-l",
    src: _arrowL.default,
    alt: ""
  }) : null), _react.default.createElement("div", {
    className: "tl-content"
  }, Comp ? _react.default.createElement(Comp, props.content) : props.content))));
};

var _default = Timeline;
exports.default = _default;