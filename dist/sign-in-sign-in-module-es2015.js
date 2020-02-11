(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/new-password/new-password.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/new-password/new-password.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showModule\" appUnload>\n    <div fxFlex=\"400px\" class=\"login-module\" *ngIf=\"isNewPassword\">\n        <h3 class=\"pb-1\">{{newPasswordJson.newPassword.heading}}</h3>\n        <p class=\"pb-2\">{{newPasswordJson.newPassword.subHeading}}</p>\n        <!-- start form -->\n        <div class=\"form-group ptb-3\">\n            <div class=\"relative\">\n\n                <app-password-strength [passwordRule]=\"_pRule\" (validatedPassword)=\"validatedPassword($event)\">\n                </app-password-strength>\n\n            </div>\n        </div>\n        <div class=\"btn-bx\">\n            <button mat-button class=\"btn-primary\" [disabled]=\"!passwordObj.passworCheck\"\n                (click)=\"submit()\">Next</button>\n        </div>\n        <!-- end form -->\n    </div>\n    <div fxFlex=\"400px\" class=\"login-module\" *ngIf=\"!isNewPassword\">\n        <div class=\"ptb-8\">\n            <h3 class=\"pb-1\">{{newPasswordJson.passwordChanged.heading}}</h3>\n            <p class=\"pb-2\">{{newPasswordJson.passwordChanged.subHeading}}</p>\n        </div>\n        <!-- start form -->\n        <div class=\"btn-bx\">\n            <button mat-button class=\"btn-primary\" (click)=\"login()\">Login</button>\n        </div>\n        <!-- end form -->\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/password-recovery/password-recovery.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/password-recovery/password-recovery.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxFlex=\"400px\" class=\"login-module\" *ngIf=\"showModule\" appUnload>\n    <h3 class=\"pb-1\">{{passwordRecoveryJson.passwordRecovery.heading}}</h3>\n    <p class=\"pb-2\">{{passwordRecoveryJson.passwordRecovery.subHeading}}\n        <span class=\"d-block\"><strong>{{emailId}} </strong><a (click)=\"notYou()\">Not you?</a></span>\n    </p>\n    <!-- start form -->\n    <form>\n        <div class=\"form-group ptb-4\">\n            <mat-label>{{passwordRecoveryJson.formFields.otp.label}}</mat-label>\n            <div class=\"ptb-1\" fxLayoutAlign=\"space-between center\">\n                <ng-otp-input #ngOtpInput (onInputChange)=\"onOtpChange($event)\" *ngIf=\"showOtpComponent\"\n                    [config]=\"config\" class=\"otp\">\n                </ng-otp-input>\n                <div fxLayoutAlign=\"end center\">\n                    <a (click)=\"reSendOtp()\" [ngClass]=\"otpTime != 1 ? 'disabled' :''\" matSuffix>Resend\n                        <span *ngIf=\"otpTime != 1\">({{otpTime}})</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <div class=\"btn-bx\">\n            <button mat-button class=\"btn-primary\"\n                [disabled]=\"otp.length < passwordRecoveryJson.formFields.otp.otpLength\"\n                (click)=\"submit()\">Confirm</button>\n        </div>\n    </form>\n    <!-- end form -->\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in/sign-in.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in/sign-in.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p (click)=\"click()\"> click</p>\n\n<div *ngIf=\"showModule\">\n  <div fxFlex=\"400px\" class=\"login-module\">\n    <div *ngIf=\"!hidePassword;else signin\">\n      <h3 class=\"pb-1\">{{singInJson.signUp.heading}} </h3>\n\n      <p *ngIf=\"!isRegistered;else registerSubHeading\">{{singInJson.signUp.loginSubHeading}} </p>\n      <ng-template #registerSubHeading>\n        <p>{{singInJson.signUp.registerSubHeading}}</p>\n      </ng-template>\n    </div>\n    <ng-template #signin>\n      <h3 class=\"pb-1\">{{singInJson.signIn.heading}} </h3>\n      <p>{{singInJson.signIn.subHeading}} </p>\n    </ng-template>\n    <!-- start form -->\n    <form [formGroup]=\"signInForm\">\n      <div class=\"form-group min-height ptb-7\">\n\n        <mat-form-field appearance=\"legacy\">\n          <input [type]=\"singInJson.formFields.email.type\" matInput [placeholder]=\"singInJson.formFields.email.label\"\n            formControlName=\"email\" (keyup)=\"onKeydown($event)\" appFocus>\n          <mat-error\n            *ngIf=\"(signInForm.controls['email'].touched) && (signInForm.controls['email'].hasError('required'))\">\n            {{singInJson.formFields.email.messages.required}}</mat-error>\n\n          <span *ngIf=\"signInForm.controls['email'].dirty\">\n            <mat-error class=\"input-error\"\n              *ngIf=\"(signInForm.controls['email'].errors && signInForm.controls['email'].hasError('patternError'))\">\n              {{singInJson.formFields.email.messages.regex}}\n            </mat-error>\n          </span>\n\n          <mat-icon matSuffix *ngIf=\"isRegistered\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26\" height=\"26\" viewBox=\"0 0 26 26\">\n              <g fill=\"none\" fill-rule=\"nonzero\">\n                <circle cx=\"13\" cy=\"13\" r=\"13\" fill=\"#FFD93B\" />\n                <path fill=\"#3E4347\"\n                  d=\"M12.768 21.357a8.362 8.362 0 0 1-8.108-6.285.544.544 0 1 1 1.056-.27 7.272 7.272 0 0 0 7.051 5.468 7.272 7.272 0 0 0 7.052-5.467.543.543 0 0 1 .663-.393c.292.075.468.37.394.662a8.36 8.36 0 0 1-8.108 6.285z\" />\n                <path fill=\"#F4C534\"\n                  d=\"M26 12.947C26 20.159 20.155 26 12.947 26a13.027 13.027 0 0 1-10.161-4.858 12.984 12.984 0 0 0 8.195 2.892c7.207 0 13.053-5.841 13.053-13.053 0-3.105-1.081-5.956-2.892-8.195A13.04 13.04 0 0 1 26 12.946z\" />\n                <ellipse cx=\"8.589\" cy=\"10.321\" fill=\"#3E4347\" rx=\"2.089\" ry=\"2.321\" />\n                <ellipse cx=\"17.411\" cy=\"10.321\" fill=\"#3E4347\" rx=\"2.089\" ry=\"2.321\" />\n              </g>\n            </svg>\n          </mat-icon>\n          <mat-icon matSuffix *ngIf=\"isEmailValid\"></mat-icon>\n          <mat-icon matSuffix\n            *ngIf=\"(signInForm.controls['email'].dirty) && !isRegistered && !isEmailValid &&\n            !(signInForm.controls['email'].hasError('required')) && !(signInForm.controls['email'].hasError('patternError'))\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n              <path d=\"M0 0h24v24H0z\" fill=\"none\" />\n              <path\n                d=\"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\" />\n            </svg>\n          </mat-icon>\n\n        </mat-form-field>\n        <mat-form-field appearance=\"legacy\" *ngIf=\"hidePassword\">\n          <input [type]=\"singInJson.formFields.password.type\" matInput\n            [placeholder]=\"singInJson.formFields.password.label\" formControlName=\"password\">\n          <mat-error\n            *ngIf=\"(signInForm.controls['password'].touched) && (signInForm.controls['password'].hasError('required'))\">\n            {{singInJson.formFields.password.messages.required}}</mat-error>\n          <a matSuffix (click)=\"forgotPassword()\">Forgot Password?</a>\n        </mat-form-field>\n        <p class=\"error-message ptb-1\" *ngIf=\"isRegistered && !redirectOTP && !hidePassword\">Oops! looks like you are\n          not yet\n          <strong>registered</strong>\n          with us.\n          <span class=\"d-block\">Click on\n            <strong>Next</strong> to proceed further.\n          </span>\n        </p>\n        <p class=\"error-message ptb-1\" *ngIf=\"isRegistered && !hidePassword && redirectOTP\">Oops! looks like you are not\n          yet <strong>verified</strong>\n          with us.\n          <span class=\"d-block\">Click on\n            <strong>Next</strong> to proceed further.\n          </span>\n        </p>\n      </div>\n\n      <div *ngIf=\"captcha.showCaptcha\">\n        {{captcha.stringCaptcha}} =\n        <input type=\"text\" maxlength=\"2\" formControlName=\"sum\" numbersOnly>\n      </div>\n      <div class=\"btn-bx\">\n        <button mat-button class=\"btn-primary\" *ngIf=\"hidePassword && !captcha.showCaptcha\"\n          [disabled]=\"signInForm.invalid\" (click)=\"submit()\">Login</button>\n\n        <button mat-button class=\"btn-primary\" *ngIf=\"hidePassword && captcha.showCaptcha\"\n          [disabled]=\"signInForm.invalid\" (click)=\"validateCaptcha()\">Login</button>\n        <button mat-button class=\"btn-primary\" *ngIf=\"!hidePassword\" [disabled]=\"!isRegistered\"\n          (click)=\"openSignUp()\">Next</button>\n      </div>\n\n\n\n\n    </form>\n    <!-- end form -->\n\n\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/sign-in/new-password/new-password.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/sign-in/new-password/new-password.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vbmV3LXBhc3N3b3JkL25ldy1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/sign-in/new-password/new-password.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/sign-in/new-password/new-password.component.ts ***!
  \****************************************************************/
/*! exports provided: NewPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPasswordComponent", function() { return NewPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_components_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/components/app-loader/app-loader.service */ "./src/app/core/components/app-loader/app-loader.service.ts");
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sign-in.service */ "./src/app/sign-in/sign-in.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _massage_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../massage-master.service */ "./src/app/massage-master.service.ts");







let NewPasswordComponent = class NewPasswordComponent {
    constructor(appLoaderService, signInService, _router, massageMasterService, _fb) {
        this.appLoaderService = appLoaderService;
        this.signInService = signInService;
        this._router = _router;
        this.massageMasterService = massageMasterService;
        this._fb = _fb;
        this._pRule = {
            at_least_x_chars: 8,
            at_max_x_chars: 30,
            at_least_one_lower_case_char: true,
            at_least_one_upper_case_char: false,
            at_least_one_digit_char: true,
            at_least_one_special_char: true
        };
        this.passwordObj = {
            passworCheck: false,
            password: ''
        };
        this.showModule = false;
        this.newPasswordJson = {};
        this.passwordChangedJson = {};
        this.isNewPassword = true;
        this.emailId = '';
    }
    ngOnInit() {
        this.signInService.currentId.subscribe(id => {
            this.appLoaderService.hideLoader();
            if (id !== null) {
                this.emailId = id;
                this.getNewPasswordRecovery();
            }
            else {
                this._router.navigate(['authentication/signIn']);
            }
        });
    }
    getNewPasswordRecovery() {
        this.newPasswordJson = this.massageMasterService.getMessageJsonData();
        this.showModule = true;
        this.newPasswordForm = this._fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [this.emailId]
        });
    }
    validatedPassword(password) {
        console.log(password);
        this.passwordObj = password;
        if (password['passworCheck']) {
            this.newPasswordForm.controls.password.setValue(this.passwordObj.password);
        }
    }
    submit() {
        this.isNewPassword = false;
        const obj = {
            emailId: this.newPasswordForm.value.email,
            password: this.newPasswordForm.value.password
        };
        this.signInService.newPasswordApi(obj).subscribe(result => {
            console.log('result', result);
            this.appLoaderService.hideLoader();
            const data = result['data'];
            if (data.status.toLowerCase() === 'success') {
            }
            else {
                this.massageMasterService.showError(this.massageMasterService.getErrors().default);
            }
        }, (err) => {
            console.log('error', err);
            this.appLoaderService.hideLoader();
            const errorObj = JSON.parse(err.completeError.response);
            const msg = errorObj.message ? errorObj.message : this.massageMasterService.getErrors().default;
            this.massageMasterService.showError(msg);
        });
    }
    login() {
        this._router.navigate(['authentication/signIn']);
    }
};
NewPasswordComponent.ctorParameters = () => [
    { type: _core_components_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_3__["AppLoaderService"] },
    { type: _sign_in_service__WEBPACK_IMPORTED_MODULE_4__["SignInService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _massage_master_service__WEBPACK_IMPORTED_MODULE_6__["MassageMasterService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
NewPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/new-password/new-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-password.component.scss */ "./src/app/sign-in/new-password/new-password.component.scss")).default]
    })
], NewPasswordComponent);



/***/ }),

/***/ "./src/app/sign-in/password-recovery/password-recovery.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/sign-in/password-recovery/password-recovery.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vcGFzc3dvcmQtcmVjb3ZlcnkvcGFzc3dvcmQtcmVjb3ZlcnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/sign-in/password-recovery/password-recovery.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/sign-in/password-recovery/password-recovery.component.ts ***!
  \**************************************************************************/
/*! exports provided: PasswordRecoveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordRecoveryComponent", function() { return PasswordRecoveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_components_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/components/app-loader/app-loader.service */ "./src/app/core/components/app-loader/app-loader.service.ts");
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sign-in.service */ "./src/app/sign-in/sign-in.service.ts");
/* harmony import */ var _massage_master_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../massage-master.service */ "./src/app/massage-master.service.ts");
/* harmony import */ var src_app_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/sign-up/sign-up.service */ "./src/app/sign-up/sign-up.service.ts");







let PasswordRecoveryComponent = class PasswordRecoveryComponent {
    constructor(appLoaderService, signInService, massageMasterService, _router, signUpService) {
        this.appLoaderService = appLoaderService;
        this.signInService = signInService;
        this.massageMasterService = massageMasterService;
        this._router = _router;
        this.signUpService = signUpService;
        this.showModule = false;
        this.passwordRecoveryJson = {};
        this.emailId = '';
        this.otpClass = [];
        this.otpTime = '01:00';
        this.seconds = 59;
        this.otp = '';
        this.showOtpComponent = true;
        this.config = {
            allowNumbersOnly: true,
            length: 5,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: '',
            inputStyles: {
                'width': '40px',
                'height': '40px'
            }
        };
    }
    onOtpChange(otp) {
        this.otp = otp;
    }
    ngOnInit() {
        this.signInService.currentId.subscribe(id => {
            this.appLoaderService.hideLoader();
            if (id !== null) {
                this.emailId = id;
                this.getPasswordRecovery();
            }
            else {
                this._router.navigate(['authentication/signIn']);
            }
        });
        this.signInService.currentReference.subscribe(reference => {
            this.appLoaderService.hideLoader();
            if (reference) {
                this.reference = reference;
            }
        });
    }
    getPasswordRecovery() {
        this.passwordRecoveryJson = this.massageMasterService.getMessageJsonData();
        this.config.length = this.passwordRecoveryJson.formFields.otp.otpLength;
        this.showModule = true;
        this.countDown();
    }
    countDown() {
        setInterval(() => {
            if (this.seconds == 0) {
                return;
            }
            this.otpTime = this.seconds--;
        }, 1000);
    }
    submit() {
        const obj = {
            otp: this.otp,
            emailId: this.emailId,
            reference: this.reference
        };
        this.signUpService.confirmEmailApi(obj).subscribe(result => {
            console.log('result', result);
            this.appLoaderService.hideLoader();
            const data = result['data'];
            if (data.status.toLowerCase() === 'success') {
                this._router.navigate(['authentication/signIn/new-password']);
            }
            else {
                this.massageMasterService.showError(this.massageMasterService.getErrors().default);
            }
        }, (err) => {
            console.log('error', err);
            this.appLoaderService.hideLoader();
            const errorObj = JSON.parse(err.completeError.response);
            const msg = errorObj.message ? errorObj.message : this.massageMasterService.getErrors().default;
            this.massageMasterService.showError(msg);
        });
    }
    notYou() {
        this._router.navigate(['authentication/signIn']);
    }
    reSendOtp() {
        this.appLoaderService.showLoader();
        this.showOtpComponent = false;
        this.otp = '';
        setTimeout(() => {
            this.showOtpComponent = true;
        }, 0);
        this.signInService.generateOtp(this.emailId, 'forgetpassword').subscribe(result => {
            this.appLoaderService.hideLoader();
            const data = result['data'];
            if (data.status.toLowerCase() === 'success') {
                console.log(data.response.response);
                this.reference = data.response.response.reference;
            }
            else {
                this.massageMasterService.showError(this.massageMasterService.getErrors().default);
            }
        }, (err) => {
            console.log('error', err);
            this.appLoaderService.hideLoader();
            const errorObj = JSON.parse(err.completeError.response);
            const msg = errorObj.message ? errorObj.message : this.massageMasterService.getErrors().default;
            this.massageMasterService.showError(msg);
        });
    }
};
PasswordRecoveryComponent.ctorParameters = () => [
    { type: _core_components_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_3__["AppLoaderService"] },
    { type: _sign_in_service__WEBPACK_IMPORTED_MODULE_4__["SignInService"] },
    { type: _massage_master_service__WEBPACK_IMPORTED_MODULE_5__["MassageMasterService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_sign_up_sign_up_service__WEBPACK_IMPORTED_MODULE_6__["SignUpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngOtpInput', { static: true })
], PasswordRecoveryComponent.prototype, "ngOtpInput", void 0);
PasswordRecoveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-recovery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-recovery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/password-recovery/password-recovery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-recovery.component.scss */ "./src/app/sign-in/password-recovery/password-recovery.component.scss")).default]
    })
], PasswordRecoveryComponent);



/***/ }),

/***/ "./src/app/sign-in/sign-in.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/*! exports provided: SignInModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInModule", function() { return SignInModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in/sign-in.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _password_recovery_password_recovery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./password-recovery/password-recovery.component */ "./src/app/sign-in/password-recovery/password-recovery.component.ts");
/* harmony import */ var _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./new-password/new-password.component */ "./src/app/sign-in/new-password/new-password.component.ts");
/* harmony import */ var _password_strength_password_strength_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../password-strength/password-strength.module */ "./src/app/password-strength/password-strength.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-otp-input */ "./node_modules/ng-otp-input/fesm2015/ng-otp-input.js");













const routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
            { path: 'sign-in', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"] },
            { path: 'password-recovery', component: _password_recovery_password_recovery_component__WEBPACK_IMPORTED_MODULE_8__["PasswordRecoveryComponent"] },
            { path: 'new-password', component: _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_9__["NewPasswordComponent"] },
        ]
    }
];
let SignInModule = class SignInModule {
};
SignInModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"], _password_recovery_password_recovery_component__WEBPACK_IMPORTED_MODULE_8__["PasswordRecoveryComponent"], _new_password_new_password_component__WEBPACK_IMPORTED_MODULE_9__["NewPasswordComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ng_otp_input__WEBPACK_IMPORTED_MODULE_12__["NgOtpInputModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _password_strength_password_strength_module__WEBPACK_IMPORTED_MODULE_10__["PasswordStrengthModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
    })
], SignInModule);



/***/ }),

/***/ "./src/app/sign-in/sign-in/sign-in.component.scss":
/*!********************************************************!*\
  !*** ./src/app/sign-in/sign-in/sign-in.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/sign-in/sign-in/sign-in.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sign-in/sign-in/sign-in.component.ts ***!
  \******************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_components_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/components/app-loader/app-loader.service */ "./src/app/core/components/app-loader/app-loader.service.ts");
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sign-in.service */ "./src/app/sign-in/sign-in.service.ts");
/* harmony import */ var _massage_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../massage-master.service */ "./src/app/massage-master.service.ts");








let SignInComponent = class SignInComponent {
    constructor(_router, _fb, signInService, appLoaderService, massageMasterService) {
        this._router = _router;
        this._fb = _fb;
        this.signInService = signInService;
        this.appLoaderService = appLoaderService;
        this.massageMasterService = massageMasterService;
        this.singInJson = {};
        this.signUpJson = {};
        this.hidePassword = false;
        this.passwordObj = {};
        this.showModule = false;
        this.isRegistered = false;
        this.isEmailValid = false;
        this.redirectOTP = false;
        this.isValidateApi = {
            id: null,
            data: []
        };
        this.captcha = {
            stringCaptcha: "",
            sumCaptcha: 0,
            showCaptcha: false
        };
        this.countIncorrectPassword = 0;
    }
    getCookies(name) {
        var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        if (match)
            return match[2];
    }
    click() {
        this.setCookie();
        this.cookie = this.getCookies('test');
        console.log(this.cookie);
        setTimeout(() => {
            // this.removeCookie();
            window.open("/authentication/signIn?" + this.cookie, "_blank");
        }, 1000);
    }
    removeCookie() {
        let res = document.cookie;
        let multiple = res.split(";");
        for (let i = 0; i < multiple.length; i++) {
            let key = multiple[i].split("=");
            document.cookie = key[0] + " =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
        }
    }
    setCookie() {
        document.cookie = "test=" + "test123";
    }
    returnStringCaptcha() {
        let firstNumber = Math.floor(Math.random() * Math.floor(10));
        let secondNumber = Math.floor(Math.random() * Math.floor(10));
        this.captcha.sumCaptcha = firstNumber + secondNumber;
        return `${firstNumber} + ${secondNumber}`;
    }
    validateCaptcha() {
        if ((parseInt(this.signInForm.value.sum)) === this.captcha.sumCaptcha) {
            this.captcha.showCaptcha = false;
            this.captcha.stringCaptcha = this.returnStringCaptcha();
            this.signInForm.patchValue({ sum: '' });
            this.submit();
        }
        else {
            this.massageMasterService.showError('Invalid Captcha');
            this.captcha.stringCaptcha = this.returnStringCaptcha();
            this.signInForm.patchValue({ sum: '' });
        }
    }
    ngOnInit() {
        this.signInService.changeReference(null);
        this.signInForm = this._fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [''],
            sum: ['']
        });
        this.singInJson = this.massageMasterService.getMessageJsonData();
        this.onChangesEmailValidation();
        this.showModule = true;
        this.signInService.currentId.subscribe(id => {
            this.appLoaderService.hideLoader();
            if (id !== null) {
                this.signInForm.controls['email'].setValue(id);
            }
            else {
                // this.signInService.changeEmailId(null);
            }
        });
        this.captcha.stringCaptcha = this.returnStringCaptcha();
    }
    onChangesEmailValidation() {
        this.signInForm
            .get('email')
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])())
            .subscribe(val => {
            // debugger
            if (new RegExp(this.singInJson.formFields.email.regex).test(val)) {
                if (this.isValidateApi.id === null || this.isValidateApi.id !== this.splitString(val)) {
                    this.isValidateApi.id = this.splitString(val);
                    this.validateAPICall('full', this.signInForm.value.email);
                }
                else {
                    this.setFields('full');
                }
            }
            else if (!new RegExp(this.singInJson.formFields.email.regex).test(val)) {
                this.resetFlags();
                this.signInForm.controls['email'].setErrors({ patternError: true });
            }
            else {
                console.log('else');
            }
        });
    }
    findString(str) {
        return str.includes('@');
    }
    splitString(str) {
        return (str.split('@'))[0];
    }
    resetFlags() {
        this.redirectOTP = false;
        this.hidePassword = false;
        this.isEmailValid = false;
        this.isRegistered = false;
    }
    setFields(type) {
        this.resetFlags();
        const item = this.isValidateApi.data.find(item => item.emailId === (this.signInForm.value['email']));
        console.log('item', item);
        if (item && !item.verified) {
            this.redirectOTP = true;
            this.isRegistered = true;
        }
        else if (item && item.verified) {
            this.isEmailValid = true;
            this.hidePassword = true;
            this.signInForm.controls['password'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            this.signInForm.controls['password'].updateValueAndValidity();
        }
        else {
            if (type != 'Partial') {
                this.isRegistered = true;
                this.signInForm.controls['password'].setValue('');
                this.signInForm.controls['password'].updateValueAndValidity();
            }
        }
    }
    generateOtp(email, type) {
        this.appLoaderService.showLoader();
        this.signInService.generateOtp(email, type).subscribe(result => {
            this.appLoaderService.hideLoader();
            const data = result['data'];
            if (data.status.toLowerCase() === 'success') {
                console.log(data.response.response);
                this.reference = data.response.response.reference;
                this.redirectOTP = true;
                this.isRegistered = true;
                this.signInForm.controls['password'].setValue('');
                this.signInForm.controls['password'].updateValueAndValidity();
                if (type === "signup") {
                    this.signInService.changeEmailId(this.signInForm.value.email);
                    this.signInService.changeReference(this.reference);
                    this._router.navigate(['/authentication/signUp/confirm-email']);
                }
                console.log(this.reference);
                if (type === 'forgetpassword') {
                    this.signInService.changeEmailId(this.signInForm.value.email);
                    this.signInService.changeReference(this.reference);
                    this._router.navigate(['/authentication/signIn/password-recovery']);
                }
            }
            else {
                this.massageMasterService.showError(this.massageMasterService.getErrors().default);
            }
        }, (err) => {
            console.log('error', err);
            this.appLoaderService.hideLoader();
            const errorObj = JSON.parse(err.completeError.response);
            const msg = errorObj.message ? errorObj.message : this.massageMasterService.getErrors().default;
            this.massageMasterService.showError(msg);
        });
    }
    onKeydown(event) {
        if (event.keyCode === 50 && this.findString(this.signInForm.value.email)) {
            let id = this.splitString(this.signInForm.value.email);
            if (id === this.isValidateApi.id) {
                this.setFields('Partial');
            }
            else if (id != this.isValidateApi.id) {
                this.isValidateApi.id = id;
                this.validateAPICall('Partial', id);
            }
        }
    }
    validateAPICall(type, id) {
        if (type !== 'Partial') {
            this.appLoaderService.showLoader();
        }
        this.signInService.verifyEmailId(type, id).subscribe(result => {
            this.appLoaderService.hideLoader();
            const data = result['data'];
            console.log('validateAPICall', data);
            if (data.status.toLowerCase() === 'success') {
                console.log(data.response.response);
                this.isValidateApi.data = data.response.response;
                this.setFields(type);
            }
            else {
                this.massageMasterService.showError(this.massageMasterService.getErrors().default);
                this.isValidateApi.data = [];
                this.setFields(type);
            }
        }, (err) => {
            console.log('error', err);
            this.isValidateApi.data = [];
            this.setFields(type);
            this.appLoaderService.hideLoader();
            const errorObj = JSON.parse(err.completeError.response);
            const msg = errorObj.message ? errorObj.message : this.massageMasterService.getErrors().default;
            if (msg !== 'User not registered') {
                this.massageMasterService.showError(msg);
            }
        });
    }
    openSignUp() {
        this.signInService.changeEmailId(this.signInForm.value.email);
        this.signInService.changeReference(this.reference);
        if (this.redirectOTP) {
            this.generateOtp(this.signInForm.value.email, 'signup');
        }
        else
            this._router.navigate(['/authentication/signUp/sign-up']);
    }
    forgotPassword() {
        this.generateOtp(this.signInForm.value.email, 'forgetpassword');
    }
    submit() {
        this.appLoaderService.showLoader();
        this.signInService.signInApi(this.signInForm.getRawValue()).subscribe(result => {
            this.countIncorrectPassword = 0;
            this.signInForm.controls['sum'].clearValidators();
            this.signInForm.controls['sum'].updateValueAndValidity();
            this.appLoaderService.hideLoader();
            const data = result['data'];
            if (data.status.toLowerCase() === 'success') {
                console.log(data.response.response);
                alert('Congratulations');
            }
            else {
                this.massageMasterService.showError(this.massageMasterService.getErrors().default);
            }
        }, (err) => {
            console.log('error', err);
            this.countIncorrectPassword++;
            if (this.countIncorrectPassword >= 2) {
                this.captcha.showCaptcha = true;
                this.signInForm.controls['sum'].setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                this.signInForm.controls['sum'].updateValueAndValidity();
            }
            this.appLoaderService.hideLoader();
            const errorObj = JSON.parse(err.completeError.response);
            const msg = errorObj.message ? errorObj.message : this.massageMasterService.getErrors().default;
            this.massageMasterService.showError(msg);
        });
    }
};
SignInComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _sign_in_service__WEBPACK_IMPORTED_MODULE_6__["SignInService"] },
    { type: _core_components_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_5__["AppLoaderService"] },
    { type: _massage_master_service__WEBPACK_IMPORTED_MODULE_7__["MassageMasterService"] }
];
SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-in/sign-in/sign-in.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/sign-in/sign-in/sign-in.component.scss")).default]
    })
], SignInComponent);



/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module-es2015.js.map