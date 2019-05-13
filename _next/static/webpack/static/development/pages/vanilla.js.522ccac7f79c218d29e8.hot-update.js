webpackHotUpdate("static/development/pages/vanilla.js",{

/***/ "./pages/vanilla.js":
/*!**************************!*\
  !*** ./pages/vanilla.js ***!
  \**************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_TopNavLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/TopNavLink */ "./components/TopNavLink.js");
/* harmony import */ var _services_ScrollEventService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/ScrollEventService */ "./services/ScrollEventService.js");
/* harmony import */ var _scss_vanilla_index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../scss/vanilla/index.scss */ "./scss/vanilla/index.scss");
/* harmony import */ var _scss_vanilla_index_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_scss_vanilla_index_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_solutas_icon_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/solutas-icon.png */ "./assets/solutas-icon.png");
/* harmony import */ var _assets_solutas_icon_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_solutas_icon_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_solutas_brief_weiss_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/solutas-brief-weiss.png */ "./assets/solutas-brief-weiss.png");
/* harmony import */ var _assets_solutas_brief_weiss_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_solutas_brief_weiss_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_reveal_Flip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-reveal/Flip */ "./node_modules/react-reveal/Flip.js");
/* harmony import */ var react_reveal_Flip__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Flip__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-reveal/Slide */ "./node_modules/react-reveal/Slide.js");
/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_16__);







var _jsxFileName = "/home/senol/Projects/solutas.ch/pages/vanilla.js";











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
          lineNumber: 206
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", {
        className: this.state.scrolled ? "main-nav scrolled" : "main-nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_scroll__WEBPACK_IMPORTED_MODULE_8__["Link"], {
        className: "logo",
        to: "top",
        smooth: true,
        duration: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: _assets_solutas_icon_png__WEBPACK_IMPORTED_MODULE_12___default.a,
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_16___default.a, {
        bottom: true,
        cascade: true,
        ssrFadeout: true,
        ssrReveal: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, "About Us."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "We are a Software Consultancy and Engineering Company located in Basel, Switzerland."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        },
        __self: this
      }, "Our two Founders do have two totally different and unique Backgrounds. A licensed Nurse and a Computer Scientist. While both have had working in different domains, they both realized that technology, espacially in Software Engineering needs to be crafted around actual Human needs."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, "Merging over 10 Years experience in LifeScience, Tele Medicin, practicing Nurcing with more then 20 Years experience in Software Engineering in Digital Marketing, Media and Television resulted in SOLUTAS, because simplicty matters."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, "We believe that starting any Software Project focusing on the Human beeing going to actually using the Application will ultimatvily lead to best results."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, "At SOLUTAS we..."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "heartlist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14___default.a, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, "do love to solve very complex problems"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, "do love technology"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "do love to transfer your complex challenges into beautiful small and simple solutions"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, "do love to design the solutions for you"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296
        },
        __self: this
      }, "do love to craft the software for you"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        },
        __self: this
      }, "do love to help you to focus on your actual work")))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
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
      }, "Engineering to make you happy."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }, "There is a correlation between over complicated, complex software code, architecture and UI design and slow user adaption, usibility and higher project costs."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, "Our definition of done is reached when happy users are using our Software. Once we see how we could improve your daily life."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, "In our Team..."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "smilelist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14___default.a, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, "We believe that everybody diserves to have a custom software crafted to their individual needs."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, "We believe that this is possible regardless of the size of your organization."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, "We believe that there is a solution for everything"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }, "We beleive that budget shouldn't stop you getting the Application you need"))))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_TopNavLink__WEBPACK_IMPORTED_MODULE_9__["Section"], {
        id: "services",
        title: "Our Services. Your Solution.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      }, "Consulting"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "smilelist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14___default.a, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339
        },
        __self: this
      }, "Digital Transformation"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340
        },
        __self: this
      }, "Software Architecture"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341
        },
        __self: this
      }, "Agile Coaching"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        __self: this
      }, "Escalation Management"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, "Technical Project and Delivery Management"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 344
        },
        __self: this
      }, "Change Management")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, "Software Engineering."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "smilelist",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14___default.a, {
        left: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, "Custom Mobile and Desktop App Development"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, "API Gateway Development"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }, "Big Data, Machinie Learning Solutions"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355
        },
        __self: this
      }, "Custom IoT and embedded Devices"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356
        },
        __self: this
      }, "Enterprise level Web Content Management Solutions (Adobe AEM, Magnolia,...)")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 363
        },
        __self: this
      }, "If it's not listed, ask us and we find a solution.")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_TopNavLink__WEBPACK_IMPORTED_MODULE_9__["Section"], {
        id: "contact-us",
        title: "Contact Us.",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("article", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367
        },
        __self: this
      }, "Software Engineering.")))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("footer", {
        className: "main-footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("address", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, "SOLUTAS GmbH"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }), "Paradieshofstrasse 117", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }), "4054 Basel, Switzerland"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("address", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 381
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("abbr", {
        title: "Phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }, "Phone"), " +41 79 597 500 6", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 382
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("abbr", {
        title: "E-Mail",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 383
        },
        __self: this
      }, "E-Mail"), " info@solutas.ch"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("address", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("abbr", {
        title: "CH VAT No",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386
        },
        __self: this
      }, "CH VAT No"), " CH-234.973.545 MWST", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("abbr", {
        title: "USt-IdNr",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388
        },
        __self: this
      }, "USt-IdNr"), " CH-234.973.545"), "Copyright \xA9 2019 SOLUTAS GmbH. All rights reserved."));
    }
  }]);

  return Vanilla;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ })

})
//# sourceMappingURL=vanilla.js.522ccac7f79c218d29e8.hot-update.js.map