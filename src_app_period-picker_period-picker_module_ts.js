"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_period-picker_period-picker_module_ts"],{

/***/ 820:
/*!***************************************************************!*\
  !*** ./src/app/period-picker/period-picker-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeriodPickerPageRoutingModule": () => (/* binding */ PeriodPickerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _period_picker_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./period-picker.page */ 5116);




const routes = [
    {
        path: '',
        component: _period_picker_page__WEBPACK_IMPORTED_MODULE_0__.PeriodPickerPage
    }
];
let PeriodPickerPageRoutingModule = class PeriodPickerPageRoutingModule {
};
PeriodPickerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PeriodPickerPageRoutingModule);



/***/ }),

/***/ 2337:
/*!*******************************************************!*\
  !*** ./src/app/period-picker/period-picker.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeriodPickerPageModule": () => (/* binding */ PeriodPickerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _period_picker_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./period-picker-routing.module */ 820);
/* harmony import */ var _period_picker_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./period-picker.page */ 5116);







let PeriodPickerPageModule = class PeriodPickerPageModule {
};
PeriodPickerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _period_picker_routing_module__WEBPACK_IMPORTED_MODULE_0__.PeriodPickerPageRoutingModule
        ],
        declarations: [_period_picker_page__WEBPACK_IMPORTED_MODULE_1__.PeriodPickerPage]
    })
], PeriodPickerPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_period-picker_period-picker_module_ts.js.map