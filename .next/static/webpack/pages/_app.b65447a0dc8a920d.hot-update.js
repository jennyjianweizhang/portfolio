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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Box!=!@mui/material */ \"__barrel_optimize__?names=Box!=!./node_modules/@mui/material/index.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar NavigationDots = function() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), activeSection = _useState[0], setActiveSection = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var navbarHeight = document.querySelector(\".app-bar\").clientHeight;\n        var handleScroll = function() {\n            var viewportHeight = window.innerHeight;\n            var documentHeight = document.documentElement.scrollHeight;\n            var sections = [\n                \"home\",\n                \"about\",\n                \"work\",\n                \"skills\",\n                \"contact\"\n            ];\n            var currentSection = \"\";\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = sections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var section = _step.value;\n                    var element = document.getElementById(section);\n                    if (element) {\n                        var elementTop = element.offsetTop - navbarHeight;\n                        var elementBottom = elementTop + element.offsetHeight;\n                        var isAtBottom = window.scrollY + viewportHeight >= documentHeight;\n                        if (window.scrollY >= elementTop && window.scrollY < elementBottom || isAtBottom && section === \"contact\") {\n                            currentSection = section;\n                            break; // Break the loop as we have found the current section\n                        }\n                    }\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n                        _iterator[\"return\"]();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n            if (currentSection && currentSection !== activeSection) {\n                setActiveSection(currentSection);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return function() {\n            return window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        activeSection\n    ]); // Dependencies list includes activeSection to trigger updates\n    var dotStyle = function(section) {\n        return {\n            display: \"block\",\n            height: \"15px\",\n            width: \"15px\",\n            backgroundColor: activeSection === section ? \"rgb(49, 59, 172)\" : \"#ccc\",\n            marginBottom: \"10px\",\n            borderRadius: \"50%\",\n            transition: \"background-color 0.3s\"\n        };\n    };\n    console.log(\"Dot style for home: \".concat(dotStyle(\"home\").backgroundColor));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        sx: {\n            position: \"fixed\",\n            right: 20,\n            top: \"50%\",\n            transform: \"translateY(-50%)\",\n            display: \"flex\",\n            flexDirection: \"column\",\n            zIndex: 1200\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#home\",\n                style: dotStyle(\"home\")\n            }, void 0, false, {\n                fileName: \"/Users/jenny/Jenny_Profolio/my-app/src/components/Navbar/NavigationDot.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#work\",\n                style: dotStyle(\"work\")\n            }, void 0, false, {\n                fileName: \"/Users/jenny/Jenny_Profolio/my-app/src/components/Navbar/NavigationDot.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#skills\",\n                style: dotStyle(\"skills\")\n            }, void 0, false, {\n                fileName: \"/Users/jenny/Jenny_Profolio/my-app/src/components/Navbar/NavigationDot.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#about\",\n                style: dotStyle(\"about\")\n            }, void 0, false, {\n                fileName: \"/Users/jenny/Jenny_Profolio/my-app/src/components/Navbar/NavigationDot.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: \"#contact\",\n                style: dotStyle(\"contact\")\n            }, void 0, false, {\n                fileName: \"/Users/jenny/Jenny_Profolio/my-app/src/components/Navbar/NavigationDot.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jenny/Jenny_Profolio/my-app/src/components/Navbar/NavigationDot.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, _this);\n};\n_s(NavigationDots, \"BvDfEq4UxDchLX+guimWRaeMS3w=\");\n_c = NavigationDots;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavigationDots);\nvar _c;\n$RefreshReg$(_c, \"NavigationDots\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIvTmF2aWdhdGlvbkRvdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNmO0FBRXBDLElBQU1JLGlCQUFpQjs7SUFDckIsSUFBMENILFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUE1Q0ksZ0JBQW1DSixjQUFwQkssbUJBQW9CTDtJQUMxQ0MsZ0RBQVNBLENBQUM7UUFDUixJQUFNSyxlQUFlQyxTQUFTQyxhQUFhLENBQUMsWUFBWUMsWUFBWTtRQUVwRSxJQUFNQyxlQUFlO1lBQ25CLElBQU1DLGlCQUFpQkMsT0FBT0MsV0FBVztZQUN6QyxJQUFNQyxpQkFBaUJQLFNBQVNRLGVBQWUsQ0FBQ0MsWUFBWTtZQUM1RCxJQUFNQyxXQUFXO2dCQUFDO2dCQUFRO2dCQUFTO2dCQUFRO2dCQUFVO2FBQVU7WUFDL0QsSUFBSUMsaUJBQWlCO2dCQUVoQjs7Z0JBQUwsUUFBSyxZQUFpQkQsNkJBQWpCLHdHQUEyQjtvQkFBM0IsSUFBTUUsVUFBTjtvQkFDSCxJQUFNQyxVQUFVYixTQUFTYyxjQUFjLENBQUNGO29CQUN4QyxJQUFJQyxTQUFTO3dCQUNYLElBQU1FLGFBQWFGLFFBQVFHLFNBQVMsR0FBR2pCO3dCQUN2QyxJQUFNa0IsZ0JBQWdCRixhQUFhRixRQUFRSyxZQUFZO3dCQUN2RCxJQUFNQyxhQUFhZCxPQUFPZSxPQUFPLEdBQUdoQixrQkFBa0JHO3dCQUV0RCxJQUFJLE9BQVFhLE9BQU8sSUFBSUwsY0FBY1YsT0FBT2UsT0FBTyxHQUFHSCxpQkFBbUJFLGNBQWNQLFlBQVksV0FBWTs0QkFDN0dELGlCQUFpQkM7NEJBQ2pCLE9BQU8sc0RBQXNEO3dCQUMvRDtvQkFDRjtnQkFDRjs7Z0JBWks7Z0JBQUE7Ozt5QkFBQTt3QkFBQTs7O3dCQUFBOzhCQUFBOzs7O1lBY0wsSUFBSUQsa0JBQWtCQSxtQkFBbUJkLGVBQWU7Z0JBQ3REQyxpQkFBaUJhO1lBQ25CO1FBQ0Y7UUFFQU4sT0FBT2dCLGdCQUFnQixDQUFDLFVBQVVsQjtRQUNsQyxPQUFPO21CQUFNRSxPQUFPaUIsbUJBQW1CLENBQUMsVUFBVW5COztJQUNwRCxHQUFHO1FBQUNOO0tBQWMsR0FBRyw4REFBOEQ7SUFLbkYsSUFBTTBCLFdBQVcsU0FBQ1g7ZUFBYTtZQUM3QlksU0FBUztZQUNUQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEMsaUJBQWlCOUIsa0JBQWtCZSxVQUFVLHFCQUFxQjtZQUNsRWdCLGNBQWM7WUFDZEMsY0FBYztZQUNkQyxZQUFZO1FBQ2Q7O0lBQ0FDLFFBQVFDLEdBQUcsQ0FBQyx1QkFBd0QsT0FBakNULFNBQVMsUUFBUUksZUFBZTtJQUduRSxxQkFDRSw4REFBQ2hDLHdFQUFHQTtRQUNGc0MsSUFBSTtZQUNGQyxVQUFVO1lBQ1ZDLE9BQU87WUFDUEMsS0FBSztZQUNMQyxXQUFXO1lBQ1hiLFNBQVM7WUFDVGMsZUFBZTtZQUNmQyxRQUFRO1FBQ1Y7OzBCQUVBLDhEQUFDQztnQkFBRUMsTUFBSztnQkFBUUMsT0FBT25CLFNBQVM7Ozs7OzswQkFDaEMsOERBQUNpQjtnQkFBRUMsTUFBSztnQkFBUUMsT0FBT25CLFNBQVM7Ozs7OzswQkFDaEMsOERBQUNpQjtnQkFBRUMsTUFBSztnQkFBVUMsT0FBT25CLFNBQVM7Ozs7OzswQkFDbEMsOERBQUNpQjtnQkFBRUMsTUFBSztnQkFBU0MsT0FBT25CLFNBQVM7Ozs7OzswQkFDakMsOERBQUNpQjtnQkFBRUMsTUFBSztnQkFBV0MsT0FBT25CLFNBQVM7Ozs7Ozs7Ozs7OztBQUd6QztHQXBFTTNCO0tBQUFBO0FBc0VOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmJhci9OYXZpZ2F0aW9uRG90LmpzP2EwYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5cbmNvbnN0IE5hdmlnYXRpb25Eb3RzID0gKCkgPT4ge1xuICBjb25zdCBbYWN0aXZlU2VjdGlvbiwgc2V0QWN0aXZlU2VjdGlvbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBuYXZiYXJIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwLWJhcicpLmNsaWVudEhlaWdodDsgXG4gIFxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgY29uc3QgZG9jdW1lbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgICAgY29uc3Qgc2VjdGlvbnMgPSBbXCJob21lXCIsIFwiYWJvdXRcIiwgXCJ3b3JrXCIsIFwic2tpbGxzXCIsIFwiY29udGFjdFwiXTtcbiAgICAgIGxldCBjdXJyZW50U2VjdGlvbiA9ICcnO1xuICBcbiAgICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VjdGlvbik7XG4gICAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudFRvcCA9IGVsZW1lbnQub2Zmc2V0VG9wIC0gbmF2YmFySGVpZ2h0OyBcbiAgICAgICAgICBjb25zdCBlbGVtZW50Qm90dG9tID0gZWxlbWVudFRvcCArIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgIGNvbnN0IGlzQXRCb3R0b20gPSB3aW5kb3cuc2Nyb2xsWSArIHZpZXdwb3J0SGVpZ2h0ID49IGRvY3VtZW50SGVpZ2h0O1xuICBcbiAgICAgICAgICBpZiAoKHdpbmRvdy5zY3JvbGxZID49IGVsZW1lbnRUb3AgJiYgd2luZG93LnNjcm9sbFkgPCBlbGVtZW50Qm90dG9tKSB8fCAoaXNBdEJvdHRvbSAmJiBzZWN0aW9uID09PSAnY29udGFjdCcpKSB7XG4gICAgICAgICAgICBjdXJyZW50U2VjdGlvbiA9IHNlY3Rpb247XG4gICAgICAgICAgICBicmVhazsgLy8gQnJlYWsgdGhlIGxvb3AgYXMgd2UgaGF2ZSBmb3VuZCB0aGUgY3VycmVudCBzZWN0aW9uXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIFxuICAgICAgaWYgKGN1cnJlbnRTZWN0aW9uICYmIGN1cnJlbnRTZWN0aW9uICE9PSBhY3RpdmVTZWN0aW9uKSB7XG4gICAgICAgIHNldEFjdGl2ZVNlY3Rpb24oY3VycmVudFNlY3Rpb24pO1xuICAgICAgfVxuICAgIH07XG4gIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gIH0sIFthY3RpdmVTZWN0aW9uXSk7IC8vIERlcGVuZGVuY2llcyBsaXN0IGluY2x1ZGVzIGFjdGl2ZVNlY3Rpb24gdG8gdHJpZ2dlciB1cGRhdGVzXG4gIFxuICBcblxuXG4gIGNvbnN0IGRvdFN0eWxlID0gKHNlY3Rpb24pID0+ICh7XG4gICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIGhlaWdodDogXCIxNXB4XCIsXG4gICAgd2lkdGg6IFwiMTVweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlU2VjdGlvbiA9PT0gc2VjdGlvbiA/IFwicmdiKDQ5LCA1OSwgMTcyKVwiIDogXCIjY2NjXCIsXG4gICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgdHJhbnNpdGlvbjogXCJiYWNrZ3JvdW5kLWNvbG9yIDAuM3NcIixcbiAgfSk7XG4gIGNvbnNvbGUubG9nKGBEb3Qgc3R5bGUgZm9yIGhvbWU6ICR7ZG90U3R5bGUoJ2hvbWUnKS5iYWNrZ3JvdW5kQ29sb3J9YCk7XG5cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN4PXt7XG4gICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gICAgICAgIHJpZ2h0OiAyMCxcbiAgICAgICAgdG9wOiBcIjUwJVwiLFxuICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSgtNTAlKVwiLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgekluZGV4OiAxMjAwLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8YSBocmVmPVwiI2hvbWVcIiBzdHlsZT17ZG90U3R5bGUoXCJob21lXCIpfT48L2E+XG4gICAgICA8YSBocmVmPVwiI3dvcmtcIiBzdHlsZT17ZG90U3R5bGUoXCJ3b3JrXCIpfT48L2E+XG4gICAgICA8YSBocmVmPVwiI3NraWxsc1wiIHN0eWxlPXtkb3RTdHlsZShcInNraWxsc1wiKX0+PC9hPlxuICAgICAgPGEgaHJlZj1cIiNhYm91dFwiIHN0eWxlPXtkb3RTdHlsZShcImFib3V0XCIpfT48L2E+XG4gICAgICA8YSBocmVmPVwiI2NvbnRhY3RcIiBzdHlsZT17ZG90U3R5bGUoXCJjb250YWN0XCIpfT48L2E+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uRG90cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm94IiwiTmF2aWdhdGlvbkRvdHMiLCJhY3RpdmVTZWN0aW9uIiwic2V0QWN0aXZlU2VjdGlvbiIsIm5hdmJhckhlaWdodCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsaWVudEhlaWdodCIsImhhbmRsZVNjcm9sbCIsInZpZXdwb3J0SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJkb2N1bWVudEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEhlaWdodCIsInNlY3Rpb25zIiwiY3VycmVudFNlY3Rpb24iLCJzZWN0aW9uIiwiZWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiZWxlbWVudFRvcCIsIm9mZnNldFRvcCIsImVsZW1lbnRCb3R0b20iLCJvZmZzZXRIZWlnaHQiLCJpc0F0Qm90dG9tIiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZG90U3R5bGUiLCJkaXNwbGF5IiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJib3JkZXJSYWRpdXMiLCJ0cmFuc2l0aW9uIiwiY29uc29sZSIsImxvZyIsInN4IiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsInRyYW5zZm9ybSIsImZsZXhEaXJlY3Rpb24iLCJ6SW5kZXgiLCJhIiwiaHJlZiIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar/NavigationDot.js\n"));

/***/ })

});