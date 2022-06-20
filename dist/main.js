/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n:root {\n  font-size: 18px;\n  margin: 0;\n  font-family: kanit, sans-serif\n}\n/* * {\n  outline: 2px red solid\n} */\nbody {\n  margin: 0;\n  background-image: linear-gradient(to bottom right, #00C0ff, #4218B8);\n}\n.container {\n  display: grid;\n  grid-template: auto 1fr auto / auto 1fr;\n  height: 100vh;\n  color: white\n}\n.header {\n  grid-column: 1 / -1;\n  padding: 1.5rem;\n  font-size: 2rem;\n}\n.leftSidebar {\n  grid-column: 1 / 2 ;\n  padding: 2rem;\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  border-right: black 4px solid;\n  border-top: black 4px solid;\n  border-bottom: black 4px solid;\n\n}\n.viewAll {\n  grid-row: 1 / 2;\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n}\n.viewAll:hover{\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.projects {\n  grid-row: 2 / -1;\n  padding-top: 1.5rem;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n.addNewProject {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n.addNewProject:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.addNewTodo {\n    background-color: transparent;\n    color: white;\n    border-radius: 10px;\n    height: 4rem;\n    transition: 0.5s;\n    cursor: pointer;\n    border: hsl(4, 53%, 90%) solid 5px;\n    font-size: 1.5rem;\n    font-family: inherit;\n    margin: 10px;\n    \n  }\n.addNewTodo:hover {\n    background-color: hsl(4, 53%, 90%);\n    color: black\n}\n.projectListContainer { \n  display: flex;\n  flex-wrap: wrap;\n  overflow: scroll;\n  max-width: 400px;\n  max-height: 250px;\n  -ms-overflow-style: none;\n  scrollbar-width: none\n}\n.projectListContainer::-webkit-scrollbar {\n  display: none;\n}\n.projectButton {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 2rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 3px;\n  font-size: 0.8rem;\n  font-family: inherit;\n  margin: 10px;\n}\n.projectButton:hover {\n  background-color: hsl(4, 53%, 90%);\n    color: black\n}\n\n.main {\n  grid-column: 2 / -1;\n  display: flex;\n  flex-direction: column;\n  border-top: black 4px solid;\n  border-bottom: black 4px solid;\n}\n.todoHead {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  margin-bottom: 2rem;\n  font-weight: bold;\n  font-size: 1.3em;\n  margin: 0 20px 20px;\n  border-bottom: white 4px solid;\n}\n.completedTodoContainer {\n  justify-self: flex-end;\n  margin-top: auto;\n}\n.completedTodoBtn {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n}\n.completedTodoBtn:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.footer {\n  grid-column: 1 / -1;\n  padding: 1rem;\n  text-align: center;\n}\n.todoContainer {\n  margin: 0 20px 20px \n}\n.todo {\n    display: grid;\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n    grid-auto-flow: column;\n    overflow-wrap: break-word;\n}\n.todo.completed {\n  text-decoration: line-through;\n}\n.overlayForm {\n  position:absolute;\n  top:50vh;\n  left:0px;\n  width:100vw;\n  height:90vh;\n  background:rgba(0,0,0,0.8);\n  z-index: -1;\n  opacity: 0;\n  padding: 80px 50px 0px 10px;\n  overflow:scroll;\n  box-sizing: border-box;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 500ms;\n}\n.overlayForm .closeForm {\n  position:absolute;\n  top: 20px;\n  right: 40px;\n  color: #fff;\n  font-size: 5rem;\n  font-weight: 600;\n  cursor:pointer;\n}\n\nbody.activeForm .overlayForm{\n  z-index: 2;\n  opacity: 1;\n  top: 0px;\n  height: 100vh;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 0ms;\n}\n.overlayForm h1 {\n  font-size: 3rem;\n  color: #fff;\n}\n\n.overlayForm p {\n  font-size: 2em;\n  color: #fff;\n}\n\n.overlayForm label {\n  display: block;\n  font-size: 2em;\n  color: #eb5e28;\n  margin-bottom: 20px;\n  font-weight: 500;\n}\n.overlayForm input {\n  width: 100%;\n  padding: 17px;\n  font-size: 25px;\n  border: 4px solid #fff;\n  background: transparent;\n  outline: none;\n  border-radius: 10px;\n  margin-bottom: 50px;\n  color: #fff;\n  font-weight: 500;\n}\nselect {\n  width: 100%;\n  font-size: inherit;\n}\nh2 {\n  font-family: inherit;\n  color: #eb5e28;\n}\n.currentProjects {\n  font-family: inherit;\n  color: #ffffff;\n}\n#submit {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n#submit:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n\n@media screen and (max-width: 717px){\n  html {\n    height: 100%;\n    background: linear-gradient(to bottom right, #00C0ff, #4218B8) fixed;\n  }\n  body {\n    font-size: 12px;\n  }\n  .container {\n    display: grid;\n    grid-template-rows: auto 1fr 1fr 1fr auto auto;\n    min-width: 100%;\n    min-height: auto;\n  }\n  .leftSidebar {\n    grid-row: 2 / 3;\n    padding: 15px;\n    border-right: none;\n  }\n  .main{\n    grid-row: 3 / 4;\n    grid-column: auto;\n  }\n  button {\n    font-size: 1.3rem !important;\n  }\n  .projectButton {\n    font-size: 1rem !important;\n  }\n  .completedTodoBtn {\n    min-width: 94%\n  }\n  .addNewProject {\n    min-width: 95%;\n  }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AAEA;EACE,eAAe;EACf,SAAS;EACT;AACF;AACA;;GAEG;AACH;EACE,SAAS;EACT,oEAAoE;AACtE;AACA;EACE,aAAa;EACb,uCAAuC;EACvC,aAAa;EACb;AACF;AACA;EACE,mBAAmB;EACnB,eAAe;EACf,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,2BAA2B;EAC3B,6BAA6B;EAC7B,2BAA2B;EAC3B,8BAA8B;;AAEhC;AACA;EACE,eAAe;EACf,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;AACtB;AACA;EACE,kCAAkC;EAClC;AACF;AACA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,4BAA4B;AAC9B;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;;AAEd;AACA;EACE,kCAAkC;EAClC;AACF;AACA;IACI,6BAA6B;IAC7B,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,kCAAkC;IAClC,iBAAiB;IACjB,oBAAoB;IACpB,YAAY;;EAEd;AACF;IACI,kCAAkC;IAClC;AACJ;AACA;EACE,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,wBAAwB;EACxB;AACF;AACA;EACE,aAAa;AACf;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;AACd;AACA;EACE,kCAAkC;IAChC;AACJ;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,8BAA8B;AAChC;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,gDAAgD;EAChD,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,8BAA8B;AAChC;AACA;EACE,sBAAsB;EACtB,gBAAgB;AAClB;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;AACd;AACA;EACE,kCAAkC;EAClC;AACF;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,kBAAkB;AACpB;AACA;EACE;AACF;AACA;IACI,aAAa;IACb,gDAAgD;IAChD,sBAAsB;IACtB,yBAAyB;AAC7B;AACA;EACE,6BAA6B;AAC/B;AACA;EACE,iBAAiB;EACjB,QAAQ;EACR,QAAQ;EACR,WAAW;EACX,WAAW;EACX,0BAA0B;EAC1B,WAAW;EACX,UAAU;EACV,2BAA2B;EAC3B,eAAe;EACf,sBAAsB;EACtB;;0CAEwC;AAC1C;AACA;EACE,iBAAiB;EACjB,SAAS;EACT,WAAW;EACX,WAAW;EACX,eAAe;EACf,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,UAAU;EACV,QAAQ;EACR,aAAa;EACb;;wCAEsC;AACxC;AACA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,cAAc;EACd,WAAW;AACb;;AAEA;EACE,cAAc;EACd,cAAc;EACd,cAAc;EACd,mBAAmB;EACnB,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,aAAa;EACb,eAAe;EACf,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,WAAW;EACX,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,oBAAoB;EACpB,cAAc;AAChB;AACA;EACE,oBAAoB;EACpB,cAAc;AAChB;AACA;EACE,6BAA6B;EAC7B,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kCAAkC;EAClC,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;;AAEd;AACA;EACE,kCAAkC;EAClC;AACF;;AAEA;EACE;IACE,YAAY;IACZ,oEAAoE;EACtE;EACA;IACE,eAAe;EACjB;EACA;IACE,aAAa;IACb,8CAA8C;IAC9C,eAAe;IACf,gBAAgB;EAClB;EACA;IACE,eAAe;IACf,aAAa;IACb,kBAAkB;EACpB;EACA;IACE,eAAe;IACf,iBAAiB;EACnB;EACA;IACE,4BAA4B;EAC9B;EACA;IACE,0BAA0B;EAC5B;EACA;IACE;EACF;EACA;IACE,cAAc;EAChB;AACF","sourcesContent":["\n@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n:root {\n  font-size: 18px;\n  margin: 0;\n  font-family: kanit, sans-serif\n}\n/* * {\n  outline: 2px red solid\n} */\nbody {\n  margin: 0;\n  background-image: linear-gradient(to bottom right, #00C0ff, #4218B8);\n}\n.container {\n  display: grid;\n  grid-template: auto 1fr auto / auto 1fr;\n  height: 100vh;\n  color: white\n}\n.header {\n  grid-column: 1 / -1;\n  padding: 1.5rem;\n  font-size: 2rem;\n}\n.leftSidebar {\n  grid-column: 1 / 2 ;\n  padding: 2rem;\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  border-right: black 4px solid;\n  border-top: black 4px solid;\n  border-bottom: black 4px solid;\n\n}\n.viewAll {\n  grid-row: 1 / 2;\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n}\n.viewAll:hover{\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.projects {\n  grid-row: 2 / -1;\n  padding-top: 1.5rem;\n  display: grid;\n  grid-template-rows: auto 1fr;\n}\n.addNewProject {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n.addNewProject:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.addNewTodo {\n    background-color: transparent;\n    color: white;\n    border-radius: 10px;\n    height: 4rem;\n    transition: 0.5s;\n    cursor: pointer;\n    border: hsl(4, 53%, 90%) solid 5px;\n    font-size: 1.5rem;\n    font-family: inherit;\n    margin: 10px;\n    \n  }\n.addNewTodo:hover {\n    background-color: hsl(4, 53%, 90%);\n    color: black\n}\n.projectListContainer { \n  display: flex;\n  flex-wrap: wrap;\n  overflow: scroll;\n  max-width: 400px;\n  max-height: 250px;\n  -ms-overflow-style: none;\n  scrollbar-width: none\n}\n.projectListContainer::-webkit-scrollbar {\n  display: none;\n}\n.projectButton {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 2rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 3px;\n  font-size: 0.8rem;\n  font-family: inherit;\n  margin: 10px;\n}\n.projectButton:hover {\n  background-color: hsl(4, 53%, 90%);\n    color: black\n}\n\n.main {\n  grid-column: 2 / -1;\n  display: flex;\n  flex-direction: column;\n  border-top: black 4px solid;\n  border-bottom: black 4px solid;\n}\n.todoHead {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  margin-bottom: 2rem;\n  font-weight: bold;\n  font-size: 1.3em;\n  margin: 0 20px 20px;\n  border-bottom: white 4px solid;\n}\n.completedTodoContainer {\n  justify-self: flex-end;\n  margin-top: auto;\n}\n.completedTodoBtn {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n}\n.completedTodoBtn:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n.footer {\n  grid-column: 1 / -1;\n  padding: 1rem;\n  text-align: center;\n}\n.todoContainer {\n  margin: 0 20px 20px \n}\n.todo {\n    display: grid;\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n    grid-auto-flow: column;\n    overflow-wrap: break-word;\n}\n.todo.completed {\n  text-decoration: line-through;\n}\n.overlayForm {\n  position:absolute;\n  top:50vh;\n  left:0px;\n  width:100vw;\n  height:90vh;\n  background:rgba(0,0,0,0.8);\n  z-index: -1;\n  opacity: 0;\n  padding: 80px 50px 0px 10px;\n  overflow:scroll;\n  box-sizing: border-box;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 500ms;\n}\n.overlayForm .closeForm {\n  position:absolute;\n  top: 20px;\n  right: 40px;\n  color: #fff;\n  font-size: 5rem;\n  font-weight: 600;\n  cursor:pointer;\n}\n\nbody.activeForm .overlayForm{\n  z-index: 2;\n  opacity: 1;\n  top: 0px;\n  height: 100vh;\n  transition: top 500ms ease-in-out,\n              opacity 500ms ease-in-out,\n              height 0ms ease-in-out 0ms;\n}\n.overlayForm h1 {\n  font-size: 3rem;\n  color: #fff;\n}\n\n.overlayForm p {\n  font-size: 2em;\n  color: #fff;\n}\n\n.overlayForm label {\n  display: block;\n  font-size: 2em;\n  color: #eb5e28;\n  margin-bottom: 20px;\n  font-weight: 500;\n}\n.overlayForm input {\n  width: 100%;\n  padding: 17px;\n  font-size: 25px;\n  border: 4px solid #fff;\n  background: transparent;\n  outline: none;\n  border-radius: 10px;\n  margin-bottom: 50px;\n  color: #fff;\n  font-weight: 500;\n}\nselect {\n  width: 100%;\n  font-size: inherit;\n}\nh2 {\n  font-family: inherit;\n  color: #eb5e28;\n}\n.currentProjects {\n  font-family: inherit;\n  color: #ffffff;\n}\n#submit {\n  background-color: transparent;\n  color: white;\n  border-radius: 10px;\n  height: 4rem;\n  transition: 0.5s;\n  cursor: pointer;\n  border: hsl(4, 53%, 90%) solid 5px;\n  font-size: 1.5rem;\n  font-family: inherit;\n  margin: 10px;\n  \n}\n#submit:hover {\n  background-color: hsl(4, 53%, 90%);\n  color: black\n}\n\n@media screen and (max-width: 717px){\n  html {\n    height: 100%;\n    background: linear-gradient(to bottom right, #00C0ff, #4218B8) fixed;\n  }\n  body {\n    font-size: 12px;\n  }\n  .container {\n    display: grid;\n    grid-template-rows: auto 1fr 1fr 1fr auto auto;\n    min-width: 100%;\n    min-height: auto;\n  }\n  .leftSidebar {\n    grid-row: 2 / 3;\n    padding: 15px;\n    border-right: none;\n  }\n  .main{\n    grid-row: 3 / 4;\n    grid-column: auto;\n  }\n  button {\n    font-size: 1.3rem !important;\n  }\n  .projectButton {\n    font-size: 1rem !important;\n  }\n  .completedTodoBtn {\n    min-width: 94%\n  }\n  .addNewProject {\n    min-width: 95%;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProjectForm": () => (/* binding */ newProjectForm),
/* harmony export */   "removeForm": () => (/* binding */ removeForm),
/* harmony export */   "todoForm": () => (/* binding */ todoForm),
/* harmony export */   "toggleForm": () => (/* binding */ toggleForm)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ "./src/index.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainContent */ "./src/mainContent.js");
/* harmony import */ var _todoObjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoObjects */ "./src/todoObjects.js");
// // DOM manipulation for input new todo form and new project form







//*NEW TODO FORM
function todoForm (){
    // container elements for form
    const form = document.createElement("form")
    form.classList.toggle("form")
    const overlayForm = document.createElement("div")
    overlayForm.classList.toggle("overlayForm")
    form.appendChild(overlayForm)
    // close form 'x' button
    const closeForm = document.createElement("div")
    closeForm.classList.toggle("closeForm")
    closeForm.addEventListener("click", () => {
        toggleForm();
        removeForm();
    })
    closeForm.innerHTML = "&times"
    overlayForm.appendChild(closeForm)
    // form header
    const formHeader = document.createElement("h1")
    formHeader.textContent = "Add a new ToDo"
    overlayForm.appendChild(formHeader);

    // form element 'Name' container 
    const formElementName = document.createElement("div")
    formElementName.classList.toggle("formElement")
    overlayForm.appendChild(formElementName)
    // 'Name' input fields - textr
    const formNameLabel = document.createElement("label")
    formNameLabel.setAttribute("for", "Name")
    formNameLabel.textContent = "Name of ToDo";
    const formNameInput = document.createElement("input")
    formNameInput.setAttribute("type", "text")
    formNameInput.setAttribute("id", "formName")
    formNameInput.setAttribute("maxlength", "30")
    formElementName.append(formNameLabel, formNameInput);
    
    // form 'Project' container
    const formElementProject = document.createElement("div")
    formElementProject.classList.toggle("formElement")
    overlayForm.appendChild(formElementProject)
    // 'Project' input fields - Dropdown
    const formProjectLabel = document.createElement("label")
    formProjectLabel.setAttribute("for", "projectInput")
    formProjectLabel.textContent = "Select project:";
    const formProjectInput = document.createElement("select")
    formProjectInput.setAttribute("name", "projects")
    formProjectInput.setAttribute("id", "projectInput")
    formElementProject.append(formProjectLabel, formProjectInput);
    // loop through project array to grab the projects for the dropdown
    _todoObjects__WEBPACK_IMPORTED_MODULE_3__.projectArray.forEach(function(element){
        let option = document.createElement("option")
        option.value = element;
        option.textContent = `${element}`
        formProjectInput.appendChild(option)
    })

    // form 'priority' container
    const formElementPriority = document.createElement("div")
    formElementPriority.classList.toggle("formElement")
    overlayForm.appendChild(formElementPriority)
    // 'Priority' input fields - Dropdown
    const formPriorityLabel = document.createElement("label")
    formPriorityLabel.setAttribute("for", "priorityInput")
    formPriorityLabel.textContent = "Select priority:";
    const formPriorityInput = document.createElement("select")
    formPriorityInput.setAttribute("name", "priority")
    formPriorityInput.setAttribute("id", "priorityInput")
    formElementProject.append(formPriorityLabel, formPriorityInput);
    // priority dropdown options
    const priorityUrgent = document.createElement("option")
    priorityUrgent.setAttribute("value", "Urgent")
    priorityUrgent.textContent = "Urgent"
    const priorityRoutine = document.createElement("option")
    priorityRoutine.setAttribute("value", "Routine")
    priorityRoutine.textContent = "Routine"
    const priorityBackBurner = document.createElement("option")
    priorityBackBurner.setAttribute("value", "Backburner")
    priorityBackBurner.textContent = "Back-Burner"
    formPriorityInput.append(priorityUrgent, priorityRoutine, priorityBackBurner)

    // form 'date due' container
    const formElementDue = document.createElement("div")
    formElementDue.classList.toggle("formElement")
    overlayForm.appendChild(formElementDue)
    // 'date due' input fields - date picker
    const formDueLabel = document.createElement("label")
    formDueLabel.setAttribute("for", "dueInput")
    formDueLabel.textContent = "Due by:"
    const formDueInput = document.createElement("input")
    formDueInput.setAttribute("type", "date")
    formDueInput.setAttribute("id", "dueInput")
    formDueInput.setAttribute("name", "dueDate")
    formDueInput.setAttribute("required", "")
    formElementDue.append(formDueLabel, formDueInput)

    // form submit button container
    const formElementSubmit = document.createElement("div")
    formElementSubmit.classList.toggle("formElement")
    overlayForm.appendChild(formElementSubmit)
    // submit button 
    const formSubmitButton = document.createElement("button")
    formSubmitButton.textContent = "Add New Todo"
    formSubmitButton.addEventListener("click", () => {
        addTodo();
        toggleForm();
        removeForm();
        (0,_mainContent__WEBPACK_IMPORTED_MODULE_2__.clearTodos)();
        (0,_mainContent__WEBPACK_IMPORTED_MODULE_2__["default"])();
        (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.storeTodos)();
        console.log(_todoObjects__WEBPACK_IMPORTED_MODULE_3__.todoArray)
    }) 

    formSubmitButton.setAttribute("type", "button")
    formSubmitButton.setAttribute("id", "submit")
    formElementSubmit.appendChild(formSubmitButton)
    // append the entire form container to the body when called
    document.getElementsByTagName("body")[0].appendChild(form)
    console.log("todoForm function is firing")
}

// function to toggle class that brings up a new todo form
function toggleForm(){
    document.body.classList.toggle("activeForm")
}
// function to call when create a new Todo form button clicked, after completing the form
function addTodo(name, project, priority, dueDate){
    name = document.querySelector("#formName").value;
    project = document.querySelector("#projectInput").value;
    priority = document.querySelector("#priorityInput").value;
    dueDate = document.querySelector("#dueInput").value;
    const newTodo = new _todoObjects__WEBPACK_IMPORTED_MODULE_3__["default"](name,project,priority,dueDate)
    newTodo.pushTodo();
}

// function to remove the form element from DOM when closed
function removeForm() {
    const elements = document.getElementsByClassName("form")
    while (elements.length > 0){
        elements[0].parentNode.removeChild(elements[0])
    }
} 

// **NEW PROJECT FORM 
function newProjectForm(){
    // container elements for form
    const form = document.createElement("form")
    form.classList.toggle("form")
    form.setAttribute("method", "post")
    form.setAttribute("action", "#")
    const overlayForm = document.createElement("div")
    overlayForm.classList.toggle("overlayForm")
    form.appendChild(overlayForm)

    // close form 'x' button
    const closeForm = document.createElement("div")
    closeForm.classList.toggle("closeForm")
    closeForm.addEventListener("click", () => {
        toggleForm();
        removeForm();
    })
    closeForm.innerHTML = "&times"
    overlayForm.appendChild(closeForm)

    // form header
    const formHeader = document.createElement("h1")
    formHeader.textContent = "Add a new Project"
    overlayForm.appendChild(formHeader);

    // project name input
    const formElementName = document.createElement("div")
    formElementName.classList.toggle("formElement")
    overlayForm.appendChild(formElementName)
    // 'Name' input fields - text
    const formNameLabel = document.createElement("label")
    formNameLabel.setAttribute("for", "Name")
    formNameLabel.textContent = "Name of New Project";
    const formNameInput = document.createElement("input")
    formNameInput.required = true;
    formNameInput.setAttribute("id", "newProjectInput")
    formNameInput.setAttribute("required", "")
    formNameInput.setAttribute("name", "newProjectInput")
    formNameInput.setAttribute("minlength", "1")
    formNameInput.setAttribute("maxlength", "30")
    formElementName.append(formNameLabel, formNameInput);

    // list of current Projects
    const currentProjects = document.createElement("div")
    currentProjects.classList.toggle("currentProjects")
    overlayForm.appendChild(currentProjects)
    const currentProjectsTitle = document.createElement("h2")
    currentProjectsTitle.textContent = "List of Current Projects"
    currentProjects.append(currentProjectsTitle)
    _todoObjects__WEBPACK_IMPORTED_MODULE_3__.projectArray.forEach((element) => {currentProjects.append(element + ", ")
    })

    // submit new project button
    const newProjectSubmit = document.createElement("div")
    newProjectSubmit.classList.toggle("formElement")
    overlayForm.appendChild(newProjectSubmit)
    // submit button 
    const newProjectSubmitBtn = document.createElement("button")
    newProjectSubmitBtn.textContent = "+ Add New Project"
    newProjectSubmitBtn.addEventListener("click", () => {
        // check that the input is valid, before running the toggle and remove functions
        if (formNameInput.checkValidity()) {
            pushNewProject();
            toggleForm();
            removeForm(); 
            (0,___WEBPACK_IMPORTED_MODULE_0__.clearProjectList)() 
            ;(0,___WEBPACK_IMPORTED_MODULE_0__.refreshProjectList)(); 
            (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.storeProjects)();
        }  
    }) 

    newProjectSubmitBtn.setAttribute("type", "submit")
    newProjectSubmitBtn.setAttribute("id", "submit")
    newProjectSubmit.appendChild(newProjectSubmitBtn)


    // append form container to body
    document.getElementsByTagName("body")[0].appendChild(form)
}

function pushNewProject() {
    const newProject = document.getElementById("newProjectInput")
    _todoObjects__WEBPACK_IMPORTED_MODULE_3__.projectArray.push(newProject.value)
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearProjectList": () => (/* binding */ clearProjectList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "refreshProjectList": () => (/* binding */ refreshProjectList)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todoObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoObjects */ "./src/todoObjects.js");
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainContent */ "./src/mainContent.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _showCompleted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./showCompleted */ "./src/showCompleted.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");






// import {todoArray, projectArray} from "./todoObjects"
// grabbing the root node element

window.addEventListener("DOMContentLoaded", () => {
    (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.retrieveProjects)()
    ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_5__.retrieveTodos)()
    clearProjectList()
    refreshProjectList()
    ;(0,_showCompleted__WEBPACK_IMPORTED_MODULE_4__.renderShowCompletedBtn)()
})

const content = document.querySelector("#content")

// grid container
const container = document.createElement("div")
container.classList.toggle("container")

// header
const header = document.createElement("div")
header.classList.toggle("header")
header.textContent = "To Do"

// left sidebar
const leftSidebar = document.createElement("div")
leftSidebar.classList.toggle("leftSidebar")
const viewAll = document.createElement("button");
viewAll.addEventListener("click", () => {
    (0,_mainContent__WEBPACK_IMPORTED_MODULE_2__.clearTodos)();
    (0,_mainContent__WEBPACK_IMPORTED_MODULE_2__["default"])();
})
viewAll.classList.toggle("viewAll")
viewAll.textContent = "View All Uncompleted"
const projects = document.createElement("div")
projects.classList.toggle("projects")
projects.textContent = "Projects"
const addNewProject = document.createElement("button")
addNewProject.classList.toggle("addNewProject")
addNewProject.textContent = "+ Add New Project"
addNewProject.addEventListener("click", () =>{
    ;(0,_form__WEBPACK_IMPORTED_MODULE_3__.newProjectForm)()
    ;(0,_form__WEBPACK_IMPORTED_MODULE_3__.toggleForm)()
})
projects.appendChild(addNewProject)

const projectInstructions = document.createElement("div")
projectInstructions.textContent = "List of current projects, click to view Todos"
projectInstructions.classList.toggle("projectInstructions")
projects.appendChild(projectInstructions)

// projects container
const projectListContainer = document.createElement("div")
projectListContainer.classList.toggle("projectListContainer")
projects.appendChild(projectListContainer)


// loop through projects to list them on the side panel
function refreshProjectList() {
    console.log(_todoObjects__WEBPACK_IMPORTED_MODULE_1__.projectArray)
    _todoObjects__WEBPACK_IMPORTED_MODULE_1__.projectArray.forEach((element) => {
        const projectButtonContainer = document.createElement("div")
        projectListContainer.appendChild(projectButtonContainer)
        projectButtonContainer.classList.toggle("projectButtonContainer")
        const projectList = document.createElement("button")
        projectList.classList.toggle("projectButton")
        projectList.textContent = element
        projectListContainer.appendChild(projectList)
        // event listeners for each project button
        projectList.addEventListener("click", () => {
            ;(0,_mainContent__WEBPACK_IMPORTED_MODULE_2__.clearTodos)(); //this only works once! doesnt clear after the first click
            _todoObjects__WEBPACK_IMPORTED_MODULE_1__.todoArray.forEach((element) => {
                if (element.project == projectList.textContent){
                    _todoObjects__WEBPACK_IMPORTED_MODULE_1__.filtered.push(element)
                    console.log("filtered array before reset", _todoObjects__WEBPACK_IMPORTED_MODULE_1__.filtered)
                }
                (0,_mainContent__WEBPACK_IMPORTED_MODULE_2__.updateMainFiltered)();
                
                _todoObjects__WEBPACK_IMPORTED_MODULE_1__.filtered.length = 0
                console.log("filtered array after reset", _todoObjects__WEBPACK_IMPORTED_MODULE_1__.filtered)
                
            })
        })
        
        
    })
}
// function to clear the list of projects before looping through to prevent repeating of elements
function clearProjectList () {
    while(projectListContainer.firstChild){
        projectListContainer.removeChild(projectListContainer.lastChild)
    }
}

// need to create a function that clears the filtered array



// main content
const main = document.createElement("div")
main.classList.toggle("main")
const addNewTodo = document.createElement("button")
addNewTodo.classList.toggle("addNewTodo")
addNewTodo.textContent = "+ Add New ToDo"
addNewTodo.addEventListener("click", () => {
    if (_todoObjects__WEBPACK_IMPORTED_MODULE_1__.projectArray.length === 0) {
        alert ("Start by adding a new project!")
    } else {
        (0,_form__WEBPACK_IMPORTED_MODULE_3__.toggleForm)()
        ;(0,_form__WEBPACK_IMPORTED_MODULE_3__.todoForm)()
    }
})
// head row of Todos
const todoHead = document.createElement("div")
todoHead.classList.toggle("todoHead")
const todoHeadTodo = document.createElement("div")
const todoHeadPriority = document.createElement("div")
const todoHeadDue = document.createElement("div")
const todoHeadProject = document.createElement("div")
const todoHeadComplete = document.createElement("div")
// head row class toggles
todoHeadTodo.classList.toggle("todoHeadItem")
todoHeadPriority.classList.toggle("todoHeadItem")
todoHeadDue.classList.toggle("todoHeadItem")
todoHeadProject.classList.toggle("todoHeadItem")
todoHeadComplete.classList.toggle("todoHeadItem")
//head row text contents
todoHeadTodo.textContent = "ToDo"
todoHeadPriority.textContent = "Priority"
todoHeadDue.textContent = "Due By"
todoHeadProject.textContent = "Project"
todoHeadComplete.textContent = "Mark as Complete"
// appending Todo head to main
main.appendChild(todoHead)
todoHead.append(todoHeadTodo, todoHeadPriority, todoHeadDue, todoHeadProject, todoHeadComplete)

const todoContainer = document.createElement("div")
todoContainer.classList.toggle("todoContainer")
main.appendChild(todoContainer)
main.insertBefore(addNewTodo, main.firstChild)

// footer
const footer = document.createElement("div")
footer.classList.toggle("footer")
footer.textContent = "Created by Jordan Ulmer, 2022"
// appending to the parent elements
content.appendChild(container)
container.append(header, leftSidebar, main, footer)
leftSidebar.append(viewAll, projects)



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);
;(0,_mainContent__WEBPACK_IMPORTED_MODULE_2__["default"])()








/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "retrieveProjects": () => (/* binding */ retrieveProjects),
/* harmony export */   "retrieveTodos": () => (/* binding */ retrieveTodos),
/* harmony export */   "storeProjects": () => (/* binding */ storeProjects),
/* harmony export */   "storeTodos": () => (/* binding */ storeTodos)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainContent */ "./src/mainContent.js");
/* harmony import */ var _todoObjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoObjects */ "./src/todoObjects.js");




let todoJSONHolder = ""
let projectJSONHolder = ""
let localProjectArray = []
let localTodoArray = []




// retrieve the todos from local storage
function retrieveTodos () {
    todoJSONHolder = localStorage.getItem("storedTodos")
    localTodoArray = JSON.parse(todoJSONHolder)
    if (todoJSONHolder !== null){
        localTodoArray.forEach(element => _todoObjects__WEBPACK_IMPORTED_MODULE_2__.todoArray.push(element))
        }
        if (_todoObjects__WEBPACK_IMPORTED_MODULE_2__.todoArray !== null) {
            (0,_mainContent__WEBPACK_IMPORTED_MODULE_1__["default"])()   
        }
    }

// retrieve the projects from local storage
function retrieveProjects () {
    projectJSONHolder = localStorage.getItem("storedProjects")
    localProjectArray = JSON.parse(projectJSONHolder)
    if (projectJSONHolder !== null){
        localProjectArray.forEach(element => _todoObjects__WEBPACK_IMPORTED_MODULE_2__.projectArray.push(element))
        }
        if (_todoObjects__WEBPACK_IMPORTED_MODULE_2__.projectArray !== null) {
            (0,_index__WEBPACK_IMPORTED_MODULE_0__.refreshProjectList)()
        }
    }


// store the todos in local storage
function storeTodos (){
    if (_todoObjects__WEBPACK_IMPORTED_MODULE_2__.todoArray !== null){
        const todoJSON = JSON.stringify(_todoObjects__WEBPACK_IMPORTED_MODULE_2__.todoArray);
        localStorage.setItem("storedTodos", todoJSON)
    } 
}
// store the projects in local storage
function storeProjects () {
    if (_todoObjects__WEBPACK_IMPORTED_MODULE_2__.projectArray !== null){
        const projectJSON = JSON.stringify(_todoObjects__WEBPACK_IMPORTED_MODULE_2__.projectArray);
        localStorage.setItem("storedProjects", projectJSON)
    }
}





/***/ }),

/***/ "./src/mainContent.js":
/*!****************************!*\
  !*** ./src/mainContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearTodos": () => (/* binding */ clearTodos),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "updateMainFiltered": () => (/* binding */ updateMainFiltered)
/* harmony export */ });
/* harmony import */ var _todoObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoObjects */ "./src/todoObjects.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
// importing the arrays and the DOM element




// function to create and append the main section with each todo
function updateMain () {
    _todoObjects__WEBPACK_IMPORTED_MODULE_0__.todoArray.forEach(element => {
        const main = document.querySelector(".main")
        const todoContainer = document.querySelector(".todoContainer")
        const todoHead = document.querySelector(".todoHead")
        const todo = document.createElement("div")
        const todoCompleteBtn = document.createElement("button")
        const todoName = document.createElement("div")
        const todoPriority = document.createElement("div")
        const todoDueDate = document.createElement("div")
        const todoProject = document.createElement("div")
        todo.classList.toggle("todo")
        todoCompleteBtn.classList.toggle("todoCompletBtn")
        todoCompleteBtn.textContent = "✔️"
        todoName.classList.toggle("todoName")
        todoPriority.classList.toggle("todoPriority")
        todoProject.classList.toggle("todoProject")
        todoHead.after(todoContainer)
        todoContainer.append(todo)
        todo.append(todoName, todoPriority, todoDueDate, todoProject, todoCompleteBtn)
        // eventlistener for complete button
        todoCompleteBtn.addEventListener("click", () => {
            // push todo to completed 
            _todoObjects__WEBPACK_IMPORTED_MODULE_0__.completedTodos.push(element)
            // logic here to remove this single instance
            todoContainer.removeChild(todo)
            _todoObjects__WEBPACK_IMPORTED_MODULE_0__.todoArray.splice(_todoObjects__WEBPACK_IMPORTED_MODULE_0__.todoArray.indexOf(element), 1);
            console.log(_todoObjects__WEBPACK_IMPORTED_MODULE_0__.todoArray)
            ;(0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.storeTodos)()
        })
        // loops over each object and extracts the value. (textContent for now, will change later)
        for (let key in element){
            todoName.textContent = element.name;
            todoPriority.textContent = element.priority;
            todoDueDate.textContent = element.dueDate;
            todoProject.textContent = element.project;
            todo.append()
        }
    });
}

function updateMainFiltered () {
    _todoObjects__WEBPACK_IMPORTED_MODULE_0__.filtered.forEach(element => {
        const main = document.querySelector(".main")
        const todo = document.createElement("div")
        const todoContainer = document.querySelector(".todoContainer")
        const todoHead = document.querySelector(".todoHead")
        const todoCompleteBtn = document.createElement("button")
        const todoName = document.createElement("div")
        const todoPriority = document.createElement("div")
        const todoDueDate = document.createElement("div")
        const todoProject = document.createElement("div")
        todo.classList.toggle("todo")
        todoCompleteBtn.classList.toggle("todoCompletBtn")
        todoCompleteBtn.textContent = "✔️"
        todoName.classList.toggle("todoName")
        todoPriority.classList.toggle("todoPriority")
        todoProject.classList.toggle("todoProject")
        todoHead.after(todoContainer)
        todoContainer.append(todo)
        todo.append(todoName, todoPriority, todoDueDate, todoProject, todoCompleteBtn)
        // eventlistener for complete button
        todoCompleteBtn.addEventListener("click", () => {
            // push the todo Object into the completed todos
            _todoObjects__WEBPACK_IMPORTED_MODULE_0__.completedTodos.push(element)
            // logic here to remove this single instance
            todoContainer.removeChild(todo)
            _todoObjects__WEBPACK_IMPORTED_MODULE_0__.todoArray.splice(_todoObjects__WEBPACK_IMPORTED_MODULE_0__.todoArray.indexOf(element), 1);
            console.log(_todoObjects__WEBPACK_IMPORTED_MODULE_0__.todoArray)
        })
        // loops over each object and extracts the value. (textContent for now, will change later)
        for (let key in element){
            todoName.textContent = element.name;
            todoPriority.textContent = element.priority;
            todoDueDate.textContent = element.dueDate;
            todoProject.textContent = element.project;
            todoContainer.append()
        }
    });
}



// function to clear the todo list, used when filtering by projects NOT WORKING
function clearTodos () {
    const todoContainer = document.querySelector(".todoContainer")
    while (todoContainer.firstChild){
        todoContainer.removeChild(todoContainer.lastChild)
    }
    console.log("clearTodos is firing")
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateMain);


/***/ }),

/***/ "./src/showCompleted.js":
/*!******************************!*\
  !*** ./src/showCompleted.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderCompleted": () => (/* binding */ renderCompleted),
/* harmony export */   "renderShowCompletedBtn": () => (/* binding */ renderShowCompletedBtn)
/* harmony export */ });
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainContent */ "./src/mainContent.js");
/* harmony import */ var _todoObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoObjects */ "./src/todoObjects.js");



function renderShowCompletedBtn() {
    // create container for Completed ToDos button and button 
    const main = document.querySelector(".main")
    const completedTodoContainer = document.createElement("div")
    completedTodoContainer.classList.toggle("completedTodoContainer")
    const completedTodoBtn = document.createElement("button")
    completedTodoBtn.classList.toggle("completedTodoBtn")
    completedTodoBtn.textContent = "Show Completed ToDos"
    completedTodoBtn.addEventListener("click", () => {
        renderCompleted()
    })
    main.appendChild(completedTodoContainer)
    completedTodoContainer.appendChild(completedTodoBtn)
}

function renderCompleted() {
    const main = document.querySelector(".main")
    ;(0,_mainContent__WEBPACK_IMPORTED_MODULE_0__.clearTodos)()
    _todoObjects__WEBPACK_IMPORTED_MODULE_1__.completedTodos.forEach(element => {
        const main = document.querySelector(".main")
        const todo = document.createElement("div")
        const todoContainer = document.querySelector(".todoContainer")
        const todoCompleteBtn = document.createElement("button")
        const todoName = document.createElement("div")
        const todoPriority = document.createElement("div")
        const todoDueDate = document.createElement("div")
        const todoProject = document.createElement("div")
        todo.classList.toggle("todo")
        todo.classList.toggle("completed")
        todoName.classList.toggle("todoName")
        todoPriority.classList.toggle("todoPriority")
        todoProject.classList.toggle("todoProject")
        main.appendChild(todoContainer)
        todoContainer.appendChild(todo)
        todo.append(todoName, todoPriority, todoDueDate, todoProject)
        // eventlistener for complete button
        todoCompleteBtn.addEventListener("click", () => {
            // push the todo Object into the completed todos
            _todoObjects__WEBPACK_IMPORTED_MODULE_1__.completedTodos.push(element)
            // logic here to remove this single instance
            todoContainer.removeChild(todo)
            todoArray.splice(todoArray.indexOf(element), 1);
            console.log(todoArray)
        })
        // loops over each object and extracts the value. (textContent for now, will change later)
        for (let key in element){
            todoName.textContent = element.name;
            todoPriority.textContent = element.priority;
            todoDueDate.textContent = element.dueDate;
            todoProject.textContent = element.project;
            todoContainer.append()
        }
    });
}



/***/ }),

/***/ "./src/todoObjects.js":
/*!****************************!*\
  !*** ./src/todoObjects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "completedTodos": () => (/* binding */ completedTodos),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "filtered": () => (/* binding */ filtered),
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "todoArray": () => (/* binding */ todoArray)
/* harmony export */ });
let projectArray = []//push the project name of when a new todo is made in here
let todoArray = [] //push each todo object into this array to list them easier
let filtered = [] //initialising an empty array for filtering todos
let completedTodos = [] //initialising an array to hold completed todos

// factory function for new Todo objects
function Todo (name, project, priority, dueDate) {
    this.name = name;
    this.project = project;
    this.priority = priority;
    this.dueDate = dueDate;
    this.pushTodo = function() {
        todoArray.push(this)
    }
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo); 


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sT0FBTyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxNQUFNLHVHQUF1RyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLHFCQUFxQixTQUFTLG9CQUFvQixjQUFj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QTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9mb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tYWluQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zaG93Q29tcGxldGVkLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9PYmplY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthbml0Oml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG46cm9vdCB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseToga2FuaXQsIHNhbnMtc2VyaWZcXG59XFxuLyogKiB7XFxuICBvdXRsaW5lOiAycHggcmVkIHNvbGlkXFxufSAqL1xcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzAwQzBmZiwgIzQyMThCOCk7XFxufVxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8gMWZyIGF1dG8gLyBhdXRvIDFmcjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBjb2xvcjogd2hpdGVcXG59XFxuLmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgcGFkZGluZzogMS41cmVtO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubGVmdFNpZGViYXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyIDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyO1xcbiAgYm9yZGVyLXJpZ2h0OiBibGFjayA0cHggc29saWQ7XFxuICBib3JkZXItdG9wOiBibGFjayA0cHggc29saWQ7XFxuICBib3JkZXItYm90dG9tOiBibGFjayA0cHggc29saWQ7XFxuXFxufVxcbi52aWV3QWxsIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogNHJlbTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgNXB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuLnZpZXdBbGw6aG92ZXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgY29sb3I6IGJsYWNrXFxufVxcbi5wcm9qZWN0cyB7XFxuICBncmlkLXJvdzogMiAvIC0xO1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcbn1cXG4uYWRkTmV3UHJvamVjdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHg7XFxuICBcXG59XFxuLmFkZE5ld1Byb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gIGNvbG9yOiBibGFja1xcbn1cXG4uYWRkTmV3VG9kbyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogNHJlbTtcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgNXB4O1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgXFxuICB9XFxuLmFkZE5ld1RvZG86aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgICBjb2xvcjogYmxhY2tcXG59XFxuLnByb2plY3RMaXN0Q29udGFpbmVyIHsgXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBtYXgtaGVpZ2h0OiAyNTBweDtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZVxcbn1cXG4ucHJvamVjdExpc3RDb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5wcm9qZWN0QnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IGhzbCg0LCA1MyUsIDkwJSkgc29saWQgM3B4O1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuLnByb2plY3RCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gICAgY29sb3I6IGJsYWNrXFxufVxcblxcbi5tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci10b3A6IGJsYWNrIDRweCBzb2xpZDtcXG4gIGJvcmRlci1ib3R0b206IGJsYWNrIDRweCBzb2xpZDtcXG59XFxuLnRvZG9IZWFkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgbWlubWF4KDAsIDFmcikpO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIG1hcmdpbjogMCAyMHB4IDIwcHg7XFxuICBib3JkZXItYm90dG9tOiB3aGl0ZSA0cHggc29saWQ7XFxufVxcbi5jb21wbGV0ZWRUb2RvQ29udGFpbmVyIHtcXG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG4uY29tcGxldGVkVG9kb0J0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcbi5jb21wbGV0ZWRUb2RvQnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA1MyUsIDkwJSk7XFxuICBjb2xvcjogYmxhY2tcXG59XFxuLmZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRvZG9Db250YWluZXIge1xcbiAgbWFyZ2luOiAwIDIwcHggMjBweCBcXG59XFxuLnRvZG8ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBtaW5tYXgoMCwgMWZyKSk7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbi50b2RvLmNvbXBsZXRlZCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuLm92ZXJsYXlGb3JtIHtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgdG9wOjUwdmg7XFxuICBsZWZ0OjBweDtcXG4gIHdpZHRoOjEwMHZ3O1xcbiAgaGVpZ2h0Ojkwdmg7XFxuICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC44KTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgb3BhY2l0eTogMDtcXG4gIHBhZGRpbmc6IDgwcHggNTBweCAwcHggMTBweDtcXG4gIG92ZXJmbG93OnNjcm9sbDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0cmFuc2l0aW9uOiB0b3AgNTAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgaGVpZ2h0IDBtcyBlYXNlLWluLW91dCA1MDBtcztcXG59XFxuLm92ZXJsYXlGb3JtIC5jbG9zZUZvcm0ge1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogNDBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG5ib2R5LmFjdGl2ZUZvcm0gLm92ZXJsYXlGb3Jte1xcbiAgei1pbmRleDogMjtcXG4gIG9wYWNpdHk6IDE7XFxuICB0b3A6IDBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB0cmFuc2l0aW9uOiB0b3AgNTAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgaGVpZ2h0IDBtcyBlYXNlLWluLW91dCAwbXM7XFxufVxcbi5vdmVybGF5Rm9ybSBoMSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm92ZXJsYXlGb3JtIHAge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLm92ZXJsYXlGb3JtIGxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBjb2xvcjogI2ViNWUyODtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG4ub3ZlcmxheUZvcm0gaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxN3B4O1xcbiAgZm9udC1zaXplOiAyNXB4O1xcbiAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5zZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxufVxcbmgyIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6ICNlYjVlMjg7XFxufVxcbi5jdXJyZW50UHJvamVjdHMge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuI3N1Ym1pdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHg7XFxuICBcXG59XFxuI3N1Ym1pdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgY29sb3I6IGJsYWNrXFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcxN3B4KXtcXG4gIGh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMwMEMwZmYsICM0MjE4QjgpIGZpeGVkO1xcbiAgfVxcbiAgYm9keSB7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gIH1cXG4gIC5jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDFmciAxZnIgYXV0byBhdXRvO1xcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XFxuICB9XFxuICAubGVmdFNpZGViYXIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIH1cXG4gIC5tYWlue1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGdyaWQtY29sdW1uOiBhdXRvO1xcbiAgfVxcbiAgYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxLjNyZW0gIWltcG9ydGFudDtcXG4gIH1cXG4gIC5wcm9qZWN0QnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAuY29tcGxldGVkVG9kb0J0biB7XFxuICAgIG1pbi13aWR0aDogOTQlXFxuICB9XFxuICAuYWRkTmV3UHJvamVjdCB7XFxuICAgIG1pbi13aWR0aDogOTUlO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1Q7QUFDRjtBQUNBOztHQUVHO0FBQ0g7RUFDRSxTQUFTO0VBQ1Qsb0VBQW9FO0FBQ3RFO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUNBQXVDO0VBQ3ZDLGFBQWE7RUFDYjtBQUNGO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDhCQUE4Qjs7QUFFaEM7QUFDQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDO0FBQ0Y7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsWUFBWTs7QUFFZDtBQUNBO0VBQ0Usa0NBQWtDO0VBQ2xDO0FBQ0Y7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLFlBQVk7O0VBRWQ7QUFDRjtJQUNJLGtDQUFrQztJQUNsQztBQUNKO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QjtBQUNGO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0NBQWtDO0lBQ2hDO0FBQ0o7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdEQUFnRDtFQUNoRCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtDQUFrQztFQUNsQztBQUNGO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdEQUFnRDtJQUNoRCxzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsUUFBUTtFQUNSLFdBQVc7RUFDWCxXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEI7OzBDQUV3QztBQUMxQztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsUUFBUTtFQUNSLGFBQWE7RUFDYjs7d0NBRXNDO0FBQ3hDO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixZQUFZOztBQUVkO0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLG9FQUFvRTtFQUN0RTtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLDhDQUE4QztJQUM5QyxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFO0VBQ0Y7RUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYW5pdDppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxuOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IGthbml0LCBzYW5zLXNlcmlmXFxufVxcbi8qICoge1xcbiAgb3V0bGluZTogMnB4IHJlZCBzb2xpZFxcbn0gKi9cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMwMEMwZmYsICM0MjE4QjgpO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBhdXRvIDFmciBhdXRvIC8gYXV0byAxZnI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6IHdoaXRlXFxufVxcbi5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLmxlZnRTaWRlYmFyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMiA7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gIGJvcmRlci1yaWdodDogYmxhY2sgNHB4IHNvbGlkO1xcbiAgYm9yZGVyLXRvcDogYmxhY2sgNHB4IHNvbGlkO1xcbiAgYm9yZGVyLWJvdHRvbTogYmxhY2sgNHB4IHNvbGlkO1xcblxcbn1cXG4udmlld0FsbCB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDRyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcbi52aWV3QWxsOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gIGNvbG9yOiBibGFja1xcbn1cXG4ucHJvamVjdHMge1xcbiAgZ3JpZC1yb3c6IDIgLyAtMTtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXG59XFxuLmFkZE5ld1Byb2plY3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogaHNsKDQsIDUzJSwgOTAlKSBzb2xpZCA1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgXFxufVxcbi5hZGROZXdQcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA1MyUsIDkwJSk7XFxuICBjb2xvcjogYmxhY2tcXG59XFxuLmFkZE5ld1RvZG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDRyZW07XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDVweDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIFxcbiAgfVxcbi5hZGROZXdUb2RvOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gICAgY29sb3I6IGJsYWNrXFxufVxcbi5wcm9qZWN0TGlzdENvbnRhaW5lciB7IFxcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgbWF4LWhlaWdodDogMjUwcHg7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmVcXG59XFxuLnByb2plY3RMaXN0Q29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4ucHJvamVjdEJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiBoc2woNCwgNTMlLCA5MCUpIHNvbGlkIDNweDtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcbi5wcm9qZWN0QnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCg0LCA1MyUsIDkwJSk7XFxuICAgIGNvbG9yOiBibGFja1xcbn1cXG5cXG4ubWFpbiB7XFxuICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItdG9wOiBibGFjayA0cHggc29saWQ7XFxuICBib3JkZXItYm90dG9tOiBibGFjayA0cHggc29saWQ7XFxufVxcbi50b2RvSGVhZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIG1pbm1heCgwLCAxZnIpKTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBtYXJnaW46IDAgMjBweCAyMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogd2hpdGUgNHB4IHNvbGlkO1xcbn1cXG4uY29tcGxldGVkVG9kb0NvbnRhaW5lciB7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuLmNvbXBsZXRlZFRvZG9CdG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogaHNsKDQsIDUzJSwgOTAlKSBzb2xpZCA1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAxMHB4O1xcbn1cXG4uY29tcGxldGVkVG9kb0J0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woNCwgNTMlLCA5MCUpO1xcbiAgY29sb3I6IGJsYWNrXFxufVxcbi5mb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi50b2RvQ29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCAyMHB4IDIwcHggXFxufVxcbi50b2RvIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgbWlubWF4KDAsIDFmcikpO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG4udG9kby5jb21wbGV0ZWQge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbi5vdmVybGF5Rm9ybSB7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHRvcDo1MHZoO1xcbiAgbGVmdDowcHg7XFxuICB3aWR0aDoxMDB2dztcXG4gIGhlaWdodDo5MHZoO1xcbiAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuOCk7XFxuICB6LWluZGV4OiAtMTtcXG4gIG9wYWNpdHk6IDA7XFxuICBwYWRkaW5nOiA4MHB4IDUwcHggMHB4IDEwcHg7XFxuICBvdmVyZmxvdzpzY3JvbGw7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdHJhbnNpdGlvbjogdG9wIDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgIGhlaWdodCAwbXMgZWFzZS1pbi1vdXQgNTAwbXM7XFxufVxcbi5vdmVybGF5Rm9ybSAuY2xvc2VGb3JtIHtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgdG9wOiAyMHB4O1xcbiAgcmlnaHQ6IDQwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG59XFxuXFxuYm9keS5hY3RpdmVGb3JtIC5vdmVybGF5Rm9ybXtcXG4gIHotaW5kZXg6IDI7XFxuICBvcGFjaXR5OiAxO1xcbiAgdG9wOiAwcHg7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdHJhbnNpdGlvbjogdG9wIDUwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgb3BhY2l0eSA1MDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgIGhlaWdodCAwbXMgZWFzZS1pbi1vdXQgMG1zO1xcbn1cXG4ub3ZlcmxheUZvcm0gaDEge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5vdmVybGF5Rm9ybSBwIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5vdmVybGF5Rm9ybSBsYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgY29sb3I6ICNlYjVlMjg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLm92ZXJsYXlGb3JtIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTdweDtcXG4gIGZvbnQtc2l6ZTogMjVweDtcXG4gIGJvcmRlcjogNHB4IHNvbGlkICNmZmY7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5oMiB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGNvbG9yOiAjZWI1ZTI4O1xcbn1cXG4uY3VycmVudFByb2plY3RzIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcbiNzdWJtaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogaHNsKDQsIDUzJSwgOTAlKSBzb2xpZCA1cHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgXFxufVxcbiNzdWJtaXQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDQsIDUzJSwgOTAlKTtcXG4gIGNvbG9yOiBibGFja1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MTdweCl7XFxuICBodG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMDBDMGZmLCAjNDIxOEI4KSBmaXhlZDtcXG4gIH1cXG4gIGJvZHkge1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICB9XFxuICAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAxZnIgMWZyIGF1dG8gYXV0bztcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xcbiAgfVxcbiAgLmxlZnRTaWRlYmFyIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICB9XFxuICAubWFpbntcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogYXV0bztcXG4gIH1cXG4gIGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuICAucHJvamVjdEJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcbiAgLmNvbXBsZXRlZFRvZG9CdG4ge1xcbiAgICBtaW4td2lkdGg6IDk0JVxcbiAgfVxcbiAgLmFkZE5ld1Byb2plY3Qge1xcbiAgICBtaW4td2lkdGg6IDk1JTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyAvLyBET00gbWFuaXB1bGF0aW9uIGZvciBpbnB1dCBuZXcgdG9kbyBmb3JtIGFuZCBuZXcgcHJvamVjdCBmb3JtXG5cbmltcG9ydCB7IGNsZWFyUHJvamVjdExpc3QsIHJlZnJlc2hQcm9qZWN0TGlzdCB9IGZyb20gXCIuXCJcbmltcG9ydCB7IHN0b3JlUHJvamVjdHMsIHN0b3JlVG9kb3MgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIlxuaW1wb3J0IHVwZGF0ZU1haW4sIHsgY2xlYXJUb2RvcyB9IGZyb20gXCIuL21haW5Db250ZW50XCJcbmltcG9ydCBUb2RvLCB7IHRvZG9BcnJheSB9IGZyb20gXCIuL3RvZG9PYmplY3RzXCJcbmltcG9ydCB7IHByb2plY3RBcnJheSB9IGZyb20gXCIuL3RvZG9PYmplY3RzXCJcblxuLy8qTkVXIFRPRE8gRk9STVxuZnVuY3Rpb24gdG9kb0Zvcm0gKCl7XG4gICAgLy8gY29udGFpbmVyIGVsZW1lbnRzIGZvciBmb3JtXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpXG4gICAgZm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybVwiKVxuICAgIGNvbnN0IG92ZXJsYXlGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG92ZXJsYXlGb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJvdmVybGF5Rm9ybVwiKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQob3ZlcmxheUZvcm0pXG4gICAgLy8gY2xvc2UgZm9ybSAneCcgYnV0dG9uXG4gICAgY29uc3QgY2xvc2VGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNsb3NlRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiY2xvc2VGb3JtXCIpXG4gICAgY2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZUZvcm0oKTtcbiAgICAgICAgcmVtb3ZlRm9ybSgpO1xuICAgIH0pXG4gICAgY2xvc2VGb3JtLmlubmVySFRNTCA9IFwiJnRpbWVzXCJcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChjbG9zZUZvcm0pXG4gICAgLy8gZm9ybSBoZWFkZXJcbiAgICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgZm9ybUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IFRvRG9cIlxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xuXG4gICAgLy8gZm9ybSBlbGVtZW50ICdOYW1lJyBjb250YWluZXIgXG4gICAgY29uc3QgZm9ybUVsZW1lbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZvcm1FbGVtZW50TmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUVsZW1lbnRcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudE5hbWUpXG4gICAgLy8gJ05hbWUnIGlucHV0IGZpZWxkcyAtIHRleHRyXG4gICAgY29uc3QgZm9ybU5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGZvcm1OYW1lTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiTmFtZVwiKVxuICAgIGZvcm1OYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWUgb2YgVG9Eb1wiO1xuICAgIGNvbnN0IGZvcm1OYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBmb3JtTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXG4gICAgZm9ybU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm1OYW1lXCIpXG4gICAgZm9ybU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhsZW5ndGhcIiwgXCIzMFwiKVxuICAgIGZvcm1FbGVtZW50TmFtZS5hcHBlbmQoZm9ybU5hbWVMYWJlbCwgZm9ybU5hbWVJbnB1dCk7XG4gICAgXG4gICAgLy8gZm9ybSAnUHJvamVjdCcgY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUVsZW1lbnRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZvcm1FbGVtZW50UHJvamVjdC5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUVsZW1lbnRcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudFByb2plY3QpXG4gICAgLy8gJ1Byb2plY3QnIGlucHV0IGZpZWxkcyAtIERyb3Bkb3duXG4gICAgY29uc3QgZm9ybVByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGZvcm1Qcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdElucHV0XCIpXG4gICAgZm9ybVByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiU2VsZWN0IHByb2plY3Q6XCI7XG4gICAgY29uc3QgZm9ybVByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIilcbiAgICBmb3JtUHJvamVjdElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0c1wiKVxuICAgIGZvcm1Qcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0SW5wdXRcIilcbiAgICBmb3JtRWxlbWVudFByb2plY3QuYXBwZW5kKGZvcm1Qcm9qZWN0TGFiZWwsIGZvcm1Qcm9qZWN0SW5wdXQpO1xuICAgIC8vIGxvb3AgdGhyb3VnaCBwcm9qZWN0IGFycmF5IHRvIGdyYWIgdGhlIHByb2plY3RzIGZvciB0aGUgZHJvcGRvd25cbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KXtcbiAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gZWxlbWVudDtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gYCR7ZWxlbWVudH1gXG4gICAgICAgIGZvcm1Qcm9qZWN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKVxuICAgIH0pXG5cbiAgICAvLyBmb3JtICdwcmlvcml0eScgY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUVsZW1lbnRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBmb3JtRWxlbWVudFByaW9yaXR5LmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtRWxlbWVudFwiKVxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGZvcm1FbGVtZW50UHJpb3JpdHkpXG4gICAgLy8gJ1ByaW9yaXR5JyBpbnB1dCBmaWVsZHMgLSBEcm9wZG93blxuICAgIGNvbnN0IGZvcm1Qcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgZm9ybVByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlJbnB1dFwiKVxuICAgIGZvcm1Qcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJTZWxlY3QgcHJpb3JpdHk6XCI7XG4gICAgY29uc3QgZm9ybVByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpXG4gICAgZm9ybVByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpXG4gICAgZm9ybVByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eUlucHV0XCIpXG4gICAgZm9ybUVsZW1lbnRQcm9qZWN0LmFwcGVuZChmb3JtUHJpb3JpdHlMYWJlbCwgZm9ybVByaW9yaXR5SW5wdXQpO1xuICAgIC8vIHByaW9yaXR5IGRyb3Bkb3duIG9wdGlvbnNcbiAgICBjb25zdCBwcmlvcml0eVVyZ2VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICBwcmlvcml0eVVyZ2VudC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlVyZ2VudFwiKVxuICAgIHByaW9yaXR5VXJnZW50LnRleHRDb250ZW50ID0gXCJVcmdlbnRcIlxuICAgIGNvbnN0IHByaW9yaXR5Um91dGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIilcbiAgICBwcmlvcml0eVJvdXRpbmUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJSb3V0aW5lXCIpXG4gICAgcHJpb3JpdHlSb3V0aW5lLnRleHRDb250ZW50ID0gXCJSb3V0aW5lXCJcbiAgICBjb25zdCBwcmlvcml0eUJhY2tCdXJuZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpXG4gICAgcHJpb3JpdHlCYWNrQnVybmVyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQmFja2J1cm5lclwiKVxuICAgIHByaW9yaXR5QmFja0J1cm5lci50ZXh0Q29udGVudCA9IFwiQmFjay1CdXJuZXJcIlxuICAgIGZvcm1Qcmlvcml0eUlucHV0LmFwcGVuZChwcmlvcml0eVVyZ2VudCwgcHJpb3JpdHlSb3V0aW5lLCBwcmlvcml0eUJhY2tCdXJuZXIpXG5cbiAgICAvLyBmb3JtICdkYXRlIGR1ZScgY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUVsZW1lbnREdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZm9ybUVsZW1lbnREdWUuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm1FbGVtZW50XCIpXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnREdWUpXG4gICAgLy8gJ2RhdGUgZHVlJyBpbnB1dCBmaWVsZHMgLSBkYXRlIHBpY2tlclxuICAgIGNvbnN0IGZvcm1EdWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKVxuICAgIGZvcm1EdWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkdWVJbnB1dFwiKVxuICAgIGZvcm1EdWVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIGJ5OlwiXG4gICAgY29uc3QgZm9ybUR1ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpXG4gICAgZm9ybUR1ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpXG4gICAgZm9ybUR1ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZHVlSW5wdXRcIilcbiAgICBmb3JtRHVlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZURhdGVcIilcbiAgICBmb3JtRHVlSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIilcbiAgICBmb3JtRWxlbWVudER1ZS5hcHBlbmQoZm9ybUR1ZUxhYmVsLCBmb3JtRHVlSW5wdXQpXG5cbiAgICAvLyBmb3JtIHN1Ym1pdCBidXR0b24gY29udGFpbmVyXG4gICAgY29uc3QgZm9ybUVsZW1lbnRTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZm9ybUVsZW1lbnRTdWJtaXQuY2xhc3NMaXN0LnRvZ2dsZShcImZvcm1FbGVtZW50XCIpXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQoZm9ybUVsZW1lbnRTdWJtaXQpXG4gICAgLy8gc3VibWl0IGJ1dHRvbiBcbiAgICBjb25zdCBmb3JtU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGZvcm1TdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBOZXcgVG9kb1wiXG4gICAgZm9ybVN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBhZGRUb2RvKCk7XG4gICAgICAgIHRvZ2dsZUZvcm0oKTtcbiAgICAgICAgcmVtb3ZlRm9ybSgpO1xuICAgICAgICBjbGVhclRvZG9zKCk7XG4gICAgICAgIHVwZGF0ZU1haW4oKTtcbiAgICAgICAgc3RvcmVUb2RvcygpO1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvQXJyYXkpXG4gICAgfSkgXG5cbiAgICBmb3JtU3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIilcbiAgICBmb3JtU3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0XCIpXG4gICAgZm9ybUVsZW1lbnRTdWJtaXQuYXBwZW5kQ2hpbGQoZm9ybVN1Ym1pdEJ1dHRvbilcbiAgICAvLyBhcHBlbmQgdGhlIGVudGlyZSBmb3JtIGNvbnRhaW5lciB0byB0aGUgYm9keSB3aGVuIGNhbGxlZFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXS5hcHBlbmRDaGlsZChmb3JtKVxuICAgIGNvbnNvbGUubG9nKFwidG9kb0Zvcm0gZnVuY3Rpb24gaXMgZmlyaW5nXCIpXG59XG5cbi8vIGZ1bmN0aW9uIHRvIHRvZ2dsZSBjbGFzcyB0aGF0IGJyaW5ncyB1cCBhIG5ldyB0b2RvIGZvcm1cbmZ1bmN0aW9uIHRvZ2dsZUZvcm0oKXtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVGb3JtXCIpXG59XG4vLyBmdW5jdGlvbiB0byBjYWxsIHdoZW4gY3JlYXRlIGEgbmV3IFRvZG8gZm9ybSBidXR0b24gY2xpY2tlZCwgYWZ0ZXIgY29tcGxldGluZyB0aGUgZm9ybVxuZnVuY3Rpb24gYWRkVG9kbyhuYW1lLCBwcm9qZWN0LCBwcmlvcml0eSwgZHVlRGF0ZSl7XG4gICAgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybU5hbWVcIikudmFsdWU7XG4gICAgcHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdElucHV0XCIpLnZhbHVlO1xuICAgIHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eUlucHV0XCIpLnZhbHVlO1xuICAgIGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZUlucHV0XCIpLnZhbHVlO1xuICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhuYW1lLHByb2plY3QscHJpb3JpdHksZHVlRGF0ZSlcbiAgICBuZXdUb2RvLnB1c2hUb2RvKCk7XG59XG5cbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgZm9ybSBlbGVtZW50IGZyb20gRE9NIHdoZW4gY2xvc2VkXG5mdW5jdGlvbiByZW1vdmVGb3JtKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZvcm1cIilcbiAgICB3aGlsZSAoZWxlbWVudHMubGVuZ3RoID4gMCl7XG4gICAgICAgIGVsZW1lbnRzWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudHNbMF0pXG4gICAgfVxufSBcblxuLy8gKipORVcgUFJPSkVDVCBGT1JNIFxuZnVuY3Rpb24gbmV3UHJvamVjdEZvcm0oKXtcbiAgICAvLyBjb250YWluZXIgZWxlbWVudHMgZm9yIGZvcm1cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcbiAgICBmb3JtLmNsYXNzTGlzdC50b2dnbGUoXCJmb3JtXCIpXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJwb3N0XCIpXG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiwgXCIjXCIpXG4gICAgY29uc3Qgb3ZlcmxheUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgb3ZlcmxheUZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcIm92ZXJsYXlGb3JtXCIpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChvdmVybGF5Rm9ybSlcblxuICAgIC8vIGNsb3NlIGZvcm0gJ3gnIGJ1dHRvblxuICAgIGNvbnN0IGNsb3NlRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBjbG9zZUZvcm0uY2xhc3NMaXN0LnRvZ2dsZShcImNsb3NlRm9ybVwiKVxuICAgIGNsb3NlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0b2dnbGVGb3JtKCk7XG4gICAgICAgIHJlbW92ZUZvcm0oKTtcbiAgICB9KVxuICAgIGNsb3NlRm9ybS5pbm5lckhUTUwgPSBcIiZ0aW1lc1wiXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQoY2xvc2VGb3JtKVxuXG4gICAgLy8gZm9ybSBoZWFkZXJcbiAgICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgZm9ybUhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIGEgbmV3IFByb2plY3RcIlxuICAgIG92ZXJsYXlGb3JtLmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xuXG4gICAgLy8gcHJvamVjdCBuYW1lIGlucHV0XG4gICAgY29uc3QgZm9ybUVsZW1lbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGZvcm1FbGVtZW50TmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUVsZW1lbnRcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChmb3JtRWxlbWVudE5hbWUpXG4gICAgLy8gJ05hbWUnIGlucHV0IGZpZWxkcyAtIHRleHRcbiAgICBjb25zdCBmb3JtTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpXG4gICAgZm9ybU5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJOYW1lXCIpXG4gICAgZm9ybU5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZSBvZiBOZXcgUHJvamVjdFwiO1xuICAgIGNvbnN0IGZvcm1OYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIilcbiAgICBmb3JtTmFtZUlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICBmb3JtTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3UHJvamVjdElucHV0XCIpXG4gICAgZm9ybU5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKVxuICAgIGZvcm1OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm5ld1Byb2plY3RJbnB1dFwiKVxuICAgIGZvcm1OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibWlubGVuZ3RoXCIsIFwiMVwiKVxuICAgIGZvcm1OYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwibWF4bGVuZ3RoXCIsIFwiMzBcIilcbiAgICBmb3JtRWxlbWVudE5hbWUuYXBwZW5kKGZvcm1OYW1lTGFiZWwsIGZvcm1OYW1lSW5wdXQpO1xuXG4gICAgLy8gbGlzdCBvZiBjdXJyZW50IFByb2plY3RzXG4gICAgY29uc3QgY3VycmVudFByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGN1cnJlbnRQcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKFwiY3VycmVudFByb2plY3RzXCIpXG4gICAgb3ZlcmxheUZvcm0uYXBwZW5kQ2hpbGQoY3VycmVudFByb2plY3RzKVxuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpXG4gICAgY3VycmVudFByb2plY3RzVGl0bGUudGV4dENvbnRlbnQgPSBcIkxpc3Qgb2YgQ3VycmVudCBQcm9qZWN0c1wiXG4gICAgY3VycmVudFByb2plY3RzLmFwcGVuZChjdXJyZW50UHJvamVjdHNUaXRsZSlcbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge2N1cnJlbnRQcm9qZWN0cy5hcHBlbmQoZWxlbWVudCArIFwiLCBcIilcbiAgICB9KVxuXG4gICAgLy8gc3VibWl0IG5ldyBwcm9qZWN0IGJ1dHRvblxuICAgIGNvbnN0IG5ld1Byb2plY3RTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbmV3UHJvamVjdFN1Ym1pdC5jbGFzc0xpc3QudG9nZ2xlKFwiZm9ybUVsZW1lbnRcIilcbiAgICBvdmVybGF5Rm9ybS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0U3VibWl0KVxuICAgIC8vIHN1Ym1pdCBidXR0b24gXG4gICAgY29uc3QgbmV3UHJvamVjdFN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBuZXdQcm9qZWN0U3VibWl0QnRuLnRleHRDb250ZW50ID0gXCIrIEFkZCBOZXcgUHJvamVjdFwiXG4gICAgbmV3UHJvamVjdFN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAvLyBjaGVjayB0aGF0IHRoZSBpbnB1dCBpcyB2YWxpZCwgYmVmb3JlIHJ1bm5pbmcgdGhlIHRvZ2dsZSBhbmQgcmVtb3ZlIGZ1bmN0aW9uc1xuICAgICAgICBpZiAoZm9ybU5hbWVJbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgIHB1c2hOZXdQcm9qZWN0KCk7XG4gICAgICAgICAgICB0b2dnbGVGb3JtKCk7XG4gICAgICAgICAgICByZW1vdmVGb3JtKCk7IFxuICAgICAgICAgICAgY2xlYXJQcm9qZWN0TGlzdCgpIFxuICAgICAgICAgICAgcmVmcmVzaFByb2plY3RMaXN0KCk7IFxuICAgICAgICAgICAgc3RvcmVQcm9qZWN0cygpO1xuICAgICAgICB9ICBcbiAgICB9KSBcblxuICAgIG5ld1Byb2plY3RTdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKVxuICAgIG5ld1Byb2plY3RTdWJtaXRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJtaXRcIilcbiAgICBuZXdQcm9qZWN0U3VibWl0LmFwcGVuZENoaWxkKG5ld1Byb2plY3RTdWJtaXRCdG4pXG5cblxuICAgIC8vIGFwcGVuZCBmb3JtIGNvbnRhaW5lciB0byBib2R5XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLmFwcGVuZENoaWxkKGZvcm0pXG59XG5cbmZ1bmN0aW9uIHB1c2hOZXdQcm9qZWN0KCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RJbnB1dFwiKVxuICAgIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3QudmFsdWUpXG59XG5leHBvcnQge1xuICAgIHRvZG9Gb3JtLFxuICAgIHRvZ2dsZUZvcm0sXG4gICAgcmVtb3ZlRm9ybSxcbiAgICBuZXdQcm9qZWN0Rm9ybVxufVxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxuaW1wb3J0IFRvZG8sIHsgZmlsdGVyZWQsIHByb2plY3RBcnJheSwgdG9kb0FycmF5IH0gZnJvbSBcIi4vdG9kb09iamVjdHNcIlxuaW1wb3J0IHVwZGF0ZU1haW4sIHsgY2xlYXJUb2RvcywgdXBkYXRlTWFpbkZpbHRlcmVkIH0gZnJvbSBcIi4vbWFpbkNvbnRlbnRcIlxuaW1wb3J0IHsgdG9nZ2xlRm9ybSwgdG9kb0Zvcm0sIG5ld1Byb2plY3RGb3JtIH0gZnJvbSBcIi4vZm9ybVwiXG5pbXBvcnQgeyByZW5kZXJTaG93Q29tcGxldGVkQnRuIH0gZnJvbSBcIi4vc2hvd0NvbXBsZXRlZFwiXG5pbXBvcnQgeyByZXRyaWV2ZVByb2plY3RzLCByZXRyaWV2ZVRvZG9zIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCJcbi8vIGltcG9ydCB7dG9kb0FycmF5LCBwcm9qZWN0QXJyYXl9IGZyb20gXCIuL3RvZG9PYmplY3RzXCJcbi8vIGdyYWJiaW5nIHRoZSByb290IG5vZGUgZWxlbWVudFxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHJldHJpZXZlUHJvamVjdHMoKVxuICAgIHJldHJpZXZlVG9kb3MoKVxuICAgIGNsZWFyUHJvamVjdExpc3QoKVxuICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpXG4gICAgcmVuZGVyU2hvd0NvbXBsZXRlZEJ0bigpXG59KVxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG5cbi8vIGdyaWQgY29udGFpbmVyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImNvbnRhaW5lclwiKVxuXG4vLyBoZWFkZXJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKFwiaGVhZGVyXCIpXG5oZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvIERvXCJcblxuLy8gbGVmdCBzaWRlYmFyXG5jb25zdCBsZWZ0U2lkZWJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmxlZnRTaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoXCJsZWZ0U2lkZWJhclwiKVxuY29uc3Qgdmlld0FsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG52aWV3QWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJUb2RvcygpO1xuICAgIHVwZGF0ZU1haW4oKTtcbn0pXG52aWV3QWxsLmNsYXNzTGlzdC50b2dnbGUoXCJ2aWV3QWxsXCIpXG52aWV3QWxsLnRleHRDb250ZW50ID0gXCJWaWV3IEFsbCBVbmNvbXBsZXRlZFwiXG5jb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbnByb2plY3RzLmNsYXNzTGlzdC50b2dnbGUoXCJwcm9qZWN0c1wiKVxucHJvamVjdHMudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCJcbmNvbnN0IGFkZE5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5hZGROZXdQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJhZGROZXdQcm9qZWN0XCIpXG5hZGROZXdQcm9qZWN0LnRleHRDb250ZW50ID0gXCIrIEFkZCBOZXcgUHJvamVjdFwiXG5hZGROZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PntcbiAgICBuZXdQcm9qZWN0Rm9ybSgpXG4gICAgdG9nZ2xlRm9ybSgpXG59KVxucHJvamVjdHMuYXBwZW5kQ2hpbGQoYWRkTmV3UHJvamVjdClcblxuY29uc3QgcHJvamVjdEluc3RydWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbnByb2plY3RJbnN0cnVjdGlvbnMudGV4dENvbnRlbnQgPSBcIkxpc3Qgb2YgY3VycmVudCBwcm9qZWN0cywgY2xpY2sgdG8gdmlldyBUb2Rvc1wiXG5wcm9qZWN0SW5zdHJ1Y3Rpb25zLmNsYXNzTGlzdC50b2dnbGUoXCJwcm9qZWN0SW5zdHJ1Y3Rpb25zXCIpXG5wcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0SW5zdHJ1Y3Rpb25zKVxuXG4vLyBwcm9qZWN0cyBjb250YWluZXJcbmNvbnN0IHByb2plY3RMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxucHJvamVjdExpc3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3RMaXN0Q29udGFpbmVyXCIpXG5wcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdENvbnRhaW5lcilcblxuXG4vLyBsb29wIHRocm91Z2ggcHJvamVjdHMgdG8gbGlzdCB0aGVtIG9uIHRoZSBzaWRlIHBhbmVsXG5mdW5jdGlvbiByZWZyZXNoUHJvamVjdExpc3QoKSB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdEFycmF5KVxuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b25Db250YWluZXIpXG4gICAgICAgIHByb2plY3RCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3RCdXR0b25Db250YWluZXJcIilcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIHByb2plY3RMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJwcm9qZWN0QnV0dG9uXCIpXG4gICAgICAgIHByb2plY3RMaXN0LnRleHRDb250ZW50ID0gZWxlbWVudFxuICAgICAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdClcbiAgICAgICAgLy8gZXZlbnQgbGlzdGVuZXJzIGZvciBlYWNoIHByb2plY3QgYnV0dG9uXG4gICAgICAgIHByb2plY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRvZG9zKCk7IC8vdGhpcyBvbmx5IHdvcmtzIG9uY2UhIGRvZXNudCBjbGVhciBhZnRlciB0aGUgZmlyc3QgY2xpY2tcbiAgICAgICAgICAgIHRvZG9BcnJheS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQucHJvamVjdCA9PSBwcm9qZWN0TGlzdC50ZXh0Q29udGVudCl7XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkLnB1c2goZWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaWx0ZXJlZCBhcnJheSBiZWZvcmUgcmVzZXRcIiwgZmlsdGVyZWQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVwZGF0ZU1haW5GaWx0ZXJlZCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZpbHRlcmVkLmxlbmd0aCA9IDBcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbHRlcmVkIGFycmF5IGFmdGVyIHJlc2V0XCIsIGZpbHRlcmVkKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH0pXG59XG4vLyBmdW5jdGlvbiB0byBjbGVhciB0aGUgbGlzdCBvZiBwcm9qZWN0cyBiZWZvcmUgbG9vcGluZyB0aHJvdWdoIHRvIHByZXZlbnQgcmVwZWF0aW5nIG9mIGVsZW1lbnRzXG5mdW5jdGlvbiBjbGVhclByb2plY3RMaXN0ICgpIHtcbiAgICB3aGlsZShwcm9qZWN0TGlzdENvbnRhaW5lci5maXJzdENoaWxkKXtcbiAgICAgICAgcHJvamVjdExpc3RDb250YWluZXIucmVtb3ZlQ2hpbGQocHJvamVjdExpc3RDb250YWluZXIubGFzdENoaWxkKVxuICAgIH1cbn1cblxuLy8gbmVlZCB0byBjcmVhdGUgYSBmdW5jdGlvbiB0aGF0IGNsZWFycyB0aGUgZmlsdGVyZWQgYXJyYXlcblxuXG5cbi8vIG1haW4gY29udGVudFxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbm1haW4uY2xhc3NMaXN0LnRvZ2dsZShcIm1haW5cIilcbmNvbnN0IGFkZE5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5hZGROZXdUb2RvLmNsYXNzTGlzdC50b2dnbGUoXCJhZGROZXdUb2RvXCIpXG5hZGROZXdUb2RvLnRleHRDb250ZW50ID0gXCIrIEFkZCBOZXcgVG9Eb1wiXG5hZGROZXdUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHByb2plY3RBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYWxlcnQgKFwiU3RhcnQgYnkgYWRkaW5nIGEgbmV3IHByb2plY3QhXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9nZ2xlRm9ybSgpXG4gICAgICAgIHRvZG9Gb3JtKClcbiAgICB9XG59KVxuLy8gaGVhZCByb3cgb2YgVG9kb3NcbmNvbnN0IHRvZG9IZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxudG9kb0hlYWQuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9IZWFkXCIpXG5jb25zdCB0b2RvSGVhZFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb25zdCB0b2RvSGVhZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuY29uc3QgdG9kb0hlYWREdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb25zdCB0b2RvSGVhZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5jb25zdCB0b2RvSGVhZENvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuLy8gaGVhZCByb3cgY2xhc3MgdG9nZ2xlc1xudG9kb0hlYWRUb2RvLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvSGVhZEl0ZW1cIilcbnRvZG9IZWFkUHJpb3JpdHkuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9IZWFkSXRlbVwiKVxudG9kb0hlYWREdWUuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9IZWFkSXRlbVwiKVxudG9kb0hlYWRQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvSGVhZEl0ZW1cIilcbnRvZG9IZWFkQ29tcGxldGUuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9IZWFkSXRlbVwiKVxuLy9oZWFkIHJvdyB0ZXh0IGNvbnRlbnRzXG50b2RvSGVhZFRvZG8udGV4dENvbnRlbnQgPSBcIlRvRG9cIlxudG9kb0hlYWRQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIlxudG9kb0hlYWREdWUudGV4dENvbnRlbnQgPSBcIkR1ZSBCeVwiXG50b2RvSGVhZFByb2plY3QudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIlxudG9kb0hlYWRDb21wbGV0ZS50ZXh0Q29udGVudCA9IFwiTWFyayBhcyBDb21wbGV0ZVwiXG4vLyBhcHBlbmRpbmcgVG9kbyBoZWFkIHRvIG1haW5cbm1haW4uYXBwZW5kQ2hpbGQodG9kb0hlYWQpXG50b2RvSGVhZC5hcHBlbmQodG9kb0hlYWRUb2RvLCB0b2RvSGVhZFByaW9yaXR5LCB0b2RvSGVhZER1ZSwgdG9kb0hlYWRQcm9qZWN0LCB0b2RvSGVhZENvbXBsZXRlKVxuXG5jb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxudG9kb0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb0NvbnRhaW5lclwiKVxubWFpbi5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKVxubWFpbi5pbnNlcnRCZWZvcmUoYWRkTmV3VG9kbywgbWFpbi5maXJzdENoaWxkKVxuXG4vLyBmb290ZXJcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbmZvb3Rlci5jbGFzc0xpc3QudG9nZ2xlKFwiZm9vdGVyXCIpXG5mb290ZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZWQgYnkgSm9yZGFuIFVsbWVyLCAyMDIyXCJcbi8vIGFwcGVuZGluZyB0byB0aGUgcGFyZW50IGVsZW1lbnRzXG5jb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcbmNvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBsZWZ0U2lkZWJhciwgbWFpbiwgZm9vdGVyKVxubGVmdFNpZGViYXIuYXBwZW5kKHZpZXdBbGwsIHByb2plY3RzKVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgbWFpblxudXBkYXRlTWFpbigpXG5cbmV4cG9ydCB7XG4gICAgcmVmcmVzaFByb2plY3RMaXN0LFxuICAgIGNsZWFyUHJvamVjdExpc3Rcbn1cblxuXG5cblxuIiwiaW1wb3J0IHsgcmVmcmVzaFByb2plY3RMaXN0IH0gZnJvbSBcIi4vaW5kZXhcIlxuaW1wb3J0IHVwZGF0ZU1haW4gZnJvbSBcIi4vbWFpbkNvbnRlbnRcIlxuaW1wb3J0IHsgcHJvamVjdEFycmF5LCB0b2RvQXJyYXkgfSBmcm9tIFwiLi90b2RvT2JqZWN0c1wiXG5cbmxldCB0b2RvSlNPTkhvbGRlciA9IFwiXCJcbmxldCBwcm9qZWN0SlNPTkhvbGRlciA9IFwiXCJcbmxldCBsb2NhbFByb2plY3RBcnJheSA9IFtdXG5sZXQgbG9jYWxUb2RvQXJyYXkgPSBbXVxuXG5cblxuXG4vLyByZXRyaWV2ZSB0aGUgdG9kb3MgZnJvbSBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiByZXRyaWV2ZVRvZG9zICgpIHtcbiAgICB0b2RvSlNPTkhvbGRlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RvcmVkVG9kb3NcIilcbiAgICBsb2NhbFRvZG9BcnJheSA9IEpTT04ucGFyc2UodG9kb0pTT05Ib2xkZXIpXG4gICAgaWYgKHRvZG9KU09OSG9sZGVyICE9PSBudWxsKXtcbiAgICAgICAgbG9jYWxUb2RvQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHRvZG9BcnJheS5wdXNoKGVsZW1lbnQpKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0b2RvQXJyYXkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHVwZGF0ZU1haW4oKSAgIFxuICAgICAgICB9XG4gICAgfVxuXG4vLyByZXRyaWV2ZSB0aGUgcHJvamVjdHMgZnJvbSBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiByZXRyaWV2ZVByb2plY3RzICgpIHtcbiAgICBwcm9qZWN0SlNPTkhvbGRlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic3RvcmVkUHJvamVjdHNcIilcbiAgICBsb2NhbFByb2plY3RBcnJheSA9IEpTT04ucGFyc2UocHJvamVjdEpTT05Ib2xkZXIpXG4gICAgaWYgKHByb2plY3RKU09OSG9sZGVyICE9PSBudWxsKXtcbiAgICAgICAgbG9jYWxQcm9qZWN0QXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHByb2plY3RBcnJheS5wdXNoKGVsZW1lbnQpKVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9qZWN0QXJyYXkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJlZnJlc2hQcm9qZWN0TGlzdCgpXG4gICAgICAgIH1cbiAgICB9XG5cblxuLy8gc3RvcmUgdGhlIHRvZG9zIGluIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIHN0b3JlVG9kb3MgKCl7XG4gICAgaWYgKHRvZG9BcnJheSAhPT0gbnVsbCl7XG4gICAgICAgIGNvbnN0IHRvZG9KU09OID0gSlNPTi5zdHJpbmdpZnkodG9kb0FycmF5KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdG9yZWRUb2Rvc1wiLCB0b2RvSlNPTilcbiAgICB9IFxufVxuLy8gc3RvcmUgdGhlIHByb2plY3RzIGluIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIHN0b3JlUHJvamVjdHMgKCkge1xuICAgIGlmIChwcm9qZWN0QXJyYXkgIT09IG51bGwpe1xuICAgICAgICBjb25zdCBwcm9qZWN0SlNPTiA9IEpTT04uc3RyaW5naWZ5KHByb2plY3RBcnJheSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic3RvcmVkUHJvamVjdHNcIiwgcHJvamVjdEpTT04pXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IHtcbiAgICBzdG9yZVRvZG9zLFxuICAgIHN0b3JlUHJvamVjdHMsXG4gICAgcmV0cmlldmVUb2RvcyxcbiAgICByZXRyaWV2ZVByb2plY3RzLFxufSIsIi8vIGltcG9ydGluZyB0aGUgYXJyYXlzIGFuZCB0aGUgRE9NIGVsZW1lbnRcbmltcG9ydCB7Y29tcGxldGVkVG9kb3MsIGZpbHRlcmVkLCBwcm9qZWN0QXJyYXksdG9kb0FycmF5IH0gZnJvbSBcIi4vdG9kb09iamVjdHNcIjtcbmltcG9ydCB0b2RvRm9ybSBmcm9tIFwiLi9mb3JtXCI7XG5pbXBvcnQgeyBzdG9yZVRvZG9zIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbi8vIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgYXBwZW5kIHRoZSBtYWluIHNlY3Rpb24gd2l0aCBlYWNoIHRvZG9cbmZ1bmN0aW9uIHVwZGF0ZU1haW4gKCkge1xuICAgIHRvZG9BcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpXG4gICAgICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9Db250YWluZXJcIilcbiAgICAgICAgY29uc3QgdG9kb0hlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZG9IZWFkXCIpXG4gICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9Db21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICAgICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICB0b2RvLmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvXCIpXG4gICAgICAgIHRvZG9Db21wbGV0ZUJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb0NvbXBsZXRCdG5cIilcbiAgICAgICAgdG9kb0NvbXBsZXRlQnRuLnRleHRDb250ZW50ID0gXCLinJTvuI9cIlxuICAgICAgICB0b2RvTmFtZS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb05hbWVcIilcbiAgICAgICAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvUHJpb3JpdHlcIilcbiAgICAgICAgdG9kb1Byb2plY3QuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9Qcm9qZWN0XCIpXG4gICAgICAgIHRvZG9IZWFkLmFmdGVyKHRvZG9Db250YWluZXIpXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKHRvZG8pXG4gICAgICAgIHRvZG8uYXBwZW5kKHRvZG9OYW1lLCB0b2RvUHJpb3JpdHksIHRvZG9EdWVEYXRlLCB0b2RvUHJvamVjdCwgdG9kb0NvbXBsZXRlQnRuKVxuICAgICAgICAvLyBldmVudGxpc3RlbmVyIGZvciBjb21wbGV0ZSBidXR0b25cbiAgICAgICAgdG9kb0NvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBwdXNoIHRvZG8gdG8gY29tcGxldGVkIFxuICAgICAgICAgICAgY29tcGxldGVkVG9kb3MucHVzaChlbGVtZW50KVxuICAgICAgICAgICAgLy8gbG9naWMgaGVyZSB0byByZW1vdmUgdGhpcyBzaW5nbGUgaW5zdGFuY2VcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIucmVtb3ZlQ2hpbGQodG9kbylcbiAgICAgICAgICAgIHRvZG9BcnJheS5zcGxpY2UodG9kb0FycmF5LmluZGV4T2YoZWxlbWVudCksIDEpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9kb0FycmF5KVxuICAgICAgICAgICAgc3RvcmVUb2RvcygpXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGxvb3BzIG92ZXIgZWFjaCBvYmplY3QgYW5kIGV4dHJhY3RzIHRoZSB2YWx1ZS4gKHRleHRDb250ZW50IGZvciBub3csIHdpbGwgY2hhbmdlIGxhdGVyKVxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZWxlbWVudCl7XG4gICAgICAgICAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpb3JpdHk7XG4gICAgICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZHVlRGF0ZTtcbiAgICAgICAgICAgIHRvZG9Qcm9qZWN0LnRleHRDb250ZW50ID0gZWxlbWVudC5wcm9qZWN0O1xuICAgICAgICAgICAgdG9kby5hcHBlbmQoKVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU1haW5GaWx0ZXJlZCAoKSB7XG4gICAgZmlsdGVyZWQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKVxuICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvQ29udGFpbmVyXCIpXG4gICAgICAgIGNvbnN0IHRvZG9IZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvSGVhZFwiKVxuICAgICAgICBjb25zdCB0b2RvQ29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgdG9kby5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb1wiKVxuICAgICAgICB0b2RvQ29tcGxldGVCdG4uY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9Db21wbGV0QnRuXCIpXG4gICAgICAgIHRvZG9Db21wbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwi4pyU77iPXCJcbiAgICAgICAgdG9kb05hbWUuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9OYW1lXCIpXG4gICAgICAgIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb1ByaW9yaXR5XCIpXG4gICAgICAgIHRvZG9Qcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvUHJvamVjdFwiKVxuICAgICAgICB0b2RvSGVhZC5hZnRlcih0b2RvQ29udGFpbmVyKVxuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCh0b2RvKVxuICAgICAgICB0b2RvLmFwcGVuZCh0b2RvTmFtZSwgdG9kb1ByaW9yaXR5LCB0b2RvRHVlRGF0ZSwgdG9kb1Byb2plY3QsIHRvZG9Db21wbGV0ZUJ0bilcbiAgICAgICAgLy8gZXZlbnRsaXN0ZW5lciBmb3IgY29tcGxldGUgYnV0dG9uXG4gICAgICAgIHRvZG9Db21wbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gcHVzaCB0aGUgdG9kbyBPYmplY3QgaW50byB0aGUgY29tcGxldGVkIHRvZG9zXG4gICAgICAgICAgICBjb21wbGV0ZWRUb2Rvcy5wdXNoKGVsZW1lbnQpXG4gICAgICAgICAgICAvLyBsb2dpYyBoZXJlIHRvIHJlbW92ZSB0aGlzIHNpbmdsZSBpbnN0YW5jZVxuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5yZW1vdmVDaGlsZCh0b2RvKVxuICAgICAgICAgICAgdG9kb0FycmF5LnNwbGljZSh0b2RvQXJyYXkuaW5kZXhPZihlbGVtZW50KSwgMSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvQXJyYXkpXG4gICAgICAgIH0pXG4gICAgICAgIC8vIGxvb3BzIG92ZXIgZWFjaCBvYmplY3QgYW5kIGV4dHJhY3RzIHRoZSB2YWx1ZS4gKHRleHRDb250ZW50IGZvciBub3csIHdpbGwgY2hhbmdlIGxhdGVyKVxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gZWxlbWVudCl7XG4gICAgICAgICAgICB0b2RvTmFtZS50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IGVsZW1lbnQucHJpb3JpdHk7XG4gICAgICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGVsZW1lbnQuZHVlRGF0ZTtcbiAgICAgICAgICAgIHRvZG9Qcm9qZWN0LnRleHRDb250ZW50ID0gZWxlbWVudC5wcm9qZWN0O1xuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQoKVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cblxuXG4vLyBmdW5jdGlvbiB0byBjbGVhciB0aGUgdG9kbyBsaXN0LCB1c2VkIHdoZW4gZmlsdGVyaW5nIGJ5IHByb2plY3RzIE5PVCBXT1JLSU5HXG5mdW5jdGlvbiBjbGVhclRvZG9zICgpIHtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvQ29udGFpbmVyXCIpXG4gICAgd2hpbGUgKHRvZG9Db250YWluZXIuZmlyc3RDaGlsZCl7XG4gICAgICAgIHRvZG9Db250YWluZXIucmVtb3ZlQ2hpbGQodG9kb0NvbnRhaW5lci5sYXN0Q2hpbGQpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiY2xlYXJUb2RvcyBpcyBmaXJpbmdcIilcbn1cblxuXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVNYWluXG5leHBvcnQge1xuICAgIHVwZGF0ZU1haW5GaWx0ZXJlZCxcbiAgICBjbGVhclRvZG9zLFxufSIsImltcG9ydCB7IGNsZWFyVG9kb3MgfSBmcm9tIFwiLi9tYWluQ29udGVudFwiXG5pbXBvcnQgeyBjb21wbGV0ZWRUb2RvcyB9IGZyb20gXCIuL3RvZG9PYmplY3RzXCJcblxuZnVuY3Rpb24gcmVuZGVyU2hvd0NvbXBsZXRlZEJ0bigpIHtcbiAgICAvLyBjcmVhdGUgY29udGFpbmVyIGZvciBDb21wbGV0ZWQgVG9Eb3MgYnV0dG9uIGFuZCBidXR0b24gXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKVxuICAgIGNvbnN0IGNvbXBsZXRlZFRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29tcGxldGVkVG9kb0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkVG9kb0NvbnRhaW5lclwiKVxuICAgIGNvbnN0IGNvbXBsZXRlZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgY29tcGxldGVkVG9kb0J0bi5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkVG9kb0J0blwiKVxuICAgIGNvbXBsZXRlZFRvZG9CdG4udGV4dENvbnRlbnQgPSBcIlNob3cgQ29tcGxldGVkIFRvRG9zXCJcbiAgICBjb21wbGV0ZWRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHJlbmRlckNvbXBsZXRlZCgpXG4gICAgfSlcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbXBsZXRlZFRvZG9Db250YWluZXIpXG4gICAgY29tcGxldGVkVG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZWRUb2RvQnRuKVxufVxuXG5mdW5jdGlvbiByZW5kZXJDb21wbGV0ZWQoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKVxuICAgIGNsZWFyVG9kb3MoKVxuICAgIGNvbXBsZXRlZFRvZG9zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIilcbiAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kb0NvbnRhaW5lclwiKVxuICAgICAgICBjb25zdCB0b2RvQ29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIGNvbnN0IHRvZG9OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0b2RvUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgdG9kby5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb1wiKVxuICAgICAgICB0b2RvLmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIilcbiAgICAgICAgdG9kb05hbWUuY2xhc3NMaXN0LnRvZ2dsZShcInRvZG9OYW1lXCIpXG4gICAgICAgIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QudG9nZ2xlKFwidG9kb1ByaW9yaXR5XCIpXG4gICAgICAgIHRvZG9Qcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoXCJ0b2RvUHJvamVjdFwiKVxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRvZG9Db250YWluZXIpXG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kbylcbiAgICAgICAgdG9kby5hcHBlbmQodG9kb05hbWUsIHRvZG9Qcmlvcml0eSwgdG9kb0R1ZURhdGUsIHRvZG9Qcm9qZWN0KVxuICAgICAgICAvLyBldmVudGxpc3RlbmVyIGZvciBjb21wbGV0ZSBidXR0b25cbiAgICAgICAgdG9kb0NvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBwdXNoIHRoZSB0b2RvIE9iamVjdCBpbnRvIHRoZSBjb21wbGV0ZWQgdG9kb3NcbiAgICAgICAgICAgIGNvbXBsZXRlZFRvZG9zLnB1c2goZWxlbWVudClcbiAgICAgICAgICAgIC8vIGxvZ2ljIGhlcmUgdG8gcmVtb3ZlIHRoaXMgc2luZ2xlIGluc3RhbmNlXG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLnJlbW92ZUNoaWxkKHRvZG8pXG4gICAgICAgICAgICB0b2RvQXJyYXkuc3BsaWNlKHRvZG9BcnJheS5pbmRleE9mKGVsZW1lbnQpLCAxKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9BcnJheSlcbiAgICAgICAgfSlcbiAgICAgICAgLy8gbG9vcHMgb3ZlciBlYWNoIG9iamVjdCBhbmQgZXh0cmFjdHMgdGhlIHZhbHVlLiAodGV4dENvbnRlbnQgZm9yIG5vdywgd2lsbCBjaGFuZ2UgbGF0ZXIpXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBlbGVtZW50KXtcbiAgICAgICAgICAgIHRvZG9OYW1lLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgICAgICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gZWxlbWVudC5wcmlvcml0eTtcbiAgICAgICAgICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gZWxlbWVudC5kdWVEYXRlO1xuICAgICAgICAgICAgdG9kb1Byb2plY3QudGV4dENvbnRlbnQgPSBlbGVtZW50LnByb2plY3Q7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZCgpXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IHtcbiAgICByZW5kZXJTaG93Q29tcGxldGVkQnRuLFxuICAgIHJlbmRlckNvbXBsZXRlZFxufSIsImxldCBwcm9qZWN0QXJyYXkgPSBbXS8vcHVzaCB0aGUgcHJvamVjdCBuYW1lIG9mIHdoZW4gYSBuZXcgdG9kbyBpcyBtYWRlIGluIGhlcmVcbmxldCB0b2RvQXJyYXkgPSBbXSAvL3B1c2ggZWFjaCB0b2RvIG9iamVjdCBpbnRvIHRoaXMgYXJyYXkgdG8gbGlzdCB0aGVtIGVhc2llclxubGV0IGZpbHRlcmVkID0gW10gLy9pbml0aWFsaXNpbmcgYW4gZW1wdHkgYXJyYXkgZm9yIGZpbHRlcmluZyB0b2Rvc1xubGV0IGNvbXBsZXRlZFRvZG9zID0gW10gLy9pbml0aWFsaXNpbmcgYW4gYXJyYXkgdG8gaG9sZCBjb21wbGV0ZWQgdG9kb3NcblxuLy8gZmFjdG9yeSBmdW5jdGlvbiBmb3IgbmV3IFRvZG8gb2JqZWN0c1xuZnVuY3Rpb24gVG9kbyAobmFtZSwgcHJvamVjdCwgcHJpb3JpdHksIGR1ZURhdGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wdXNoVG9kbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0b2RvQXJyYXkucHVzaCh0aGlzKVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUb2RvIFxuZXhwb3J0IHtcbiAgICBwcm9qZWN0QXJyYXksXG4gICAgdG9kb0FycmF5LFxuICAgIGZpbHRlcmVkLFxuICAgIGNvbXBsZXRlZFRvZG9zXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9