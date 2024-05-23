"use strict";
(self["webpackChunkproject_template"] = self["webpackChunkproject_template"] || []).push([["main"],{

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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf */ "./src/fonts/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Plus_Jakarta_Sans/PlusJakartaSans-Italic-VariableFont_wght.ttf */ "./src/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Italic-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/weather-app-background.jpg */ "./src/images/weather-app-background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Jakarta";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}),
    url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

:root {
  --weather-app-height: 900px;
  --element-background-color: rgb(0, 0, 0, 0.6);
  --element-border-radius: 5px;
  --max-temp-color: rgb(243, 200, 10);
  --min-temp-color: rgb(180, 229, 255);
}

* {
  font-family: "Jakarta", "sans-serif";
  color: white;
}

#background {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover;
  background-repeat: no-repeat;
}

#weather-content-container {
  display: grid;
  grid-template: calc((var(--weather-app-height) / 4) * 3) 1fr / 1fr 2fr 1fr;
  gap: 10px;
}

#detail-weather {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  display: grid;
  grid-template: 1fr 1fr 1fr 1fr / 1fr;
  gap: 20px;
  padding: 30px;
}

.detail-weather-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--element-background-color);
  border-radius: var(--element-border-radius);
  padding: 20px;
  gap: 20px;
}

.detail-weather-container img {
  height: 60px;
  aspect-ratio: 1/1;
}

.detail-weather-info {
  display: flex;
  flex-direction: column;
}

#current-weather {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  display: grid;
  grid-template: 4fr 0.5fr 0.5fr / 1fr;
  padding: 30px;
  margin: 30px;
  gap: 20px;
  background-color: var(--element-background-color);
  border-radius: var(--element-border-radius);
}

#current-weather-sun-container {
  display: flex;
  flex-direction: row;
  gap: 60px;
}

.sun-title {
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 5px;
}

#current-weather-sunrise,
#current-weather-sunset {
  font-size: 22px;
  font-weight: 800;
}

#current-weather-bot-container {
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 20px;
}

#daily-forecast {
  grid-row: 1 / 2;
  grid-column: 3 / 4;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.daily-forecast-container {
  background-color: var(--element-background-color);
  border-radius: var(--element-border-radius);
  padding: 30px;
}

#hourly-forecast {
  grid-row: 2 / 3;
  grid-column: 1 / 4;
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.hourly-forecast-container {
  background-color: var(--element-background-color);
  border-radius: var(--element-border-radius);
  padding: 20px;
}

.hourly-time {
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 10px;
}

.hourly-temp {
  font-size: 28px;
  font-weight: 800;
}

.hourly-text {
  font-size: 16px;
  font-weight: 300;
}

.detail-weather-title {
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 5px;
}

.detail-weather-value {
  font-size: 20px;
  font-weight: 800;
}

#current-weather-temp {
  font-size: 100px;
  font-weight: 800;
  margin-top: -20px;
}

#current-weather-max-min-container {
  display: flex;
  flex-direction: row;
  gap: 40px;
}

#current-weather-max-temp {
  font-size: 20px;
  font-weight: 800;
  color: black;
  background-color: var(--max-temp-color);
  padding: 5px 10px;
  border-radius: var(--element-border-radius);
}

#current-weather-min-temp {
  font-size: 20px;
  font-weight: 800;
  color: black;
  background-color: var(--min-temp-color);
  padding: 5px 10px;
  border-radius: var(--element-border-radius);
}

#current-weather-temp-container {
  display: flex;
  flex-direction: column;
}

#current-weather-top-container {
  display: flex;
  flex-direction: row;
  gap: 30px;
}

#current-weather-location {
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 10px;
}

#current-weather-text {
  font-size: 80px;
  font-weight: 200;
  margin-top: 20px;
}

#current-weather-date-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 15px;
  font-size: 20px;
}

#current-weather-temp-icon-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#current-weather-icon img {
  height: 80px;
  width: 80px;
}

#current-weather-day {
  font-weight: 800;
}

#location {
  color: black;
  font-size: 24px;
  font-weight: 500;
  padding: 5px 10px;
  outline: none;
  border: none;
  border-radius: var(--element-border-radius);
}

#search-button {
  font-size: 20px;
  font-weight: 600;
  padding: 5px 10px;
  outline: none;
  border: none;
  background-color: rgb(130, 144, 22);
  border-radius: var(--element-border-radius);
}

#search-button:hover {
  background-color: rgb(101, 112, 20);
}

#change-temp {
  font-size: 20px;
  font-weight: 600;
  padding: 5px 10px;
  outline: none;
  border: none;
  background-color: rgb(130, 144, 22);
  border-radius: var(--element-border-radius);
}

#change-temp:hover {
  background-color: rgb(101, 112, 20);
}

.daily-day-name {
  font-size: 24px;
  font-weight: 800;
}

.daily-name-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
}

.daily-rain-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 10px;
}

.daily-chance-of-rain-title,
.daily-precip-title {
  font-size: 16px;
  font-weight: 300;
}

.daily-chance-of-rain,
.daily-precip {
  font-size: 20px;
  font-weight: 800;
  margin-top: 5px;
}

.daily-temp-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.daily-max-temp,
.daily-min-temp {
  color: black;
  font-size: 20px;
  font-weight: 800;
  border-radius: var(--element-border-radius);
  padding: 5px 10px;
  margin: 10px 0;
}

.daily-max-temp {
  background-color: var(--max-temp-color);
}

.daily-min-temp {
  background: var(--min-temp-color);
}

@media only screen and (max-width: 1300px) {
  #weather-content-container {
    display: flex;
    flex-direction: column;
  }
  #current-weather {
    order: 1;
    grid-template: 2fr 0.5fr 0.5fr / 1fr;
  }
  #hourly-forecast {
    order: 2;
  }
  #daily-forecast {
    order: 4;
  }
  #detail-weather {
    order: 3;
  }
  #current-weather-bot-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #change-temp,
  #search-button {
    width: 100%;
  }
  #location {
    width: 95%;
    margin-bottom: -15px;
  }
  #current-weather-temp-icon-container {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  #current-weather-temp {
    font-size: clamp(40px, 15vw, 120px);
    text-wrap: nowrap;
    margin: 10px 0;
  }
  #current-weather-text {
    font-size: clamp(40px, 15vw, 80px);
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: \"Jakarta\";\n  src: url(\"./fonts/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf\"),\n    url(\"./fonts/Plus_Jakarta_Sans/PlusJakartaSans-Italic-VariableFont_wght.ttf\");\n}\n\n:root {\n  --weather-app-height: 900px;\n  --element-background-color: rgb(0, 0, 0, 0.6);\n  --element-border-radius: 5px;\n  --max-temp-color: rgb(243, 200, 10);\n  --min-temp-color: rgb(180, 229, 255);\n}\n\n* {\n  font-family: \"Jakarta\", \"sans-serif\";\n  color: white;\n}\n\n#background {\n  background-image: url(./images/weather-app-background.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n#weather-content-container {\n  display: grid;\n  grid-template: calc((var(--weather-app-height) / 4) * 3) 1fr / 1fr 2fr 1fr;\n  gap: 10px;\n}\n\n#detail-weather {\n  grid-row: 1 / 2;\n  grid-column: 1 / 2;\n  display: grid;\n  grid-template: 1fr 1fr 1fr 1fr / 1fr;\n  gap: 20px;\n  padding: 30px;\n}\n\n.detail-weather-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: var(--element-background-color);\n  border-radius: var(--element-border-radius);\n  padding: 20px;\n  gap: 20px;\n}\n\n.detail-weather-container img {\n  height: 60px;\n  aspect-ratio: 1/1;\n}\n\n.detail-weather-info {\n  display: flex;\n  flex-direction: column;\n}\n\n#current-weather {\n  grid-row: 1 / 2;\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template: 4fr 0.5fr 0.5fr / 1fr;\n  padding: 30px;\n  margin: 30px;\n  gap: 20px;\n  background-color: var(--element-background-color);\n  border-radius: var(--element-border-radius);\n}\n\n#current-weather-sun-container {\n  display: flex;\n  flex-direction: row;\n  gap: 60px;\n}\n\n.sun-title {\n  font-size: 18px;\n  font-weight: 300;\n  margin-bottom: 5px;\n}\n\n#current-weather-sunrise,\n#current-weather-sunset {\n  font-size: 22px;\n  font-weight: 800;\n}\n\n#current-weather-bot-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: left;\n  gap: 20px;\n}\n\n#daily-forecast {\n  grid-row: 1 / 2;\n  grid-column: 3 / 4;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.daily-forecast-container {\n  background-color: var(--element-background-color);\n  border-radius: var(--element-border-radius);\n  padding: 30px;\n}\n\n#hourly-forecast {\n  grid-row: 2 / 3;\n  grid-column: 1 / 4;\n  padding: 30px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 20px;\n}\n\n.hourly-forecast-container {\n  background-color: var(--element-background-color);\n  border-radius: var(--element-border-radius);\n  padding: 20px;\n}\n\n.hourly-time {\n  font-size: 20px;\n  font-weight: 300;\n  margin-bottom: 10px;\n}\n\n.hourly-temp {\n  font-size: 28px;\n  font-weight: 800;\n}\n\n.hourly-text {\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.detail-weather-title {\n  font-size: 16px;\n  font-weight: 300;\n  margin-bottom: 5px;\n}\n\n.detail-weather-value {\n  font-size: 20px;\n  font-weight: 800;\n}\n\n#current-weather-temp {\n  font-size: 100px;\n  font-weight: 800;\n  margin-top: -20px;\n}\n\n#current-weather-max-min-container {\n  display: flex;\n  flex-direction: row;\n  gap: 40px;\n}\n\n#current-weather-max-temp {\n  font-size: 20px;\n  font-weight: 800;\n  color: black;\n  background-color: var(--max-temp-color);\n  padding: 5px 10px;\n  border-radius: var(--element-border-radius);\n}\n\n#current-weather-min-temp {\n  font-size: 20px;\n  font-weight: 800;\n  color: black;\n  background-color: var(--min-temp-color);\n  padding: 5px 10px;\n  border-radius: var(--element-border-radius);\n}\n\n#current-weather-temp-container {\n  display: flex;\n  flex-direction: column;\n}\n\n#current-weather-top-container {\n  display: flex;\n  flex-direction: row;\n  gap: 30px;\n}\n\n#current-weather-location {\n  font-size: 20px;\n  font-weight: 300;\n  margin-bottom: 10px;\n}\n\n#current-weather-text {\n  font-size: 80px;\n  font-weight: 200;\n  margin-top: 20px;\n}\n\n#current-weather-date-container {\n  display: flex;\n  flex-direction: row;\n  gap: 10px;\n  margin-bottom: 15px;\n  font-size: 20px;\n}\n\n#current-weather-temp-icon-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n#current-weather-icon img {\n  height: 80px;\n  width: 80px;\n}\n\n#current-weather-day {\n  font-weight: 800;\n}\n\n#location {\n  color: black;\n  font-size: 24px;\n  font-weight: 500;\n  padding: 5px 10px;\n  outline: none;\n  border: none;\n  border-radius: var(--element-border-radius);\n}\n\n#search-button {\n  font-size: 20px;\n  font-weight: 600;\n  padding: 5px 10px;\n  outline: none;\n  border: none;\n  background-color: rgb(130, 144, 22);\n  border-radius: var(--element-border-radius);\n}\n\n#search-button:hover {\n  background-color: rgb(101, 112, 20);\n}\n\n#change-temp {\n  font-size: 20px;\n  font-weight: 600;\n  padding: 5px 10px;\n  outline: none;\n  border: none;\n  background-color: rgb(130, 144, 22);\n  border-radius: var(--element-border-radius);\n}\n\n#change-temp:hover {\n  background-color: rgb(101, 112, 20);\n}\n\n.daily-day-name {\n  font-size: 24px;\n  font-weight: 800;\n}\n\n.daily-name-container {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 20px;\n}\n\n.daily-rain-container {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n  margin-top: 10px;\n}\n\n.daily-chance-of-rain-title,\n.daily-precip-title {\n  font-size: 16px;\n  font-weight: 300;\n}\n\n.daily-chance-of-rain,\n.daily-precip {\n  font-size: 20px;\n  font-weight: 800;\n  margin-top: 5px;\n}\n\n.daily-temp-container {\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n}\n\n.daily-max-temp,\n.daily-min-temp {\n  color: black;\n  font-size: 20px;\n  font-weight: 800;\n  border-radius: var(--element-border-radius);\n  padding: 5px 10px;\n  margin: 10px 0;\n}\n\n.daily-max-temp {\n  background-color: var(--max-temp-color);\n}\n\n.daily-min-temp {\n  background: var(--min-temp-color);\n}\n\n@media only screen and (max-width: 1300px) {\n  #weather-content-container {\n    display: flex;\n    flex-direction: column;\n  }\n  #current-weather {\n    order: 1;\n    grid-template: 2fr 0.5fr 0.5fr / 1fr;\n  }\n  #hourly-forecast {\n    order: 2;\n  }\n  #daily-forecast {\n    order: 4;\n  }\n  #detail-weather {\n    order: 3;\n  }\n  #current-weather-bot-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  #change-temp,\n  #search-button {\n    width: 100%;\n  }\n  #location {\n    width: 95%;\n    margin-bottom: -15px;\n  }\n  #current-weather-temp-icon-container {\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    flex-wrap: wrap;\n  }\n  #current-weather-temp {\n    font-size: clamp(40px, 15vw, 120px);\n    text-wrap: nowrap;\n    margin: 10px 0;\n  }\n  #current-weather-text {\n    font-size: clamp(40px, 15vw, 80px);\n  }\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _js_modules_loadImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js_modules/loadImages */ "./src/js_modules/loadImages.js");
/* harmony import */ var _js_modules_getWeatherData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js_modules/getWeatherData */ "./src/js_modules/getWeatherData.js");
/* harmony import */ var _js_modules_clearDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js_modules/clearDisplay */ "./src/js_modules/clearDisplay.js");
/* harmony import */ var _js_modules_displayWeatherData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js_modules/displayWeatherData */ "./src/js_modules/displayWeatherData.js");
/* harmony import */ var _js_modules_changeTempUnit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js_modules/changeTempUnit */ "./src/js_modules/changeTempUnit.js");
/* harmony import */ var _js_modules_getSearchLocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js_modules/getSearchLocation */ "./src/js_modules/getSearchLocation.js");









const searchButton = document.querySelector("#search-button");
const changeTempButton = document.querySelector("#change-temp");

document.addEventListener("DOMContentLoaded", () => {
  (0,_js_modules_getWeatherData__WEBPACK_IMPORTED_MODULE_2__["default"])("vienna")
    .then((weatherData) => {
      (0,_js_modules_clearDisplay__WEBPACK_IMPORTED_MODULE_3__["default"])();
      (0,_js_modules_displayWeatherData__WEBPACK_IMPORTED_MODULE_4__["default"])(weatherData);
    })
    .catch((error) => {
      console.error(
        "Error fetching weather data while DOMContentLoaded:",
        error,
      );
    });
});


searchButton.addEventListener("click", () => {
  const searchLocation = (0,_js_modules_getSearchLocation__WEBPACK_IMPORTED_MODULE_6__["default"])();
  if (searchLocation) {
    (0,_js_modules_getWeatherData__WEBPACK_IMPORTED_MODULE_2__["default"])(searchLocation)
    .then((weatherData) => {
      const errorMessage = document.querySelector("#error-message");
      if (weatherData.error) {
        errorMessage.textContent = weatherData.error.message;
      } else {
        errorMessage.textContent = "";
        (0,_js_modules_clearDisplay__WEBPACK_IMPORTED_MODULE_3__["default"])();
        (0,_js_modules_displayWeatherData__WEBPACK_IMPORTED_MODULE_4__["default"])(weatherData);
      }
    })
    .catch((error) => {
      console.error(
        "Error fetching weather data while getSearchLocation:",
        error,
      );
    });
  }
});

changeTempButton.addEventListener("click", () => {
  (0,_js_modules_changeTempUnit__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_js_modules_clearDisplay__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_js_modules_displayWeatherData__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_js_modules_getWeatherData__WEBPACK_IMPORTED_MODULE_2__.getCurrentWeatherData)());
});

/***/ }),

/***/ "./src/js_modules/changeTempUnit.js":
/*!******************************************!*\
  !*** ./src/js_modules/changeTempUnit.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changeTempUnit)
/* harmony export */ });
/* harmony import */ var _getCurrentTempUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentTempUnit */ "./src/js_modules/getCurrentTempUnit.js");
/* harmony import */ var _getCurrentTempUnitText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCurrentTempUnitText */ "./src/js_modules/getCurrentTempUnitText.js");



function changeTempUnit() {
  (0,_getCurrentTempUnit__WEBPACK_IMPORTED_MODULE_0__.toggleTempUnit)();
  (0,_getCurrentTempUnitText__WEBPACK_IMPORTED_MODULE_1__.toggleTempUnitText)();
}


/***/ }),

/***/ "./src/js_modules/clearDisplay.js":
/*!****************************************!*\
  !*** ./src/js_modules/clearDisplay.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearDisplay)
/* harmony export */ });

const currentWeatherIcon = document.querySelector("#current-weather-icon");
const dailyForecast = document.querySelector("#daily-forecast");
const hourlyForecast = document.querySelector("#hourly-forecast");

function clearDisplay () {
    currentWeatherIcon.textContent = "";
    dailyForecast.textContent = "";
    hourlyForecast.textContent = "";
}

/***/ }),

/***/ "./src/js_modules/createWeatherElement.js":
/*!************************************************!*\
  !*** ./src/js_modules/createWeatherElement.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createWeatherElement)
/* harmony export */ });
function createWeatherElement(className, textContent, parentContainer) {
    const element = document.createElement("div");
    element.className = className;
    element.textContent = textContent;
    parentContainer.appendChild(element);
  }

/***/ }),

/***/ "./src/js_modules/createWeatherElementAndTitle.js":
/*!********************************************************!*\
  !*** ./src/js_modules/createWeatherElementAndTitle.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createWeatherElementAndTitle)
/* harmony export */ });
/* harmony import */ var _createWeatherElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWeatherElement */ "./src/js_modules/createWeatherElement.js");
/* harmony import */ var _createWeatherElementTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createWeatherElementTitle */ "./src/js_modules/createWeatherElementTitle.js");



function createWeatherElementAndTitle(
    className,
    textContent,
    title,
    parentContainer
  ) {
    (0,_createWeatherElementTitle__WEBPACK_IMPORTED_MODULE_1__["default"])(className, title, parentContainer);
    (0,_createWeatherElement__WEBPACK_IMPORTED_MODULE_0__["default"])(className, textContent, parentContainer);
  }

/***/ }),

/***/ "./src/js_modules/createWeatherElementIcon.js":
/*!****************************************************!*\
  !*** ./src/js_modules/createWeatherElementIcon.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createWeatherElementIcon)
/* harmony export */ });
function createWeatherElementIcon(className, imgSrc, parentContainer) {
    const icon = document.createElement("div");
    icon.classList.add(className);
    const img = document.createElement("img");
    img.src = imgSrc;
    icon.appendChild(img);
    parentContainer.appendChild(icon);
  }

/***/ }),

/***/ "./src/js_modules/createWeatherElementTitle.js":
/*!*****************************************************!*\
  !*** ./src/js_modules/createWeatherElementTitle.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createWeatherElementTitle)
/* harmony export */ });

function createWeatherElementTitle(className, title, parentContainer) {
    const elementTitle = document.createElement("div");
    elementTitle.className = `${className}-title`;
    elementTitle.textContent = title;
    parentContainer.appendChild(elementTitle);
  }

/***/ }),

/***/ "./src/js_modules/displayCurrentData.js":
/*!**********************************************!*\
  !*** ./src/js_modules/displayCurrentData.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayCurrentData)
/* harmony export */ });
/* harmony import */ var _getCurrentTempUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentTempUnit */ "./src/js_modules/getCurrentTempUnit.js");
/* harmony import */ var _getCurrentTempUnitText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCurrentTempUnitText */ "./src/js_modules/getCurrentTempUnitText.js");
/* harmony import */ var _weekDayArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weekDayArray */ "./src/js_modules/weekDayArray.js");
/* harmony import */ var _monthArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monthArray */ "./src/js_modules/monthArray.js");





function displayCurrentData(weatherData) {
  const currentTemp = document.querySelector("#current-weather-temp");
  const currentLocation = document.querySelector("#current-weather-location");
  const currentText = document.querySelector("#current-weather-text");
  const currentIcon = document.querySelector("#current-weather-icon");
  const currentSunrise = document.querySelector("#current-weather-sunrise");
  const currentSunset = document.querySelector("#current-weather-sunset");
  const currentDay = document.querySelector("#current-weather-day");
  const currentDate = document.querySelector("#current-weather-date");
  const currentMaxTemp = document.querySelector("#current-weather-max-temp");
  const currentMinTemp = document.querySelector("#current-weather-min-temp");
  currentTemp.textContent =
    weatherData.current[`temp_${(0,_getCurrentTempUnit__WEBPACK_IMPORTED_MODULE_0__["default"])()}`] +
    " " +
    (0,_getCurrentTempUnitText__WEBPACK_IMPORTED_MODULE_1__["default"])();
  currentMaxTemp.textContent =
    weatherData.forecast.forecastday[0].day[`maxtemp_${(0,_getCurrentTempUnit__WEBPACK_IMPORTED_MODULE_0__["default"])()}`] +
    " " +
    (0,_getCurrentTempUnitText__WEBPACK_IMPORTED_MODULE_1__["default"])();
  currentMinTemp.textContent =
    weatherData.forecast.forecastday[0].day[`mintemp_${(0,_getCurrentTempUnit__WEBPACK_IMPORTED_MODULE_0__["default"])()}`] +
    " " +
    (0,_getCurrentTempUnitText__WEBPACK_IMPORTED_MODULE_1__["default"])();
  currentLocation.textContent =
    weatherData.location.name + ", " + weatherData.location.country;
  currentText.textContent = weatherData.current.condition.text;
  const localTime = new Date(weatherData.location.localtime);
  currentDay.textContent = _weekDayArray__WEBPACK_IMPORTED_MODULE_2__["default"][localTime.getDay()] + ", ";
  currentDate.textContent =
    `${localTime.getDate()}` +
    ". " +
    _monthArray__WEBPACK_IMPORTED_MODULE_3__["default"][localTime.getMonth()] +
    " " +
    `${localTime.getFullYear()}`;
  currentSunrise.textContent =
    weatherData.forecast.forecastday[0].astro.sunrise;
  currentSunset.textContent = weatherData.forecast.forecastday[0].astro.sunset;
  const img = document.createElement("img");
  img.src = weatherData.current.condition.icon;
  currentIcon.appendChild(img);
}


/***/ }),

/***/ "./src/js_modules/displayDailyForecast.js":
/*!************************************************!*\
  !*** ./src/js_modules/displayDailyForecast.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayDailyForecast)
/* harmony export */ });
/* harmony import */ var _getCurrentTempUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentTempUnit */ "./src/js_modules/getCurrentTempUnit.js");
/* harmony import */ var _getCurrentTempUnitText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCurrentTempUnitText */ "./src/js_modules/getCurrentTempUnitText.js");
/* harmony import */ var _weekDayArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weekDayArray */ "./src/js_modules/weekDayArray.js");
/* harmony import */ var _createWeatherElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createWeatherElement */ "./src/js_modules/createWeatherElement.js");
/* harmony import */ var _createWeatherElementIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createWeatherElementIcon */ "./src/js_modules/createWeatherElementIcon.js");
/* harmony import */ var _createWeatherElementAndTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createWeatherElementAndTitle */ "./src/js_modules/createWeatherElementAndTitle.js");







function displayDailyForecast(weatherData) {
  const daysArray = [1, 2];
  for (let i = 0; i < daysArray.length; i++) {
    createDailyForecast(weatherData, daysArray[i]);
  }
}

function createDailyForecast(weatherData, day) {
  const dailyForecast = document.querySelector("#daily-forecast");
  const dailyForecastContainer = document.createElement("div");
  dailyForecastContainer.classList.add("daily-forecast-container");

  const dailyNameContainer = document.createElement("div");
  dailyNameContainer.classList.add("daily-name-container");
  const dailyTempContainer = document.createElement("div");
  dailyTempContainer.classList.add("daily-temp-container");
  const dailyRainContainer = document.createElement("div");
  dailyRainContainer.classList.add("daily-rain-container");
  const dailyDate = new Date(weatherData.forecast.forecastday[day].date);
  const dailyChanceOfRainContainer = document.createElement(
    "daily-chance-of-rain-container",
  );
  const dailyPrecipContainer = document.createElement("daily-precip-container");
  dailyRainContainer.appendChild(dailyChanceOfRainContainer);
  dailyRainContainer.appendChild(dailyPrecipContainer);
  const fragment = document.createDocumentFragment();
  fragment.appendChild(dailyNameContainer);
  fragment.appendChild(dailyTempContainer);
  fragment.appendChild(dailyRainContainer);
  dailyForecastContainer.appendChild(fragment);
  dailyForecast.appendChild(dailyForecastContainer);

  (0,_createWeatherElement__WEBPACK_IMPORTED_MODULE_3__["default"])(
    "daily-day-name",
    _weekDayArray__WEBPACK_IMPORTED_MODULE_2__["default"][dailyDate.getDay()],
    dailyNameContainer,
  );

  (0,_createWeatherElementIcon__WEBPACK_IMPORTED_MODULE_4__["default"])(
    "daily-day-icon",
    weatherData.forecast.forecastday[day].day.condition.icon,
    dailyNameContainer,
  );

  (0,_createWeatherElementAndTitle__WEBPACK_IMPORTED_MODULE_5__["default"])(
    "daily-chance-of-rain",
    `${weatherData.forecast.forecastday[day].day.daily_chance_of_rain}%`,
    "Chance of Rain",
    dailyChanceOfRainContainer,
  );

  (0,_createWeatherElementAndTitle__WEBPACK_IMPORTED_MODULE_5__["default"])(
    "daily-precip",
    `${weatherData.forecast.forecastday[day].day.totalprecip_mm} mm`,
    "Precip",
    dailyPrecipContainer,
  );

  (0,_createWeatherElement__WEBPACK_IMPORTED_MODULE_3__["default"])(
    "daily-max-temp",
    weatherData.forecast.forecastday[day].day[
      `maxtemp_${(0,_getCurrentTempUnit__WEBPACK_IMPORTED_MODULE_0__["default"])()}`
    ] +
      " " +
      (0,_getCurrentTempUnitText__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    dailyTempContainer,
  );

  (0,_createWeatherElement__WEBPACK_IMPORTED_MODULE_3__["default"])(
    "daily-min-temp",
    weatherData.forecast.forecastday[day].day[
      `mintemp_${(0,_getCurrentTempUnit__WEBPACK_IMPORTED_MODULE_0__["default"])()}`
    ] +
      " " +
      (0,_getCurrentTempUnitText__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    dailyTempContainer,
  );
}


/***/ }),

/***/ "./src/js_modules/displayDetailWeather.js":
/*!************************************************!*\
  !*** ./src/js_modules/displayDetailWeather.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayDetailWeather)
/* harmony export */ });
/* harmony import */ var _getCurrentTempUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentTempUnit */ "./src/js_modules/getCurrentTempUnit.js");
/* harmony import */ var _getCurrentTempUnitText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCurrentTempUnitText */ "./src/js_modules/getCurrentTempUnitText.js");



function displayDetailWeather(weatherData) {
  const feelsLike = document.querySelector("#detail-weather-feels-like");
  const chanceOfRain = document.querySelector("#detail-weather-chance-of-rain");
  const cloudCover = document.querySelector("#detail-weather-cloud-cover");
  const windSpeed = document.querySelector("#detail-weather-wind-speed");
  const humidity = document.querySelector("#detail-weather-humidity");

  feelsLike.textContent =
    weatherData.current[`feelslike_${(0,_getCurrentTempUnit__WEBPACK_IMPORTED_MODULE_0__["default"])()}`] +
    " " +
    (0,_getCurrentTempUnitText__WEBPACK_IMPORTED_MODULE_1__["default"])();
  chanceOfRain.textContent =
    weatherData.forecast.forecastday[0].day.daily_chance_of_rain +
    "% |  " +
    weatherData.forecast.forecastday[0].day.totalprecip_mm +
    " mm";
  cloudCover.textContent = weatherData.current.cloud + "%";
  windSpeed.textContent = weatherData.current.wind_kph + " km/h";
  humidity.textContent = weatherData.current.humidity + "%";
}


/***/ }),

/***/ "./src/js_modules/displayHourlyForecast.js":
/*!*************************************************!*\
  !*** ./src/js_modules/displayHourlyForecast.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayHourlyForecast)
/* harmony export */ });
/* harmony import */ var _getCurrentTempUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCurrentTempUnit */ "./src/js_modules/getCurrentTempUnit.js");
/* harmony import */ var _getCurrentTempUnitText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCurrentTempUnitText */ "./src/js_modules/getCurrentTempUnitText.js");
/* harmony import */ var _createWeatherElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createWeatherElement */ "./src/js_modules/createWeatherElement.js");
/* harmony import */ var _createWeatherElementIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createWeatherElementIcon */ "./src/js_modules/createWeatherElementIcon.js");





function displayHourlyForecast(weatherData) {
  const hoursArray = [3, 6, 9, 12, 15, 18, 21];
  const hoursTextArray = [
    "3:00 am",
    "6:00 am",
    "9:00 am",
    "12:00 pm",
    "3:00 pm",
    "6:00 pm",
    "9:00 pm",
  ];
  for (let i = 0; i < hoursArray.length; i++) {
    createHourlyForecast(weatherData, 0, hoursArray[i], hoursTextArray[i]);
  }
  createHourlyForecast(weatherData, 1, 0, "12:00 am");
}

function createHourlyForecast(weatherData, day, hour, hourText) {
  const hourlyForecast = document.querySelector("#hourly-forecast");
  const hourlyForecastContainer = document.createElement("div");
  hourlyForecastContainer.classList.add("hourly-forecast-container");
  hourlyForecast.appendChild(hourlyForecastContainer);

  (0,_createWeatherElement__WEBPACK_IMPORTED_MODULE_2__["default"])("hourly-time", hourText, hourlyForecastContainer);

  (0,_createWeatherElement__WEBPACK_IMPORTED_MODULE_2__["default"])(
    "hourly-temp",
    weatherData.forecast.forecastday[day].hour[hour][
      `temp_${(0,_getCurrentTempUnit__WEBPACK_IMPORTED_MODULE_0__["default"])()}`
    ] +
      " " +
      (0,_getCurrentTempUnitText__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    hourlyForecastContainer,
  );

  (0,_createWeatherElement__WEBPACK_IMPORTED_MODULE_2__["default"])(
    "hourly-text",
    weatherData.forecast.forecastday[day].hour[hour].condition.text,
    hourlyForecastContainer,
  );

  (0,_createWeatherElementIcon__WEBPACK_IMPORTED_MODULE_3__["default"])(
    "hourly-icon",
    weatherData.forecast.forecastday[day].hour[hour].condition.icon,
    hourlyForecastContainer,
  );
}


/***/ }),

/***/ "./src/js_modules/displayWeatherData.js":
/*!**********************************************!*\
  !*** ./src/js_modules/displayWeatherData.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayWeatherData)
/* harmony export */ });
/* harmony import */ var _displayCurrentData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayCurrentData */ "./src/js_modules/displayCurrentData.js");
/* harmony import */ var _displayDetailWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayDetailWeather */ "./src/js_modules/displayDetailWeather.js");
/* harmony import */ var _displayDailyForecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayDailyForecast */ "./src/js_modules/displayDailyForecast.js");
/* harmony import */ var _displayHourlyForecast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayHourlyForecast */ "./src/js_modules/displayHourlyForecast.js");







function displayWeatherData(weatherData) {
    (0,_displayCurrentData__WEBPACK_IMPORTED_MODULE_0__["default"])(weatherData);
    (0,_displayDetailWeather__WEBPACK_IMPORTED_MODULE_1__["default"])(weatherData);
    (0,_displayDailyForecast__WEBPACK_IMPORTED_MODULE_2__["default"])(weatherData);
    (0,_displayHourlyForecast__WEBPACK_IMPORTED_MODULE_3__["default"])(weatherData);
  }

/***/ }),

/***/ "./src/js_modules/getCurrentTempUnit.js":
/*!**********************************************!*\
  !*** ./src/js_modules/getCurrentTempUnit.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCurrentTempUnit),
/* harmony export */   toggleTempUnit: () => (/* binding */ toggleTempUnit)
/* harmony export */ });
let tempUnit = "c";

function getCurrentTempUnit() {
    return tempUnit;
  }

  function toggleTempUnit() {
    tempUnit = tempUnit === "c" ? "f" : "c";
  }

/***/ }),

/***/ "./src/js_modules/getCurrentTempUnitText.js":
/*!**************************************************!*\
  !*** ./src/js_modules/getCurrentTempUnitText.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getCurrentTempUnitText),
/* harmony export */   toggleTempUnitText: () => (/* binding */ toggleTempUnitText)
/* harmony export */ });
let tempUnitText = "°C";

function getCurrentTempUnitText() {
  return tempUnitText;
}

function toggleTempUnitText() {
  tempUnitText = tempUnitText === "°C" ? "°F" : "°C";
}


/***/ }),

/***/ "./src/js_modules/getSearchLocation.js":
/*!*********************************************!*\
  !*** ./src/js_modules/getSearchLocation.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSearchLocation)
/* harmony export */ });
function getSearchLocation() {
  const errorMessage = document.querySelector("#error-message");
  const locationInput = document.querySelector("#location");
  let location = locationInput.value;
  if (location !== "") {
    errorMessage.textContent = "";
    return location;
  } else {
    errorMessage.textContent = "Please fill in a location";
    return false;
  }
}




/***/ }),

/***/ "./src/js_modules/getWeatherData.js":
/*!******************************************!*\
  !*** ./src/js_modules/getWeatherData.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherData),
/* harmony export */   getCurrentWeatherData: () => (/* binding */ getCurrentWeatherData)
/* harmony export */ });
let currentWeatherData = "";

async function getWeatherData(location) {
  const errorMessage = document.querySelector("#error-message");
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=0624f9944b85464e84c120405240405&q=${location}&days=3`,
      { mode: "cors" },
    );
    const weatherData = await response.json();
    currentWeatherData = weatherData;
    return weatherData
  } catch (error) {
    errorMessage.textContent = "Please fill in a valid location";
    console.error("Error fetching weather data:", error);
  }
}

function getCurrentWeatherData() {
  return currentWeatherData;
}


/***/ }),

/***/ "./src/js_modules/loadImages.js":
/*!**************************************!*\
  !*** ./src/js_modules/loadImages.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_feelslike_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/feelslike.png */ "./src/images/feelslike.png");
/* harmony import */ var _images_rain_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/rain.png */ "./src/images/rain.png");
/* harmony import */ var _images_cloud_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/cloud.png */ "./src/images/cloud.png");
/* harmony import */ var _images_wind_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/wind.png */ "./src/images/wind.png");
/* harmony import */ var _images_humidity_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/humidity.png */ "./src/images/humidity.png");






const feelslikeContainer = document.querySelector("#feelslike-image");
feelslikeContainer.src = _images_feelslike_png__WEBPACK_IMPORTED_MODULE_0__;

const chanceOfRainContainer = document.querySelector("#chance-of-rain-image");
chanceOfRainContainer.src = _images_rain_png__WEBPACK_IMPORTED_MODULE_1__;

const cloudCoverContainer = document.querySelector("#cloud-cover-image");
cloudCoverContainer.src = _images_cloud_png__WEBPACK_IMPORTED_MODULE_2__;

const windSpeedContainer = document.querySelector("#wind-speed-image");
windSpeedContainer.src = _images_wind_png__WEBPACK_IMPORTED_MODULE_3__;

const humidityContainer = document.querySelector("#humidity-image");
humidityContainer.src = _images_humidity_png__WEBPACK_IMPORTED_MODULE_4__;


/***/ }),

/***/ "./src/js_modules/monthArray.js":
/*!**************************************!*\
  !*** ./src/js_modules/monthArray.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "Juli",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (monthArray);


/***/ }),

/***/ "./src/js_modules/weekDayArray.js":
/*!****************************************!*\
  !*** ./src/js_modules/weekDayArray.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const weekDayArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weekDayArray);


/***/ }),

/***/ "./src/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Italic-VariableFont_wght.ttf":
/*!**********************************************************************************!*\
  !*** ./src/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Italic-VariableFont_wght.ttf ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8eca6f78230e2b1fc1f5.ttf";

/***/ }),

/***/ "./src/fonts/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf":
/*!***************************************************************************!*\
  !*** ./src/fonts/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "91a892b057d3b1e6c20b.ttf";

/***/ }),

/***/ "./src/images/cloud.png":
/*!******************************!*\
  !*** ./src/images/cloud.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d98e22364f525d8777c.png";

/***/ }),

/***/ "./src/images/feelslike.png":
/*!**********************************!*\
  !*** ./src/images/feelslike.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85a76ac301e855fc8b19.png";

/***/ }),

/***/ "./src/images/humidity.png":
/*!*********************************!*\
  !*** ./src/images/humidity.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15d73868ad2573809061.png";

/***/ }),

/***/ "./src/images/rain.png":
/*!*****************************!*\
  !*** ./src/images/rain.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "78f7a7a195c88b153c52.png";

/***/ }),

/***/ "./src/images/weather-app-background.jpg":
/*!***********************************************!*\
  !*** ./src/images/weather-app-background.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59a2568f24b23420438b.jpg";

/***/ }),

/***/ "./src/images/wind.png":
/*!*****************************!*\
  !*** ./src/images/wind.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7d89e16a82936624d5d.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMk1BQWtGO0FBQzlILDRDQUE0Qyx5TkFBeUY7QUFDckksNENBQTRDLG1KQUFzRDtBQUNsRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hELFVBQVUsbUNBQW1DO0FBQzdDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVB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Ozs7Ozs7Ozs7Ozs7O0FDcEJnRDtBQUNGO0FBQ0Q7QUFDRjtBQUNHOztBQUU5QztBQUNBLHlCQUF5QixrREFBUzs7QUFFbEM7QUFDQSw0QkFBNEIsNkNBQVk7O0FBRXhDO0FBQ0EsMEJBQTBCLDhDQUFVOztBQUVwQztBQUNBLHlCQUF5Qiw2Q0FBUzs7QUFFbEM7QUFDQSx3QkFBd0IsaURBQVE7Ozs7Ozs7Ozs7Ozs7OztBQ25CaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2YxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvanNfbW9kdWxlcy9jaGFuZ2VUZW1wVW5pdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2pzX21vZHVsZXMvY2xlYXJEaXNwbGF5LmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvanNfbW9kdWxlcy9jcmVhdGVXZWF0aGVyRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2pzX21vZHVsZXMvY3JlYXRlV2VhdGhlckVsZW1lbnRBbmRUaXRsZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2pzX21vZHVsZXMvY3JlYXRlV2VhdGhlckVsZW1lbnRJY29uLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvanNfbW9kdWxlcy9jcmVhdGVXZWF0aGVyRWxlbWVudFRpdGxlLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvanNfbW9kdWxlcy9kaXNwbGF5Q3VycmVudERhdGEuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9qc19tb2R1bGVzL2Rpc3BsYXlEYWlseUZvcmVjYXN0LmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvanNfbW9kdWxlcy9kaXNwbGF5RGV0YWlsV2VhdGhlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2pzX21vZHVsZXMvZGlzcGxheUhvdXJseUZvcmVjYXN0LmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvanNfbW9kdWxlcy9kaXNwbGF5V2VhdGhlckRhdGEuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9qc19tb2R1bGVzL2dldEN1cnJlbnRUZW1wVW5pdC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2pzX21vZHVsZXMvZ2V0Q3VycmVudFRlbXBVbml0VGV4dC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXRlbXBsYXRlLy4vc3JjL2pzX21vZHVsZXMvZ2V0U2VhcmNoTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC10ZW1wbGF0ZS8uL3NyYy9qc19tb2R1bGVzL2dldFdlYXRoZXJEYXRhLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvanNfbW9kdWxlcy9sb2FkSW1hZ2VzLmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvanNfbW9kdWxlcy9tb250aEFycmF5LmpzIiwid2VicGFjazovL3Byb2plY3QtdGVtcGxhdGUvLi9zcmMvanNfbW9kdWxlcy93ZWVrRGF5QXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvUGx1c19KYWthcnRhX1NhbnMvUGx1c0pha2FydGFTYW5zLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvUGx1c19KYWthcnRhX1NhbnMvUGx1c0pha2FydGFTYW5zLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy93ZWF0aGVyLWFwcC1iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiSmFrYXJ0YVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSxcbiAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbjpyb290IHtcbiAgLS13ZWF0aGVyLWFwcC1oZWlnaHQ6IDkwMHB4O1xuICAtLWVsZW1lbnQtYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNik7XG4gIC0tZWxlbWVudC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0tbWF4LXRlbXAtY29sb3I6IHJnYigyNDMsIDIwMCwgMTApO1xuICAtLW1pbi10ZW1wLWNvbG9yOiByZ2IoMTgwLCAyMjksIDI1NSk7XG59XG5cbioge1xuICBmb250LWZhbWlseTogXCJKYWthcnRhXCIsIFwic2Fucy1zZXJpZlwiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNiYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4jd2VhdGhlci1jb250ZW50LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IGNhbGMoKHZhcigtLXdlYXRoZXItYXBwLWhlaWdodCkgLyA0KSAqIDMpIDFmciAvIDFmciAyZnIgMWZyO1xuICBnYXA6IDEwcHg7XG59XG5cbiNkZXRhaWwtd2VhdGhlciB7XG4gIGdyaWQtcm93OiAxIC8gMjtcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIDFmciAxZnIgLyAxZnI7XG4gIGdhcDogMjBweDtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLmRldGFpbC13ZWF0aGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVsZW1lbnQtYmFja2dyb3VuZC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWVsZW1lbnQtYm9yZGVyLXJhZGl1cyk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGdhcDogMjBweDtcbn1cblxuLmRldGFpbC13ZWF0aGVyLWNvbnRhaW5lciBpbWcge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xufVxuXG4uZGV0YWlsLXdlYXRoZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNjdXJyZW50LXdlYXRoZXIge1xuICBncmlkLXJvdzogMSAvIDI7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogNGZyIDAuNWZyIDAuNWZyIC8gMWZyO1xuICBwYWRkaW5nOiAzMHB4O1xuICBtYXJnaW46IDMwcHg7XG4gIGdhcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWxlbWVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZWxlbWVudC1ib3JkZXItcmFkaXVzKTtcbn1cblxuI2N1cnJlbnQtd2VhdGhlci1zdW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiA2MHB4O1xufVxuXG4uc3VuLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbiNjdXJyZW50LXdlYXRoZXItc3VucmlzZSxcbiNjdXJyZW50LXdlYXRoZXItc3Vuc2V0IHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4jY3VycmVudC13ZWF0aGVyLWJvdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gIGdhcDogMjBweDtcbn1cblxuI2RhaWx5LWZvcmVjYXN0IHtcbiAgZ3JpZC1yb3c6IDEgLyAyO1xuICBncmlkLWNvbHVtbjogMyAvIDQ7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLmRhaWx5LWZvcmVjYXN0LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVsZW1lbnQtYmFja2dyb3VuZC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWVsZW1lbnQtYm9yZGVyLXJhZGl1cyk7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbiNob3VybHktZm9yZWNhc3Qge1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgcGFkZGluZzogMzBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XG4gIGdhcDogMjBweDtcbn1cblxuLmhvdXJseS1mb3JlY2FzdC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lbGVtZW50LWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1lbGVtZW50LWJvcmRlci1yYWRpdXMpO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uaG91cmx5LXRpbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5ob3VybHktdGVtcCB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmhvdXJseS10ZXh0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZGV0YWlsLXdlYXRoZXItdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmRldGFpbC13ZWF0aGVyLXZhbHVlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4jY3VycmVudC13ZWF0aGVyLXRlbXAge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuI2N1cnJlbnQtd2VhdGhlci1tYXgtbWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogNDBweDtcbn1cblxuI2N1cnJlbnQtd2VhdGhlci1tYXgtdGVtcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXgtdGVtcC1jb2xvcik7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1lbGVtZW50LWJvcmRlci1yYWRpdXMpO1xufVxuXG4jY3VycmVudC13ZWF0aGVyLW1pbi10ZW1wIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pbi10ZW1wLWNvbG9yKTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWVsZW1lbnQtYm9yZGVyLXJhZGl1cyk7XG59XG5cbiNjdXJyZW50LXdlYXRoZXItdGVtcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jY3VycmVudC13ZWF0aGVyLXRvcC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBnYXA6IDMwcHg7XG59XG5cbiNjdXJyZW50LXdlYXRoZXItbG9jYXRpb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbiNjdXJyZW50LXdlYXRoZXItdGV4dCB7XG4gIGZvbnQtc2l6ZTogODBweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuI2N1cnJlbnQtd2VhdGhlci1kYXRlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jY3VycmVudC13ZWF0aGVyLXRlbXAtaWNvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbiNjdXJyZW50LXdlYXRoZXItaWNvbiBpbWcge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4jY3VycmVudC13ZWF0aGVyLWRheSB7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbiNsb2NhdGlvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1lbGVtZW50LWJvcmRlci1yYWRpdXMpO1xufVxuXG4jc2VhcmNoLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTQ0LCAyMik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWVsZW1lbnQtYm9yZGVyLXJhZGl1cyk7XG59XG5cbiNzZWFyY2gtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMSwgMTEyLCAyMCk7XG59XG5cbiNjaGFuZ2UtdGVtcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTQ0LCAyMik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWVsZW1lbnQtYm9yZGVyLXJhZGl1cyk7XG59XG5cbiNjaGFuZ2UtdGVtcDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDEsIDExMiwgMjApO1xufVxuXG4uZGFpbHktZGF5LW5hbWUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5kYWlseS1uYW1lLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuLmRhaWx5LXJhaW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZGFpbHktY2hhbmNlLW9mLXJhaW4tdGl0bGUsXG4uZGFpbHktcHJlY2lwLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZGFpbHktY2hhbmNlLW9mLXJhaW4sXG4uZGFpbHktcHJlY2lwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5kYWlseS10ZW1wLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogMjBweDtcbn1cblxuLmRhaWx5LW1heC10ZW1wLFxuLmRhaWx5LW1pbi10ZW1wIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWVsZW1lbnQtYm9yZGVyLXJhZGl1cyk7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLmRhaWx5LW1heC10ZW1wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWF4LXRlbXAtY29sb3IpO1xufVxuXG4uZGFpbHktbWluLXRlbXAge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1taW4tdGVtcC1jb2xvcik7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gICN3ZWF0aGVyLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgI2N1cnJlbnQtd2VhdGhlciB7XG4gICAgb3JkZXI6IDE7XG4gICAgZ3JpZC10ZW1wbGF0ZTogMmZyIDAuNWZyIDAuNWZyIC8gMWZyO1xuICB9XG4gICNob3VybHktZm9yZWNhc3Qge1xuICAgIG9yZGVyOiAyO1xuICB9XG4gICNkYWlseS1mb3JlY2FzdCB7XG4gICAgb3JkZXI6IDQ7XG4gIH1cbiAgI2RldGFpbC13ZWF0aGVyIHtcbiAgICBvcmRlcjogMztcbiAgfVxuICAjY3VycmVudC13ZWF0aGVyLWJvdC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gICNjaGFuZ2UtdGVtcCxcbiAgI3NlYXJjaC1idXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICNsb2NhdGlvbiB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTVweDtcbiAgfVxuICAjY3VycmVudC13ZWF0aGVyLXRlbXAtaWNvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gICNjdXJyZW50LXdlYXRoZXItdGVtcCB7XG4gICAgZm9udC1zaXplOiBjbGFtcCg0MHB4LCAxNXZ3LCAxMjBweCk7XG4gICAgdGV4dC13cmFwOiBub3dyYXA7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cbiAgI2N1cnJlbnQtd2VhdGhlci10ZXh0IHtcbiAgICBmb250LXNpemU6IGNsYW1wKDQwcHgsIDE1dncsIDgwcHgpO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCOzJDQUMrRTtBQUNqRjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw2Q0FBNkM7RUFDN0MsNEJBQTRCO0VBQzVCLG1DQUFtQztFQUNuQyxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7RUFD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VCxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxtQ0FBbUM7SUFDbkMsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGtDQUFrQztFQUNwQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJKYWthcnRhXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2ZvbnRzL1BsdXNfSmFrYXJ0YV9TYW5zL1BsdXNKYWthcnRhU2Fucy1WYXJpYWJsZUZvbnRfd2dodC50dGZcXFwiKSxcXG4gICAgdXJsKFxcXCIuL2ZvbnRzL1BsdXNfSmFrYXJ0YV9TYW5zL1BsdXNKYWthcnRhU2Fucy1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmXFxcIik7XFxufVxcblxcbjpyb290IHtcXG4gIC0td2VhdGhlci1hcHAtaGVpZ2h0OiA5MDBweDtcXG4gIC0tZWxlbWVudC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC42KTtcXG4gIC0tZWxlbWVudC1ib3JkZXItcmFkaXVzOiA1cHg7XFxuICAtLW1heC10ZW1wLWNvbG9yOiByZ2IoMjQzLCAyMDAsIDEwKTtcXG4gIC0tbWluLXRlbXAtY29sb3I6IHJnYigxODAsIDIyOSwgMjU1KTtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIkpha2FydGFcXFwiLCBcXFwic2Fucy1zZXJpZlxcXCI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbiNiYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltYWdlcy93ZWF0aGVyLWFwcC1iYWNrZ3JvdW5kLmpwZyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuI3dlYXRoZXItY29udGVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IGNhbGMoKHZhcigtLXdlYXRoZXItYXBwLWhlaWdodCkgLyA0KSAqIDMpIDFmciAvIDFmciAyZnIgMWZyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jZGV0YWlsLXdlYXRoZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgMWZyIDFmciAvIDFmcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxufVxcblxcbi5kZXRhaWwtd2VhdGhlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWxlbWVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWVsZW1lbnQtYm9yZGVyLXJhZGl1cyk7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uZGV0YWlsLXdlYXRoZXItY29udGFpbmVyIGltZyB7XFxuICBoZWlnaHQ6IDYwcHg7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG59XFxuXFxuLmRldGFpbC13ZWF0aGVyLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IDRmciAwLjVmciAwLjVmciAvIDFmcjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBtYXJnaW46IDMwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lbGVtZW50LWJhY2tncm91bmQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZWxlbWVudC1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1zdW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZ2FwOiA2MHB4O1xcbn1cXG5cXG4uc3VuLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItc3VucmlzZSxcXG4jY3VycmVudC13ZWF0aGVyLXN1bnNldCB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLWJvdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbiNkYWlseS1mb3JlY2FzdCB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5kYWlseS1mb3JlY2FzdC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWxlbWVudC1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWVsZW1lbnQtYm9yZGVyLXJhZGl1cyk7XFxuICBwYWRkaW5nOiAzMHB4O1xcbn1cXG5cXG4jaG91cmx5LWZvcmVjYXN0IHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5ob3VybHktZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVsZW1lbnQtYmFja2dyb3VuZC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1lbGVtZW50LWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmhvdXJseS10aW1lIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uaG91cmx5LXRlbXAge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuLmhvdXJseS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5kZXRhaWwtd2VhdGhlci10aXRsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uZGV0YWlsLXdlYXRoZXItdmFsdWUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogMTAwcHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbWFyZ2luLXRvcDogLTIwcHg7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItbWF4LW1pbi1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItbWF4LXRlbXAge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1heC10ZW1wLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZWxlbWVudC1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1taW4tdGVtcCB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWluLXRlbXAtY29sb3IpO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1lbGVtZW50LWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLXRlbXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jY3VycmVudC13ZWF0aGVyLXRvcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBnYXA6IDMwcHg7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItbG9jYXRpb24ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItdGV4dCB7XFxuICBmb250LXNpemU6IDgwcHg7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kYXRlLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNjdXJyZW50LXdlYXRoZXItdGVtcC1pY29uLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1pY29uIGltZyB7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG59XFxuXFxuI2N1cnJlbnQtd2VhdGhlci1kYXkge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuI2xvY2F0aW9uIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1lbGVtZW50LWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4jc2VhcmNoLWJ1dHRvbiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMCwgMTQ0LCAyMik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1lbGVtZW50LWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4jc2VhcmNoLWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAxMTIsIDIwKTtcXG59XFxuXFxuI2NoYW5nZS10ZW1wIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTMwLCAxNDQsIDIyKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWVsZW1lbnQtYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbiNjaGFuZ2UtdGVtcDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAxLCAxMTIsIDIwKTtcXG59XFxuXFxuLmRhaWx5LWRheS1uYW1lIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbi5kYWlseS1uYW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5kYWlseS1yYWluLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5kYWlseS1jaGFuY2Utb2YtcmFpbi10aXRsZSxcXG4uZGFpbHktcHJlY2lwLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbi5kYWlseS1jaGFuY2Utb2YtcmFpbixcXG4uZGFpbHktcHJlY2lwIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5kYWlseS10ZW1wLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmRhaWx5LW1heC10ZW1wLFxcbi5kYWlseS1taW4tdGVtcCB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tZWxlbWVudC1ib3JkZXItcmFkaXVzKTtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbi5kYWlseS1tYXgtdGVtcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXgtdGVtcC1jb2xvcik7XFxufVxcblxcbi5kYWlseS1taW4tdGVtcCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1taW4tdGVtcC1jb2xvcik7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XFxuICAjd2VhdGhlci1jb250ZW50LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAjY3VycmVudC13ZWF0aGVyIHtcXG4gICAgb3JkZXI6IDE7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDJmciAwLjVmciAwLjVmciAvIDFmcjtcXG4gIH1cXG4gICNob3VybHktZm9yZWNhc3Qge1xcbiAgICBvcmRlcjogMjtcXG4gIH1cXG4gICNkYWlseS1mb3JlY2FzdCB7XFxuICAgIG9yZGVyOiA0O1xcbiAgfVxcbiAgI2RldGFpbC13ZWF0aGVyIHtcXG4gICAgb3JkZXI6IDM7XFxuICB9XFxuICAjY3VycmVudC13ZWF0aGVyLWJvdC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gICNjaGFuZ2UtdGVtcCxcXG4gICNzZWFyY2gtYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAjbG9jYXRpb24ge1xcbiAgICB3aWR0aDogOTUlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMTVweDtcXG4gIH1cXG4gICNjdXJyZW50LXdlYXRoZXItdGVtcC1pY29uLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbiAgI2N1cnJlbnQtd2VhdGhlci10ZW1wIHtcXG4gICAgZm9udC1zaXplOiBjbGFtcCg0MHB4LCAxNXZ3LCAxMjBweCk7XFxuICAgIHRleHQtd3JhcDogbm93cmFwO1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gIH1cXG4gICNjdXJyZW50LXdlYXRoZXItdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoNDBweCwgMTV2dywgODBweCk7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBcIi4vanNfbW9kdWxlcy9sb2FkSW1hZ2VzXCI7XG5pbXBvcnQgZ2V0V2VhdGhlckRhdGEsIHtnZXRDdXJyZW50V2VhdGhlckRhdGF9IGZyb20gXCIuL2pzX21vZHVsZXMvZ2V0V2VhdGhlckRhdGFcIjtcbmltcG9ydCBjbGVhckRpc3BsYXkgZnJvbSBcIi4vanNfbW9kdWxlcy9jbGVhckRpc3BsYXlcIjtcbmltcG9ydCBkaXNwbGF5V2VhdGhlckRhdGEgZnJvbSBcIi4vanNfbW9kdWxlcy9kaXNwbGF5V2VhdGhlckRhdGFcIjtcbmltcG9ydCBjaGFuZ2VUZW1wVW5pdCBmcm9tIFwiLi9qc19tb2R1bGVzL2NoYW5nZVRlbXBVbml0XCI7XG5pbXBvcnQgZ2V0U2VhcmNoTG9jYXRpb24gZnJvbSBcIi4vanNfbW9kdWxlcy9nZXRTZWFyY2hMb2NhdGlvblwiO1xuXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1idXR0b25cIik7XG5jb25zdCBjaGFuZ2VUZW1wQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGFuZ2UtdGVtcFwiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBnZXRXZWF0aGVyRGF0YShcInZpZW5uYVwiKVxuICAgIC50aGVuKCh3ZWF0aGVyRGF0YSkgPT4ge1xuICAgICAgY2xlYXJEaXNwbGF5KCk7XG4gICAgICBkaXNwbGF5V2VhdGhlckRhdGEod2VhdGhlckRhdGEpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgXCJFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGEgd2hpbGUgRE9NQ29udGVudExvYWRlZDpcIixcbiAgICAgICAgZXJyb3IsXG4gICAgICApO1xuICAgIH0pO1xufSk7XG5cblxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnN0IHNlYXJjaExvY2F0aW9uID0gZ2V0U2VhcmNoTG9jYXRpb24oKTtcbiAgaWYgKHNlYXJjaExvY2F0aW9uKSB7XG4gICAgZ2V0V2VhdGhlckRhdGEoc2VhcmNoTG9jYXRpb24pXG4gICAgLnRoZW4oKHdlYXRoZXJEYXRhKSA9PiB7XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yLW1lc3NhZ2VcIik7XG4gICAgICBpZiAod2VhdGhlckRhdGEuZXJyb3IpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuZXJyb3IubWVzc2FnZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGNsZWFyRGlzcGxheSgpO1xuICAgICAgICBkaXNwbGF5V2VhdGhlckRhdGEod2VhdGhlckRhdGEpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgXCJFcnJvciBmZXRjaGluZyB3ZWF0aGVyIGRhdGEgd2hpbGUgZ2V0U2VhcmNoTG9jYXRpb246XCIsXG4gICAgICAgIGVycm9yLFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxufSk7XG5cbmNoYW5nZVRlbXBCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgY2hhbmdlVGVtcFVuaXQoKTtcbiAgY2xlYXJEaXNwbGF5KCk7XG4gIGRpc3BsYXlXZWF0aGVyRGF0YShnZXRDdXJyZW50V2VhdGhlckRhdGEoKSk7XG59KTsiLCJpbXBvcnQgeyB0b2dnbGVUZW1wVW5pdCB9IGZyb20gXCIuL2dldEN1cnJlbnRUZW1wVW5pdFwiO1xuaW1wb3J0IHsgdG9nZ2xlVGVtcFVuaXRUZXh0IH0gZnJvbSBcIi4vZ2V0Q3VycmVudFRlbXBVbml0VGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGFuZ2VUZW1wVW5pdCgpIHtcbiAgdG9nZ2xlVGVtcFVuaXQoKTtcbiAgdG9nZ2xlVGVtcFVuaXRUZXh0KCk7XG59XG4iLCJcbmNvbnN0IGN1cnJlbnRXZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVudC13ZWF0aGVyLWljb25cIik7XG5jb25zdCBkYWlseUZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYWlseS1mb3JlY2FzdFwiKTtcbmNvbnN0IGhvdXJseUZvcmVjYXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNob3VybHktZm9yZWNhc3RcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFyRGlzcGxheSAoKSB7XG4gICAgY3VycmVudFdlYXRoZXJJY29uLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBkYWlseUZvcmVjYXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBob3VybHlGb3JlY2FzdC50ZXh0Q29udGVudCA9IFwiXCI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlV2VhdGhlckVsZW1lbnQoY2xhc3NOYW1lLCB0ZXh0Q29udGVudCwgcGFyZW50Q29udGFpbmVyKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgfSIsImltcG9ydCBjcmVhdGVXZWF0aGVyRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVXZWF0aGVyRWxlbWVudFwiXG5pbXBvcnQgY3JlYXRlV2VhdGhlckVsZW1lbnRUaXRsZSBmcm9tIFwiLi9jcmVhdGVXZWF0aGVyRWxlbWVudFRpdGxlXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlV2VhdGhlckVsZW1lbnRBbmRUaXRsZShcbiAgICBjbGFzc05hbWUsXG4gICAgdGV4dENvbnRlbnQsXG4gICAgdGl0bGUsXG4gICAgcGFyZW50Q29udGFpbmVyXG4gICkge1xuICAgIGNyZWF0ZVdlYXRoZXJFbGVtZW50VGl0bGUoY2xhc3NOYW1lLCB0aXRsZSwgcGFyZW50Q29udGFpbmVyKTtcbiAgICBjcmVhdGVXZWF0aGVyRWxlbWVudChjbGFzc05hbWUsIHRleHRDb250ZW50LCBwYXJlbnRDb250YWluZXIpO1xuICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlV2VhdGhlckVsZW1lbnRJY29uKGNsYXNzTmFtZSwgaW1nU3JjLCBwYXJlbnRDb250YWluZXIpIHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zcmMgPSBpbWdTcmM7XG4gICAgaWNvbi5hcHBlbmRDaGlsZChpbWcpO1xuICAgIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgfSIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlV2VhdGhlckVsZW1lbnRUaXRsZShjbGFzc05hbWUsIHRpdGxlLCBwYXJlbnRDb250YWluZXIpIHtcbiAgICBjb25zdCBlbGVtZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVsZW1lbnRUaXRsZS5jbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9LXRpdGxlYDtcbiAgICBlbGVtZW50VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICBwYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudFRpdGxlKTtcbiAgfSIsImltcG9ydCBnZXRDdXJyZW50VGVtcFVuaXQgZnJvbSBcIi4vZ2V0Q3VycmVudFRlbXBVbml0XCI7XG5pbXBvcnQgZGlzcGxheUN1cnJlbnRUZW1wVW5pdCBmcm9tIFwiLi9nZXRDdXJyZW50VGVtcFVuaXRUZXh0XCI7XG5pbXBvcnQgd2Vla0RheUFycmF5IGZyb20gXCIuL3dlZWtEYXlBcnJheVwiO1xuaW1wb3J0IG1vbnRoQXJyYXkgZnJvbSBcIi4vbW9udGhBcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5Q3VycmVudERhdGEod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbnQtd2VhdGhlci10ZW1wXCIpO1xuICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbnQtd2VhdGhlci1sb2NhdGlvblwiKTtcbiAgY29uc3QgY3VycmVudFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbnQtd2VhdGhlci10ZXh0XCIpO1xuICBjb25zdCBjdXJyZW50SWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVudC13ZWF0aGVyLWljb25cIik7XG4gIGNvbnN0IGN1cnJlbnRTdW5yaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXJyZW50LXdlYXRoZXItc3VucmlzZVwiKTtcbiAgY29uc3QgY3VycmVudFN1bnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVudC13ZWF0aGVyLXN1bnNldFwiKTtcbiAgY29uc3QgY3VycmVudERheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVudC13ZWF0aGVyLWRheVwiKTtcbiAgY29uc3QgY3VycmVudERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbnQtd2VhdGhlci1kYXRlXCIpO1xuICBjb25zdCBjdXJyZW50TWF4VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVudC13ZWF0aGVyLW1heC10ZW1wXCIpO1xuICBjb25zdCBjdXJyZW50TWluVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY3VycmVudC13ZWF0aGVyLW1pbi10ZW1wXCIpO1xuICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9XG4gICAgd2VhdGhlckRhdGEuY3VycmVudFtgdGVtcF8ke2dldEN1cnJlbnRUZW1wVW5pdCgpfWBdICtcbiAgICBcIiBcIiArXG4gICAgZGlzcGxheUN1cnJlbnRUZW1wVW5pdCgpO1xuICBjdXJyZW50TWF4VGVtcC50ZXh0Q29udGVudCA9XG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5W2BtYXh0ZW1wXyR7Z2V0Q3VycmVudFRlbXBVbml0KCl9YF0gK1xuICAgIFwiIFwiICtcbiAgICBkaXNwbGF5Q3VycmVudFRlbXBVbml0KCk7XG4gIGN1cnJlbnRNaW5UZW1wLnRleHRDb250ZW50ID1cbiAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXlbYG1pbnRlbXBfJHtnZXRDdXJyZW50VGVtcFVuaXQoKX1gXSArXG4gICAgXCIgXCIgK1xuICAgIGRpc3BsYXlDdXJyZW50VGVtcFVuaXQoKTtcbiAgY3VycmVudExvY2F0aW9uLnRleHRDb250ZW50ID1cbiAgICB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lICsgXCIsIFwiICsgd2VhdGhlckRhdGEubG9jYXRpb24uY291bnRyeTtcbiAgY3VycmVudFRleHQudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICBjb25zdCBsb2NhbFRpbWUgPSBuZXcgRGF0ZSh3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpO1xuICBjdXJyZW50RGF5LnRleHRDb250ZW50ID0gd2Vla0RheUFycmF5W2xvY2FsVGltZS5nZXREYXkoKV0gKyBcIiwgXCI7XG4gIGN1cnJlbnREYXRlLnRleHRDb250ZW50ID1cbiAgICBgJHtsb2NhbFRpbWUuZ2V0RGF0ZSgpfWAgK1xuICAgIFwiLiBcIiArXG4gICAgbW9udGhBcnJheVtsb2NhbFRpbWUuZ2V0TW9udGgoKV0gK1xuICAgIFwiIFwiICtcbiAgICBgJHtsb2NhbFRpbWUuZ2V0RnVsbFllYXIoKX1gO1xuICBjdXJyZW50U3VucmlzZS50ZXh0Q29udGVudCA9XG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZTtcbiAgY3VycmVudFN1bnNldC50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldDtcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nLnNyYyA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gIGN1cnJlbnRJY29uLmFwcGVuZENoaWxkKGltZyk7XG59XG4iLCJpbXBvcnQgZ2V0Q3VycmVudFRlbXBVbml0IGZyb20gXCIuL2dldEN1cnJlbnRUZW1wVW5pdFwiO1xuaW1wb3J0IGRpc3BsYXlDdXJyZW50VGVtcFVuaXQgZnJvbSBcIi4vZ2V0Q3VycmVudFRlbXBVbml0VGV4dFwiO1xuaW1wb3J0IHdlZWtEYXlBcnJheSBmcm9tIFwiLi93ZWVrRGF5QXJyYXlcIjtcbmltcG9ydCBjcmVhdGVXZWF0aGVyRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVXZWF0aGVyRWxlbWVudFwiO1xuaW1wb3J0IGNyZWF0ZVdlYXRoZXJFbGVtZW50SWNvbiBmcm9tIFwiLi9jcmVhdGVXZWF0aGVyRWxlbWVudEljb25cIjtcbmltcG9ydCBjcmVhdGVXZWF0aGVyRWxlbWVudEFuZFRpdGxlIGZyb20gXCIuL2NyZWF0ZVdlYXRoZXJFbGVtZW50QW5kVGl0bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheURhaWx5Rm9yZWNhc3Qod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgZGF5c0FycmF5ID0gWzEsIDJdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRheXNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNyZWF0ZURhaWx5Rm9yZWNhc3Qod2VhdGhlckRhdGEsIGRheXNBcnJheVtpXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRGFpbHlGb3JlY2FzdCh3ZWF0aGVyRGF0YSwgZGF5KSB7XG4gIGNvbnN0IGRhaWx5Rm9yZWNhc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhaWx5LWZvcmVjYXN0XCIpO1xuICBjb25zdCBkYWlseUZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGFpbHlGb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGFpbHktZm9yZWNhc3QtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGRhaWx5TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhaWx5TmFtZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGFpbHktbmFtZS1jb250YWluZXJcIik7XG4gIGNvbnN0IGRhaWx5VGVtcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhaWx5VGVtcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGFpbHktdGVtcC1jb250YWluZXJcIik7XG4gIGNvbnN0IGRhaWx5UmFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhaWx5UmFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGFpbHktcmFpbi1jb250YWluZXJcIik7XG4gIGNvbnN0IGRhaWx5RGF0ZSA9IG5ldyBEYXRlKHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF0ZSk7XG4gIGNvbnN0IGRhaWx5Q2hhbmNlT2ZSYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICBcImRhaWx5LWNoYW5jZS1vZi1yYWluLWNvbnRhaW5lclwiLFxuICApO1xuICBjb25zdCBkYWlseVByZWNpcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkYWlseS1wcmVjaXAtY29udGFpbmVyXCIpO1xuICBkYWlseVJhaW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGFpbHlDaGFuY2VPZlJhaW5Db250YWluZXIpO1xuICBkYWlseVJhaW5Db250YWluZXIuYXBwZW5kQ2hpbGQoZGFpbHlQcmVjaXBDb250YWluZXIpO1xuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGFpbHlOYW1lQ29udGFpbmVyKTtcbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGFpbHlUZW1wQ29udGFpbmVyKTtcbiAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZGFpbHlSYWluQ29udGFpbmVyKTtcbiAgZGFpbHlGb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gIGRhaWx5Rm9yZWNhc3QuYXBwZW5kQ2hpbGQoZGFpbHlGb3JlY2FzdENvbnRhaW5lcik7XG5cbiAgY3JlYXRlV2VhdGhlckVsZW1lbnQoXG4gICAgXCJkYWlseS1kYXktbmFtZVwiLFxuICAgIHdlZWtEYXlBcnJheVtkYWlseURhdGUuZ2V0RGF5KCldLFxuICAgIGRhaWx5TmFtZUNvbnRhaW5lcixcbiAgKTtcblxuICBjcmVhdGVXZWF0aGVyRWxlbWVudEljb24oXG4gICAgXCJkYWlseS1kYXktaWNvblwiLFxuICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5LmNvbmRpdGlvbi5pY29uLFxuICAgIGRhaWx5TmFtZUNvbnRhaW5lcixcbiAgKTtcblxuICBjcmVhdGVXZWF0aGVyRWxlbWVudEFuZFRpdGxlKFxuICAgIFwiZGFpbHktY2hhbmNlLW9mLXJhaW5cIixcbiAgICBgJHt3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0lYCxcbiAgICBcIkNoYW5jZSBvZiBSYWluXCIsXG4gICAgZGFpbHlDaGFuY2VPZlJhaW5Db250YWluZXIsXG4gICk7XG5cbiAgY3JlYXRlV2VhdGhlckVsZW1lbnRBbmRUaXRsZShcbiAgICBcImRhaWx5LXByZWNpcFwiLFxuICAgIGAke3dlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5LnRvdGFscHJlY2lwX21tfSBtbWAsXG4gICAgXCJQcmVjaXBcIixcbiAgICBkYWlseVByZWNpcENvbnRhaW5lcixcbiAgKTtcblxuICBjcmVhdGVXZWF0aGVyRWxlbWVudChcbiAgICBcImRhaWx5LW1heC10ZW1wXCIsXG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXlbXG4gICAgICBgbWF4dGVtcF8ke2dldEN1cnJlbnRUZW1wVW5pdCgpfWBcbiAgICBdICtcbiAgICAgIFwiIFwiICtcbiAgICAgIGRpc3BsYXlDdXJyZW50VGVtcFVuaXQoKSxcbiAgICBkYWlseVRlbXBDb250YWluZXIsXG4gICk7XG5cbiAgY3JlYXRlV2VhdGhlckVsZW1lbnQoXG4gICAgXCJkYWlseS1taW4tdGVtcFwiLFxuICAgIHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5W1xuICAgICAgYG1pbnRlbXBfJHtnZXRDdXJyZW50VGVtcFVuaXQoKX1gXG4gICAgXSArXG4gICAgICBcIiBcIiArXG4gICAgICBkaXNwbGF5Q3VycmVudFRlbXBVbml0KCksXG4gICAgZGFpbHlUZW1wQ29udGFpbmVyLFxuICApO1xufVxuIiwiaW1wb3J0IGdldEN1cnJlbnRUZW1wVW5pdCBmcm9tIFwiLi9nZXRDdXJyZW50VGVtcFVuaXRcIjtcbmltcG9ydCBkaXNwbGF5Q3VycmVudFRlbXBVbml0IGZyb20gXCIuL2dldEN1cnJlbnRUZW1wVW5pdFRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheURldGFpbFdlYXRoZXIod2VhdGhlckRhdGEpIHtcbiAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXRhaWwtd2VhdGhlci1mZWVscy1saWtlXCIpO1xuICBjb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RldGFpbC13ZWF0aGVyLWNoYW5jZS1vZi1yYWluXCIpO1xuICBjb25zdCBjbG91ZENvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXRhaWwtd2VhdGhlci1jbG91ZC1jb3ZlclwiKTtcbiAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXRhaWwtd2VhdGhlci13aW5kLXNwZWVkXCIpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGV0YWlsLXdlYXRoZXItaHVtaWRpdHlcIik7XG5cbiAgZmVlbHNMaWtlLnRleHRDb250ZW50ID1cbiAgICB3ZWF0aGVyRGF0YS5jdXJyZW50W2BmZWVsc2xpa2VfJHtnZXRDdXJyZW50VGVtcFVuaXQoKX1gXSArXG4gICAgXCIgXCIgK1xuICAgIGRpc3BsYXlDdXJyZW50VGVtcFVuaXQoKTtcbiAgY2hhbmNlT2ZSYWluLnRleHRDb250ZW50ID1cbiAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW4gK1xuICAgIFwiJSB8ICBcIiArXG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LnRvdGFscHJlY2lwX21tICtcbiAgICBcIiBtbVwiO1xuICBjbG91ZENvdmVyLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC5jbG91ZCArIFwiJVwiO1xuICB3aW5kU3BlZWQudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfa3BoICsgXCIga20vaFwiO1xuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuaHVtaWRpdHkgKyBcIiVcIjtcbn1cbiIsImltcG9ydCBnZXRDdXJyZW50VGVtcFVuaXQgZnJvbSBcIi4vZ2V0Q3VycmVudFRlbXBVbml0XCI7XG5pbXBvcnQgZGlzcGxheUN1cnJlbnRUZW1wVW5pdCBmcm9tIFwiLi9nZXRDdXJyZW50VGVtcFVuaXRUZXh0XCI7XG5pbXBvcnQgY3JlYXRlV2VhdGhlckVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlV2VhdGhlckVsZW1lbnRcIjtcbmltcG9ydCBjcmVhdGVXZWF0aGVyRWxlbWVudEljb24gZnJvbSBcIi4vY3JlYXRlV2VhdGhlckVsZW1lbnRJY29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlIb3VybHlGb3JlY2FzdCh3ZWF0aGVyRGF0YSkge1xuICBjb25zdCBob3Vyc0FycmF5ID0gWzMsIDYsIDksIDEyLCAxNSwgMTgsIDIxXTtcbiAgY29uc3QgaG91cnNUZXh0QXJyYXkgPSBbXG4gICAgXCIzOjAwIGFtXCIsXG4gICAgXCI2OjAwIGFtXCIsXG4gICAgXCI5OjAwIGFtXCIsXG4gICAgXCIxMjowMCBwbVwiLFxuICAgIFwiMzowMCBwbVwiLFxuICAgIFwiNjowMCBwbVwiLFxuICAgIFwiOTowMCBwbVwiLFxuICBdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdXJzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjcmVhdGVIb3VybHlGb3JlY2FzdCh3ZWF0aGVyRGF0YSwgMCwgaG91cnNBcnJheVtpXSwgaG91cnNUZXh0QXJyYXlbaV0pO1xuICB9XG4gIGNyZWF0ZUhvdXJseUZvcmVjYXN0KHdlYXRoZXJEYXRhLCAxLCAwLCBcIjEyOjAwIGFtXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIb3VybHlGb3JlY2FzdCh3ZWF0aGVyRGF0YSwgZGF5LCBob3VyLCBob3VyVGV4dCkge1xuICBjb25zdCBob3VybHlGb3JlY2FzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG91cmx5LWZvcmVjYXN0XCIpO1xuICBjb25zdCBob3VybHlGb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhvdXJseUZvcmVjYXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJob3VybHktZm9yZWNhc3QtY29udGFpbmVyXCIpO1xuICBob3VybHlGb3JlY2FzdC5hcHBlbmRDaGlsZChob3VybHlGb3JlY2FzdENvbnRhaW5lcik7XG5cbiAgY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJob3VybHktdGltZVwiLCBob3VyVGV4dCwgaG91cmx5Rm9yZWNhc3RDb250YWluZXIpO1xuXG4gIGNyZWF0ZVdlYXRoZXJFbGVtZW50KFxuICAgIFwiaG91cmx5LXRlbXBcIixcbiAgICB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmhvdXJbaG91cl1bXG4gICAgICBgdGVtcF8ke2dldEN1cnJlbnRUZW1wVW5pdCgpfWBcbiAgICBdICtcbiAgICAgIFwiIFwiICtcbiAgICAgIGRpc3BsYXlDdXJyZW50VGVtcFVuaXQoKSxcbiAgICBob3VybHlGb3JlY2FzdENvbnRhaW5lcixcbiAgKTtcblxuICBjcmVhdGVXZWF0aGVyRWxlbWVudChcbiAgICBcImhvdXJseS10ZXh0XCIsXG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5ob3VyW2hvdXJdLmNvbmRpdGlvbi50ZXh0LFxuICAgIGhvdXJseUZvcmVjYXN0Q29udGFpbmVyLFxuICApO1xuXG4gIGNyZWF0ZVdlYXRoZXJFbGVtZW50SWNvbihcbiAgICBcImhvdXJseS1pY29uXCIsXG4gICAgd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5ob3VyW2hvdXJdLmNvbmRpdGlvbi5pY29uLFxuICAgIGhvdXJseUZvcmVjYXN0Q29udGFpbmVyLFxuICApO1xufVxuIiwiXG5pbXBvcnQgZGlzcGxheUN1cnJlbnREYXRhIGZyb20gXCIuL2Rpc3BsYXlDdXJyZW50RGF0YVwiXG5pbXBvcnQgZGlzcGxheURldGFpbFdlYXRoZXIgZnJvbSBcIi4vZGlzcGxheURldGFpbFdlYXRoZXJcIlxuaW1wb3J0IGRpc3BsYXlEYWlseUZvcmVjYXN0IGZyb20gXCIuL2Rpc3BsYXlEYWlseUZvcmVjYXN0XCJcbmltcG9ydCBkaXNwbGF5SG91cmx5Rm9yZWNhc3QgZnJvbSBcIi4vZGlzcGxheUhvdXJseUZvcmVjYXN0XCJcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5V2VhdGhlckRhdGEod2VhdGhlckRhdGEpIHtcbiAgICBkaXNwbGF5Q3VycmVudERhdGEod2VhdGhlckRhdGEpO1xuICAgIGRpc3BsYXlEZXRhaWxXZWF0aGVyKHdlYXRoZXJEYXRhKTtcbiAgICBkaXNwbGF5RGFpbHlGb3JlY2FzdCh3ZWF0aGVyRGF0YSk7XG4gICAgZGlzcGxheUhvdXJseUZvcmVjYXN0KHdlYXRoZXJEYXRhKTtcbiAgfSIsImxldCB0ZW1wVW5pdCA9IFwiY1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDdXJyZW50VGVtcFVuaXQoKSB7XG4gICAgcmV0dXJuIHRlbXBVbml0O1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZVRlbXBVbml0KCkge1xuICAgIHRlbXBVbml0ID0gdGVtcFVuaXQgPT09IFwiY1wiID8gXCJmXCIgOiBcImNcIjtcbiAgfSIsImxldCB0ZW1wVW5pdFRleHQgPSBcIsKwQ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDdXJyZW50VGVtcFVuaXRUZXh0KCkge1xuICByZXR1cm4gdGVtcFVuaXRUZXh0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlVGVtcFVuaXRUZXh0KCkge1xuICB0ZW1wVW5pdFRleHQgPSB0ZW1wVW5pdFRleHQgPT09IFwiwrBDXCIgPyBcIsKwRlwiIDogXCLCsENcIjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNlYXJjaExvY2F0aW9uKCkge1xuICBjb25zdCBlcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yLW1lc3NhZ2VcIik7XG4gIGNvbnN0IGxvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvY2F0aW9uXCIpO1xuICBsZXQgbG9jYXRpb24gPSBsb2NhdGlvbklucHV0LnZhbHVlO1xuICBpZiAobG9jYXRpb24gIT09IFwiXCIpIHtcbiAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHJldHVybiBsb2NhdGlvbjtcbiAgfSBlbHNlIHtcbiAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBmaWxsIGluIGEgbG9jYXRpb25cIjtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuXG4iLCJsZXQgY3VycmVudFdlYXRoZXJEYXRhID0gXCJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pIHtcbiAgY29uc3QgZXJyb3JNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlcnJvci1tZXNzYWdlXCIpO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MDYyNGY5OTQ0Yjg1NDY0ZTg0YzEyMDQwNTI0MDQwNSZxPSR7bG9jYXRpb259JmRheXM9M2AsXG4gICAgICB7IG1vZGU6IFwiY29yc1wiIH0sXG4gICAgKTtcbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjdXJyZW50V2VhdGhlckRhdGEgPSB3ZWF0aGVyRGF0YTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGFcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlcnJvck1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIlBsZWFzZSBmaWxsIGluIGEgdmFsaWQgbG9jYXRpb25cIjtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgd2VhdGhlciBkYXRhOlwiLCBlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyRGF0YSgpIHtcbiAgcmV0dXJuIGN1cnJlbnRXZWF0aGVyRGF0YTtcbn1cbiIsImltcG9ydCBmZWVsc2xpa2UgZnJvbSBcIi4uL2ltYWdlcy9mZWVsc2xpa2UucG5nXCI7XG5pbXBvcnQgY2hhbmNlT2ZSYWluIGZyb20gXCIuLi9pbWFnZXMvcmFpbi5wbmdcIjtcbmltcG9ydCBjbG91ZENvdmVyIGZyb20gXCIuLi9pbWFnZXMvY2xvdWQucG5nXCI7XG5pbXBvcnQgd2luZFNwZWVkIGZyb20gXCIuLi9pbWFnZXMvd2luZC5wbmdcIjtcbmltcG9ydCBodW1pZGl0eSBmcm9tIFwiLi4vaW1hZ2VzL2h1bWlkaXR5LnBuZ1wiO1xuXG5jb25zdCBmZWVsc2xpa2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWxzbGlrZS1pbWFnZVwiKTtcbmZlZWxzbGlrZUNvbnRhaW5lci5zcmMgPSBmZWVsc2xpa2U7XG5cbmNvbnN0IGNoYW5jZU9mUmFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hhbmNlLW9mLXJhaW4taW1hZ2VcIik7XG5jaGFuY2VPZlJhaW5Db250YWluZXIuc3JjID0gY2hhbmNlT2ZSYWluO1xuXG5jb25zdCBjbG91ZENvdmVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjbG91ZC1jb3Zlci1pbWFnZVwiKTtcbmNsb3VkQ292ZXJDb250YWluZXIuc3JjID0gY2xvdWRDb3ZlcjtcblxuY29uc3Qgd2luZFNwZWVkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aW5kLXNwZWVkLWltYWdlXCIpO1xud2luZFNwZWVkQ29udGFpbmVyLnNyYyA9IHdpbmRTcGVlZDtcblxuY29uc3QgaHVtaWRpdHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2h1bWlkaXR5LWltYWdlXCIpO1xuaHVtaWRpdHlDb250YWluZXIuc3JjID0gaHVtaWRpdHk7XG4iLCJjb25zdCBtb250aEFycmF5ID0gW1xuICBcIkphbnVhcnlcIixcbiAgXCJGZWJydWFyeVwiLFxuICBcIk1hcmNoXCIsXG4gIFwiQXByaWxcIixcbiAgXCJNYXlcIixcbiAgXCJKdW5lXCIsXG4gIFwiSnVsaVwiLFxuICBcIkF1Z3VzdFwiLFxuICBcIlNlcHRlbWJlclwiLFxuICBcIk9jdG9iZXJcIixcbiAgXCJOb3ZlbWJlclwiLFxuICBcIkRlY2VtYmVyXCIsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBtb250aEFycmF5O1xuIiwiY29uc3Qgd2Vla0RheUFycmF5ID0gW1xuICBcIlN1bmRheVwiLFxuICBcIk1vbmRheVwiLFxuICBcIlR1ZXNkYXlcIixcbiAgXCJXZWRuZXNkYXlcIixcbiAgXCJUaHVyc2RheVwiLFxuICBcIkZyaWRheVwiLFxuICBcIlNhdHVyZGF5XCIsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB3ZWVrRGF5QXJyYXk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=