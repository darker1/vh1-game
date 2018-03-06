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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/game_canvas.tsx":
/*!****************************************!*\
  !*** ./src/components/game_canvas.tsx ***!
  \****************************************/
/*! exports provided: Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _world_objects_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../world_objects/sprite */ "./src/world_objects/sprite.ts");
/* harmony import */ var _world_objects_background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../world_objects/background */ "./src/world_objects/background.ts");
/* harmony import */ var _handlers_LeftKeypressHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../handlers/LeftKeypressHandler */ "./src/handlers/LeftKeypressHandler.ts");
/* harmony import */ var _handlers_RightKeypressHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../handlers/RightKeypressHandler */ "./src/handlers/RightKeypressHandler.ts");
/* harmony import */ var _handlers_UpKeypressHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../handlers/UpKeypressHandler */ "./src/handlers/UpKeypressHandler.ts");
/* harmony import */ var _handlers_DownKeypressHandler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../handlers/DownKeypressHandler */ "./src/handlers/DownKeypressHandler.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







var Canvas = /** @class */ (function (_super) {
    __extends(Canvas, _super);
    function Canvas() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.STEP = 5;
        return _this;
    }
    Canvas.prototype.componentDidMount = function () {
        var _this = this;
        var redrawables = [];
        var canvas = this.refs.canvas;
        var ctx = canvas.getContext("2d");
        var keyhandlers = this.initHandlers();
        var bkgdSource = 'https://www.theplace2.ru/archive/kate_bock/img/kate_bock_si_swimsuit_2016_7.jpg';
        var background = new _world_objects_background__WEBPACK_IMPORTED_MODULE_2__["Background"](bkgdSource, canvas.width, canvas.height);
        var podOptoins = {
            src: '../../assets/pod.png',
            sprites: {
                'normal': { x: 0, y: 0, w: 269, h: 93 },
                'danger': { x: 0, y: 93, w: 269, h: 93 }
            }
        };
        var pod = new _world_objects_sprite__WEBPACK_IMPORTED_MODULE_1__["Sprite"](podOptoins);
        document.addEventListener('keydown', function (event) {
            var loc;
            keyhandlers.HandleKeypress(event, { pod: pod, loc: loc, STEP: _this.STEP, canvas: canvas });
            _this.redraw(canvas, ctx, redrawables);
        });
        var current = 'normal';
        // render actions
        background.render()(ctx);
        pod.render(current, 0, 0)(ctx);
        redrawables.push(background);
        redrawables.push(pod);
        /*
        setInterval(() => {
            if(current === 'normal') {
                current = 'danger';
            } else {
                current = 'normal';
            }
            let loc = pod.getCurrentCoords();
            pod.update(current, loc.x, loc.y);
            this.redraw(canvas, ctx, redrawables);

        }, 1000);
*/
        var image = new Image();
        image.onload = function () {
            for (var i = 0; i < canvas.width; i++) {
                ctx.drawImage(image, 0, 0, image.width, image.height, i, 200, 6, 6);
            }
        };
        image.src = '../assets/wall.jpg';
    };
    Canvas.prototype.initHandlers = function () {
        return new _handlers_LeftKeypressHandler__WEBPACK_IMPORTED_MODULE_3__["LeftKeypressHandler"](new _handlers_RightKeypressHandler__WEBPACK_IMPORTED_MODULE_4__["RightKeypressHandler"](new _handlers_DownKeypressHandler__WEBPACK_IMPORTED_MODULE_6__["DownKeypressHandler"](new _handlers_UpKeypressHandler__WEBPACK_IMPORTED_MODULE_5__["UpKeypressHandler"]())));
    };
    Canvas.prototype.redraw = function (canvas, ctx, redrawables) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        redrawables.forEach(function (v, i, arr) { return v.redraw()(ctx); });
    };
    Canvas.prototype.generateTube = function (length, height, startY) {
    };
    Canvas.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("canvas", { ref: "canvas", width: 640, height: 425 })));
    };
    return Canvas;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/handlers/DownKeypressHandler.ts":
/*!*********************************************!*\
  !*** ./src/handlers/DownKeypressHandler.ts ***!
  \*********************************************/
/*! exports provided: DownKeypressHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownKeypressHandler", function() { return DownKeypressHandler; });
/* harmony import */ var _IKeypressEventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IKeypressEventHandler */ "./src/handlers/IKeypressEventHandler.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DownKeypressHandler = /** @class */ (function (_super) {
    __extends(DownKeypressHandler, _super);
    function DownKeypressHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DownKeypressHandler.prototype.HandleKeypress = function (event, objs) {
        if (event.keyCode === 40) {
            console.log('Down Pressed');
            objs.loc = objs.pod.getCurrentCoords();
            if (objs.loc.y - objs.STEP < objs.canvas.height) {
                objs.loc.y = objs.loc.y + objs.STEP;
            }
            else {
                //TODO: replace with var
                objs.loc.y = objs.canvas.height - 93;
            }
            objs.pod.update(objs.loc.which, objs.loc.x, objs.loc.y);
        }
        this.MoveNext(event, objs);
    };
    return DownKeypressHandler;
}(_IKeypressEventHandler__WEBPACK_IMPORTED_MODULE_0__["KeypressEventHandler"]));



/***/ }),

/***/ "./src/handlers/IKeypressEventHandler.ts":
/*!***********************************************!*\
  !*** ./src/handlers/IKeypressEventHandler.ts ***!
  \***********************************************/
/*! exports provided: KeypressEventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeypressEventHandler", function() { return KeypressEventHandler; });
var KeypressEventHandler = /** @class */ (function () {
    function KeypressEventHandler(nextHandler) {
        if (nextHandler) {
            this.SetNext(nextHandler);
        }
    }
    KeypressEventHandler.prototype.SetNext = function (handler) {
        this._next = handler;
    };
    KeypressEventHandler.prototype.MoveNext = function (event, objs) {
        if (this._next != null) {
            return this._next.HandleKeypress(event, objs);
        }
    };
    return KeypressEventHandler;
}());



/***/ }),

/***/ "./src/handlers/LeftKeypressHandler.ts":
/*!*********************************************!*\
  !*** ./src/handlers/LeftKeypressHandler.ts ***!
  \*********************************************/
/*! exports provided: LeftKeypressHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftKeypressHandler", function() { return LeftKeypressHandler; });
/* harmony import */ var _IKeypressEventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IKeypressEventHandler */ "./src/handlers/IKeypressEventHandler.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LeftKeypressHandler = /** @class */ (function (_super) {
    __extends(LeftKeypressHandler, _super);
    function LeftKeypressHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LeftKeypressHandler.prototype.HandleKeypress = function (event, objs) {
        if (event.keyCode === 37) {
            console.log('Left Pressed');
            var loc = objs.pod.getCurrentCoords();
            if (loc.x - objs.STEP > 0) {
                loc.x = loc.x - objs.STEP;
            }
            else {
                loc.x = 0;
            }
            objs.pod.update(loc.which, loc.x, loc.y);
        }
        this.MoveNext(event, objs);
    };
    return LeftKeypressHandler;
}(_IKeypressEventHandler__WEBPACK_IMPORTED_MODULE_0__["KeypressEventHandler"]));



/***/ }),

/***/ "./src/handlers/RightKeypressHandler.ts":
/*!**********************************************!*\
  !*** ./src/handlers/RightKeypressHandler.ts ***!
  \**********************************************/
/*! exports provided: RightKeypressHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightKeypressHandler", function() { return RightKeypressHandler; });
/* harmony import */ var _IKeypressEventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IKeypressEventHandler */ "./src/handlers/IKeypressEventHandler.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RightKeypressHandler = /** @class */ (function (_super) {
    __extends(RightKeypressHandler, _super);
    function RightKeypressHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RightKeypressHandler.prototype.HandleKeypress = function (event, objs) {
        if (event.keyCode === 39) {
            console.log('Right Pressed');
            objs.loc = objs.pod.getCurrentCoords();
            if (objs.loc.x + objs.STEP < objs.canvas.width) {
                objs.loc.x = objs.loc.x + objs.STEP;
            }
            else {
                //TODO: replace with var
                objs.loc.x = objs.canvas.width - 269;
            }
            objs.pod.update(objs.loc.which, objs.loc.x, objs.loc.y);
        }
        this.MoveNext(event, objs);
    };
    return RightKeypressHandler;
}(_IKeypressEventHandler__WEBPACK_IMPORTED_MODULE_0__["KeypressEventHandler"]));



/***/ }),

/***/ "./src/handlers/UpKeypressHandler.ts":
/*!*******************************************!*\
  !*** ./src/handlers/UpKeypressHandler.ts ***!
  \*******************************************/
/*! exports provided: UpKeypressHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpKeypressHandler", function() { return UpKeypressHandler; });
/* harmony import */ var _IKeypressEventHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IKeypressEventHandler */ "./src/handlers/IKeypressEventHandler.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UpKeypressHandler = /** @class */ (function (_super) {
    __extends(UpKeypressHandler, _super);
    function UpKeypressHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpKeypressHandler.prototype.HandleKeypress = function (event, objs) {
        if (event.keyCode === 38) {
            console.log('Up Pressed');
            objs.loc = objs.pod.getCurrentCoords();
            if (objs.loc.y + objs.STEP > 0) {
                objs.loc.y = objs.loc.y - objs.STEP;
            }
            else {
                //TODO: replace with var
                objs.loc.y = 0;
            }
            objs.pod.update(objs.loc.which, objs.loc.x, objs.loc.y);
        }
        this.MoveNext(event, objs);
    };
    return UpKeypressHandler;
}(_IKeypressEventHandler__WEBPACK_IMPORTED_MODULE_0__["KeypressEventHandler"]));



/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_game_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/game_canvas */ "./src/components/game_canvas.tsx");



react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_game_canvas__WEBPACK_IMPORTED_MODULE_2__["Canvas"], { text: "Howdy" }), document.getElementById("example"));


/***/ }),

/***/ "./src/world_objects/background.ts":
/*!*****************************************!*\
  !*** ./src/world_objects/background.ts ***!
  \*****************************************/
/*! exports provided: Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return Background; });
var Background = /** @class */ (function () {
    function Background(src, cW, cH) {
        var _this = this;
        this._image = new Image();
        this._image.onload = function () { return _this._imageLoaded = true; };
        this._image.src = src;
        this._w = cW;
        this._h = cH;
    }
    Background.prototype.redraw = function () {
        var _this = this;
        return function (ctx) {
            if (!_this._rendered) {
                console.log('background has not been rendered yet, but UPDATE was called.');
                return;
            }
            ctx.drawImage(_this._image, 0, 0, _this._image.width, _this._image.height, 0, 0, _this._w, _this._h);
        };
    };
    Background.prototype.render = function () {
        var _this = this;
        return function (ctx) {
            if (!_this._imageLoaded) {
                //modify the onload to do this render
                _this._image.onload = function () {
                    _this._imageLoaded = true;
                    ctx.drawImage(_this._image, 0, 0, _this._image.width, _this._image.height, 0, 0, _this._w, _this._h);
                    _this._rendered = true;
                };
                return;
            }
            ctx.drawImage(_this._image, 0, 0, _this._image.width, _this._image.height, 0, 0, _this._w, _this._h);
            _this._rendered = true;
        };
    };
    Background.prototype.update = function () {
        var _this = this;
        return function (ctx) {
            if (!_this._rendered) {
                console.log('background has not been rendered yet, but UPDATE was called.');
                return;
            }
            ctx.drawImage(_this._image, 0, 0, _this._image.width, _this._image.height, 0, 0, _this._w, _this._h);
        };
    };
    return Background;
}());



/***/ }),

/***/ "./src/world_objects/sprite.ts":
/*!*************************************!*\
  !*** ./src/world_objects/sprite.ts ***!
  \*************************************/
/*! exports provided: Sprite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return Sprite; });
var Sprite = /** @class */ (function () {
    function Sprite(options) {
        var _this = this;
        this._image = new Image();
        this._image.onload = function () { return _this._imageLoaded = true; };
        this._image.src = options.src;
        this._sprites = options.sprites;
    }
    Sprite.prototype.render = function (which, dx, dy, dw, dh) {
        var _this = this;
        return function (ctx) {
            if (!_this._imageLoaded) {
                //modify the onload to do this render
                _this._image.onload = function () {
                    _this._imageLoaded = true;
                    var values = _this.prepareLocations(which, dx, dy, dw, dh);
                    _this.drawSprite(which, values.sprite, values.destination, ctx);
                    _this._rendered = true;
                };
                return;
            }
            var values = _this.prepareLocations(which, dx, dy, dw, dh);
            _this.drawSprite(which, values.sprite, values.destination, ctx);
            _this._rendered = true;
        };
    };
    Sprite.prototype.update = function (which, dx, dy, dw, dh) {
        if (!this._rendered) {
            console.log("Sprite " + which + " has not been rendered yet, but UPDATE was called.");
            return;
        }
        this._state = this.prepareLocations(which, dx, dy, dw, dh);
        this._currentLocation = this._state.destination;
        this._currentSprite = { which: which, sprite: this._state.sprite };
    };
    Sprite.prototype.getCurrentCoords = function () {
        return { x: this._currentLocation.x, y: this._currentLocation.y, which: this._currentSprite.which };
    };
    Sprite.prototype.redraw = function () {
        var _this = this;
        if (!this._rendered) {
            console.log('Sprite has not been rendered yet, but REDRAW was called.');
            return;
        }
        return function (ctx) {
            _this.drawSprite(_this._currentSprite.which, _this._state.sprite, _this._state.destination, ctx);
        };
    };
    Sprite.prototype.prepareLocations = function (which, dx, dy, dw, dh) {
        var sprite = this._sprites[which];
        if (!sprite) {
            console.log("Cannot find sprite " + which);
        }
        if (!dw) {
            dw = sprite.w;
        }
        if (!dh) {
            dh = sprite.h;
        }
        return { sprite: sprite, destination: { x: dx, y: dy, w: dw, h: dh } };
    };
    Sprite.prototype.drawSprite = function (which, sprite, destination, ctx) {
        ctx.drawImage(this._image, sprite.x, sprite.y, sprite.w, sprite.h, destination.x, destination.y, destination.w, destination.h);
        this._currentLocation = destination;
        this._currentSprite = { which: which, sprite: sprite };
    };
    return Sprite;
}());



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZ2FtZV9jYW52YXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9Eb3duS2V5cHJlc3NIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9JS2V5cHJlc3NFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXJzL0xlZnRLZXlwcmVzc0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXJzL1JpZ2h0S2V5cHJlc3NIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9VcEtleXByZXNzSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3NyYy93b3JsZF9vYmplY3RzL2JhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkX29iamVjdHMvc3ByaXRlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RET01cIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFD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QUFFLFdBQVcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDO0lBQ3pELENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzlGRCx1Qjs7Ozs7Ozs7Ozs7QUNBQSwwQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTcHJpdGUsIFNwcml0ZU9wdGlvbnMgfSBmcm9tIFwiLi4vd29ybGRfb2JqZWN0cy9zcHJpdGVcIjtcbmltcG9ydCB7IEJhY2tncm91bmQgfSBmcm9tIFwiLi4vd29ybGRfb2JqZWN0cy9iYWNrZ3JvdW5kXCI7XG5pbXBvcnQgeyBSZWRyYXdhYmxlIH0gZnJvbSBcIi4uL3dvcmxkX29iamVjdHMvcmVkcmF3YWJsZVwiO1xuaW1wb3J0IHsgSUtleXByZXNzRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2hhbmRsZXJzL0lLZXlwcmVzc0V2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgTGVmdEtleXByZXNzSGFuZGxlciB9IGZyb20gXCIuLi9oYW5kbGVycy9MZWZ0S2V5cHJlc3NIYW5kbGVyXCI7XG5pbXBvcnQgeyBSaWdodEtleXByZXNzSGFuZGxlciB9IGZyb20gXCIuLi9oYW5kbGVycy9SaWdodEtleXByZXNzSGFuZGxlclwiO1xuaW1wb3J0IHsgVXBLZXlwcmVzc0hhbmRsZXIgfSBmcm9tIFwiLi4vaGFuZGxlcnMvVXBLZXlwcmVzc0hhbmRsZXJcIjtcbmltcG9ydCB7IERvd25LZXlwcmVzc0hhbmRsZXIgfSBmcm9tIFwiLi4vaGFuZGxlcnMvRG93bktleXByZXNzSGFuZGxlclwiO1xuZXhwb3J0IGludGVyZmFjZSBDYW52YXNQcm9wcyB7IHRleHQ6IHN0cmluZzsgfVxuXG5leHBvcnQgY2xhc3MgQ2FudmFzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PENhbnZhc1Byb3BzLCB7fT4ge1xuICAgIHJlYWRvbmx5IFNURVA6IG51bWJlciA9IDU7XG5cbiAgICByZWZzOiB7XG4gICAgICAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnRcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgcmVkcmF3YWJsZXM6IFJlZHJhd2FibGVbXSA9IFtdO1xuICAgICAgICBjb25zdCBjYW52YXMgPSB0aGlzLnJlZnMuY2FudmFzO1xuICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICBjb25zdCBrZXloYW5kbGVycyA6IElLZXlwcmVzc0V2ZW50SGFuZGxlciA9IHRoaXMuaW5pdEhhbmRsZXJzKCk7XG5cbiAgICAgICAgY29uc3QgYmtnZFNvdXJjZSA9ICdodHRwczovL3d3dy50aGVwbGFjZTIucnUvYXJjaGl2ZS9rYXRlX2JvY2svaW1nL2thdGVfYm9ja19zaV9zd2ltc3VpdF8yMDE2XzcuanBnJztcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZDogQmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKGJrZ2RTb3VyY2UsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwb2RPcHRvaW5zID0ge1xuICAgICAgICAgICAgc3JjOiAnLi4vLi4vYXNzZXRzL3BvZC5wbmcnLFxuICAgICAgICAgICAgc3ByaXRlczoge1xuICAgICAgICAgICAgICAgICdub3JtYWwnOiB7IHg6IDAsIHk6IDAsIHc6IDI2OSwgaDogOTMgfSxcbiAgICAgICAgICAgICAgICAnZGFuZ2VyJzogeyB4OiAwLCB5OiA5MywgdzogMjY5LCBoOiA5MyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gYXMgU3ByaXRlT3B0aW9ucztcbiAgICAgICAgY29uc3QgcG9kOiBTcHJpdGUgPSBuZXcgU3ByaXRlKHBvZE9wdG9pbnMpO1xuICAgICAgICBcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IGxvYzoge3g6IG51bWJlciwgeTogbnVtYmVyLCB3aGljaDogc3RyaW5nfTtcbiAgICAgICAgICAgIGtleWhhbmRsZXJzLkhhbmRsZUtleXByZXNzKGV2ZW50LCB7cG9kOiBwb2QsIGxvYzogbG9jLCBTVEVQOiB0aGlzLlNURVAsIGNhbnZhczogY2FudmFzfSk7XG4gICAgICAgICAgICB0aGlzLnJlZHJhdyhjYW52YXMsY3R4LCByZWRyYXdhYmxlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBjdXJyZW50OiAnbm9ybWFsJ3wnZGFuZ2VyJyA9ICdub3JtYWwnO1xuICAgICAgICAvLyByZW5kZXIgYWN0aW9uc1xuICAgICAgICBiYWNrZ3JvdW5kLnJlbmRlcigpKGN0eCk7XG4gICAgICAgIHBvZC5yZW5kZXIoY3VycmVudCwgMCwgMCkoY3R4KTtcblxuICAgICAgICByZWRyYXdhYmxlcy5wdXNoKGJhY2tncm91bmQpO1xuICAgICAgICByZWRyYXdhYmxlcy5wdXNoKHBvZCk7XG4gICAgICAgIC8qXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmKGN1cnJlbnQgPT09ICdub3JtYWwnKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9ICdkYW5nZXInO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gJ25vcm1hbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbG9jID0gcG9kLmdldEN1cnJlbnRDb29yZHMoKTtcbiAgICAgICAgICAgIHBvZC51cGRhdGUoY3VycmVudCwgbG9jLngsIGxvYy55KTtcbiAgICAgICAgICAgIHRoaXMucmVkcmF3KGNhbnZhcywgY3R4LCByZWRyYXdhYmxlcyk7XG5cbiAgICAgICAgfSwgMTAwMCk7XG4qL1xuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgZm9yKGxldCBpIDogbnVtYmVyID0gMDsgaSA8IGNhbnZhcy53aWR0aDsgaSsrKSB7XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCAwLCAwLCBpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0LCBpLDIwMCw2LDYpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpbWFnZS5zcmMgPSAnLi4vYXNzZXRzL3dhbGwuanBnJztcblxuICAgIH1cblxuICAgIGluaXRIYW5kbGVycygpOiBJS2V5cHJlc3NFdmVudEhhbmRsZXIge1xuICAgICAgICByZXR1cm4gbmV3IExlZnRLZXlwcmVzc0hhbmRsZXIoXG4gICAgICAgICAgICBuZXcgUmlnaHRLZXlwcmVzc0hhbmRsZXIoXG4gICAgICAgICAgICAgICAgbmV3IERvd25LZXlwcmVzc0hhbmRsZXIoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVcEtleXByZXNzSGFuZGxlcigpKSkpO1xuICAgIH1cblxuICAgIHJlZHJhdyhjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcmVkcmF3YWJsZXM6IFJlZHJhd2FibGVbXSkge1xuICAgICAgICBjdHguY2xlYXJSZWN0KDAsMCxjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgICAgICByZWRyYXdhYmxlcy5mb3JFYWNoKCh2LGksYXJyKSA9PiB2LnJlZHJhdygpKGN0eCkpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlVHViZShsZW5ndGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHN0YXJ0WTogbnVtYmVyKSB7XG5cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxjYW52YXMgcmVmPVwiY2FudmFzXCIgd2lkdGg9ezY0MH0gaGVpZ2h0PXs0MjV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgeyBJS2V5cHJlc3NFdmVudEhhbmRsZXIsIEtleXByZXNzRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUtleXByZXNzRXZlbnRIYW5kbGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBEb3duS2V5cHJlc3NIYW5kbGVyIGV4dGVuZHMgS2V5cHJlc3NFdmVudEhhbmRsZXIge1xuICAgIEhhbmRsZUtleXByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBvYmpzOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRG93biBQcmVzc2VkJyk7XG4gICAgICAgICAgICBvYmpzLmxvYyA9IG9ianMucG9kLmdldEN1cnJlbnRDb29yZHMoKTtcbiAgICAgICAgICAgIGlmKG9ianMubG9jLnkgLSBvYmpzLlNURVAgPCBvYmpzLmNhbnZhcy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBvYmpzLmxvYy55ID0gb2Jqcy5sb2MueSArIG9ianMuU1RFUDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9UT0RPOiByZXBsYWNlIHdpdGggdmFyXG4gICAgICAgICAgICAgICAgb2Jqcy5sb2MueSA9IG9ianMuY2FudmFzLmhlaWdodCAtIDkzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Jqcy5wb2QudXBkYXRlKG9ianMubG9jLndoaWNoLCBvYmpzLmxvYy54LCBvYmpzLmxvYy55KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLk1vdmVOZXh0KGV2ZW50LCBvYmpzKTtcbiAgICB9XG59IiwiZXhwb3J0IGludGVyZmFjZSBJS2V5cHJlc3NFdmVudEhhbmRsZXIge1xuICAgIFNldE5leHQoaGFuZGxlcjogSUtleXByZXNzRXZlbnRIYW5kbGVyKTogdm9pZDtcbiAgICBIYW5kbGVLZXlwcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCwgb2JqczogYW55KTogdm9pZDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEtleXByZXNzRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgSUtleXByZXNzRXZlbnRIYW5kbGVyIHtcbiAgICBwcml2YXRlIF9uZXh0OiBJS2V5cHJlc3NFdmVudEhhbmRsZXI7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IobmV4dEhhbmRsZXI/OiBJS2V5cHJlc3NFdmVudEhhbmRsZXIpIHtcbiAgICAgICAgaWYgKG5leHRIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLlNldE5leHQobmV4dEhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgU2V0TmV4dChoYW5kbGVyOiBJS2V5cHJlc3NFdmVudEhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fbmV4dCA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIE1vdmVOZXh0KGV2ZW50OiBLZXlib2FyZEV2ZW50LCBvYmpzOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuX25leHQgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25leHQuSGFuZGxlS2V5cHJlc3MoZXZlbnQsIG9ianMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWJzdHJhY3QgSGFuZGxlS2V5cHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQsIG9ianM6IGFueSk6IHZvaWQ7XG59IiwiaW1wb3J0IHsgSUtleXByZXNzRXZlbnRIYW5kbGVyLCBLZXlwcmVzc0V2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lLZXlwcmVzc0V2ZW50SGFuZGxlclwiO1xuXG5leHBvcnQgY2xhc3MgTGVmdEtleXByZXNzSGFuZGxlciBleHRlbmRzIEtleXByZXNzRXZlbnRIYW5kbGVyIHtcbiAgICBIYW5kbGVLZXlwcmVzcyhldmVudDogS2V5Ym9hcmRFdmVudCwgb2JqczogYW55KTogdm9pZCB7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0xlZnQgUHJlc3NlZCcpO1xuICAgICAgICAgICAgY29uc3QgbG9jID0gb2Jqcy5wb2QuZ2V0Q3VycmVudENvb3JkcygpO1xuICAgICAgICAgICAgaWYgKGxvYy54IC0gb2Jqcy5TVEVQID4gMCkge1xuICAgICAgICAgICAgICAgIGxvYy54ID0gbG9jLnggLSBvYmpzLlNURVA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvYy54ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9ianMucG9kLnVwZGF0ZShsb2Mud2hpY2gsIGxvYy54LCBsb2MueSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Nb3ZlTmV4dChldmVudCwgb2Jqcyk7XG4gICAgfVxufSIsImltcG9ydCB7IElLZXlwcmVzc0V2ZW50SGFuZGxlciwgS2V5cHJlc3NFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JS2V5cHJlc3NFdmVudEhhbmRsZXJcIjtcblxuZXhwb3J0IGNsYXNzIFJpZ2h0S2V5cHJlc3NIYW5kbGVyIGV4dGVuZHMgS2V5cHJlc3NFdmVudEhhbmRsZXIge1xuICAgIEhhbmRsZUtleXByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBvYmpzOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmlnaHQgUHJlc3NlZCcpO1xuICAgICAgICAgICAgb2Jqcy5sb2MgPSBvYmpzLnBvZC5nZXRDdXJyZW50Q29vcmRzKCk7XG4gICAgICAgICAgICBpZiAob2Jqcy5sb2MueCArIG9ianMuU1RFUCA8IG9ianMuY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgb2Jqcy5sb2MueCA9IG9ianMubG9jLnggKyBvYmpzLlNURVA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vVE9ETzogcmVwbGFjZSB3aXRoIHZhclxuICAgICAgICAgICAgICAgIG9ianMubG9jLnggPSBvYmpzLmNhbnZhcy53aWR0aCAtIDI2OTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9ianMucG9kLnVwZGF0ZShvYmpzLmxvYy53aGljaCwgb2Jqcy5sb2MueCwgb2Jqcy5sb2MueSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5Nb3ZlTmV4dChldmVudCwgb2Jqcyk7XG4gICAgfVxufSIsImltcG9ydCB7IElLZXlwcmVzc0V2ZW50SGFuZGxlciwgS2V5cHJlc3NFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JS2V5cHJlc3NFdmVudEhhbmRsZXJcIjtcblxuZXhwb3J0IGNsYXNzIFVwS2V5cHJlc3NIYW5kbGVyIGV4dGVuZHMgS2V5cHJlc3NFdmVudEhhbmRsZXIge1xuICAgIEhhbmRsZUtleXByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBvYmpzOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXAgUHJlc3NlZCcpO1xuICAgICAgICAgICAgb2Jqcy5sb2MgPSBvYmpzLnBvZC5nZXRDdXJyZW50Q29vcmRzKCk7XG4gICAgICAgICAgICBpZiAob2Jqcy5sb2MueSArIG9ianMuU1RFUCA+IDApIHtcbiAgICAgICAgICAgICAgICBvYmpzLmxvYy55ID0gb2Jqcy5sb2MueSAtIG9ianMuU1RFUDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9UT0RPOiByZXBsYWNlIHdpdGggdmFyXG4gICAgICAgICAgICAgICAgb2Jqcy5sb2MueSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvYmpzLnBvZC51cGRhdGUob2Jqcy5sb2Mud2hpY2gsIG9ianMubG9jLngsIG9ianMubG9jLnkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuTW92ZU5leHQoZXZlbnQsIG9ianMpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuaW1wb3J0IHsgQ2FudmFzIH0gZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lX2NhbnZhc1wiO1xuXG5SZWFjdERPTS5yZW5kZXIoXG4gICAgPENhbnZhcyB0ZXh0PVwiSG93ZHlcIiAvPixcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4YW1wbGVcIilcbik7IiwiaW1wb3J0IHsgUmVkcmF3YWJsZSB9IGZyb20gXCIuL3JlZHJhd2FibGVcIjtcblxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmQgaW1wbGVtZW50cyBSZWRyYXdhYmxlIHtcbiAgICBcbiAgICByZWRyYXcoKTogKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkIHtcbiAgICAgICAgcmV0dXJuIChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9yZW5kZXJlZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiYWNrZ3JvdW5kIGhhcyBub3QgYmVlbiByZW5kZXJlZCB5ZXQsIGJ1dCBVUERBVEUgd2FzIGNhbGxlZC4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuX2ltYWdlLCAwLCAwLCB0aGlzLl9pbWFnZS53aWR0aCwgdGhpcy5faW1hZ2UuaGVpZ2h0LCAwLCAwLCB0aGlzLl93LCB0aGlzLl9oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3JlbmRlcmVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2ltYWdlTG9hZGVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2ltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIHByaXZhdGUgX3c6IG51bWJlcjtcbiAgICBwcml2YXRlIF9oOiBudW1iZXI7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc3JjOiBzdHJpbmcsIGNXOiBudW1iZXIsIGNIOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5faW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5faW1hZ2Uub25sb2FkID0gKCkgPT4gdGhpcy5faW1hZ2VMb2FkZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9pbWFnZS5zcmMgPSBzcmM7XG4gICAgICAgIHRoaXMuX3cgPSBjVztcbiAgICAgICAgdGhpcy5faCA9IGNIO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXIoKTogKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkIHtcbiAgICAgICAgcmV0dXJuIChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbWFnZUxvYWRlZCkge1xuICAgICAgICAgICAgICAgIC8vbW9kaWZ5IHRoZSBvbmxvYWQgdG8gZG8gdGhpcyByZW5kZXJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ltYWdlTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLl9pbWFnZSwgMCwgMCwgdGhpcy5faW1hZ2Uud2lkdGgsIHRoaXMuX2ltYWdlLmhlaWdodCwgMCwgMCwgdGhpcy5fdywgdGhpcy5faCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuX2ltYWdlLCAwLCAwLCB0aGlzLl9pbWFnZS53aWR0aCwgdGhpcy5faW1hZ2UuaGVpZ2h0LCAwLCAwLCB0aGlzLl93LCB0aGlzLl9oKTtcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGUoKTogKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB2b2lkIHtcbiAgICAgICAgcmV0dXJuIChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9yZW5kZXJlZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdiYWNrZ3JvdW5kIGhhcyBub3QgYmVlbiByZW5kZXJlZCB5ZXQsIGJ1dCBVUERBVEUgd2FzIGNhbGxlZC4nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuX2ltYWdlLCAwLCAwLCB0aGlzLl9pbWFnZS53aWR0aCwgdGhpcy5faW1hZ2UuaGVpZ2h0LCAwLCAwLCB0aGlzLl93LCB0aGlzLl9oKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBSZWRyYXdhYmxlIH0gZnJvbSBcIi4vcmVkcmF3YWJsZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNwcml0ZU9wdGlvbnMge1xuICAgIHNyYzogc3RyaW5nO1xuICAgIHNwcml0ZXM6IHsgW2tleTogc3RyaW5nXTogU3ByaXRlTG9jYXRpb24gfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTcHJpdGVMb2NhdGlvbiB7IHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciB9XG5cbmV4cG9ydCBjbGFzcyBTcHJpdGUgaW1wbGVtZW50cyBSZWRyYXdhYmxlIHtcblxuICAgIHByaXZhdGUgX3JlbmRlcmVkOiBib29sZWFuO1xuICAgIHByaXZhdGUgX2ltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xuICAgIHByaXZhdGUgX2ltYWdlTG9hZGVkOiBib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBfc3ByaXRlczogeyBba2V5OiBzdHJpbmddOiBTcHJpdGVMb2NhdGlvbiB9O1xuXG4gICAgcHJpdmF0ZSBfc3RhdGU/OiB7IHNwcml0ZTogU3ByaXRlTG9jYXRpb24sIGRlc3RpbmF0aW9uOiBTcHJpdGVMb2NhdGlvbiB9O1xuICAgIHByaXZhdGUgX2N1cnJlbnRMb2NhdGlvbj86IFNwcml0ZUxvY2F0aW9uO1xuICAgIHByaXZhdGUgX2N1cnJlbnRTcHJpdGU6IHt3aGljaDogc3RyaW5nLCBzcHJpdGU6IFNwcml0ZUxvY2F0aW9ufTtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBTcHJpdGVPcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX2ltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHRoaXMuX2ltYWdlLm9ubG9hZCA9ICgpID0+IHRoaXMuX2ltYWdlTG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faW1hZ2Uuc3JjID0gb3B0aW9ucy5zcmM7XG4gICAgICAgIHRoaXMuX3Nwcml0ZXMgPSBvcHRpb25zLnNwcml0ZXM7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlcih3aGljaDogc3RyaW5nLCBkeDogbnVtYmVyLCBkeTogbnVtYmVyLCBkdz86IG51bWJlciwgZGg/OiBudW1iZXIpOiAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHZvaWQge1xuICAgICAgICByZXR1cm4gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2ltYWdlTG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgLy9tb2RpZnkgdGhlIG9ubG9hZCB0byBkbyB0aGlzIHJlbmRlclxuICAgICAgICAgICAgICAgIHRoaXMuX2ltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW1hZ2VMb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMucHJlcGFyZUxvY2F0aW9ucyh3aGljaCwgZHgsIGR5LCBkdywgZGgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdTcHJpdGUod2hpY2gsIHZhbHVlcy5zcHJpdGUsIHZhbHVlcy5kZXN0aW5hdGlvbiwgY3R4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLnByZXBhcmVMb2NhdGlvbnMod2hpY2gsIGR4LCBkeSwgZHcsIGRoKTtcbiAgICAgICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh3aGljaCwgdmFsdWVzLnNwcml0ZSwgdmFsdWVzLmRlc3RpbmF0aW9uLCBjdHgpO1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZSh3aGljaDogc3RyaW5nLCBkeDogbnVtYmVyLCBkeTogbnVtYmVyLCBkdz86IG51bWJlciwgZGg/OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9yZW5kZXJlZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFNwcml0ZSAke3doaWNofSBoYXMgbm90IGJlZW4gcmVuZGVyZWQgeWV0LCBidXQgVVBEQVRFIHdhcyBjYWxsZWQuYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc3RhdGUgPSB0aGlzLnByZXBhcmVMb2NhdGlvbnMod2hpY2gsIGR4LCBkeSwgZHcsIGRoKTsgICBcbiAgICAgICAgdGhpcy5fY3VycmVudExvY2F0aW9uID0gdGhpcy5fc3RhdGUuZGVzdGluYXRpb247XG4gICAgICAgIHRoaXMuX2N1cnJlbnRTcHJpdGUgPSB7d2hpY2g6IHdoaWNoLCBzcHJpdGU6IHRoaXMuX3N0YXRlLnNwcml0ZX07XG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBnZXRDdXJyZW50Q29vcmRzKCk6IHt4Om51bWJlciwgeTpudW1iZXIsIHdoaWNoOiBzdHJpbmd9IHtcbiAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5fY3VycmVudExvY2F0aW9uLngsIHk6IHRoaXMuX2N1cnJlbnRMb2NhdGlvbi55LCB3aGljaDogdGhpcy5fY3VycmVudFNwcml0ZS53aGljaH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVkcmF3KCk6IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkgPT4gdm9pZCB7XG4gICAgICAgIGlmICghdGhpcy5fcmVuZGVyZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTcHJpdGUgaGFzIG5vdCBiZWVuIHJlbmRlcmVkIHlldCwgYnV0IFJFRFJBVyB3YXMgY2FsbGVkLicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZHJhd1Nwcml0ZSh0aGlzLl9jdXJyZW50U3ByaXRlLndoaWNoLCB0aGlzLl9zdGF0ZS5zcHJpdGUsIHRoaXMuX3N0YXRlLmRlc3RpbmF0aW9uLCBjdHgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcmVwYXJlTG9jYXRpb25zKHdoaWNoOiBzdHJpbmcsIGR4OiBudW1iZXIsIGR5OiBudW1iZXIsIGR3PzogbnVtYmVyLCBkaD86IG51bWJlcilcbiAgICAgICAgOiB7IHNwcml0ZTogU3ByaXRlTG9jYXRpb24sIGRlc3RpbmF0aW9uOiBTcHJpdGVMb2NhdGlvbiB9IHtcblxuICAgICAgICBjb25zdCBzcHJpdGUgPSB0aGlzLl9zcHJpdGVzW3doaWNoXTtcbiAgICAgICAgaWYgKCFzcHJpdGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDYW5ub3QgZmluZCBzcHJpdGUgJHt3aGljaH1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWR3KSB7XG4gICAgICAgICAgICBkdyA9IHNwcml0ZS53O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkaCkge1xuICAgICAgICAgICAgZGggPSBzcHJpdGUuaDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IHNwcml0ZTogc3ByaXRlLCBkZXN0aW5hdGlvbjogeyB4OiBkeCwgeTogZHksIHc6IGR3LCBoOiBkaCB9IGFzIFNwcml0ZUxvY2F0aW9uIH07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGRyYXdTcHJpdGUod2hpY2g6IHN0cmluZywgc3ByaXRlOiBTcHJpdGVMb2NhdGlvbiwgZGVzdGluYXRpb246IFNwcml0ZUxvY2F0aW9uLCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuX2ltYWdlLCBzcHJpdGUueCwgc3ByaXRlLnksIHNwcml0ZS53LCBzcHJpdGUuaCwgZGVzdGluYXRpb24ueCwgZGVzdGluYXRpb24ueSwgZGVzdGluYXRpb24udywgZGVzdGluYXRpb24uaCk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRMb2NhdGlvbiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICB0aGlzLl9jdXJyZW50U3ByaXRlID0ge3doaWNoOiB3aGljaCwgc3ByaXRlOiBzcHJpdGV9O1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFJlYWN0OyIsIm1vZHVsZS5leHBvcnRzID0gUmVhY3RET007Il0sInNvdXJjZVJvb3QiOiIifQ==