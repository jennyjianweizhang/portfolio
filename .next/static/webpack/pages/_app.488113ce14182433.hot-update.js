"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Navbar/NavigationDot.js":
/*!************************************************!*\
  !*** ./src/components/Navbar/NavigationDot.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box!=!@mui/material */ \"__barrel_optimize__?names=Box!=!./node_modules/@mui/material/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar NavigationDots = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), activeSection = _useState[0], setActiveSection = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var updateSectionsInfo = function() {\n            var sections = [\n                \"home\",\n                \"about\",\n                \"work\",\n                \"skills\",\n                \"contact\"\n            ];\n            sections.forEach(function(section) {\n                var element = document.getElementById(section);\n                if (element) {\n                    console.log(\"\".concat(section, \" top: \").concat(element.offsetTop, \", height: \").concat(element.offsetHeight));\n                }\n            });\n        };\n        var handleScroll = function() {\n            var _document_querySelector;\n            var navbarHeight = ((_document_querySelector = document.querySelector(\"AppBar\")) === null || _document_querySelector === void 0 ? void 0 : _document_querySelector.clientHeight) || 0;\n            var sections = [\n                \"home\",\n                \"about\",\n                \"work\",\n                \"skills\",\n                \"contact\"\n            ];\n            var currentSection = sections.find(function(section) {\n                var element = document.getElementById(section);\n                if (element) {\n                    var elementTop = element.offsetTop - navbarHeight;\n                    var elementBottom = elementTop + element.offsetHeight;\n                    console.log(\"Scroll Y: \".concat(window.scrollY, \", \").concat(section, \" Top: \").concat(elementTop, \", Bottom: \").concat(elementBottom));\n                    return window.scrollY >= elementTop && window.scrollY < elementBottom;\n                }\n                return false;\n            });\n            if (currentSection && currentSection !== activeSection) {\n                console.log(\"Active Section: \".concat(currentSection));\n                setActiveSection(currentSection);\n            }\n        };\n        window.addEventListener(\"resize\", updateSectionsInfo);\n        window.addEventListener(\"scroll\", handleScroll);\n        updateSectionsInfo(); // Initial check\n        return function() {\n            window.removeEventListener(\"resize\", updateSectionsInfo);\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        activeSection\n    ]);\n    var dotStyle = function(section) {\n        return {\n            display: \"block\",\n            height: \"15px\",\n            width: \"15px\",\n            backgroundColor: activeSection === section ? \"rgb(49, 59, 172)\" : \"#ccc\",\n            marginBottom: \"10px\",\n            borderRadius: \"50%\",\n            transition: \"background-color 0.3s\"\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        sx: {\n            position: \"fixed\",\n            right: 20,\n            top: \"50%\",\n            transform: \"translateY(-50%)\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            zIndex: 1200\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#home\",\n                style: dotStyle(\"home\")\n            }, void 0, false, {\n                fileName: \"/Users/jenny/Jenny_Profolio/my-app/src/components/Navbar/NavigationDot.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#work\",\n                style: dotStyle(\"work\")\n            }, void 0, false, {\n                fileName: \"/Users/jenny/Jenny_Profolio/my-app/src/components/Navbar/NavigationDot.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#skills\",\n                style: dotStyle(\"skills\")\n            }, void 0, false, {\n                fileName: \"/Users/jenny/Jenny_Profolio/my-app/src/components/Navbar/NavigationDot.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#about\",\n                style: dotStyle(\"about\")\n            }, void 0, false, {\n                fileName: \"/Users/jenny/Jenny_Profolio/my-app/src/components/Navbar/NavigationDot.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#contact\",\n                style: dotStyle(\"contact\")\n            }, void 0, false, {\n                fileName: \"/Users/jenny/Jenny_Profolio/my-app/src/components/Navbar/NavigationDot.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenny/Jenny_Profolio/my-app/src/components/Navbar/NavigationDot.js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, _this);\n};\n_s(NavigationDots, \"BvDfEq4UxDchLX+guimWRaeMS3w=\");\n_c = NavigationDots;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationDots);\nvar _c;\n$RefreshReg$(_c, \"NavigationDots\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBZ0ZOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZpZ2F0aW9uRG90LmpzP2EwYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmNvbnN0IE5hdmlnYXRpb25Eb3RzID0gKCkgPT4ge1xuICBjb25zdCBbYWN0aXZlU2VjdGlvbiwgc2V0QWN0aXZlU2VjdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVTZWN0aW9uc0luZm8gPSAoKSA9PiB7XG4gICAgICBjb25zdCBzZWN0aW9ucyA9IFtcImhvbWVcIiwgXCJhYm91dFwiLCBcIndvcmtcIiwgXCJza2lsbHNcIiwgXCJjb250YWN0XCJdO1xuICAgICAgc2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlY3Rpb24pO1xuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGAke3NlY3Rpb259IHRvcDogJHtlbGVtZW50Lm9mZnNldFRvcH0sIGhlaWdodDogJHtlbGVtZW50Lm9mZnNldEhlaWdodH1gKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcbiAgXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3QgbmF2YmFySGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignQXBwQmFyJyk/LmNsaWVudEhlaWdodCB8fCAwO1xuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBbXCJob21lXCIsIFwiYWJvdXRcIiwgXCJ3b3JrXCIsIFwic2tpbGxzXCIsIFwiY29udGFjdFwiXTtcbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uID0gc2VjdGlvbnMuZmluZCgoc2VjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbik7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudFRvcCA9IGVsZW1lbnQub2Zmc2V0VG9wIC0gbmF2YmFySGVpZ2h0O1xuICAgICAgICAgIGNvbnN0IGVsZW1lbnRCb3R0b20gPSBlbGVtZW50VG9wICsgZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgY29uc29sZS5sb2coYFNjcm9sbCBZOiAke3dpbmRvdy5zY3JvbGxZfSwgJHtzZWN0aW9ufSBUb3A6ICR7ZWxlbWVudFRvcH0sIEJvdHRvbTogJHtlbGVtZW50Qm90dG9tfWApO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsWSA+PSBlbGVtZW50VG9wICYmXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsWSA8IGVsZW1lbnRCb3R0b21cbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0pO1xuICBcbiAgICAgIGlmIChjdXJyZW50U2VjdGlvbiAmJiBjdXJyZW50U2VjdGlvbiAhPT0gYWN0aXZlU2VjdGlvbikge1xuICAgICAgICBjb25zb2xlLmxvZyhgQWN0aXZlIFNlY3Rpb246ICR7Y3VycmVudFNlY3Rpb259YCk7XG4gICAgICAgIHNldEFjdGl2ZVNlY3Rpb24oY3VycmVudFNlY3Rpb24pO1xuICAgICAgfVxuICAgIH07XG4gIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVTZWN0aW9uc0luZm8pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgdXBkYXRlU2VjdGlvbnNJbmZvKCk7IC8vIEluaXRpYWwgY2hlY2tcbiAgXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVTZWN0aW9uc0luZm8pO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbYWN0aXZlU2VjdGlvbl0pO1xuICBcbiAgXG5cblxuICBjb25zdCBkb3RTdHlsZSA9IChzZWN0aW9uKSA9PiAoe1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBoZWlnaHQ6IFwiMTVweFwiLFxuICAgIHdpZHRoOiBcIjE1cHhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVNlY3Rpb24gPT09IHNlY3Rpb24gPyBcInJnYig0OSwgNTksIDE3MilcIiA6IFwiI2NjY1wiLFxuICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZC1jb2xvciAwLjNzXCIsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgc3g9e3tcbiAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgcmlnaHQ6IDIwLFxuICAgICAgICB0b3A6IFwiNTAlXCIsXG4gICAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVZKC01MCUpXCIsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICB6SW5kZXg6IDEyMDAsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxhIGhyZWY9XCIjaG9tZVwiIHN0eWxlPXtkb3RTdHlsZShcImhvbWVcIil9PjwvYT5cbiAgICAgIDxhIGhyZWY9XCIjd29ya1wiIHN0eWxlPXtkb3RTdHlsZShcIndvcmtcIil9PjwvYT5cbiAgICAgIDxhIGhyZWY9XCIjc2tpbGxzXCIgc3R5bGU9e2RvdFN0eWxlKFwic2tpbGxzXCIpfT48L2E+XG4gICAgICA8YSBocmVmPVwiI2Fib3V0XCIgc3R5bGU9e2RvdFN0eWxlKFwiYWJvdXRcIil9PjwvYT5cbiAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiIHN0eWxlPXtkb3RTdHlsZShcImNvbnRhY3RcIil9PjwvYT5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb25Eb3RzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb3giLCJOYXZpZ2F0aW9uRG90cyIsImFjdGl2ZVNlY3Rpb24iLCJzZXRBY3RpdmVTZWN0aW9uIiwidXBkYXRlU2VjdGlvbnNJbmZvIiwic2VjdGlvbnMiLCJmb3JFYWNoIiwic2VjdGlvbiIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsIm9mZnNldFRvcCIsIm9mZnNldEhlaWdodCIsImhhbmRsZVNjcm9sbCIsIm5hdmJhckhlaWdodCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGllbnRIZWlnaHQiLCJjdXJyZW50U2VjdGlvbiIsImZpbmQiLCJlbGVtZW50VG9wIiwiZWxlbWVudEJvdHRvbSIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRvdFN0eWxlIiwiZGlzcGxheSIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luQm90dG9tIiwiYm9yZGVyUmFkaXVzIiwidHJhbnNpdGlvbiIsInN4IiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsInRyYW5zZm9ybSIsImZsZXhEaXJlY3Rpb24iLCJ6SW5kZXgiLCJhIiwiaHJlZiIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar/NavigationDot.js\n"));

/***/ })

});