"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_coaching-profile_coaching-profile_module_ts"],{

/***/ 760:
/*!*********************************************************************!*\
  !*** ./src/app/coaching-profile/coaching-profile-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachingProfilePageRoutingModule": () => (/* binding */ CoachingProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _coaching_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coaching-profile.page */ 3424);




const routes = [
    {
        path: '',
        component: _coaching_profile_page__WEBPACK_IMPORTED_MODULE_0__.CoachingProfilePage
    }
];
let CoachingProfilePageRoutingModule = class CoachingProfilePageRoutingModule {
};
CoachingProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CoachingProfilePageRoutingModule);



/***/ }),

/***/ 9738:
/*!*************************************************************!*\
  !*** ./src/app/coaching-profile/coaching-profile.module.ts ***!
  \*************************************************************/
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
/* harmony import */ var _coaching_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coaching-profile-routing.module */ 760);
/* harmony import */ var _coaching_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coaching-profile.page */ 3424);







let CoachingProfilePageModule = class CoachingProfilePageModule {
};
CoachingProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _coaching_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.CoachingProfilePageRoutingModule
        ],
        declarations: [_coaching_profile_page__WEBPACK_IMPORTED_MODULE_1__.CoachingProfilePage]
    })
], CoachingProfilePageModule);



/***/ }),

/***/ 3424:
/*!***********************************************************!*\
  !*** ./src/app/coaching-profile/coaching-profile.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachingProfilePage": () => (/* binding */ CoachingProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _coaching_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coaching-profile.page.html?ngResource */ 7449);
/* harmony import */ var _coaching_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coaching-profile.page.scss?ngResource */ 1083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _api_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/database.service */ 2109);
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/user.service */ 997);










let CoachingProfilePage = class CoachingProfilePage {
    constructor(DatabaseService, modalController, Router, location, route, UserService, loadingCtrl) {
        this.DatabaseService = DatabaseService;
        this.modalController = modalController;
        this.Router = Router;
        this.location = location;
        this.route = route;
        this.UserService = UserService;
        this.loadingCtrl = loadingCtrl;
        this.route.queryParams.subscribe(params => {
            this.id = this.Router.getCurrentNavigation().extras.state.id;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.getCoaching();
    }
    getCoaching() {
        console.log(window.localStorage.getItem('currentCoachingId'));
        console.log('get Coaching');
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/get-coaching");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.getCoachingCallback(xhr.responseText);
        let data;
        if (this.id == null || this.id == undefined) {
            data = {
                "id": window.localStorage.getItem('currentCoachId'),
                "access_token": window.localStorage.getItem('access_token')
            };
        }
        else {
            data = {
                "id": this.id,
                "access_token": window.localStorage.getItem('access_token')
            };
        }
        xhr.send(JSON.stringify(data));
    }
    getCoachingCallback(res) {
        res = JSON.parse(res);
        this.owner_id = res.coaching.owner_id;
        this.status = res.coaching.status;
        this.titel = res.coaching.titel;
        this.beschreibung = res.coaching.beschreibung;
        this.pakete = res.coaching.pakete;
        this.foto = res.coaching.foto;
        this.categories = res.coaching.categories;
        this.language = res.coaching.language;
        this.created_at = res.coaching.created_at;
    }
};
CoachingProfilePage.ctorParameters = () => [
    { type: _api_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
CoachingProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-coaching-profile',
        template: _coaching_profile_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_coaching_profile_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoachingProfilePage);



/***/ }),

/***/ 1083:
/*!************************************************************************!*\
  !*** ./src/app/coaching-profile/coaching-profile.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Poppins-Regular\" !important;\n}\n\n.custom-invoice-data {\n  --size: 32px;\n  --background-checked: #404040;\n}\n\n.custom-invoice-data::part(container) {\n  border-radius: 6px;\n  border: 2px solid #404040;\n}\n\n.preview-button {\n  margin-top: 3%;\n  margin-bottom: 3%;\n}\n\n.inchange-heading {\n  font-size: 2rem;\n}\n\n.inchange-n {\n  font-size: 2rem;\n  color: #E64599 !important;\n}\n\n.inchange-trademark {\n  font-size: 1.2rem;\n  vertical-align: super;\n}\n\n.profile-picture {\n  width: 136px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5%;\n}\n\n.dabox-picture {\n  border: 1px solid;\n  border-radius: 35px;\n  width: 136px;\n}\n\n.flex-container {\n  height: 500px;\n}\n\n.flex-container > div {\n  background-color: #f1f1f1;\n  width: 200px;\n  margin: 20px !important;\n  text-align: center;\n  line-height: 25px;\n  font-size: 20px;\n  float: left;\n  border: 1px solid;\n  border-radius: 15px;\n  margin: 5px;\n  padding: 5px;\n}\n\nion-item {\n  border: 0px solid;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvYWNoaW5nLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQUE7QUFDSjs7QUFNRTtFQUNJLFlBQUE7RUFDQSw2QkFBQTtBQUhOOztBQU1FO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBQUhOOztBQU1FO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBSEo7O0FBTUU7RUFDSSxlQUFBO0FBSE47O0FBTUU7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUFITjs7QUFNRTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7QUFITjs7QUFNRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUhKOztBQU1FO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFISjs7QUFNRTtFQUdDLGFBQUE7QUFMSDs7QUFRRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTEo7O0FBVUU7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBUEoiLCJmaWxlIjoiY29hY2hpbmctcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1SZWd1bGFyJyAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAubWFpbi1jb250ZW50IHtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1pbnZvaWNlLWRhdGEge1xyXG4gICAgICAtLXNpemU6IDMycHg7XHJcbiAgICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiAjNDA0MDQwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgLmN1c3RvbS1pbnZvaWNlLWRhdGE6OnBhcnQoY29udGFpbmVyKSB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgYm9yZGVyOiAycHggc29saWQgIzQwNDA0MDtcclxuICAgIH1cclxuICBcclxuICAucHJldmlldy1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICB9XHJcbiAgXHJcbiAgLmluY2hhbmdlLWhlYWRpbmcge1xyXG4gICAgICBmb250LXNpemU6IDIuMHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmluY2hhbmdlLW4ge1xyXG4gICAgICBmb250LXNpemU6IDIuMHJlbTtcclxuICAgICAgY29sb3I6ICNFNjQ1OTkgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmluY2hhbmdlLXRyYWRlbWFyayB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlLXBpY3R1cmUge1xyXG4gICAgd2lkdGg6IDEzNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLmRhYm94LXBpY3R1cmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgd2lkdGg6IDEzNnB4O1xyXG4gIH1cclxuXHJcbiAgLmZsZXgtY29udGFpbmVyIHtcclxuICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgLy8gZmxleC13cmFwOiB3cmFwO1xyXG4gICBoZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuICBcclxuICAuZmxleC1jb250YWluZXIgPiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICBcclxuXHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbiJdfQ== */";

/***/ }),

/***/ 7449:
/*!************************************************************************!*\
  !*** ./src/app/coaching-profile/coaching-profile.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header style=\"margin-bottom: 20px;\">\r\n  <ion-toolbar>\r\n    <ion-title>Coachings</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content color=\"inchange-grey\">\r\n\r\n  <div class=\"main-content\">\r\n\r\n    <div class=\"flex-container\">\r\n\r\n      <div>\r\n        <ion-item>\r\n          <div class=\"profile-picture\">\r\n            <img class=\"dabox-picture\" [src]=\"foto\" />\r\n          </div>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Titel</ion-label>\r\n          <ion-input [(ngModel)]=\"titel\" placeholder=\"...\"></ion-input>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Beschreibung</ion-label>\r\n          <ion-input [(ngModel)]=\"beschreibung\" placeholder=\"...\"></ion-input>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Kategorie/n</ion-label>\r\n          <ion-input [(ngModel)]=\"categories\" placeholder=\"...\"></ion-input>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Sprache/n</ion-label>\r\n          <ion-input [(ngModel)]=\"language\" placeholder=\"...\"></ion-input>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <div>\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">zum Coach</ion-label>\r\n          <ion-input [(ngModel)]=\"owner_id\" placeholder=\"...\"></ion-input>\r\n        </ion-item>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_coaching-profile_coaching-profile_module_ts.js.map