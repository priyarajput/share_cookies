(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/confirm-email/confirm-email.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/confirm-email/confirm-email.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showModule\" appUnload>\n    <div fxFlex=\"400px\" class=\"login-module\" *ngIf=\"!isCongrats\">\n        <h3 class=\"pb-1\">{{confirmEmailJson.confirmEmail.heading}} </h3>\n        <p class=\"pb-2\">{{confirmEmailJson.confirmEmail.subHeading}}\n            <span class=\"d-block\"><strong>{{emailId}} </strong><a (click)=\"notUser()\">Not\n                    you?</a></span>\n        </p>\n        <!-- start form -->\n        <form>\n            <div class=\"form-group ptb-4\">\n                <mat-label>{{confirmEmailJson.formFields.otp.label}}</mat-label>\n                <div class=\"ptb-1\" fxLayoutAlign=\"space-between center\">\n                    <ng-otp-input #ngOtpInput (onInputChange)=\"onOtpChange($event)\" *ngIf=\"showOtpComponent\"\n                        [config]=\"config\" class=\"otp\">\n                    </ng-otp-input>\n\n                    <div fxLayoutAlign=\"end center\">\n                        <a (click)=\"reSendOtp()\" [ngClass]=\"otpTime != 1 ? 'disabled' :''\" matSuffix>Resend\n                            <span *ngIf=\"otpTime != 1\">({{otpTime}})</span>\n                        </a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"btn-bx\">\n                <button mat-button class=\"btn-primary\"\n                    [disabled]=\"otp.length < confirmEmailJson.formFields.otp.otpLength\"\n                    (click)=\"submit()\">Confirm</button>\n\n            </div>\n        </form>\n        <!-- end form -->\n    </div>\n\n    <div fxFlex=\"400px\" class=\"login-module\" *ngIf=\"isCongrats\">\n        <h3 class=\"pb-1\">{{confirmEmailJson.congratulations.heading}} </h3>\n        <p class=\"pb-2\">{{confirmEmailJson.congratulations.subHeading}} </p>\n        <div class=\"btn-bx\">\n            <button mat-button class=\"btn-primary\" (click)=\"login()\">Login</button>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up/sign-up.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up/sign-up.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxFlex=\"400px\" class=\"login-module\" *ngIf=\"showModule\" appUnload>\n  <h3 class=\"pb-1\">{{singUpJson.signUp.heading}} </h3>\n  <p>{{singUpJson.signUp.registerSubHeading}} </p>\n  <!-- Start Form -->\n  <form [formGroup]=\"signUpForm\">\n    <div class=\"form-group min-height ptb-4\">\n\n      <!-- Dummmy Fields to remove autocomplete: Start -->\n      <input type=\"email\" style=\"display:none\" placeholder=\"Enter email\" name=\"email\">\n      <input type=\"password\" style=\"display:none\" placeholder=\"Enter password\" name=\"password\">\n      <!-- Dummmy Fields to remove autocomplete: End -->\n\n      <mat-form-field appearance=\"legacy\">\n        <input [type]=\"singUpJson.formFields.email.type\" matInput [placeholder]=\"singUpJson.formFields.email.label\"\n          formControlName=\"email\">\n        <mat-error\n          *ngIf=\"(signUpForm.controls['email'].touched) && (signUpForm.controls['email'].hasError('required'))\">\n          {{singUpJson.formFields.email.messages.required}}\n        </mat-error>\n        <mat-error\n          *ngIf=\"signUpForm.controls['email'].touched && (signUpForm.controls['email'].hasError('patternError'))\">\n          {{singUpJson.formFields.email.messages.regex}}\n        </mat-error>\n        <mat-icon matSuffix>\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"26\" height=\"26\" viewBox=\"0 0 26 26\">\n            <g fill=\"none\" fill-rule=\"nonzero\">\n              <circle cx=\"13\" cy=\"13\" r=\"13\" fill=\"#FFD93B\" />\n              <path fill=\"#3E4347\"\n                d=\"M12.768 21.357a8.362 8.362 0 0 1-8.108-6.285.544.544 0 1 1 1.056-.27 7.272 7.272 0 0 0 7.051 5.468 7.272 7.272 0 0 0 7.052-5.467.543.543 0 0 1 .663-.393c.292.075.468.37.394.662a8.36 8.36 0 0 1-8.108 6.285z\" />\n              <path fill=\"#F4C534\"\n                d=\"M26 12.947C26 20.159 20.155 26 12.947 26a13.027 13.027 0 0 1-10.161-4.858 12.984 12.984 0 0 0 8.195 2.892c7.207 0 13.053-5.841 13.053-13.053 0-3.105-1.081-5.956-2.892-8.195A13.04 13.04 0 0 1 26 12.946z\" />\n              <ellipse cx=\"8.589\" cy=\"10.321\" fill=\"#3E4347\" rx=\"2.089\" ry=\"2.321\" />\n              <ellipse cx=\"17.411\" cy=\"10.321\" fill=\"#3E4347\" rx=\"2.089\" ry=\"2.321\" />\n            </g>\n          </svg>\n        </mat-icon>\n      </mat-form-field>\n\n      <div class=\"country-code relative\">\n        <div class=\"input-extras\">\n          <a mat-button matPrefix [matMenuTriggerFor]=\"menu\" class=\"full-width\">\n            <mat-icon><img [src]=\"'/assets/vahanaa/images/flags/1x1/' +signUpForm.get('contactDetails.img').value\"\n                [alt]=\"signUpForm.get('contactDetails.code').value\"></mat-icon>\n            <span class=\"code\">{{signUpForm.get('contactDetails.dialCode').value}}</span>\n          </a>\n        </div>\n        <mat-menu #menu=\"matMenu\" class=\"card\">\n          <h4 (click)=\"$event.stopPropagation();\">Change Country Code</h4>\n          <input (click)=\"$event.stopPropagation();\" matInput placeholder=\"Search Country\" type=\"text\"\n            [(ngModel)]=\"searchString\" [ngModelOptions]=\"{standalone: true}\" />\n          <button mat-menu-item\n            *ngFor=\"let item of singUpJson.formFields.countryCode.code | filter : searchString; let i = index\"\n            (click)=\"setCountryCode(item)\">\n            <mat-icon><img [src]=\"'/assets/vahanaa/images/flags/1x1/' + item.url\" [alt]=\"item.name\"></mat-icon>\n            <span>{{item.name}}</span><strong>{{item.dialCode}}</strong>\n          </button>\n        </mat-menu>\n        <mat-form-field appearance=\"legacy\" formGroupName=\"contactDetails\"\n          [hideRequiredMarker]=\"options.value.hideRequired\" [floatLabel]=\"options.value.floatLabel\">\n          <input [type]=\"singUpJson.formFields.mobileNumber.type\" matInput class=\"contact-number\"\n            [placeholder]=\"singUpJson.formFields.mobileNumber.label\" formControlName=\"mobileNo\"\n            [maxlength]=\"singUpJson.formFields.mobileNumber.validation.maxLength\" numbersOnly appFocus>\n\n          <mat-error\n            *ngIf=\"(this.signUpForm.controls['contactDetails']['controls']['mobileNo'].touched) && (this.signUpForm.controls['contactDetails']['controls']['mobileNo'].hasError('required'))\">\n            {{singUpJson.formFields.mobileNumber.messages.required}}\n          </mat-error>\n          <mat-error *ngIf=\" (this.signUpForm.controls['contactDetails']['controls']['mobileNo'].touched) &&\n                  (this.signUpForm.controls['contactDetails']['controls']['mobileNo'].hasError('pattern'))\">\n            {{singUpJson.formFields.mobileNumber.messages.regex}}\n          </mat-error>\n          <mat-error\n            *ngIf=\"(this.signUpForm.controls['contactDetails']['controls']['mobileNo'].hasError('minlength')) && !(this.signUpForm.controls['contactDetails']['controls']['mobileNo'].hasError('pattern'))\">\n            {{singUpJson.formFields.mobileNumber.messages.minLength}}\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <mat-form-field appearance=\"legacy\">\n        <input [type]=\"singUpJson.formFields.name.type\" matInput [placeholder]=\"singUpJson.formFields.name.label\"\n          formControlName=\"name\" [maxlength]=\"singUpJson.formFields.name.validation.maxLength\">\n        <mat-error *ngIf=\"(signUpForm.controls['name'].touched) && (signUpForm.controls['name'].hasError('required'))\">\n          {{singUpJson.formFields.name.messages.required}}\n        </mat-error>\n        <mat-error *ngIf=\"(signUpForm.controls['name'].hasError('minlength')) &&\n        !(signUpForm.controls['name'].hasError('pattern')) && !(signUpForm.controls['name'].hasError('required'))\">\n          {{singUpJson.formFields.name.messages.minLength}}\n\n        </mat-error>\n\n\n        <span *ngIf=\"(signUpForm.controls['name'].dirty)\">\n\n          <mat-error class=\"input-error\" *ngIf=\"signUpForm.controls['name'].errors &&\n            (signUpForm.controls['name'].hasError('pattern')) \">\n            {{singUpJson.formFields.name.messages.regex}}\n\n          </mat-error>\n\n        </span>\n\n\n      </mat-form-field>\n\n      <div class=\"relative\">\n        <app-password-strength [passwordRule]=\"_pRule\" (validatedPassword)=\"validatedPassword($event)\">\n        </app-password-strength>\n      </div>\n      <mat-checkbox formControlName=\"agreeTerms\">{{singUpJson.signUp.agreeTerms.label}}\n        <span class=\"declaration-span\" *ngFor=\"let item of singUpJson.signUp.agreeTerms['links']\">\n          <a [routerLink]=\"item.link\" target=\"_blank\">{{item.label}}</a><span> & </span></span>\n      </mat-checkbox>\n    </div>\n    <div class=\"btn-bx\">\n      <button mat-button class=\"btn-primary\" [disabled]=\"signUpForm.invalid || !signUpForm.controls['agreeTerms'].value\"\n        type=\"submit\" (click)=\"submit()\">Register</button>\n    </div>\n  </form>\n  <!-- End Form -->\n</div>");

/***/ }),

/***/ "./src/app/sign-up/confirm-email/confirm-email.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/sign-up/confirm-email/confirm-email.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvY29uZmlybS1lbWFpbC9jb25maXJtLWVtYWlsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/sign-up/confirm-email/confirm-email.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sign-up/confirm-email/confirm-email.component.ts ***!
  \******************************************************************/
/*! exports provided: ConfirmEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEmailComponent", function() { return ConfirmEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_components_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/components/app-loader/app-loader.service */ "./src/app/core/components/app-loader/app-loader.service.ts");
/* harmony import */ var _sign_up_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sign-up.service */ "./src/app/sign-up/sign-up.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sign-in/sign-in.service */ "./src/app/sign-in/sign-in.service.ts");
/* harmony import */ var _massage_master_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../massage-master.service */ "./src/app/massage-master.service.ts");







let ConfirmEmailComponent = class ConfirmEmailComponent {
    constructor(appLoaderService, massageMasterService, signUpService, signInService, _router) {
        this.appLoaderService = appLoaderService;
        this.massageMasterService = massageMasterService;
        this.signUpService = signUpService;
        this.signInService = signInService;
        this._router = _router;
        this.confirmEmailJson = {};
        this.emailId = '';
        this.otpClass = [];
        this.otpTime = '01:00';
        this.seconds = 59;
        this.showModule = false;
        this.congratulationsJson = {};
        this.isCongrats = false;
        this.reference = {};
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
        this.appLoaderService.showLoader();
        this.signInService.currentId.subscribe(id => {
            this.appLoaderService.hideLoader();
            if (id !== null) {
                this.emailId = id;
                this.showModule = true;
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
        this.confirmEmailJson = this.massageMasterService.getMessageJsonData();
        this.config.length = this.confirmEmailJson.formFields.otp.otpLength;
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
        this.appLoaderService.showLoader();
        this.signUpService.confirmEmailApi(obj).subscribe(result => {
            console.log('result', result);
            this.appLoaderService.hideLoader();
            const data = result['data'];
            if (data.status.toLowerCase() === 'success') {
                localStorage.removeItem('emailId');
                this.congratsData();
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
    reSendOtp() {
        this.appLoaderService.showLoader();
        this.showOtpComponent = false;
        this.otp = '';
        setTimeout(() => {
            this.showOtpComponent = true;
        }, 0);
        this.signInService.generateOtp(this.emailId, 'signup').subscribe(result => {
            this.appLoaderService.hideLoader();
            console.log('result', result);
            const data = result['data'];
            if (data.status.toLowerCase() === 'success') {
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
    congratsData() {
        this.isCongrats = true;
    }
    login() {
        this._router.navigate(['authentication/signIn']);
    }
    notUser() {
        this._router.navigate(['authentication/signIn']);
    }
};
ConfirmEmailComponent.ctorParameters = () => [
    { type: _core_components_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_2__["AppLoaderService"] },
    { type: _massage_master_service__WEBPACK_IMPORTED_MODULE_6__["MassageMasterService"] },
    { type: _sign_up_service__WEBPACK_IMPORTED_MODULE_3__["SignUpService"] },
    { type: _sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_5__["SignInService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ngOtpInput', { static: true })
], ConfirmEmailComponent.prototype, "ngOtpInput", void 0);
ConfirmEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-email',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-email.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/confirm-email/confirm-email.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-email.component.scss */ "./src/app/sign-up/confirm-email/confirm-email.component.scss")).default]
    })
], ConfirmEmailComponent);



/***/ }),

/***/ "./src/app/sign-up/sign-up.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/*! exports provided: SignUpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModule", function() { return SignUpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./confirm-email/confirm-email.component */ "./src/app/sign-up/confirm-email/confirm-email.component.ts");
/* harmony import */ var _password_strength_password_strength_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../password-strength/password-strength.module */ "./src/app/password-strength/password-strength.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-otp-input */ "./node_modules/ng-otp-input/fesm2015/ng-otp-input.js");












const routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
            { path: 'sign-up', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"] },
            { path: 'confirm-email', component: _confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmEmailComponent"] }
        ]
    }
];
let SignUpModule = class SignUpModule {
};
SignUpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"], _confirm_email_confirm_email_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmEmailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_11__["NgOtpInputModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _password_strength_password_strength_module__WEBPACK_IMPORTED_MODULE_9__["PasswordStrengthModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_10__["CoreModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
        ],
        exports: [],
        providers: []
    })
], SignUpModule);



/***/ }),

/***/ "./src/app/sign-up/sign-up/sign-up.component.scss":
/*!********************************************************!*\
  !*** ./src/app/sign-up/sign-up/sign-up.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-menu-panel {\n  border-radius: 10px;\n}\n\n.mat-form-field-flex {\n  margin-bottom: 6px;\n}\n\n.mat-menu-item .mat-icon {\n  width: 20px;\n  height: 20px;\n}\n\n.country-code .input-extras {\n  width: 84px;\n  bottom: 13px;\n  left: 0;\n}\n\n.country-code .input-extras .mat-icon {\n  height: 20px;\n  width: 20px;\n}\n\n.country-code .input-extras a {\n  background: #fff;\n  padding: 0;\n  line-height: 25px;\n  text-decoration: none;\n  text-align: left;\n  cursor: pointer;\n}\n\n.country-code .input-extras .mat-button-wrapper {\n  padding-right: 10px;\n}\n\n.country-code .input-extras span {\n  color: #999;\n}\n\n.country-code .contact-number {\n  padding: 5px 0 3px 90px;\n}\n\n.mat-menu-item img {\n  vertical-align: top;\n}\n\n.mat-menu-item-highlighted:not([disabled]),\n.mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.mat-menu-item.cdk-program-focused:not([disabled]),\n.mat-menu-item:hover:not([disabled]) {\n  background: transparent;\n}\n\n.mat-menu-item-highlighted:not([disabled]) span,\n.mat-menu-item.cdk-keyboard-focused:not([disabled]) span,\n.mat-menu-item.cdk-program-focused:not([disabled]) span,\n.mat-menu-item:hover:not([disabled]) span {\n  color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlY2ltYWwvRGVza3RvcC92YWhhbmEyLjAvdmFoYW5hLWF1dGhlbnRpY2F0aW9uL3NyYy9hcHAvc2lnbi11cC9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUNDSjs7QURDRTtFQUNFLGtCQUFBO0FDRUo7O0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0dKOztBREFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0FDR047O0FERk07RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0lSOztBREZNO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0lSOztBREZNO0VBQ0UsbUJBQUE7QUNJUjs7QURGTTtFQUNFLFdBQUE7QUNJUjs7QURESTtFQUNFLHVCQUFBO0FDR047O0FEQ0k7RUFDRSxtQkFBQTtBQ0VOOztBRENFOzs7O0VBSUUsdUJBQUE7QUNFSjs7QURESTs7OztFQUNFLFdBQUE7QUNNTiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1tZW51LXBhbmVsIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gIH1cbiAgLm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cbiAgLmNvdW50cnktY29kZSB7XG4gICAgLmlucHV0LWV4dHJhcyB7XG4gICAgICB3aWR0aDogODRweDtcbiAgICAgIGJvdHRvbTogMTNweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICAubWF0LWljb24ge1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgfVxuICAgICAgYSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgfVxuICAgIH1cbiAgICAuY29udGFjdC1udW1iZXIge1xuICAgICAgcGFkZGluZzogNXB4IDAgM3B4IDkwcHg7XG4gICAgfVxuICB9XG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBpbWcge1xuICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICB9XG4gIH1cbiAgLm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQ6bm90KFtkaXNhYmxlZF0pLFxuICAubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksXG4gIC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLFxuICAubWF0LW1lbnUtaXRlbTpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHNwYW4ge1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuICB9XG4gICIsIi5tYXQtbWVudS1wYW5lbCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4ubWF0LW1lbnUtaXRlbSAubWF0LWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uY291bnRyeS1jb2RlIC5pbnB1dC1leHRyYXMge1xuICB3aWR0aDogODRweDtcbiAgYm90dG9tOiAxM3B4O1xuICBsZWZ0OiAwO1xufVxuLmNvdW50cnktY29kZSAuaW5wdXQtZXh0cmFzIC5tYXQtaWNvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG4uY291bnRyeS1jb2RlIC5pbnB1dC1leHRyYXMgYSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDA7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb3VudHJ5LWNvZGUgLmlucHV0LWV4dHJhcyAubWF0LWJ1dHRvbi13cmFwcGVyIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5jb3VudHJ5LWNvZGUgLmlucHV0LWV4dHJhcyBzcGFuIHtcbiAgY29sb3I6ICM5OTk7XG59XG4uY291bnRyeS1jb2RlIC5jb250YWN0LW51bWJlciB7XG4gIHBhZGRpbmc6IDVweCAwIDNweCA5MHB4O1xufVxuXG4ubWF0LW1lbnUtaXRlbSBpbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZDpub3QoW2Rpc2FibGVkXSksXG4ubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksXG4ubWF0LW1lbnUtaXRlbS5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdChbZGlzYWJsZWRdKSxcbi5tYXQtbWVudS1pdGVtOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQ6bm90KFtkaXNhYmxlZF0pIHNwYW4sXG4ubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2Rpc2FibGVkXSkgc3Bhbixcbi5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pIHNwYW4sXG4ubWF0LW1lbnUtaXRlbTpob3Zlcjpub3QoW2Rpc2FibGVkXSkgc3BhbiB7XG4gIGNvbG9yOiAjMzMzO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/sign-up/sign-up/sign-up.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sign-up/sign-up/sign-up.component.ts ***!
  \******************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_components_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/components/app-loader/app-loader.service */ "./src/app/core/components/app-loader/app-loader.service.ts");
/* harmony import */ var _sign_up_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sign-up.service */ "./src/app/sign-up/sign-up.service.ts");
/* harmony import */ var _sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../sign-in/sign-in.service */ "./src/app/sign-in/sign-in.service.ts");
/* harmony import */ var _massage_master_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../massage-master.service */ "./src/app/massage-master.service.ts");








let SignUpComponent = class SignUpComponent {
    constructor(_router, massageMasterService, appLoaderService, _fb, signUpService, signInService) {
        this._router = _router;
        this.massageMasterService = massageMasterService;
        this.appLoaderService = appLoaderService;
        this._fb = _fb;
        this.signUpService = signUpService;
        this.signInService = signInService;
        this.singUpJson = {};
        this.passwordObj = {};
        this.passwordValidation = true;
        this.agreeTermValidation = true;
        this._pRule = {
            'at_least_x_chars': 8,
            'at_max_x_chars': 30,
            'at_least_one_lower_case_char': true,
            'at_least_one_upper_case_char': false,
            'at_least_one_digit_char': true,
            'at_least_one_special_char': true
        };
        this.showModule = false;
        this.options = _fb.group({
            hideRequired: false,
            floatLabel: 'always'
        });
    }
    ngOnInit() {
        this.appLoaderService.showLoader();
        this.signInService.changeReference(null);
        this.signInService.currentId.subscribe(id => {
            this.appLoaderService.hideLoader();
            if (id !== null) {
                this.getSignUpJson(id);
            }
            else {
                this._router.navigate(['authentication/signIn']);
            }
        });
    }
    getSignUpJson(id) {
        this.singUpJson = this.massageMasterService.getMessageJsonData();
        ;
        this.signUpForm = this._fb.group({
            email: [id],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.singUpJson.formFields.name.validation.minLength),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.singUpJson.formFields.name.validation.pattern)]],
            agreeTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contactDetails: this._fb.group({
                mobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.singUpJson.formFields.mobileNumber.validation.minLength)]],
                name: ['India', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                code: ['IN', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                dialCode: ['+91', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                img: ['in.svg'],
            })
        });
        this.showModule = true;
        this.signUpForm.controls['email'].disable();
        this.appLoaderService.hideLoader();
    }
    setCountryCode(item) {
        this.signUpForm.controls['contactDetails']['controls']['dialCode'].setValue(item.dialCode);
        this.signUpForm.controls['contactDetails']['controls']['code'].setValue(item.code);
        this.signUpForm.controls['contactDetails']['controls']['img'].setValue(item.url);
        this.signUpForm.controls['contactDetails']['controls']['name'].setValue(item.name);
    }
    validatedPassword(password) {
        console.log(password);
        this.passwordObj = password;
        this.signUpForm.patchValue({
            password: password
        });
        this.passwordValidation = password['passworCheck'] ? false : true;
    }
    submit() {
        this.appLoaderService.showLoader();
        this.signUpForm.controls.password.setValue(this.passwordObj.password);
        this.signUpService.signupApi(this.signUpForm.getRawValue()).subscribe(result => {
            this.appLoaderService.hideLoader();
            console.log('result', result);
            const data = result['data'];
            if (data.status.toLowerCase() === 'success') {
                this.reference = data.response.response.response.reference;
                this.signInService.changeReference(this.reference);
                this._router.navigate(['authentication/signUp/confirm-email']);
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
SignUpComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _massage_master_service__WEBPACK_IMPORTED_MODULE_7__["MassageMasterService"] },
    { type: _core_components_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_4__["AppLoaderService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _sign_up_service__WEBPACK_IMPORTED_MODULE_5__["SignUpService"] },
    { type: _sign_in_sign_in_service__WEBPACK_IMPORTED_MODULE_6__["SignInService"] }
];
SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up/sign-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/sign-up/sign-up/sign-up.component.scss")).default]
    })
], SignUpComponent);



/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module-es2015.js.map