"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_chatDetails_chatDetails_module_ts"],{

/***/ 4072:
/*!***********************************************************!*\
  !*** ./src/app/chatDetails/chatDetails-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatDetailsPageRoutingModule": () => (/* binding */ chatDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _chatDetails_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatDetails.page */ 5030);




const routes = [
    {
        path: '',
        component: _chatDetails_page__WEBPACK_IMPORTED_MODULE_0__.chatDetailsPage
    }
];
let chatDetailsPageRoutingModule = class chatDetailsPageRoutingModule {
};
chatDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], chatDetailsPageRoutingModule);



/***/ }),

/***/ 3531:
/*!***************************************************!*\
  !*** ./src/app/chatDetails/chatDetails.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatDetailsPageModule": () => (/* binding */ chatDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _chatDetails_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatDetails-routing.module */ 4072);
/* harmony import */ var _chatDetails_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatDetails.page */ 5030);







let chatDetailsPageModule = class chatDetailsPageModule {
};
chatDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _chatDetails_routing_module__WEBPACK_IMPORTED_MODULE_0__.chatDetailsPageRoutingModule
        ],
        declarations: [_chatDetails_page__WEBPACK_IMPORTED_MODULE_1__.chatDetailsPage]
    })
], chatDetailsPageModule);



/***/ }),

/***/ 5030:
/*!*************************************************!*\
  !*** ./src/app/chatDetails/chatDetails.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatDetailsPage": () => (/* binding */ chatDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _chatDetails_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatDetails.page.html?ngResource */ 4735);
/* harmony import */ var _chatDetails_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatDetails.page.scss?ngResource */ 1514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _api_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/database.service */ 2109);
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ 997);










let chatDetailsPage = class chatDetailsPage {
    constructor(DatabaseService, modalController, Router, location, route, UserService, loadingCtrl) {
        this.DatabaseService = DatabaseService;
        this.modalController = modalController;
        this.Router = Router;
        this.location = location;
        this.route = route;
        this.UserService = UserService;
        this.loadingCtrl = loadingCtrl;
        this.chatHistory = [];
        this.nodata = '1';
        this.route.queryParams.subscribe(params => {
            this.chatRoomName = this.Router.getCurrentNavigation().extras.state;
            console.log(this.chatRoomName.chatRoomName);
            this.getChatHistory();
        });
    }
    ngOnInit() {
    }
    //  Get Chat List users
    getChatHistory() {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/get-admin-chat-messages");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.getChatHistoryCallback(xhr.responseText);
        let data = {
            "access_token": this.UserService.access_token,
            "roomName": this.chatRoomName.chatRoomName
        };
        xhr.send(JSON.stringify(data));
    }
    getChatHistoryCallback(res) {
        res = JSON.parse(res);
        if (res.data.length > 0) {
            this.nodata = 0;
            this.lastUserId = res.data[0].userId;
            this.chatHistory = res.data;
        }
        else {
            this.nodata = 1;
            this.chatHistory = [];
        }
    }
};
chatDetailsPage.ctorParameters = () => [
    { type: _api_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
chatDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-chatDetails-profile',
        template: _chatDetails_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chatDetails_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], chatDetailsPage);



/***/ }),

/***/ 1514:
/*!**************************************************************!*\
  !*** ./src/app/chatDetails/chatDetails.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".item2 {\n  grid-area: menu;\n  background-color: #ffffff !important;\n  float: left;\n}\n\n.item3 {\n  grid-area: main;\n  background-color: #e1e1e3;\n  font-weight: bold;\n  font-size: 14px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  float: left;\n}\n\n.item5 {\n  grid-area: footer;\n  background-color: #e1e1e3;\n  font-size: 14px;\n  border-bottom-right-radius: 10px;\n  float: left;\n}\n\n.item6 {\n  grid-area: datum;\n  background-color: #F3F4F8 !important;\n  font-size: 14px;\n  float: left;\n}\n\n.grid-container {\n  float: left;\n  display: grid;\n  grid-template-areas: \"menu main main main main main main main main main main main main main main main main main main main main\" \"menu footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer\" \"menu datum datum datum datum datum datum datum datum datum datum datum datum datum datum datum datum datum datum datum datum\";\n  gap: 0px;\n  /*background-color: #2196F3;*/\n  padding: 5px;\n  max-width: 75%;\n}\n\n.grid-container > div {\n  /*background-color: #21ffff;*/\n  padding: 2px 5px;\n}\n\n.partner-icon {\n  width: 40px;\n  height: 40px;\n}\n\n.item2-partner {\n  grid-area: menu;\n  background-color: #f3f4f8 !important;\n  float: right;\n}\n\n.item3-partner {\n  grid-area: main;\n  background-color: #E64599;\n  font-weight: bold;\n  font-size: 14px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  float: right;\n}\n\n.item5-partner {\n  grid-area: footer;\n  background-color: #E64599;\n  font-size: 14px;\n  border-bottom-left-radius: 10px;\n  float: right;\n}\n\n.item6-partner {\n  grid-area: datum;\n  background-color: #F3F4F8 !important;\n  font-size: 14px;\n  float: right;\n}\n\n.grid-container-partner {\n  float: right;\n  display: grid;\n  grid-template-areas: \"main main main main main main main main main main main main main main main main main main main main menu\" \"footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer footer menu\" \"datum datum datum datum datum datum datum datum datum datum datum datum datum datum datum datum datum datum datum datum menu\";\n  gap: 0px;\n  /*background-color: #2196F3;*/\n  padding: 5px;\n  max-width: 75%;\n}\n\n.grid-container-partner > div {\n  /*background-color: #21ffff;*/\n  padding: 2px 5px;\n  float: right;\n}\n\n.partner-icon-partner {\n  width: 40px;\n  height: 40px;\n  float: right;\n}\n\n.chat-wrapper {\n  padding-top: 5%;\n}\n\n.inchange-heading {\n  font-size: 2rem;\n}\n\n.inchange-n {\n  font-size: 2rem;\n  color: #E64599 !important;\n}\n\n.inchange-trademark {\n  font-size: 1.2rem;\n  vertical-align: super;\n}\n\n/*Updated css*/\n\n.display-table {\n  display: table;\n  width: 100%;\n  height: 100%;\n}\n\n.display-table-cell {\n  display: table-cell;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  vertical-align: middle;\n}\n\n.no-data ion-icon {\n  color: #ccc !important;\n  font-size: 100px;\n}\n\n.no-data h3 {\n  margin: 0;\n  padding: 15px 0 0;\n  font-size: 2rem !important;\n}\n\n/*end*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXREZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlaQUNFO0VBR0YsUUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU9BO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU9BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpWkFDRTtFQUdGLFFBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQVBGOztBQVVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBUEY7O0FBY0E7RUFDRSxlQUFBO0FBWEY7O0FBY0E7RUFDRSxlQUFBO0FBWEY7O0FBY0E7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUFYRjs7QUFjQTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7QUFYRjs7QUFjQSxjQUFBOztBQUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBWEY7O0FBY0E7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQVhGOztBQWVFO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQVpKOztBQWVFO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFiSjs7QUFpQkEsTUFBQSIsImZpbGUiOiJjaGF0RGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbTIge1xyXG4gIGdyaWQtYXJlYTogbWVudTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5pdGVtMyB7XHJcbiAgZ3JpZC1hcmVhOiBtYWluO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWUxZTM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5pdGVtNSB7XHJcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZTFlMztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5pdGVtNiB7XHJcbiAgZ3JpZC1hcmVhOiBkYXR1bTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGNEY4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICdtZW51IG1haW4gbWFpbiBtYWluIG1haW4gbWFpbiBtYWluIG1haW4gbWFpbiBtYWluIG1haW4gbWFpbiBtYWluIG1haW4gbWFpbiBtYWluIG1haW4gbWFpbiBtYWluIG1haW4gbWFpbidcclxuICAgICdtZW51IGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXInXHJcbiAgICAnbWVudSBkYXR1bSBkYXR1bSBkYXR1bSBkYXR1bSBkYXR1bSBkYXR1bSBkYXR1bSBkYXR1bSBkYXR1bSBkYXR1bSBkYXR1bSBkYXR1bSBkYXR1bSBkYXR1bSBkYXR1bSBkYXR1bSBkYXR1bSBkYXR1bSBkYXR1bSBkYXR1bSc7XHJcbiAgZ2FwOiAwcHg7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzOyovXHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1heC13aWR0aDogNzUlO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXI+ZGl2IHtcclxuICAvKmJhY2tncm91bmQtY29sb3I6ICMyMWZmZmY7Ki9cclxuICBwYWRkaW5nOiAycHggNXB4O1xyXG59XHJcblxyXG4ucGFydG5lci1pY29uIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLml0ZW0yLXBhcnRuZXIge1xyXG4gIGdyaWQtYXJlYTogbWVudTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY4ICFpbXBvcnRhbnQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uaXRlbTMtcGFydG5lciB7XHJcbiAgZ3JpZC1hcmVhOiBtYWluO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFNjQ1OTk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uaXRlbTUtcGFydG5lciB7XHJcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2NDU5OTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5pdGVtNi1wYXJ0bmVyIHtcclxuICBncmlkLWFyZWE6IGRhdHVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGM0Y0RjggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXItcGFydG5lciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICdtYWluIG1haW4gbWFpbiBtYWluIG1haW4gbWFpbiBtYWluIG1haW4gbWFpbiBtYWluIG1haW4gbWFpbiBtYWluIG1haW4gbWFpbiBtYWluIG1haW4gbWFpbiBtYWluIG1haW4gbWVudSdcclxuICAgICdmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIGZvb3RlciBmb290ZXIgZm9vdGVyIG1lbnUnXHJcbiAgICAnZGF0dW0gZGF0dW0gZGF0dW0gZGF0dW0gZGF0dW0gZGF0dW0gZGF0dW0gZGF0dW0gZGF0dW0gZGF0dW0gZGF0dW0gZGF0dW0gZGF0dW0gZGF0dW0gZGF0dW0gZGF0dW0gZGF0dW0gZGF0dW0gZGF0dW0gZGF0dW0gbWVudSc7XHJcbiAgZ2FwOiAwcHg7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzOyovXHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1heC13aWR0aDogNzUlO1xyXG59XHJcblxyXG4uZ3JpZC1jb250YWluZXItcGFydG5lcj5kaXYge1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzIxZmZmZjsqL1xyXG4gIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucGFydG5lci1pY29uLXBhcnRuZXIge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uY2hhdC13cmFwcGVyIHtcclxuICBwYWRkaW5nLXRvcDogNSU7XHJcbn1cclxuXHJcbi5pbmNoYW5nZS1oZWFkaW5nIHtcclxuICBmb250LXNpemU6IDIuMHJlbTtcclxufVxyXG5cclxuLmluY2hhbmdlLW4ge1xyXG4gIGZvbnQtc2l6ZTogMi4wcmVtO1xyXG4gIGNvbG9yOiAjRTY0NTk5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbmNoYW5nZS10cmFkZW1hcmsge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxufVxyXG5cclxuLypVcGRhdGVkIGNzcyovXHJcbi5kaXNwbGF5LXRhYmxlIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5kaXNwbGF5LXRhYmxlLWNlbGwge1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubm8tZGF0YSB7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNjY2MgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMi4wcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKmVuZCovIl19 */";

/***/ }),

/***/ 4735:
/*!**************************************************************!*\
  !*** ./src/app/chatDetails/chatDetails.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header style=\"margin-bottom: 20px;\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" style=\"position: absolute;\">\r\n      <ion-back-button text=\"zurück\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Chat History</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n\r\n   <!-- No chat History -->\r\n <div class=\"display-table\" *ngIf=\"nodata ==1\">\r\n  <div class=\"display-table-cell\">\r\n    <div class=\"no-data\">\r\n    <ion-icon name=\"people\"></ion-icon>\r\n    <h3 style=\"font-size: 22px!important;\">No Chat History</h3>\r\n    </div>\r\n  </div>\r\n</div>    \r\n<!-- No chat History End-->\r\n\r\n<div class=\"chat-wrapper\" *ngIf=\"nodata == 0\">\r\n\r\n<div  *ngFor=\"let chatItems of chatHistory\" >\r\n\r\n     <!-- Left side room-->\r\n     <div style=\"background-color: #F3F4F8 !important;\" class=\"grid-container\"  *ngIf=\"chatItems.userId == lastUserId\">\r\n      <div style=\"background-color: #F3F4F8 !important;\" class=\"item2\">\r\n        <ion-avatar slot=\"start\" style=\"margin-top: -5px;\">\r\n          <img class=\"partner-icon\" src=\"../../assets/couch.png\" />\r\n        </ion-avatar>\r\n      </div>\r\n      <div class=\"item3\">\r\n        <span style=\"float: left;\">&nbsp;&nbsp;&nbsp;{{chatItems.userName}}</span>\r\n      </div>\r\n     <div class=\"item5\" *ngIf=\"chatItems.msg !=''\">\r\n        <span style=\"float: left;\">&nbsp;&nbsp;&nbsp;{{chatItems.msg}}</span>\r\n      </div>\r\n      <div class=\"item6\">\r\n        {{chatItems.created_at | date:'MMM d, y, h:mm:ss a'}}\r\n      </div>\r\n    </div>\r\n      <!-- Left side End-->\r\n\r\n    <!-- Right side room-->\r\n     <div class=\"grid-container-partner\" *ngIf=\"chatItems.userId != lastUserId\">\r\n      <div style=\"background-color: #F3F4F8 !important;\" class=\"item2-partner\">\r\n        <ion-avatar slot=\"start\" style=\"margin-top: -5px;\">\r\n          <img class=\"partner-icon-partner\" src=\"../../assets/model.png\" />\r\n        </ion-avatar>\r\n      </div>\r\n      <div class=\"item3-partner\">\r\n        <span style=\"float: right; color: #ffffff !important;\">{{chatItems.userName}} &nbsp;&nbsp;&nbsp;</span>\r\n      </div>\r\n      <div class=\"item5-partner\" *ngIf=\"chatItems.msg !=''\">\r\n        <span style=\"float: right; color: #ffffff !important;\">{{chatItems.msg}}&nbsp;&nbsp;&nbsp;</span>\r\n      </div>\r\n      <div style=\"background-color: #F3F4F8 !important;\" class=\"item6-partner\">\r\n        <span style=\"float: right;\"> {{chatItems.created_at | date:'MMM d, y, h:mm:ss a'}}</span>\r\n      </div>\r\n    </div>\r\n    <!-- Right side End-->\r\n  </div>\r\n\r\n    </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_chatDetails_chatDetails_module_ts.js.map