webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Blur.js":
/*!****************************!*\
  !*** ./components/Blur.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blur; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?a4d5");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);







var _jsxFileName = "/home/senol/Projects/solutas.ch/components/Blur.js";


var Blur =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Blur, _React$Component);

  function Blur() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Blur);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Blur)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "a", [["i", "n", "f", "o"], ["s", "o", "l", "u", "t", "a", "s"], [".", "c", "h"]]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "t", [["+", "4", "1 ", "7", "9 "], ["5", "9", "7 ", "5"], ["0", "0", "6"]]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      active: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "unBlur", function () {
      var t = _this.props.a ? _this.a[0].join("") + "@" + _this.a[1].join("") + _this.a[2].join("") : _this.t[0].join("") + _this.t[1].join("") + _this.t[2].join("");
      var text = _this.props.a ? react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "mailto:" + t,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, t) : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        href: "tel:" + t,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, t);

      _this.setState({
        active: true,
        text: text
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Blur, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return this.state.active ? this.state.text : react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "blur",
        title: "click to see",
        onClick: function onClick() {
          _this2.unBlur();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "xxxxxxx");
    }
  }]);

  return Blur;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ }),

/***/ "./components/TopNavLink.js":
/*!**********************************!*\
  !*** ./components/TopNavLink.js ***!
  \**********************************/
/*! exports provided: Section, NavLink, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?cef4");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Slide */ "./node_modules/react-reveal/Slide.js");
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/home/senol/Projects/solutas.ch/components/TopNavLink.js";



var ScrollLink = react_scroll__WEBPACK_IMPORTED_MODULE_2___default.a.ScrollLink;
var ScrollElement = react_scroll__WEBPACK_IMPORTED_MODULE_2___default.a.ScrollElement;

var Link = function Link(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "animated jackInTheBox"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.children));
};

Link = ScrollLink(Link);

var SectionElement = function SectionElement(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: props.className,
    id: props.id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_3___default.a, {
    bottom: true,
    opposite: true,
    cascade: true,
    ssrFadeout: true,
    ssrReveal: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "section-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, props.title)), props.children);
};

SectionElement = ScrollElement(SectionElement);
var Section = SectionElement;
var NavLink = Link;
/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./node_modules/react-reveal/RevealBase.js":
/*!*************************************************!*\
  !*** ./node_modules/react-reveal/RevealBase.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_slicedToArray=function(){function e(e,t){var i=[],s=!0,o=!1,n=void 0;try{for(var r,a=e[Symbol.iterator]();!(s=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(e){o=!0,n=e}finally{try{!s&&a.return&&a.return()}finally{if(o)throw n}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},_createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),_react=__webpack_require__(/*! react */ "./node_modules/react/index.js?cef4"),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),inOut=(0,_propTypes.shape)({make:_propTypes.func,duration:_propTypes.number.isRequired,delay:_propTypes.number.isRequired,forever:_propTypes.bool,count:_propTypes.number.isRequired,style:_propTypes.object.isRequired,reverse:_propTypes.bool}),propTypes={collapse:_propTypes.bool,collapseEl:_propTypes.element,cascade:_propTypes.bool,wait:_propTypes.number,force:_propTypes.bool,disabled:_propTypes.bool,appear:_propTypes.bool,enter:_propTypes.bool,exit:_propTypes.bool,fraction:_propTypes.number,refProp:_propTypes.string,innerRef:_propTypes.func,onReveal:_propTypes.func,unmountOnExit:_propTypes.bool,mountOnEnter:_propTypes.bool,inEffect:inOut.isRequired,outEffect:(0,_propTypes.oneOfType)([inOut,(0,_propTypes.oneOf)([!1])]).isRequired,ssrReveal:_propTypes.bool,collapseOnly:_propTypes.bool,ssrFadeout:_propTypes.bool},defaultProps={fraction:.2,refProp:"ref"},contextTypes={transitionGroup:_propTypes.object},RevealBase=function(e){function t(e,i){_classCallCheck(this,t);var s=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return s.isOn=void 0===e.when||!!e.when,s.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:s.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},s.savedChild=!1,s.isShown=!1,_globals.observerMode?s.handleObserve=s.handleObserve.bind(s):(s.revealHandler=s.makeHandler(s.reveal),s.resizeHandler=s.makeHandler(s.resize)),s.saveRef=s.saveRef.bind(s),s}return _inherits(t,e),_createClass(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?_extends({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!_globals.observerMode&&this.props.collapse&&window.document.dispatchEvent(_globals.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var s=this,o=i.forever,n=i.count,r=i.delay,a=i.duration;if(!o){var l=function(){s&&s.el&&(s.animationEndTimeout=void 0,e.call(s))};this.animationEndTimeout=window.setTimeout(l,r+(a+(t?a:0)*n))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var s=i.duration+(t.cascade?i.duration:0),o=this.isOn?this.getDimensionValue():0,n=void 0,r=void 0;if(t.collapseOnly)n=i.duration/3,r=i.delay;else{var a=s>>2,l=a>>1;n=a,r=i.delay+(this.isOn?0:s-a-l),e.style.animationDuration=s-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:o,transition:"height "+n+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],s="style"in i&&i.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(s=i.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:_extends({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:s}),className:i.className}),this.setState(e.collapse?this.collapse(o,e,i):o),t?(this.savedChild=_react2.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),_globals.ssr&&(0,_globals.disableSsr)()}},{key:"handleObserve",value:function(e,t){_slicedToArray(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&_globals.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];_globals.globalHide||(0,_globals.hideAll)(),this&&this.el&&(e||(e=this.props),_globals.ssr&&(0,_globals.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):i||this.inViewport(e)||e.force?this.animate(e):_globals.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,s=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!s||_globals.ssr&&!_globals.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):_globals.ssr&&(_globals.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map(function(e,t){return _react2.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):_react2.default.Children.toArray(e);var s=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=s.duration,n=s.reverse,r=i.length,a=2*o;this.props.collapse&&(a=parseInt(this.state.style.animationDuration,10),o=a/2);var l=n?r:0;return i=i.map(function(e){return"object"===(void 0===e?"undefined":_typeof(e))&&e?_react2.default.cloneElement(e,{style:_extends({},e.props.style,t.state.style,{animationDuration:Math.round((0,_globals.cascade)(n?l--:l++,0,r,o,a))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){if(void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit)return void e.onExited();e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===_typeof(this.props.children)){var e=_react2.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:_react2.default.createElement("div",null,e)}return _react2.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e=void 0;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,s=t.props,o=s.style,n=s.className,r=s.children,a=this.props.disabled?n:(this.props.outEffect?_globals.namespace:"")+(this.state.className?" "+this.state.className:"")+(n?" "+n:"")||void 0,l=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(i=this.cascade(r),l=_extends({},o,{opacity:1})):l=this.props.disabled?o:_extends({},o,this.state.style);var p=_extends({},this.props.props,_defineProperty({className:a,style:l},this.props.refProp,this.saveRef)),h=_react2.default.cloneElement(t,p,e?i||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?_react2.default.cloneElement(this.props.collapseEl,{style:_extends({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):_react2.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,_globals.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,s=window.pageYOffset-t.getTop(this.el),o=Math.min(i,window.innerHeight)*(_globals.globalHide?e.fraction:0);return s>o-window.innerHeight&&s<i-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){_globals.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!_globals.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(_react2.default.Component);RevealBase.propTypes=propTypes,RevealBase.defaultProps=defaultProps,RevealBase.contextTypes=contextTypes,RevealBase.displayName="RevealBase",exports.default=RevealBase,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/wrap.js":
/*!*******************************************!*\
  !*** ./node_modules/react-reveal/wrap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function wrap(e,t,a,r){return"in"in e&&(e.when=e.in),_react2.default.Children.count(r)<2?_react2.default.createElement(_RevealBase2.default,_extends({},e,{inEffect:t,outEffect:a,children:r})):(r=_react2.default.Children.map(r,function(r){return _react2.default.createElement(_RevealBase2.default,_extends({},e,{inEffect:t,outEffect:a,children:r}))}),"Fragment"in _react2.default?_react2.default.createElement(_react2.default.Fragment,null,r):_react2.default.createElement("span",null,r))}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};exports.default=wrap;var _react=__webpack_require__(/*! react */ "./node_modules/react/index.js?cef4"),_react2=_interopRequireDefault(_react),_RevealBase=__webpack_require__(/*! ./RevealBase */ "./node_modules/react-reveal/RevealBase.js"),_RevealBase2=_interopRequireDefault(_RevealBase);module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Button.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Button.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js?cef4");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonElement = function (_React$Component) {
  _inherits(ButtonElement, _React$Component);

  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).apply(this, arguments));
  }

  _createClass(ButtonElement, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'input',
        this.props,
        this.props.children
      );
    }
  }]);

  return ButtonElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(ButtonElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Element.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Element.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js?cef4");

var _react2 = _interopRequireDefault(_react);

var _scrollElement = __webpack_require__(/*! ../mixins/scroll-element */ "./node_modules/react-scroll/modules/mixins/scroll-element.js");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementWrapper = function (_React$Component) {
  _inherits(ElementWrapper, _React$Component);

  function ElementWrapper() {
    _classCallCheck(this, ElementWrapper);

    return _possibleConstructorReturn(this, (ElementWrapper.__proto__ || Object.getPrototypeOf(ElementWrapper)).apply(this, arguments));
  }

  _createClass(ElementWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Remove `parentBindings` from props
      var newProps = _extends({}, this.props);
      if (newProps.parentBindings) {
        delete newProps.parentBindings;
      }

      return _react2.default.createElement(
        'div',
        _extends({}, newProps, { ref: function ref(el) {
            _this2.props.parentBindings.domNode = el;
          } }),
        this.props.children
      );
    }
  }]);

  return ElementWrapper;
}(_react2.default.Component);

;

ElementWrapper.propTypes = {
  name: _propTypes2.default.string,
  id: _propTypes2.default.string
};

exports.default = (0, _scrollElement2.default)(ElementWrapper);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Link.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Link.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js?cef4");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkElement = function (_React$Component) {
  _inherits(LinkElement, _React$Component);

  function LinkElement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkElement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement.__proto__ || Object.getPrototypeOf(LinkElement)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        'a',
        _this.props,
        _this.props.children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return LinkElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(LinkElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/Helpers.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/Helpers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* DEPRECATED */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js?cef4");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");
var scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");
var defaultScroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var protoTypes = {
  to: PropTypes.string.isRequired,
  containerId: PropTypes.string,
  container: PropTypes.object,
  activeClass: PropTypes.string,
  spy: PropTypes.bool,
  smooth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  offset: PropTypes.number,
  delay: PropTypes.number,
  isDynamic: PropTypes.bool,
  onClick: PropTypes.func,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  absolute: PropTypes.bool,
  onSetActive: PropTypes.func,
  onSetInactive: PropTypes.func,
  ignoreCancelEvents: PropTypes.bool,
  hashSpy: PropTypes.bool
};

var Helpers = {
  Scroll: function Scroll(Component, customScroller) {

    console.warn("Helpers.Scroll is deprecated since v1.7.0");

    var scroller = customScroller || defaultScroller;

    var Scroll = function (_React$Component) {
      _inherits(Scroll, _React$Component);

      function Scroll(props) {
        _classCallCheck(this, Scroll);

        var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
          active: false
        };
        return _this;
      }

      _createClass(Scroll, [{
        key: 'getScrollSpyContainer',
        value: function getScrollSpyContainer() {
          var containerId = this.props.containerId;
          var container = this.props.container;

          if (containerId) {
            return document.getElementById(containerId);
          }

          if (container && container.nodeType) {
            return container;
          }

          return document;
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.props.spy || this.props.hashSpy) {
            var scrollSpyContainer = this.getScrollSpyContainer();

            if (!scrollSpy.isMounted(scrollSpyContainer)) {
              scrollSpy.mount(scrollSpyContainer);
            }

            if (this.props.hashSpy) {
              if (!scrollHash.isMounted()) {
                scrollHash.mount(scroller);
              }
              scrollHash.mapContainer(this.props.to, scrollSpyContainer);
            }

            if (this.props.spy) {
              scrollSpy.addStateHandler(this.stateHandler);
            }

            scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);

            this.setState({
              container: scrollSpyContainer
            });
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          scrollSpy.unmount(this.stateHandler, this.spyHandler);
        }
      }, {
        key: 'render',
        value: function render() {
          var className = "";

          if (this.state && this.state.active) {
            className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
          } else {
            className = this.props.className;
          }

          var props = _extends({}, this.props);

          for (var prop in protoTypes) {
            if (props.hasOwnProperty(prop)) {
              delete props[prop];
            }
          }

          props.className = className;
          props.onClick = this.handleClick;

          return React.createElement(Component, props);
        }
      }]);

      return Scroll;
    }(React.Component);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.scrollTo = function (to, props) {
        scroller.scrollTo(to, _extends({}, _this2.state, props));
      };

      this.handleClick = function (event) {

        /*
         * give the posibility to override onClick
         */

        if (_this2.props.onClick) {
          _this2.props.onClick(event);
        }

        /*
         * dont bubble the navigation
         */

        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();

        /*
         * do the magic!
         */
        _this2.scrollTo(_this2.props.to, _this2.props);
      };

      this.stateHandler = function () {
        if (scroller.getActiveLink() !== _this2.props.to) {
          if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
            _this2.props.onSetInactive();
          }
          _this2.setState({ active: false });
        }
      };

      this.spyHandler = function (y) {

        var scrollSpyContainer = _this2.getScrollSpyContainer();

        if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
          return;
        }

        var to = _this2.props.to;
        var element = null;
        var elemTopBound = 0;
        var elemBottomBound = 0;
        var containerTop = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var containerCords = scrollSpyContainer.getBoundingClientRect();
          containerTop = containerCords.top;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var cords = element.getBoundingClientRect();
          elemTopBound = cords.top - containerTop + y;
          elemBottomBound = elemTopBound + cords.height;
        }

        var offsetY = y - _this2.props.offset;
        var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
        var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
        var activeLink = scroller.getActiveLink();

        if (isOutside) {
          if (to === activeLink) {
            scroller.setActiveLink(void 0);
          }

          if (_this2.props.hashSpy && scrollHash.getHash() === to) {
            scrollHash.changeHash();
          }

          if (_this2.props.spy && _this2.state.active) {
            _this2.setState({ active: false });
            _this2.props.onSetInactive && _this2.props.onSetInactive();
          }

          return scrollSpy.updateStates();
        }

        if (isInside && activeLink !== to) {
          scroller.setActiveLink(to);

          _this2.props.hashSpy && scrollHash.changeHash(to);

          if (_this2.props.spy) {
            _this2.setState({ active: true });
            _this2.props.onSetActive && _this2.props.onSetActive(to);
          }
          return scrollSpy.updateStates();
        }
      };
    };

    ;

    Scroll.propTypes = protoTypes;

    Scroll.defaultProps = { offset: 0 };

    return Scroll;
  },
  Element: function Element(Component) {

    console.warn("Helpers.Element is deprecated since v1.7.0");

    var Element = function (_React$Component2) {
      _inherits(Element, _React$Component2);

      function Element(props) {
        _classCallCheck(this, Element);

        var _this3 = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

        _this3.childBindings = {
          domNode: null
        };
        return _this3;
      }

      _createClass(Element, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (typeof window === 'undefined') {
            return false;
          }
          this.registerElems(this.props.name);
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
          if (this.props.name !== nextProps.name) {
            this.registerElems(nextProps.name);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (typeof window === 'undefined') {
            return false;
          }
          defaultScroller.unregister(this.props.name);
        }
      }, {
        key: 'registerElems',
        value: function registerElems(name) {
          defaultScroller.register(name, this.childBindings.domNode);
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
        }
      }]);

      return Element;
    }(React.Component);

    ;

    Element.propTypes = {
      name: PropTypes.string,
      id: PropTypes.string
    };

    return Element;
  }
};

module.exports = Helpers;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-element.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-element.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js?cef4");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Component) {
  var Element = function (_React$Component) {
    _inherits(Element, _React$Component);

    function Element(props) {
      _classCallCheck(this, Element);

      var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

      _this.childBindings = {
        domNode: null
      };
      return _this;
    }

    _createClass(Element, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (typeof window === 'undefined') {
          return false;
        }
        this.registerElems(this.props.name);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (this.props.name !== nextProps.name) {
          this.registerElems(nextProps.name);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (typeof window === 'undefined') {
          return false;
        }
        _scroller2.default.unregister(this.props.name);
      }
    }, {
      key: 'registerElems',
      value: function registerElems(name) {
        _scroller2.default.register(name, this.childBindings.domNode);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
      }
    }]);

    return Element;
  }(_react2.default.Component);

  ;

  Element.propTypes = {
    name: _propTypes2.default.string,
    id: _propTypes2.default.string
  };

  return Element;
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-link.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-link.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js?cef4");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var _scrollHash2 = _interopRequireDefault(_scrollHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var protoTypes = {
  to: _propTypes2.default.string.isRequired,
  containerId: _propTypes2.default.string,
  container: _propTypes2.default.object,
  activeClass: _propTypes2.default.string,
  spy: _propTypes2.default.bool,
  smooth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  offset: _propTypes2.default.number,
  delay: _propTypes2.default.number,
  isDynamic: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  absolute: _propTypes2.default.bool,
  onSetActive: _propTypes2.default.func,
  onSetInactive: _propTypes2.default.func,
  ignoreCancelEvents: _propTypes2.default.bool,
  hashSpy: _propTypes2.default.bool
};

exports.default = function (Component, customScroller) {

  var scroller = customScroller || _scroller2.default;

  var Link = function (_React$PureComponent) {
    _inherits(Link, _React$PureComponent);

    function Link(props) {
      _classCallCheck(this, Link);

      var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

      _initialiseProps.call(_this);

      _this.state = {
        active: false
      };
      return _this;
    }

    _createClass(Link, [{
      key: 'getScrollSpyContainer',
      value: function getScrollSpyContainer() {
        var containerId = this.props.containerId;
        var container = this.props.container;

        if (containerId && !container) {
          return document.getElementById(containerId);
        }

        if (container && container.nodeType) {
          return container;
        }

        return document;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.spy || this.props.hashSpy) {
          var scrollSpyContainer = this.getScrollSpyContainer();

          if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
            _scrollSpy2.default.mount(scrollSpyContainer);
          }

          if (this.props.hashSpy) {
            if (!_scrollHash2.default.isMounted()) {
              _scrollHash2.default.mount(scroller);
            }
            _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
          }

          _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);

          this.setState({
            container: scrollSpyContainer
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
      }
    }, {
      key: 'render',
      value: function render() {
        var className = "";

        if (this.state && this.state.active) {
          className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
        } else {
          className = this.props.className;
        }

        var props = _extends({}, this.props);

        for (var prop in protoTypes) {
          if (props.hasOwnProperty(prop)) {
            delete props[prop];
          }
        }

        props.className = className;
        props.onClick = this.handleClick;

        return _react2.default.createElement(Component, props);
      }
    }]);

    return Link;
  }(_react2.default.PureComponent);

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.scrollTo = function (to, props) {
      scroller.scrollTo(to, _extends({}, _this2.state, props));
    };

    this.handleClick = function (event) {

      /*
       * give the posibility to override onClick
       */

      if (_this2.props.onClick) {
        _this2.props.onClick(event);
      }

      /*
       * dont bubble the navigation
       */

      if (event.stopPropagation) event.stopPropagation();
      if (event.preventDefault) event.preventDefault();

      /*
       * do the magic!
       */
      _this2.scrollTo(_this2.props.to, _this2.props);
    };

    this.spyHandler = function (y) {

      var scrollSpyContainer = _this2.getScrollSpyContainer();

      if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
        return;
      }

      var to = _this2.props.to;
      var element = null;
      var elemTopBound = 0;
      var elemBottomBound = 0;
      var containerTop = 0;

      if (scrollSpyContainer.getBoundingClientRect) {
        var containerCords = scrollSpyContainer.getBoundingClientRect();
        containerTop = containerCords.top;
      }

      if (!element || _this2.props.isDynamic) {
        element = scroller.get(to);
        if (!element) {
          return;
        }

        var cords = element.getBoundingClientRect();
        elemTopBound = cords.top - containerTop + y;
        elemBottomBound = elemTopBound + cords.height;
      }

      var offsetY = y - _this2.props.offset;
      var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
      var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
      var activeLink = scroller.getActiveLink();

      if (isOutside) {
        if (to === activeLink) {
          scroller.setActiveLink(void 0);
        }

        if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
          _scrollHash2.default.changeHash();
        }

        if (_this2.props.spy && _this2.state.active) {
          _this2.setState({ active: false });
          _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
        }
      }

      if (isInside && (activeLink !== to || _this2.state.active === false)) {
        scroller.setActiveLink(to);

        _this2.props.hashSpy && _scrollHash2.default.changeHash(to);

        if (_this2.props.spy) {
          _this2.setState({ active: true });
          _this2.props.onSetActive && _this2.props.onSetActive(to, element);
        }
      }
    };
  };

  ;

  Link.propTypes = protoTypes;

  Link.defaultProps = { offset: 0 };

  return Link;
};

/***/ }),

/***/ "./node_modules/react/index.js":
false,

/***/ "./node_modules/react/index.js?a4d5":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_1aef2d0bbc0d334d831c ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_1aef2d0bbc0d334d831c */ "dll-reference dll_1aef2d0bbc0d334d831c"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/react/index.js?cef4":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_829b10deddf10e1653a8 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_829b10deddf10e1653a8 */ "dll-reference dll_829b10deddf10e1653a8"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vanilla; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?cef4");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_TopNavLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/TopNavLink */ "./components/TopNavLink.js");
/* harmony import */ var _services_ScrollEventService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/ScrollEventService */ "./services/ScrollEventService.js");
/* harmony import */ var _scss_vanilla_index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../scss/vanilla/index.scss */ "./scss/vanilla/index.scss");
/* harmony import */ var _scss_vanilla_index_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_scss_vanilla_index_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Blur__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Blur */ "./components/Blur.js");
/* harmony import */ var _assets_solutas_icon_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/solutas-icon.png */ "./assets/solutas-icon.png");
/* harmony import */ var _assets_solutas_icon_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_solutas_icon_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_solutas_brief_weiss_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/solutas-brief-weiss.png */ "./assets/solutas-brief-weiss.png");
/* harmony import */ var _assets_solutas_brief_weiss_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_solutas_brief_weiss_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_reveal_Flip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-reveal/Flip */ "./node_modules/react-reveal/Flip.js");
/* harmony import */ var react_reveal_Flip__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-reveal/Slide */ "./node_modules/react-reveal/Slide.js");
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_17__);







var _jsxFileName = "/home/senol/Projects/solutas.ch/pages/index.js";












/*
export default () => {
  return (
    <div className="wrapper">
      <nav className="main-nav">
        <div className="logo">
          <a href="/">
            <img src={Logo} />
          </a>
        </div>

        <ul className="main-nav-items">
          <li className="animated jackInTheBox">
            <a href="">About Us.</a>
          </li>
          <li className="animated zoomIn">
            <a href="">Services.</a>
          </li>
          <li className="animated bounceInRight">
            <a href="">Contact Us.</a>
          </li>
        </ul>
      </nav>
      <header className="main-header">
        <img src="/static/solutas-brief-2.svg" className="animated fadeInUp" />
      </header>
      <main className="content">
        <section>
          <Slide bottom opposite cascade>
            <h1>Our Expertice. Your Benefit.</h1>
          </Slide>
          <Slide bottom cascade>
          <article>
            <h1>About Us.</h1>
            <p>
              We are a Software Consultancy and Engineering Company located in
              Basel, Switzerland.
            </p>
            <p>
              Our two Founders do have two totally different and unique
              Backgrounds. A licensed Nurse and a Computer Scientist. While both
              have had working in different domains, they both realized that
              technology, espacially in Software Engineering needs to be crafted
              around actual Human needs.
            </p>
            <p>
              Merging over 10 Years experience in LifeScience, Tele Medicin,
              practicing Nurcing with more then 20 Years experience in Software
              Engineering in Digital Marketing, Media and Television resulted in
              SOLUTAS, because simplicty matters.
            </p>
            <p>
              We believe that starting any Software Project focusing on the
              Human beeing going to actually using the Application will
              ultimatvily lead to best results.
            </p>

            <h1>At SOLUTAS we...</h1>

            <ul className="heartlist">
              <Fade left>
                <li>do love to solve very complex problems</li>
                <li>do love technology</li>
                <li>
                  do love to transfer your complex challenges into beautiful
                  small and simple solutions
                </li>
                <li>do love to design the solutions for you</li>
                <li>do love to craft the software for you</li>
                <li>do love to help you to focus on your actual work</li>
              </Fade>
            </ul>
          </article>
          </Slide>
          <article>
            <h1>Engineering to make you happy.</h1>
            <p>
              There is a correlation between over complicated, complex software
              code, architecture and UI design and slow user adaption, usibility
              and higher project costs.
            </p>
            <p>
              Our definition of done is reached when happy users are using our
              Software. Once we see how we could improve your daily life.
            </p>
            <h1>In our Team...</h1>
            <ul className="smilelist">
              <Fade left>
                <li>
                  We believe that everybody diserves to have a custom software
                  crafted to their individual needs.
                </li>
                <li>
                  We believe that this is possible regardless of the size of
                  your organization.
                </li>
                <li>We believe that there is a solution for everything</li>
                <li>
                  We beleive that budget shouldn't stop you getting the
                  Application you need
                </li>
              </Fade>
            </ul>
          </article>
        </section>
        <section>
          <Slide bottom opposite cascade>
            <h1>Our Services. Your Solutions.</h1>
          </Slide>
          <article>
            <h1>Consulting</h1>
            <ul className="smilelist">
              <Fade left>
                <li>Digital Transformation</li>
                <li>Software Architecture</li>
                <li>Agile Coaching</li>
                <li>Escalation Management</li>
                <li>Technical Project and Delivery Management</li>
                <li>Change Management</li>
              </Fade>
            </ul>
          </article>
          <article>
            <h1>Software Engineering.</h1>
            <ul className="smilelist">
              <Fade left>
                <li>Custom Mobile and Desktop App Development</li>
                <li>API Gateway Development</li>
                <li>Big Data, Machinie Learning Solutions</li>
                <li>Custom IoT and embedded Devices</li>
                <li>
                  Enterprise level Web Content Management Solutions (Adobe AEM,
                  Magnolia,...)
                </li>
              </Fade>
            </ul>
          </article>
          <p>If it's not listed, ask us and we find a solution.</p>
        </section>
      </main>
      <footer className="main-footer">this is the footer</footer>
    </div>
  );
};
*/

var Vanilla =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Vanilla, _React$Component);

  function Vanilla() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Vanilla);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Vanilla).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "scrolled", false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      scrolled: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleScrollEvent", function () {
      if (window.pageYOffset >= 50) {
        if (!_this.scrolled) {
          _this.scrolled = true;

          _this.setState({
            scrolled: true
          });
        }
      } else {
        if (_this.scrolled) {
          _this.scrolled = false;

          _this.setState({
            scrolled: false
          });
        }
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Vanilla, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      react_scroll__WEBPACK_IMPORTED_MODULE_8__["scrollSpy"].update();
      window.addEventListener("scroll", this.handleScrollEvent);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      react_scroll__WEBPACK_IMPORTED_MODULE_8__["Events"].scrollEvent.remove("begin");
      react_scroll__WEBPACK_IMPORTED_MODULE_8__["Events"].scrollEvent.remove("end");
      window.removeEventListener(this.handleScrollEvent);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "wrapper",
        id: "top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: this.state.scrolled ? "main-nav scrolled" : "main-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        className: "logo",
        to: "top",
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_solutas_icon_png__WEBPACK_IMPORTED_MODULE_13___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "main-nav-items",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_TopNavLink__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
        className: "animated jackInTheBox",
        activeClass: "active",
        to: "about-us",
        offset: -50,
        spy: true,
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, "About Us."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_TopNavLink__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
        className: "animated zoomIn",
        activeClass: "active",
        to: "services",
        spy: true,
        offset: -25,
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, "Services."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_TopNavLink__WEBPACK_IMPORTED_MODULE_9__["NavLink"], {
        className: "animated bounceInRight",
        activeClass: "active",
        to: "contact-us",
        spy: true,
        offset: -25,
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }, "Contact Us."))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", {
        className: "main-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/solutas-brief-2.svg",
        className: "animated fadeInUp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("main", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_TopNavLink__WEBPACK_IMPORTED_MODULE_9__["Section"], {
        id: "about-us",
        title: "Our Expertice. Your Benefit.",
        color: "#dd851b",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_17___default.a, {
        bottom: true,
        cascade: true,
        ssrFadeout: true,
        ssrReveal: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, "Engineering to make you happy."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "There is a correlation between over complicated, complex software code, architecture and UI design and slow user adaption, usibility and higher project costs."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, "Our definition of done is reached when happy users are using our Software. Once we see how we could improve your daily life."))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, "At SOLUTAS we..."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "heartlist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default.a, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, "do love to solve very complex problems"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, "do love technology"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, "do love to transfer your complex challenges into beautiful small and simple solutions"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, "do love to design the solutions for you"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, "do love to craft the software for you"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "do love to help you to focus on your actual work")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_TopNavLink__WEBPACK_IMPORTED_MODULE_9__["Section"], {
        id: "services",
        title: "Our Services. Your Solution.",
        color: "#4b6cb7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, "Consulting"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "smilelist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default.a, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, "Digital Transformation"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, "Software Architecture"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, "Agile Coaching"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, "Escalation Management"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, "Technical Project and Delivery Management"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, "Change Management")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, "Software Engineering."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "smilelist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default.a, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      }, "Custom Mobile and Desktop App Development"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, "API Gateway Development"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, "Big Data, Machinie Learning Solutions"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, "Custom IoT and embedded Devices"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }, "Enterprise level Web Content Management Solutions (Adobe AEM, Magnolia,...)")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_TopNavLink__WEBPACK_IMPORTED_MODULE_9__["Section"], {
        id: "contact-us",
        title: "Contact Us.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, "About Us."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, "We are a Software Consultancy and Engineering Company located in Basel, Switzerland."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345
        },
        __self: this
      }, "Our two Founders do have two totally different and unique Backgrounds. A licensed Nurse and a Computer Scientist. While both have had working in different domains, they both realized that technology, espacially in Software Engineering needs to be crafted around actual Human needs."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, "Merging over 10 Years experience in LifeScience, Tele Medicin, practicing Nurcing with more then 20 Years experience in Software Engineering in Digital Marketing, Media and Television resulted in SOLUTAS, because simplicty matters.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361
        },
        __self: this
      }, "In our Team..."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "smilelist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 362
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_15___default.a, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 364
        },
        __self: this
      }, "We believe that everybody diserves to have a custom software crafted to their individual needs."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368
        },
        __self: this
      }, "We believe that this is possible regardless of the size of your organization."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, "We believe that there is a solution for everything"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, "We beleive that budget shouldn't stop you getting the Application you need"))))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("footer", {
        className: "main-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: "/static/solutas-brief-2.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("address", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }, "SOLUTAS GmbH"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }), "Paradieshofstrasse 117", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }), "4054 Basel, Switzerland"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("address", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("abbr", {
        title: "Phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, "Phone"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Blur__WEBPACK_IMPORTED_MODULE_12__["default"], {
        t: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("abbr", {
        title: "E-Mail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }, "E-Mail"), " ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Blur__WEBPACK_IMPORTED_MODULE_12__["default"], {
        a: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("address", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("abbr", {
        title: "CH VAT No",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 398
        },
        __self: this
      }, "CH VAT No"), " CH-234.973.545 MWST", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 399
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("abbr", {
        title: "USt-IdNr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }, "USt-IdNr"), " CH-234.973.545")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "copyright",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }, "Copyright \xA9 2019 SOLUTAS GmbH, Switzerland. All rights reserved.")));
    }
  }]);

  return Vanilla;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ }),

/***/ "./services/SimpleObserver.js":
/*!************************************!*\
  !*** ./services/SimpleObserver.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleObserver; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js?cef4");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var SimpleObserver =
/*#__PURE__*/
function () {
  function SimpleObserver() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SimpleObserver);

    this.observers = [];
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SimpleObserver, [{
    key: "subscribe",
    value: function subscribe(fn) {
      this.observers.push(fn);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(fn) {
      this.observers = this.observers.filter(function (subscriber) {
        return subscriber !== fn;
      });
    }
  }, {
    key: "emmit",
    value: function emmit(data) {
      this.observers.forEach(function (subscriber) {
        return subscriber(data);
      });
    }
  }]);

  return SimpleObserver;
}();



/***/ }),

/***/ "dll-reference dll_1aef2d0bbc0d334d831c":
/*!*******************************************!*\
  !*** external "dll_1aef2d0bbc0d334d831c" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_1aef2d0bbc0d334d831c;

/***/ })

})
//# sourceMappingURL=index.js.e70136cf83acf56bc7be.hot-update.js.map