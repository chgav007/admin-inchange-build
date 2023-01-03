"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/user.service */ 997);
/* harmony import */ var _api_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/database.service */ 2109);







let LoginPage = class LoginPage {
    constructor(Router, UserService, DatabaseService) {
        this.Router = Router;
        this.UserService = UserService;
        this.DatabaseService = DatabaseService;
    }
    ngOnInit() {
        if (window.localStorage.getItem('access_token') != 'null') {
            console.log('Token available -> checkLogin');
            this.UserService.access_token = window.localStorage.getItem('access_token');
            this.UserService.checkLogin(this.UserService.access_token);
        }
        else {
            console.log('Token NOT available -> navToWelcome');
        }
    }
    navToResetPassword() {
        this.Router.navigate(['/reset-password']);
    }
    signUp() {
        if (this.name && this.password && this.email) {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", this.UserService.standardUrl + "/register");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = () => this.proceed(xhr.responseText);
            let data = {
                "name": this.name,
                "email": this.email,
                "password": this.password
            };
            xhr.send(JSON.stringify(data));
        }
    }
    proceed(res) {
        res = JSON.parse(res);
        if (res.status == 'MailAlreadyTaken') {
            //this.DatabaseService.presentToast('E-Mail bereits vergeben');
        }
        else {
            this.UserService.access_token = res.access_token;
            window.localStorage.setItem('access_token', this.UserService.access_token);
            window.localStorage.setItem('name', res.user.name);
            window.localStorage.setItem('mail', res.user.email);
            this.UserService.name = res.user.name;
            this.UserService.mail = res.user.email;
            if (res.status == "ok") {
                this.Router.navigate(['/home']);
            }
        }
    }
    login() {
        if (this.password && this.email) {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", this.UserService.standardUrl + "/login");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = () => this.proceed(xhr.responseText);
            let data = {
                "email": this.email,
                "password": this.password
            };
            xhr.send(JSON.stringify(data));
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _api_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".inchange-trademark {\n  font-size: 1.2rem;\n  vertical-align: super;\n}\n\n.inchange-wrapper {\n  margin-top: 7%;\n}\n\n.inchange-heading {\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n.inchange-n {\n  font-size: 3rem;\n  font-weight: bold;\n  color: #E64599 !important;\n}\n\n.inchange-slider-indicator {\n  margin-bottom: 3%;\n  padding: 3%;\n  margin-top: 3%;\n}\n\n.top-flex-container {\n  display: flex;\n  justify-content: center;\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.top-flex-container > div {\n  width: auto;\n  margin: 10px;\n  text-align: center;\n}\n\n.inchange-login-form {\n  margin-right: 5%;\n  margin-left: 5%;\n}\n\n.forgot-password {\n  float: right;\n  margin-right: 12%;\n  padding: 3px;\n}\n\n.inchange-footer-section {\n  margin: 3%;\n  margin-top: 3%;\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n.email-section {\n  margin: 7%;\n  margin-bottom: 2%;\n  padding: 3%;\n  background-color: #e1e1e3;\n  border: 3px solid;\n  border-color: #e1e1e3;\n  border-radius: 10px;\n}\n\n.dabox-input {\n  color: #FFFFFF;\n}\n\n.inchange-toggler {\n  font-size: 2rem !important;\n  color: #FFFFFF !important;\n}\n\n.inchange-label {\n  font-size: 0.8rem !important;\n  font-weight: normal;\n}\n\n.agb-wrapper {\n  margin-top: 5%;\n}\n\n.custom-invoice-data {\n  --size: 20px;\n  --background-checked: #E64599;\n}\n\n.custom-invoice-data::part(container) {\n  border-radius: 6px;\n  border: 2px solid #404040;\n}\n\n.inchange-colored-text {\n  color: #E64599 !important;\n  font-size: 1.2rem !important;\n  font-weight: normal;\n}\n\n.dabox-button-bottom {\n  margin-right: 15%;\n  margin-left: 15%;\n  font-family: \"Cordia New\";\n  font-weight: bold;\n  margin-bottom: 5%;\n}\n\n@media only screen and (min-width: 1200px) {\n  .main-content-wrapper {\n    width: 600px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 150px;\n  }\n  .footer-wrapper {\n    width: 600px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUdBO0VBQ0ksNEJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0U7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJO0lBQ0ksWUFBQTtJQUFjLGlCQUFBO0lBQW1CLGtCQUFBO0lBQW9CLG9CQUFBO0VBRzNEO0VBREk7SUFDRSxZQUFBO0lBQWMsaUJBQUE7SUFBbUIsa0JBQUE7RUFLdkM7QUFDRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5jaGFuZ2UtdHJhZGVtYXJrIHtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xyXG59XHJcblxyXG4uaW5jaGFuZ2Utd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA3JTtcclxufVxyXG5cclxuLmluY2hhbmdlLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAzLjByZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmluY2hhbmdlLW4ge1xyXG4gICAgZm9udC1zaXplOiAzLjByZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjRTY0NTk5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbmNoYW5nZS1zbGlkZXItaW5kaWNhdG9yIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxufVxyXG5cclxuLnRvcC1mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIuMHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udG9wLWZsZXgtY29udGFpbmVyPmRpdiB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmluY2hhbmdlLWxvZ2luLWZvcm0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmZvcmdvdC1wYXNzd29yZCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEyJTtcclxuICAgIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLmluY2hhbmdlLWZvb3Rlci1zZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMyU7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuLmVtYWlsLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiA3JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUzO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICNlMWUxZTM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZGFib3gtaW5wdXQge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5pbmNoYW5nZS10b2dnbGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMi4wcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI0ZGRkZGRiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmluY2hhbmdlLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uYWdiLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuXHJcbi5jdXN0b20taW52b2ljZS1kYXRhIHtcclxuICAgIC0tc2l6ZTogMjBweDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjRTY0NTk5O1xyXG4gIH1cclxuICBcclxuLmN1c3RvbS1pbnZvaWNlLWRhdGE6OnBhcnQoY29udGFpbmVyKSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNDA0MDQwO1xyXG4gIH1cclxuXHJcbiAgLmluY2hhbmdlLWNvbG9yZWQtdGV4dCB7XHJcbiAgICBjb2xvcjogI0U2NDU5OSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5kYWJveC1idXR0b24tYm90dG9tIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ29yZGlhIE5ldyc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLm1haW4tY29udGVudC13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogNjAwcHg7IG1hcmdpbi1sZWZ0OiBhdXRvOyBtYXJnaW4tcmlnaHQ6IGF1dG87IG1hcmdpbi1ib3R0b206IDE1MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXItd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDYwMHB4OyBtYXJnaW4tbGVmdDogYXV0bzsgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAubWFpbi1jb250ZW50LXdyYXBwZXIge1xyXG5cclxuICB9XHJcblxyXG4gIC5mb290ZXItd3JhcHBlciB7XHJcblxyXG4gIH0iXX0= */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar color=\"inchange-grey\">\r\n    <ion-buttons slot=\"start\" style=\"position: absolute;\">\r\n      <ion-back-button text=\"zurück\"></ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-img style=\"margin-left: 30%; margin-right: 30%; margin-bottom: 10px; margin-top: 10px;\" src=\"../../assets/inchange_logo.svg\"></ion-img>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"inchange-grey\">\r\n<div class=\"main-content-wrapper\">\r\n  <div class=\"inchange-slider-indicator\">\r\n\r\n    <div class=\"top-flex-container\">\r\n      <div style=\"border-bottom: 3px solid; padding: 2%;\">\r\n        Anmelden\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"inchange-login-form\">\r\n\r\n    <div>\r\n      <div class=\"email-section\">\r\n        <ion-input class=\"dabox-input\" type=\"text\" [(ngModel)]=\"email\" placeholder=\"E-Mail Adresse\"><ion-icon style=\"margin-right: 10px;\" size=\"large\" name=\"person-outline\"></ion-icon></ion-input>\r\n      </div>\r\n      <div class=\"email-section\">\r\n        <ion-input class=\"dabox-input\" type=\"password\" [(ngModel)]=\"password\" placeholder=\"Passwort\"><ion-icon style=\"margin-right: 10px;\" size=\"large\" name=\"lock-closed-outline\"></ion-icon><ion-icon style=\"margin-right: 10px; position: absolute; right: 5px;\" size=\"large\" name=\"eye-off-outline\"></ion-icon></ion-input>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n  <div class=\"forgot-password\" (click)=\"navToResetPassword()\">\r\n    <span style=\"color: black !important; font-weight: bold;\">Passwort vergessen?</span>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <!--<ion-item *ngIf=\"state === 'register'\" class=\"agb-wrapper ion-text-center\" lines=\"none\">\r\n    <ion-checkbox class=\"custom-invoice-data\" slot=\"start\" (click)=\"toggleInvoiceData()\"></ion-checkbox>\r\n    <ion-label class=\"inchange-label\">Ich akzeptiere <span class=\"inchange-colored-text\">AGB</span> und <span class=\"inchange-colored-text\">Datenschutzerklärung</span></ion-label>\r\n  </ion-item>-->\r\n</div>\r\n \r\n\r\n<ion-footer class=\"backgroundColor\" color=\"inchange-grey\">\r\n  <div class=\"footer-wrapper\">\r\n    <ion-button class=\"dabox-button-bottom\" color=\"inchange-pink\" expand=\"block\" (click)=\"login()\">\r\n      <span\r\n        style=\"color: #ffffff !important; font-size: 1.1rem; letter-spacing: 2px; font-family: 'Poppins-Regular';\">Anmelden</span>\r\n    </ion-button>\r\n\r\n  </div>\r\n\r\n</ion-footer>\r\n\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map