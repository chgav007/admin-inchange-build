"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_addCategory_addCategory_module_ts"],{

/***/ 115:
/*!***********************************************************!*\
  !*** ./src/app/addCategory/addCategory-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCategoryPageRoutingModule": () => (/* binding */ addCategoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _addCategory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addCategory.page */ 9617);




const routes = [
    {
        path: '',
        component: _addCategory_page__WEBPACK_IMPORTED_MODULE_0__.addCategoryPage
    }
];
let addCategoryPageRoutingModule = class addCategoryPageRoutingModule {
};
addCategoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], addCategoryPageRoutingModule);



/***/ }),

/***/ 4187:
/*!***************************************************!*\
  !*** ./src/app/addCategory/addCategory.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCategoryPageModule": () => (/* binding */ addCategoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _addCategory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addCategory-routing.module */ 115);
/* harmony import */ var _addCategory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addCategory.page */ 9617);







let addCategoryPageModule = class addCategoryPageModule {
};
addCategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _addCategory_routing_module__WEBPACK_IMPORTED_MODULE_0__.addCategoryPageRoutingModule
        ],
        declarations: [_addCategory_page__WEBPACK_IMPORTED_MODULE_1__.addCategoryPage]
    })
], addCategoryPageModule);



/***/ }),

/***/ 9617:
/*!*************************************************!*\
  !*** ./src/app/addCategory/addCategory.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addCategoryPage": () => (/* binding */ addCategoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _addCategory_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addCategory.page.html?ngResource */ 5693);
/* harmony import */ var _addCategory_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addCategory.page.scss?ngResource */ 2063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _api_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/database.service */ 2109);
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ 997);










let addCategoryPage = class addCategoryPage {
    constructor(DatabaseService, modalController, UserService, location, Router, navCtrl) {
        this.DatabaseService = DatabaseService;
        this.modalController = modalController;
        this.UserService = UserService;
        this.location = location;
        this.Router = Router;
        this.navCtrl = navCtrl;
        this.categoryObj = { 'name': '' };
    }
    ngOnInit() { }
    //Submit category
    submit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.categoryObj.name == '') {
                this.DatabaseService.presentToast("Please enter category name");
                return false;
            }
            let result = yield this.DatabaseService.addCategory(this.categoryObj.name);
            if (result.status == 200) {
                this.DatabaseService.presentToast("Category added successfully");
                this.categoryObj.name = '';
                this.location.back();
            }
            else {
                this.DatabaseService.presentToast("Unable to add category");
            }
        });
    }
};
addCategoryPage.ctorParameters = () => [
    { type: _api_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
addCategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-addCategory-profile',
        template: _addCategory_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_addCategory_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], addCategoryPage);



/***/ }),

/***/ 2063:
/*!**************************************************************!*\
  !*** ./src/app/addCategory/addCategory.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGRDYXRlZ29yeS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 5693:
/*!**************************************************************!*\
  !*** ./src/app/addCategory/addCategory.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" >\r\n      <ion-back-button text=\"zurück\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Add Category</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <div style=\"margin-top: 20px;\">\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label style=\"font-size:18; font-weight: bold;\" position=\"stacked\">Category Name</ion-label>\r\n        <ion-input [(ngModel)]=\"categoryObj.name\" placeholder=\"Enter category name\"></ion-input>\r\n      </ion-item>\r\n      </ion-list>\r\n  </div>\r\n  <div style=\"margin-top: 40px;margin-left: 30%;\">\r\n    <ion-button color=\"primary\" (click)=\"submit()\"   shape=\"round\" style=\"font-size: 14px;\">Submit</ion-button>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_addCategory_addCategory_module_ts.js.map