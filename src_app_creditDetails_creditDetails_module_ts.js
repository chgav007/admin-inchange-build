"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_creditDetails_creditDetails_module_ts"],{

/***/ 3477:
/*!***************************************************************!*\
  !*** ./src/app/creditDetails/creditDetails-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditDetailsPageRoutingModule": () => (/* binding */ CreditDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _creditDetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creditDetails.page */ 5940);




const routes = [
    {
        path: '',
        component: _creditDetails_page__WEBPACK_IMPORTED_MODULE_0__.CreditDetailsPage
    }
];
let CreditDetailsPageRoutingModule = class CreditDetailsPageRoutingModule {
};
CreditDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreditDetailsPageRoutingModule);



/***/ }),

/***/ 1870:
/*!*******************************************************!*\
  !*** ./src/app/creditDetails/creditDetails.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachingProfilePageModule": () => (/* binding */ CoachingProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _creditDetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creditDetails-routing.module */ 3477);
/* harmony import */ var _creditDetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creditDetails.page */ 5940);







let CoachingProfilePageModule = class CoachingProfilePageModule {
};
CoachingProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _creditDetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreditDetailsPageRoutingModule
        ],
        declarations: [_creditDetails_page__WEBPACK_IMPORTED_MODULE_1__.CreditDetailsPage]
    })
], CoachingProfilePageModule);



/***/ }),

/***/ 5940:
/*!*****************************************************!*\
  !*** ./src/app/creditDetails/creditDetails.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditDetailsPage": () => (/* binding */ CreditDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _creditDetails_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creditDetails.page.html?ngResource */ 5785);
/* harmony import */ var _creditDetails_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creditDetails.page.scss?ngResource */ 4137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _api_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/database.service */ 2109);
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ 997);










let CreditDetailsPage = class CreditDetailsPage {
    constructor(DatabaseService, modalController, Router, location, route, UserService, loadingCtrl) {
        this.DatabaseService = DatabaseService;
        this.modalController = modalController;
        this.Router = Router;
        this.location = location;
        this.route = route;
        this.UserService = UserService;
        this.loadingCtrl = loadingCtrl;
        this.creditReq = [];
        this.nodata = '1';
        this.route.queryParams.subscribe(params => {
            this.coachCustomerNo = this.Router.getCurrentNavigation().extras.state.data;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getCreditReq();
    }
    getCreditReq() {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/getCreditRequestsByCoachCustomerNo");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.getCreditReqCallback(xhr.responseText);
        let data;
        data = {
            "coachCustomerNo": this.coachCustomerNo,
            "access_token": window.localStorage.getItem('access_token')
        };
        xhr.send(JSON.stringify(data));
    }
    getCreditReqCallback(res) {
        res = JSON.parse(res);
        if (res.data.length > 0) {
            this.nodata = 0;
            this.creditReq = res.data;
        }
        else {
            this.nodata = 1;
            this.creditReq = [];
        }
    }
    gotoDetails(credit_no) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/getCreditPdfByCreditNo");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.getCreditPDFCallback(xhr.responseText);
        let data;
        data = {
            "creditNo": credit_no,
            "access_token": window.localStorage.getItem('access_token')
        };
        xhr.send(JSON.stringify(data));
    }
    getCreditPDFCallback(res) {
        res = JSON.parse(res);
        console.log(res.pdf);
        if (res.status == 200) {
            this.navToView('data:application/pdf;base64,' + res.pdf);
        }
    }
    navToView(valueOfBuchung) {
        let navigationExtras = {
            state: {
                data: valueOfBuchung
            }
        };
        this.Router.navigate(['/view'], navigationExtras);
    }
};
CreditDetailsPage.ctorParameters = () => [
    { type: _api_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
CreditDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-creditDetails',
        template: _creditDetails_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_creditDetails_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreditDetailsPage);



/***/ }),

/***/ 4137:
/*!******************************************************************!*\
  !*** ./src/app/creditDetails/creditDetails.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "/*Updated css*/\n.display-table {\n  display: table;\n  width: 100%;\n  height: 50%;\n}\n.display-table-cell {\n  display: table-cell;\n  width: 100%;\n  height: 50%;\n  text-align: center;\n  vertical-align: middle;\n}\n.no-data ion-icon {\n  color: #ccc !important;\n  font-size: 100px;\n}\n.no-data h3 {\n  margin: 0;\n  padding: 15px 0 0;\n  font-size: 2rem !important;\n}\n/*end*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWRpdERldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFDQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNKO0FBRUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUNKO0FBR0k7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0FBQU47QUFHSTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBRE47QUFJRSxNQUFBIiwiZmlsZSI6ImNyZWRpdERldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypVcGRhdGVkIGNzcyovXHJcbi5kaXNwbGF5LXRhYmxlIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLmRpc3BsYXktdGFibGUtY2VsbCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uby1kYXRhIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6ICNjY2MgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIH1cclxuICBcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDAgMDtcclxuICAgICAgZm9udC1zaXplOiAyLjByZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLyplbmQqLyJdfQ== */";

/***/ }),

/***/ 5785:
/*!******************************************************************!*\
  !*** ./src/app/creditDetails/creditDetails.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"position: absolute;\">\r\n      <ion-back-button text=\"zurück\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Credit request</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n <!-- No Credits request available -->\r\n <div class=\"display-table\" *ngIf=\"nodata ==1\">\r\n  <div class=\"display-table-cell\">\r\n    <div class=\"no-data\">\r\n    <ion-icon name=\"cash\"></ion-icon>\r\n    <h3 style=\"font-size: 20px !important;\">No Credits request</h3>\r\n    </div>\r\n  </div>\r\n</div>    \r\n<!-- No Credits request available End-->\r\n<div *ngIf=\"nodata == 0\">\r\n  <ion-card *ngFor=\"let creditItem of creditReq\"  >\r\n    <ion-card-header>\r\n      <ion-card-title style=\"font-size: 15px;\">Credit No: {{creditItem.credit_no}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n    <ion-list>\r\n      <ion-item style=\"font-size: 14px;\">Coach Name: {{creditItem.coachFirstName + \" \" + creditItem.coachLastName}}</ion-item>\r\n      <ion-item style=\"font-size: 14px;\">Customer No.: {{creditItem.customerNo}}</ion-item>\r\n      <ion-item style=\"font-size: 14px;\">Billed Amt: {{creditItem.billedAmount | currency:'EUR'}}  </ion-item>\r\n      <ion-item style=\"font-size: 14px;\">Status: {{creditItem.status}}  </ion-item>\r\n      <ion-item style=\"font-size: 14px;\">Date: {{creditItem.created_at  | date:'d MMM y' }}  </ion-item>\r\n    </ion-list>  \r\n    </ion-card-content>\r\n    <ion-button *ngIf=\"creditItem.is_credit_generated ==1\" (click)=\"gotoDetails(creditItem.credit_no)\" size=\"small\"  shape=\"round\" color =\"primary\" style=\"font-size: 14px; margin-left: 100px; margin-bottom: 15px;\" >View Invoice</ion-button>\r\n  </ion-card>\r\n    </div>\r\n\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_creditDetails_creditDetails_module_ts.js.map