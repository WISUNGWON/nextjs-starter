"use strict";
exports.id = 92;
exports.ids = [92];
exports.modules = {

/***/ 4092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Typography)
});

// EXTERNAL MODULE: ./node_modules/@emotion/styled/base/dist/emotion-styled-base.cjs.js
var emotion_styled_base_cjs = __webpack_require__(2112);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.cjs.prod.js
var emotion_react_cjs_prod = __webpack_require__(1334);
;// CONCATENATED MODULE: ./src/components/Typography/Text.tsx


function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }



var _ref =  true ? {
  name: "e0dnmk",
  styles: "cursor:pointer"
} : 0;

var _ref2 =  true ? {
  name: "1u4hpl4",
  styles: "display:inline"
} : 0;

var _ref3 =  true ? {
  name: "f3vz0n",
  styles: "font-weight:500"
} : 0;

var _ref4 =  true ? {
  name: "1j389vi",
  styles: "font-weight:700"
} : 0;

const Text = (0,emotion_styled_base_cjs.default)("span",  true ? {
  target: "ex8ivcu0"
} : 0)("display:block;font-weight:400;line-height:1.5;margin:0;", ({
  gutter
}) => {
  if (typeof gutter === "number") {
    return /*#__PURE__*/(0,emotion_react_cjs_prod.css)("margin:", gutter, "px;" + ( true ? "" : 0));
  }

  if (typeof gutter === "object") {
    return /*#__PURE__*/(0,emotion_react_cjs_prod.css)("margin-top:", gutter.top ? `${gutter.top}px` : 0, ";margin-bottom:", gutter.bottom ? `${gutter.bottom}px` : 0, ";margin-left:", gutter.left ? `${gutter.left}px` : 0, ";margin-right:", gutter.right ? `${gutter.right}px` : 0, ";" + ( true ? "" : 0));
  }
}, " ", ({
  align
}) => align && /*#__PURE__*/(0,emotion_react_cjs_prod.css)("text-align:", align, ";" + ( true ? "" : 0)), " ", ({
  bold
}) => bold && _ref4, " ", ({
  medium
}) => medium && _ref3, " ", ({
  inline
}) => inline && _ref2, " ", ({
  color,
  theme
}) => color && /*#__PURE__*/(0,emotion_react_cjs_prod.css)("color:", theme.colors[color], ";" + ( true ? "" : 0)), " ", ({
  onClick
}) => onClick && _ref, ";");

/* harmony default export */ const Typography_Text = (Text);
;// CONCATENATED MODULE: ./src/components/Typography/Typography.ts

const Typography = {
  Text: Typography_Text
};

/***/ })

};
;