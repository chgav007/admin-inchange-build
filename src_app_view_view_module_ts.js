"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_view_module_ts"],{

/***/ 5418:
/*!*********************************************!*\
  !*** ./src/app/view/view-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPageRoutingModule": () => (/* binding */ ViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.page */ 127);




const routes = [
    {
        path: '',
        component: _view_page__WEBPACK_IMPORTED_MODULE_0__.ViewPage
    }
];
let ViewPageRoutingModule = class ViewPageRoutingModule {
};
ViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewPageRoutingModule);



/***/ }),

/***/ 3070:
/*!*************************************!*\
  !*** ./src/app/view/view.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPageModule": () => (/* binding */ ViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-routing.module */ 5418);
/* harmony import */ var _view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.page */ 127);
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../safe.pipe */ 3289);








let ViewPageModule = class ViewPageModule {
};
ViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _view_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewPageRoutingModule
        ],
        declarations: [_view_page__WEBPACK_IMPORTED_MODULE_1__.ViewPage, _safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe]
    })
], ViewPageModule);



/***/ }),

/***/ 127:
/*!***********************************!*\
  !*** ./src/app/view/view.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewPage": () => (/* binding */ ViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.page.html?ngResource */ 2306);
/* harmony import */ var _view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view.page.scss?ngResource */ 5937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let ViewPage = class ViewPage {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.route.queryParams.subscribe(params => {
            this.data = this.router.getCurrentNavigation().extras.state.data;
        });
    }
    ngOnInit() {
    }
};
ViewPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-view',
        template: _view_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_view_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewPage);



/***/ }),

/***/ 5937:
/*!************************************************!*\
  !*** ./src/app/view/view.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 2306:
/*!************************************************!*\
  !*** ./src/app/view/view.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\r\n<ion-header style=\"margin-bottom: 20px;\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"position: absolute;\">\r\n      <ion-back-button text=\"zurück\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Credit Note</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <iframe width=\"100%\" height=\"100%\" [src]=\"data | safe\"></iframe>\r\n  <img [src]=\"data | safe\">\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_view_module_ts.js.map