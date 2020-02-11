(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~sign-in-sign-in-module~sign-up-sign-up-module"],{

/***/ "./node_modules/ng-otp-input/fesm2015/ng-otp-input.js":
/*!************************************************************!*\
  !*** ./node_modules/ng-otp-input/fesm2015/ng-otp-input.js ***!
  \************************************************************/
/*! exports provided: NgOtpInputModule, ɵa, ɵc, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgOtpInputModule", function() { return NgOtpInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgOtpInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NumberOnlyDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return KeysPipe; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class KeysPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        return Object.keys(value);
    }
}
KeysPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"], args: [{
                name: 'keys'
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgOtpInputComponent {
    /**
     * @param {?} keysPipe
     */
    constructor(keysPipe) {
        this.keysPipe = keysPipe;
        this.config = { length: 4 };
        // tslint:disable-next-line: no-output-on-prefix
        this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.inputControls = new Array(this.config.length);
        this.componentKey = Math.random()
            .toString(36)
            .substring(2) + new Date().getTime().toString(36);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
        for (let index = 0; index < this.config.length; index++) {
            this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]());
        }
        this.inputType = this.getInputType();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.config.disableAutoFocus) {
            /** @type {?} */
            const containerItem = document.getElementById(`c_${this.componentKey}`);
            if (containerItem) {
                containerItem.addEventListener('paste', (/**
                 * @param {?} evt
                 * @return {?}
                 */
                (evt) => this.handlePaste(evt)));
                /** @type {?} */
                const ele = containerItem.getElementsByClassName('otp-input')[0];
                if (ele && ele.focus) {
                    ele.focus();
                }
            }
        }
    }
    /**
     * @private
     * @param {?} idx
     * @return {?}
     */
    getControlName(idx) {
        return `ctrl_${idx}`;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifLeftArrow(event) {
        return this.ifKeyCode(event, 37);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifRightArrow(event) {
        return this.ifKeyCode(event, 39);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifBackspaceOrDelete(event) {
        return (event.key === 'Backspace' ||
            event.key === 'Delete' ||
            this.ifKeyCode(event, 8) ||
            this.ifKeyCode(event, 46));
    }
    /**
     * @param {?} event
     * @param {?} targetCode
     * @return {?}
     */
    ifKeyCode(event, targetCode) {
        /** @type {?} */
        const key = event.keyCode || event.charCode;
        // tslint:disable-next-line: triple-equals
        return key == targetCode ? true : false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onKeyDown($event) {
        /** @type {?} */
        var isSpace = this.ifKeyCode($event, 32);
        if (isSpace) { // prevent space
            return false;
        }
    }
    /**
     * @param {?} $event
     * @param {?} inputIdx
     * @return {?}
     */
    onKeyUp($event, inputIdx) {
        /** @type {?} */
        const nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
        /** @type {?} */
        const prevInputId = this.appendKey(`otp_${inputIdx - 1}`);
        if (this.ifRightArrow($event)) {
            this.setSelected(nextInputId);
            return;
        }
        if (this.ifLeftArrow($event)) {
            this.setSelected(prevInputId);
            return;
        }
        /** @type {?} */
        const isBackspace = this.ifBackspaceOrDelete($event);
        if (isBackspace && !$event.target.value) {
            this.setSelected(prevInputId);
            this.rebuildValue();
            return;
        }
        if (!$event.target.value) {
            return;
        }
        if (this.ifValidEntry($event)) {
            this.setSelected(nextInputId);
        }
        this.rebuildValue();
    }
    /**
     * @param {?} id
     * @return {?}
     */
    appendKey(id) {
        return `${id}_${this.componentKey}`;
    }
    /**
     * @param {?} eleId
     * @return {?}
     */
    setSelected(eleId) {
        this.focusTo(eleId);
        /** @type {?} */
        const ele = document.getElementById(eleId);
        if (ele && ele.setSelectionRange) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                ele.setSelectionRange(0, 1);
            }), 0);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ifValidEntry(event) {
        /** @type {?} */
        const inp = String.fromCharCode(event.keyCode);
        /** @type {?} */
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        return (isMobile ||
            /[a-zA-Z0-9-_]/.test(inp) ||
            (this.config.allowKeyCodes &&
                this.config.allowKeyCodes.includes(event.keyCode)) ||
            (event.keyCode >= 96 && event.keyCode <= 105));
    }
    /**
     * @param {?} eleId
     * @return {?}
     */
    focusTo(eleId) {
        /** @type {?} */
        const ele = document.getElementById(eleId);
        if (ele) {
            ele.focus();
        }
    }
    // method to set component value
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        if (this.config.allowNumbersOnly && isNaN(value)) {
            return;
        }
        this.otpForm.reset();
        if (!value) {
            this.rebuildValue();
            return;
        }
        value = value.toString().replace(/\s/g, ''); // remove whitespace
        Array.from(value).forEach((/**
         * @param {?} c
         * @param {?} idx
         * @return {?}
         */
        (c, idx) => {
            if (this.otpForm.get(this.getControlName(idx))) {
                this.otpForm.get(this.getControlName(idx)).setValue(c);
            }
        }));
        /** @type {?} */
        const containerItem = document.getElementById(`c_${this.componentKey}`);
        /** @type {?} */
        var indexOfElementToFocus = value.length < this.config.length ? value.length : (this.config.length - 1);
        /** @type {?} */
        let ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];
        if (ele && ele.focus) {
            ele.focus();
        }
        this.rebuildValue();
    }
    /**
     * @return {?}
     */
    rebuildValue() {
        /** @type {?} */
        let val = '';
        this.keysPipe.transform(this.otpForm.controls).forEach((/**
         * @param {?} k
         * @return {?}
         */
        k => {
            if (this.otpForm.controls[k].value) {
                val += this.otpForm.controls[k].value;
            }
        }));
        this.onInputChange.emit(val);
    }
    /**
     * @return {?}
     */
    getInputType() {
        return this.config.isPasswordInput
            ? 'password'
            : this.config.allowNumbersOnly
                ? 'tel'
                : 'text';
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handlePaste(e) {
        // Get pasted data via clipboard API
        /** @type {?} */
        let clipboardData = e.clipboardData || window['clipboardData'];
        if (clipboardData) {
            /** @type {?} */
            var pastedData = clipboardData.getData('Text');
        }
        // Stop data actually being pasted into div
        e.stopPropagation();
        e.preventDefault();
        if (!pastedData) {
            return;
        }
        this.setValue(pastedData);
    }
}
NgOtpInputComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                // tslint:disable-next-line: component-selector
                selector: 'ng-otp-input',
                template: "<div class=\"wrapper {{config.containerClass}}\" id=\"c_{{componentKey}}\" *ngIf=\"otpForm?.controls\"\r\n  [ngStyle]=\"config.containerStyles\">\r\n  <input [pattern]=\"config.allowNumbersOnly ? '\\\\d*' : ''\" [type]=\"inputType\" numberOnly [placeholder]=\"config?.placeholder || ''\"\r\n    [disabledNumberOnly]=\"!config.allowNumbersOnly\" [ngStyle]=\"config.inputStyles\" maxlength=\"1\"\r\n    class=\"otp-input {{config.inputClass}}\" autocomplete=\"off\" *ngFor=\"let item of otpForm?.controls | keys;let i=index\"\r\n    [formControl]=\"otpForm.controls[item]\" id=\"otp_{{i}}_{{componentKey}}\" (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp($event,i)\">\r\n</div>",
                styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:1px solid #c5c5c5;text-align:center;font-size:32px}.wrapper .otp-input:not(:last-child){margin-right:8px}@media screen and (max-width:767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width:420px){.otp-input{width:30px;font-size:18px;height:30px}}"]
            }] }
];
/** @nocollapse */
NgOtpInputComponent.ctorParameters = () => [
    { type: KeysPipe }
];
NgOtpInputComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    onInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NumberOnlyDirective {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.disabledNumberOnly) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'onkeypress', 'return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0');
        }
    }
}
NumberOnlyDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                selector: '[numberOnly]'
            },] }
];
/** @nocollapse */
NumberOnlyDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }
];
NumberOnlyDirective.propDecorators = {
    disabledNumberOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgOtpInputModule {
}
NgOtpInputModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"]
                ],
                declarations: [NgOtpInputComponent, KeysPipe, NumberOnlyDirective],
                exports: [NgOtpInputComponent],
                providers: [KeysPipe]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ng-otp-input.js.map

/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _directive_unload_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive/unload.directive */ "./src/app/core/directive/unload.directive.ts");
/* harmony import */ var _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe/filter.pipe */ "./src/app/core/pipe/filter.pipe.ts");
/* harmony import */ var _directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directive/numbers-only.directive */ "./src/app/core/directive/numbers-only.directive.ts");
/* harmony import */ var _directive_focus_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive/focus.directive */ "./src/app/core/directive/focus.directive.ts");







let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_directive_unload_directive__WEBPACK_IMPORTED_MODULE_3__["UnloadDirective"], _directive_focus_directive__WEBPACK_IMPORTED_MODULE_6__["FocusDirective"], _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"], _directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__["NumberDirective"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ], exports: [_directive_unload_directive__WEBPACK_IMPORTED_MODULE_3__["UnloadDirective"], _directive_focus_directive__WEBPACK_IMPORTED_MODULE_6__["FocusDirective"], _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipe"], _directive_numbers_only_directive__WEBPACK_IMPORTED_MODULE_5__["NumberDirective"]]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/directive/focus.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/core/directive/focus.directive.ts ***!
  \***************************************************/
/*! exports provided: FocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusDirective", function() { return FocusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FocusDirective = class FocusDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        this.el.nativeElement.focus();
    }
};
FocusDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
FocusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appFocus]'
    })
], FocusDirective);



/***/ }),

/***/ "./src/app/core/directive/numbers-only.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/directive/numbers-only.directive.ts ***!
  \**********************************************************/
/*! exports provided: NumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberDirective", function() { return NumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NumberDirective = class NumberDirective {
    constructor(_el) {
        this._el = _el;
    }
    onInputChange(event) {
        const initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    }
};
NumberDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event'])
], NumberDirective.prototype, "onInputChange", null);
NumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'input[numbersOnly]'
    })
], NumberDirective);



/***/ }),

/***/ "./src/app/core/directive/unload.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/core/directive/unload.directive.ts ***!
  \****************************************************/
/*! exports provided: UnloadDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnloadDirective", function() { return UnloadDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UnloadDirective = class UnloadDirective {
    constructor() { }
    unloadHandler(event) {
        event.returnValue = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeunload', ['$event'])
], UnloadDirective.prototype, "unloadHandler", null);
UnloadDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appUnload]'
    })
], UnloadDirective);



/***/ }),

/***/ "./src/app/core/pipe/filter.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/core/pipe/filter.pipe.ts ***!
  \******************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(value, args) {
        if (!value)
            return null;
        if (!args)
            return value;
        args = args.toLowerCase();
        return value.filter(function (item) {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/gateway-apis.service.ts":
/*!*****************************************!*\
  !*** ./src/app/gateway-apis.service.ts ***!
  \*****************************************/
/*! exports provided: GatewayApisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GatewayApisService", function() { return GatewayApisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _gateway_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gateway.service */ "./src/app/gateway.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





let GatewayApisService = class GatewayApisService {
    constructor(gateway, http) {
        this.gateway = gateway;
        this.http = http;
        this.apiGateway = new APIGateway();
        this.apiGateway.config(this.getConfiguration());
    }
    getConfiguration() {
        return {
            logging: true,
            serviceWorker: false,
            activeSWOnLocalHost: false,
            encryption: true,
            storage: 'localStorage',
            networkDriver: 'FETCH'
        };
    }
    callApi(body, header, url) {
        return this.gateway.callApiClientURL(body, header, url);
    }
    getOrgAppId() {
        const data = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]['envProps'];
        const obj = {
            orgId: data['orgId'],
            appId: data['appId']
        };
        return obj;
    }
    getApiRequest() {
        const data = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]['envProps'];
        return {
            orgId: data['orgId'],
            appId: data['appId'],
            environment: '',
            loginId: '',
            apiName: 'signUp',
            apiType: 'signUp',
            version: '',
            apiData: {},
            description: '',
            resourceId: '',
            resourceType: ''
        };
    }
};
GatewayApisService.ctorParameters = () => [
    { type: _gateway_service__WEBPACK_IMPORTED_MODULE_3__["GatewayService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GatewayApisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GatewayApisService);



/***/ }),

/***/ "./src/app/gateway.service.ts":
/*!************************************!*\
  !*** ./src/app/gateway.service.ts ***!
  \************************************/
/*! exports provided: GatewayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GatewayService", function() { return GatewayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




let GatewayService = class GatewayService {
    constructor() {
        this.apiGateway = new APIGateway();
        this.apiGateway.config(this.getConfiguration());
    }
    CallApiClient(body, headers) {
        // doPost return the Promise and filtered response
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.apiGateway.doPost(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"], body, headers));
    }
    getConfiguration() {
        return {
            logging: false,
            serviceWorker: true,
            activeSWOnLocalHost: false,
            encryption: true,
            storage: 'localStorage',
            networkDriver: 'FETCH'
        };
    }
    callApiClientURL(body, headers, url) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.apiGateway.doPostByUrl(_environments_environment__WEBPACK_IMPORTED_MODULE_3__, body, headers, url));
    }
};
GatewayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GatewayService);



/***/ }),

/***/ "./src/app/sign-in/sign-in.service.ts":
/*!********************************************!*\
  !*** ./src/app/sign-in/sign-in.service.ts ***!
  \********************************************/
/*! exports provided: SignInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInService", function() { return SignInService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _gateway_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gateway-apis.service */ "./src/app/gateway-apis.service.ts");





let SignInService = class SignInService {
    constructor(http, gatewayApis) {
        this.http = http;
        this.gatewayApis = gatewayApis;
        this.authPath = '/USERMANAGEMENT/user/management/';
        this.urls = {
            signIn: `${this.authPath}signin`,
            passwordRecovery: `${this.authPath}passwordRecovery`,
            newPassword: `${this.authPath}reset/password`,
            verifyEmail: `${this.authPath}checkEmail`,
            generateOtp: `${this.authPath}generate/otp`
        };
        this.emailIdSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.emailIdReference = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.currentId = this.emailIdSource.asObservable();
        this.currentReference = this.emailIdReference.asObservable();
        this.requestDTO = this.gatewayApis.getApiRequest();
    }
    changeEmailId(id) {
        this.emailIdSource.next(id);
    }
    changeReference(reference) {
        this.emailIdReference.next(reference);
    }
    signInApi(data) {
        this.requestDTO.apiData = {
            'emailId': data.email,
            'password': data.password
        };
        this.requestDTO.loginId = data.email;
        console.log('signInApi ', this.requestDTO);
        return this.gatewayApis.callApi(this.requestDTO, {}, this.urls.signIn);
    }
    newPasswordApi(data) {
        this.requestDTO.apiData = data;
        this.requestDTO.loginId = data.emailId;
        console.log('newPasswordApi ', this.requestDTO);
        return this.gatewayApis.callApi(this.requestDTO, {}, this.urls.newPassword);
    }
    verifyEmailId(type, id) {
        this.requestDTO.apiData =
            {
                'type': type,
                'emailId': id
            };
        this.requestDTO.loginId = id;
        console.log('verifyEmailId ', this.requestDTO);
        return this.gatewayApis.callApi(this.requestDTO, {}, this.urls.verifyEmail);
    }
    generateOtp(email, type) {
        this.requestDTO.apiData =
            {
                'emailId': email,
                'type': type
            };
        this.requestDTO.loginId = email;
        console.log('generateOtp ', this.requestDTO);
        return this.gatewayApis.callApi(this.requestDTO, {}, this.urls.generateOtp);
    }
};
SignInService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _gateway_apis_service__WEBPACK_IMPORTED_MODULE_4__["GatewayApisService"] }
];
SignInService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SignInService);



/***/ }),

/***/ "./src/app/sign-up/sign-up.service.ts":
/*!********************************************!*\
  !*** ./src/app/sign-up/sign-up.service.ts ***!
  \********************************************/
/*! exports provided: SignUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpService", function() { return SignUpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _gateway_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gateway-apis.service */ "./src/app/gateway-apis.service.ts");




let SignUpService = class SignUpService {
    constructor(http, gatewayApis) {
        this.http = http;
        this.gatewayApis = gatewayApis;
        this.authPath = '/USERMANAGEMENT/user/management/';
        this.urls = {
            signup: `${this.authPath}signup`,
            confirmEmail: `${this.authPath}verify/email`,
        };
        this.requestDTO = this.gatewayApis.getApiRequest();
    }
    signupApi(data) {
        this.requestDTO.apiData =
            {
                'emailId': data.email,
                'userName': data.name,
                'mobileNo': data.contactDetails['mobileNo'],
                'password': data.password,
                'country': data.contactDetails['name'],
                'countryCode': data.contactDetails['dialCode'],
                'userDetails': ''
            };
        this.requestDTO.loginId = data.email;
        console.log('signupApi ', this.requestDTO);
        return this.gatewayApis.callApi(this.requestDTO, {}, this.urls.signup);
    }
    confirmEmailApi(data) {
        this.requestDTO.apiData = data;
        this.requestDTO.loginId = data.emailId;
        console.log('confirmEmailApi ', this.requestDTO);
        return this.gatewayApis.callApi(this.requestDTO, {}, this.urls.confirmEmail);
    }
};
SignUpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _gateway_apis_service__WEBPACK_IMPORTED_MODULE_3__["GatewayApisService"] }
];
SignUpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SignUpService);



/***/ })

}]);
//# sourceMappingURL=default~sign-in-sign-in-module~sign-up-sign-up-module-es2015.js.map