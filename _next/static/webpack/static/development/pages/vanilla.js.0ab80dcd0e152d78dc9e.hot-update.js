webpackHotUpdate("static/development/pages/vanilla.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
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

/***/ })

})
//# sourceMappingURL=vanilla.js.0ab80dcd0e152d78dc9e.hot-update.js.map