"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_datepicker_datepicker_module_ts"],{

/***/ 8729:
/*!*********************************************************!*\
  !*** ./src/app/datepicker/datepicker-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatepickerPageRoutingModule": () => (/* binding */ DatepickerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _datepicker_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datepicker.page */ 8018);




const routes = [
    {
        path: '',
        component: _datepicker_page__WEBPACK_IMPORTED_MODULE_0__.DatepickerPage
    }
];
let DatepickerPageRoutingModule = class DatepickerPageRoutingModule {
};
DatepickerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DatepickerPageRoutingModule);



/***/ }),

/***/ 8046:
/*!*************************************************!*\
  !*** ./src/app/datepicker/datepicker.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatepickerPageModule": () => (/* binding */ DatepickerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _datepicker_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datepicker-routing.module */ 8729);
/* harmony import */ var _datepicker_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datepicker.page */ 8018);







let DatepickerPageModule = class DatepickerPageModule {
};
DatepickerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _datepicker_routing_module__WEBPACK_IMPORTED_MODULE_0__.DatepickerPageRoutingModule
        ],
        declarations: [_datepicker_page__WEBPACK_IMPORTED_MODULE_1__.DatepickerPage]
    })
], DatepickerPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_datepicker_datepicker_module_ts.js.map