"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 1049:
/*!************************************************!*\
  !*** ./src/app/blessing/blessing.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlessingComponent": () => (/* binding */ BlessingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _blessing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blessing.component.html?ngResource */ 3509);
/* harmony import */ var _blessing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blessing.component.scss?ngResource */ 1791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/user.service */ 997);
/* harmony import */ var _api_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/database.service */ 2109);






let BlessingComponent = class BlessingComponent {
    constructor(UserService, DatabaseService) {
        this.UserService = UserService;
        this.DatabaseService = DatabaseService;
        this.blessingObj = { 'blessing': '', 'blessingImg': '' };
    }
    ngOnInit() { }
    //Upload images for Blessings 
    handleUpload(event) {
        this.blessingObj.blessingImg = '';
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            this.blessingObj.blessingImg = reader.result;
        };
    }
    //End
    //Create Blessings
    createBlessing() {
        if (this.blessingObj.blessing == '' && this.blessingObj.blessingImg == '') {
            this.DatabaseService.presentToast('Please enter text or upload image');
        }
        else {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", this.UserService.standardUrl + "/create-blessing");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = () => this.createBlessingCallback(xhr.responseText);
            let data = {
                "blessing": this.blessingObj.blessing,
                "blessingImg": this.blessingObj.blessingImg,
                "access_token": this.UserService.access_token
            };
            xhr.send(JSON.stringify(data));
        }
    }
    createBlessingCallback(res) {
        res = JSON.parse(res);
        if (res.status == 'ok') {
            this.blessingObj.blessing = '';
            this.blessingObj.blessingImg = '';
            this.DatabaseService.presentToast('Blessings added successfully');
        }
        else {
            this.DatabaseService.presentToast('Unable to add Blessings');
        }
    }
};
BlessingComponent.ctorParameters = () => [
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _api_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService }
];
BlessingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-blessing',
        template: _blessing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_blessing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BlessingComponent);



/***/ }),

/***/ 8342:
/*!******************************************************!*\
  !*** ./src/app/bookingList/bookingList.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bookingListComponent": () => (/* binding */ bookingListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _bookingList_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookingList.component.html?ngResource */ 2278);
/* harmony import */ var _bookingList_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookingList.component.scss?ngResource */ 4194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/user.service */ 997);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);






let bookingListComponent = class bookingListComponent {
    constructor(UserService, Router) {
        this.UserService = UserService;
        this.Router = Router;
        this.bookingUsersList = [];
        this.nodata = '1';
    }
    ngOnInit() {
        this.getBookingList();
    }
    //  Get Booking list
    getBookingList() {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/getBookedServicesData");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.getBookingListCallback(xhr.responseText);
        let data = {
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    getBookingListCallback(res) {
        res = JSON.parse(res);
        if (res.data.length > 0) {
            this.nodata = 0;
            this.bookingUsersList = res.data;
        }
        else {
            this.nodata = 1;
            this.bookingUsersList = [];
        }
    }
};
bookingListComponent.ctorParameters = () => [
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
bookingListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-bookingList',
        template: _bookingList_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_bookingList_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], bookingListComponent);



/***/ }),

/***/ 4179:
/*!********************************************************!*\
  !*** ./src/app/categoryList/categoryList.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "categoryListComponent": () => (/* binding */ categoryListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _categoryList_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categoryList.component.html?ngResource */ 1960);
/* harmony import */ var _categoryList_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categoryList.component.scss?ngResource */ 7604);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/user.service */ 997);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _api_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/database.service */ 2109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);








let categoryListComponent = class categoryListComponent {
    constructor(UserService, DatabaseService, Router, alertController) {
        this.UserService = UserService;
        this.DatabaseService = DatabaseService;
        this.Router = Router;
        this.alertController = alertController;
        this.categoryList = [];
        this.nodata = '1';
    }
    ngOnInit() {
        this.getCategoryList();
    }
    //  Get Category list
    getCategoryList() {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/listCategory");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.getCategoryListCallback(xhr.responseText);
        let data = {
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    getCategoryListCallback(res) {
        res = JSON.parse(res);
        if (res.category.length > 0) {
            this.nodata = 0;
            this.categoryList = res.category;
        }
        else {
            this.nodata = 1;
            this.categoryList = [];
        }
    }
    //Add category
    addCategory() {
        this.Router.navigate(['/addCategory']);
    }
    //Delete Category
    delCat(id, indexVal) {
        this.alertController.create({
            header: 'Delete category',
            message: 'Are you sure to delete category?',
            buttons: [
                {
                    text: 'No',
                    handler: () => {
                        console.log("Read no");
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        let xhr = new XMLHttpRequest();
                        xhr.open("POST", this.UserService.standardUrl + "/deleteCategory");
                        xhr.setRequestHeader("Accept", "application/json");
                        xhr.setRequestHeader("Content-Type", "application/json");
                        xhr.onload = () => this.delCatCallback(xhr.responseText, indexVal);
                        let data = {
                            "access_token": this.UserService.access_token,
                            "categoryId": id
                        };
                        xhr.send(JSON.stringify(data));
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
    delCatCallback(res, catIndex) {
        res = JSON.parse(res);
        if (res.status == 200) {
            this.categoryList.splice(catIndex, 1);
            if (this.categoryList.length == 0)
                this.nodata = 1;
            this.DatabaseService.presentToast("Category deleted successfully");
        }
        else {
            this.DatabaseService.presentToast("Unable to delete Category");
        }
    }
};
categoryListComponent.ctorParameters = () => [
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _api_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
categoryListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-categoryList',
        template: _categoryList_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_categoryList_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], categoryListComponent);



/***/ }),

/***/ 8306:
/*!************************************************!*\
  !*** ./src/app/chatList/chatList.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chatListComponent": () => (/* binding */ chatListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _chatList_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chatList.component.html?ngResource */ 9625);
/* harmony import */ var _chatList_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chatList.component.scss?ngResource */ 8567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/user.service */ 997);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);






let chatListComponent = class chatListComponent {
    constructor(UserService, Router) {
        this.UserService = UserService;
        this.Router = Router;
        this.chatUsersList = [];
        this.nodata = '1';
    }
    ngOnInit() {
        this.getChatListUsers();
    }
    //  Get Chat List users
    getChatListUsers() {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/admin-get-chat-list-users");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.getChatListUsersCallback(xhr.responseText);
        let data = {
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    getChatListUsersCallback(res) {
        res = JSON.parse(res);
        if (res.data.length > 0) {
            this.nodata = 0;
            this.chatUsersList = res.data;
        }
        else {
            this.nodata = 1;
            this.chatUsersList = [];
        }
    }
    //Goto Chat History page
    gotoChatHistory(chatItems) {
        let navigationExtras = {
            state: {
                chatRoomName: chatItems.roomName
            }
        };
        this.Router.navigate(['/chatDetails'], navigationExtras);
    }
};
chatListComponent.ctorParameters = () => [
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
chatListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-chatList',
        template: _chatList_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_chatList_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], chatListComponent);



/***/ }),

/***/ 5472:
/*!**********************************************!*\
  !*** ./src/app/coaches/coaches.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachesComponent": () => (/* binding */ CoachesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _coaches_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coaches.component.html?ngResource */ 3407);
/* harmony import */ var _coaches_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coaches.component.scss?ngResource */ 7074);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/user.service */ 997);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let CoachesComponent = class CoachesComponent {
    constructor(UserService, Router, alertController) {
        this.UserService = UserService;
        this.Router = Router;
        this.alertController = alertController;
        this.requests = [];
        this.coaches = [];
        this.filterInput = 'anfragen';
        this.coachFilterOpt = '';
        this.nodata = '0';
    }
    ngOnInit() {
        if (this.UserService.coachFilterOpt != '') {
            if (this.UserService.coachFilterOpt == 'offen')
                this.getBecomeCoachRequests();
            else if (this.UserService.coachFilterOpt == 'Aktive')
                this.getActiveCoaches();
            else if (this.UserService.coachFilterOpt == 'abgelehnt')
                this.getRejectedCoach();
            else
                this.getData();
        }
        else {
            this.getData();
        }
    }
    //Get Filtered Data for Rejected coach
    getRejectedCoach() {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/get-rejected-coach-requests");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.getRejectedCoachCallback(xhr.responseText);
        let data = {
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    getRejectedCoachCallback(res) {
        res = JSON.parse(res);
        if (res.status == 200) {
            this.nodata = 0;
            this.requests = res.coaches;
        }
        else {
            this.nodata = 1;
            this.requests = [];
        }
    }
    //End code
    getData() {
        if (this.filterInput == 'anfragen') {
            this.getBecomeCoachRequests();
        }
        else if (this.filterInput == 'aktiv') {
            this.getActiveCoaches();
        }
    }
    getBecomeCoachRequests() {
        this.filterInput = 'anfragen';
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/get-become-coach-requests");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.getCoachesCallback(xhr.responseText);
        let data = {
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    getCoachesCallback(res) {
        res = JSON.parse(res);
        if (res.requests.length > 0) {
            this.nodata = 0;
            this.requests = res.requests;
        }
        else {
            this.nodata = 1;
            this.requests = [];
        }
    }
    getActiveCoaches() {
        this.filterInput = 'aktiv';
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/get-active-coaches");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.getActiveCoachesCallback(xhr.responseText);
        let data = {
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    getActiveCoachesCallback(res) {
        res = JSON.parse(res);
        if (res.coaches.length > 0) {
            this.nodata = 0;
            this.requests = res.coaches;
        }
        else {
            this.nodata = 1;
            this.requests = [];
        }
    }
    acceptCoach(owner_id, request_id) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/accept-become-coach-request");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.AcceptCoachCallback(xhr.responseText);
        let data = {
            "owner_id": owner_id,
            "request_id": request_id,
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    AcceptCoachCallback(res) {
        res = JSON.parse(res);
        console.log(res);
        this.getData();
    }
    rejectCoach(owner_id, request_id) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/reject-become-coach-request");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.rejectCoachCallback(xhr.responseText);
        let data = {
            "owner_id": owner_id,
            "request_id": request_id,
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    rejectCoachCallback(res) {
        res = JSON.parse(res);
        console.log(res);
        this.getData();
    }
    cancelCoach(owner_id, coach_profile_requests_id) {
        this.alertController.create({
            header: 'Cancel account',
            message: 'Are you sure to terminate coach account?',
            buttons: [
                {
                    text: 'No',
                    handler: () => {
                        console.log("Read no");
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.terminateCoach(owner_id, coach_profile_requests_id);
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
    terminateCoach(owner_id, coach_profile_requests_id) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/terminate-coach");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.terminateCoachCallback(xhr.responseText);
        let data = {
            "owner_id": owner_id,
            "coach_profile_requests_id": coach_profile_requests_id,
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    terminateCoachCallback(res) {
        res = JSON.parse(res);
        console.log(res);
        this.getData();
    }
    //  detail view of coach / user
    navToCoachProfile(id) {
        window.localStorage.setItem('currentCoachId', id);
        let navigationExtras = {
            state: {
                id: id
            }
        };
        this.Router.navigate(['/coach-profile'], navigationExtras);
    }
};
CoachesComponent.ctorParameters = () => [
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
CoachesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-coaches',
        template: _coaches_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_coaches_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoachesComponent);



/***/ }),

/***/ 1677:
/*!**************************************************!*\
  !*** ./src/app/coachings/coachings.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoachingsComponent": () => (/* binding */ CoachingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _coachings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coachings.component.html?ngResource */ 9309);
/* harmony import */ var _coachings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coachings.component.scss?ngResource */ 9183);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/user.service */ 997);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let CoachingsComponent = class CoachingsComponent {
    constructor(UserService, Router, alertController) {
        this.UserService = UserService;
        this.Router = Router;
        this.alertController = alertController;
        this.data = [];
        this.filterInput = 'anfragen';
    }
    ngOnInit() {
        this.getData();
    }
    logPakete(value) {
        console.log(value);
    }
    getData() {
        if (this.filterInput == 'anfragen') {
            this.getCoachingRequests();
        }
        else if (this.filterInput == 'aktiv') {
            this.getActiveCoachings();
        }
    }
    getCoachingRequests() {
        this.filterInput = 'anfragen';
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/get-coaching-requests");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.getCoachingRequestsCallback(xhr.responseText);
        let data = {
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    getCoachingRequestsCallback(res) {
        res = JSON.parse(res);
        console.log(res.coachings);
        this.data = res.coachings;
        this.data.forEach((item) => {
            item.pakete = JSON.parse(item.pakete);
            item.pakete.forEach((item2) => {
                //item2.productName = '';
                item2.productName = item2.name;
            });
        });
    }
    getActiveCoachings() {
        this.filterInput = 'aktiv';
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/get-active-coachings");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.getActiveCoachingsCallback(xhr.responseText);
        let data = {
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    getActiveCoachingsCallback(res) {
        res = JSON.parse(res);
        console.log(res.coachings);
        this.data = res.coachings;
    }
    oneIsEmtpy(obj) {
        for (let i = 0; i < Object.keys(obj).length; i++) {
            if (!obj[Object.keys(obj)[i]]) {
                return true;
            }
        }
        return false;
    }
    acceptCoaching(owner_id, id, pakets) {
        let isOK = true;
        for (let i = 0; i < pakets.length; i++) {
            console.log(pakets[i], 'ii');
            if (!pakets[i].productName) {
                console.log('up');
                isOK = false;
                break;
            }
            else {
                console.log('down');
                isOK = true;
            }
        }
        console.log(isOK, 'topper topper');
        if (isOK) {
            console.log('is OK');
            let xhr = new XMLHttpRequest();
            xhr.open("POST", this.UserService.standardUrl + "/accept-publish-coaching-request");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = () => this.AcceptCoachingCallback(xhr.responseText);
            let data = {
                "pakets": pakets,
                "request_id": id,
                "owner_id": owner_id,
                "access_token": this.UserService.access_token
            };
            xhr.send(JSON.stringify(data));
        }
        else {
            console.log('is not ok');
        }
    }
    AcceptCoachingCallback(res) {
        res = JSON.parse(res);
        this.getData();
    }
    rejectCoaching(owner_id, id) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/reject-coaching");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.rejectCoachingCallback(xhr.responseText);
        let data = {
            "request_id": id,
            "owner_id": owner_id,
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    rejectCoachingCallback(res) {
        res = JSON.parse(res);
        this.getData();
    }
    cancelCoaching(owner_id, coach_profile_requests_id, id) {
        this.alertController.create({
            header: 'Cancel account',
            message: 'Are you sure to terminate coach account?',
            buttons: [
                {
                    text: 'No',
                    handler: () => {
                        console.log("Read no");
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.terminateCoaching(owner_id, coach_profile_requests_id, id);
                    }
                }
            ]
        }).then(res => {
            res.present();
        });
    }
    terminateCoaching(owner_id, coach_profile_requests_id, id) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/terminate-coaching");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.terminateCoachingCallback(xhr.responseText);
        let data = {
            "owner_id": owner_id,
            "coach_profile_requests_id": coach_profile_requests_id,
            "id": id,
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    terminateCoachingCallback(res) {
        res = JSON.parse(res);
        console.log(res);
        this.getData();
    }
    //  detail view of coach / user
    navToCoachingProfile(id) {
        window.localStorage.setItem('currentCoachingId', id);
        let navigationExtras = {
            state: {
                id: id
            }
        };
        this.Router.navigate(['/coaching-profile'], navigationExtras);
    }
};
CoachingsComponent.ctorParameters = () => [
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
CoachingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-coachings',
        template: _coachings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_coachings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CoachingsComponent);



/***/ }),

/***/ 523:
/*!************************************************************************!*\
  !*** ./src/app/create-advertisement/create-advertisement.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAdvertisementComponent": () => (/* binding */ CreateAdvertisementComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _create_advertisement_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-advertisement.component.html?ngResource */ 594);
/* harmony import */ var _create_advertisement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-advertisement.component.scss?ngResource */ 1460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/database.service */ 2109);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _datepicker_datepicker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datepicker/datepicker.page */ 8018);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/user.service */ 997);










let CreateAdvertisementComponent = class CreateAdvertisementComponent {
    constructor(DatabaseService, modalController, PopoverController, UserService) {
        this.DatabaseService = DatabaseService;
        this.modalController = modalController;
        this.PopoverController = PopoverController;
        this.UserService = UserService;
    }
    ngOnInit() { }
    handleUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            console.log(reader.result);
            this.DatabaseService.img = reader.result;
            this.insertImage(reader.result);
            window.open("http://localhost:3000/crop-test.html", '_blank');
        };
    }
    insertImage(img) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3000/insert_image");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.insertImageCallback(xhr.responseText);
        let data = {
            "base64": img,
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    insertImageCallback(res) {
        res = JSON.parse(res);
    }
    set() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.DatabaseService.img) {
                this.DatabaseService.img = '../../assets/standard.png';
            }
            let result = yield this.DatabaseService.createAdvertise(this.AdvertiseName, this.DatabaseService.img, moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).toString(), moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).toString());
            if (result.status == 200) {
                this.UserService.page = 'werbung';
                this.DatabaseService.img = null;
            }
        });
    }
    showDatepickerFrom() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _datepicker_datepicker_page__WEBPACK_IMPORTED_MODULE_3__.DatepickerPage,
                cssClass: 'my-custom-class',
                componentProps: {
                    page: 'zeitraumFrom',
                    datetime: moment__WEBPACK_IMPORTED_MODULE_4__(this.startDate).locale('de').format('ll'),
                    presentation: 'date'
                }
            });
            return yield modal.present();
        });
    }
    showDatepickerTo() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _datepicker_datepicker_page__WEBPACK_IMPORTED_MODULE_3__.DatepickerPage,
                cssClass: 'my-custom-class',
                componentProps: {
                    page: 'zeitraumTo',
                    datetime: moment__WEBPACK_IMPORTED_MODULE_4__(this.endDate).locale('de').format('ll'),
                    presentation: 'date'
                }
            });
            return yield modal.present();
        });
    }
};
CreateAdvertisementComponent.ctorParameters = () => [
    { type: _api_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.PopoverController },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService }
];
CreateAdvertisementComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-create-advertisement',
        template: _create_advertisement_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_advertisement_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreateAdvertisementComponent);



/***/ }),

/***/ 6437:
/*!********************************************************!*\
  !*** ./src/app/gutschriften/gutschriften.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GutschriftenComponent": () => (/* binding */ GutschriftenComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _gutschriften_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gutschriften.component.html?ngResource */ 6349);
/* harmony import */ var _gutschriften_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gutschriften.component.scss?ngResource */ 8332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/user.service */ 997);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);






let GutschriftenComponent = class GutschriftenComponent {
    constructor(UserService, Router) {
        this.UserService = UserService;
        this.Router = Router;
        this.data = [];
    }
    ngOnInit() {
        this.getGutschriften();
    }
    navToView(valueOfBuchung) {
        let navigationExtras = {
            state: {
                data: valueOfBuchung
            }
        };
        this.Router.navigate(['/view'], navigationExtras);
    }
    getGutschriften() {
        let xhr = new XMLHttpRequest();
        //xhr.open("POST", this.UserService.standardUrl + "/get-all-gutschrift-requests");
        xhr.open("POST", this.UserService.standardUrl + "/get-noncredit-gutschrift-requests");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.getCoachingRequestsCallback(xhr.responseText);
        let data = {
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    getCoachingRequestsCallback(res) {
        res = JSON.parse(res);
        console.log(res.requests);
        this.data = res.requests;
        this.data.forEach((item) => {
            item.name = JSON.parse(item.name);
        });
    }
    acceptCoach(gutschrift) {
        delete gutschrift.profileImage;
        let xhr = new XMLHttpRequest();
        //xhr.open("POST", this.UserService.standardUrl + "/accept-gutschrift");
        xhr.open("POST", this.UserService.standardUrl + "/accept-gutschrift-credit");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.AcceptCoachCallback(xhr.responseText);
        let data = {
            "gutschrift": gutschrift,
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    AcceptCoachCallback(res) {
        res = JSON.parse(res);
        console.log(res);
        this.getGutschriften();
        this.navToView('data:application/pdf;base64,' + res.pdf);
    }
    rejectCoach(gutschrift) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/cancelCredit");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.rejectCoachCallback(xhr.responseText);
        let data = {
            "gutschrift": gutschrift,
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    rejectCoachCallback(res) {
        res = JSON.parse(res);
        console.log(res);
        this.getGutschriften();
    }
};
GutschriftenComponent.ctorParameters = () => [
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
GutschriftenComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-gutschriften',
        template: _gutschriften_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_gutschriften_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GutschriftenComponent);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);
/* harmony import */ var _coaches_coaches_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../coaches/coaches.component */ 5472);
/* harmony import */ var _coachings_coachings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../coachings/coachings.component */ 1677);
/* harmony import */ var _werbung_werbung_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../werbung/werbung.component */ 333);
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users/users.component */ 1846);
/* harmony import */ var _chatList_chatList_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../chatList/chatList.component */ 8306);
/* harmony import */ var _bookingList_bookingList_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bookingList/bookingList.component */ 8342);
/* harmony import */ var _blessing_blessing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blessing/blessing.component */ 1049);
/* harmony import */ var _showCredits_showCredits_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../showCredits/showCredits.component */ 7868);
/* harmony import */ var _create_advertisement_create_advertisement_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../create-advertisement/create-advertisement.component */ 523);
/* harmony import */ var _gutschriften_gutschriften_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../gutschriften/gutschriften.component */ 6437);
/* harmony import */ var _categoryList_categoryList_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../categoryList/categoryList.component */ 4179);


















let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_categoryList_categoryList_component__WEBPACK_IMPORTED_MODULE_12__.categoryListComponent, _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _coaches_coaches_component__WEBPACK_IMPORTED_MODULE_2__.CoachesComponent, _showCredits_showCredits_component__WEBPACK_IMPORTED_MODULE_9__.showCreditsComponent, _bookingList_bookingList_component__WEBPACK_IMPORTED_MODULE_7__.bookingListComponent, _coachings_coachings_component__WEBPACK_IMPORTED_MODULE_3__.CoachingsComponent, _werbung_werbung_component__WEBPACK_IMPORTED_MODULE_4__.WerbungComponent, _users_users_component__WEBPACK_IMPORTED_MODULE_5__.UsersComponent, _blessing_blessing_component__WEBPACK_IMPORTED_MODULE_8__.BlessingComponent, _create_advertisement_create_advertisement_component__WEBPACK_IMPORTED_MODULE_10__.CreateAdvertisementComponent, _gutschriften_gutschriften_component__WEBPACK_IMPORTED_MODULE_11__.GutschriftenComponent, _chatList_chatList_component__WEBPACK_IMPORTED_MODULE_6__.chatListComponent]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/user.service */ 997);






let HomePage = class HomePage {
    constructor(Router, UserService) {
        this.Router = Router;
        this.UserService = UserService;
        this.appPages = [
            { title: 'Users', url: 'users', icon: 'person-circle' },
            { title: 'Coaches', url: 'coaches', icon: 'person-circle' },
            { title: 'Coachings', url: 'coachings', icon: 'person-circle' },
            { title: 'Chat List', url: 'chatList', icon: 'chatbubbles' },
            { title: 'Gutschriften', url: 'gutschriften', icon: 'person-circle' },
            { title: 'Category List', url: 'categoryList', icon: 'list' },
            { title: 'Booking List', url: 'bookingList', icon: 'calendar' },
            { title: 'Show Credits', url: 'showCredits', icon: 'cash' },
            { title: 'Werbung', url: 'werbung', icon: 'person-circle' },
            { title: 'Blessing', url: 'blessing', icon: 'person-circle' }
        ];
        //Sub cocahes filters
        this.subCoachEntries = [{ title: 'Offen', value: 'offen', icon: 'person-circle' }, { title: 'Aktive', value: 'Aktive', icon: 'person-circle' }, { title: 'Abgelehnt', value: 'abgelehnt', icon: 'person-circle' }];
    }
    ngOnInit() {
        this.UserService.coachFilterOpt = '';
        if (window.localStorage.getItem('access_token') != 'null') {
            //console.log('Token available -> checkLogin')
            this.UserService.access_token = window.localStorage.getItem('access_token');
            this.UserService.checkLogin(this.UserService.access_token);
        }
        else {
            //console.log('Token NOT available -> navToWelcome')
        }
    }
    navTo(url) {
        this.Router.navigate(['/' + url + '']);
    }
    //Navigate to coach sections
    gotoCoachOpt(val) {
        this.UserService.page = "";
        setTimeout(() => {
            if (val != 'all') {
                this.UserService.coachFilterOpt = val;
                this.UserService.page = "coaches";
            }
            else {
                this.UserService.coachFilterOpt = '';
                this.UserService.page = "coaches";
            }
        }, 100);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 7868:
/*!******************************************************!*\
  !*** ./src/app/showCredits/showCredits.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showCreditsComponent": () => (/* binding */ showCreditsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _showCredits_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showCredits.component.html?ngResource */ 1597);
/* harmony import */ var _showCredits_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showCredits.component.scss?ngResource */ 6891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/user.service */ 997);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);






let showCreditsComponent = class showCreditsComponent {
    constructor(UserService, Router) {
        this.UserService = UserService;
        this.Router = Router;
        this.creditList = [];
        this.nodata = '1';
    }
    ngOnInit() {
        this.getCreditList();
    }
    //  Get Credit list
    getCreditList() {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/getCoachWithCreditRequestsList");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.getCreditListCallback(xhr.responseText);
        let data = {
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    getCreditListCallback(res) {
        res = JSON.parse(res);
        if (res.data.length > 0) {
            this.nodata = 0;
            this.creditList = res.data;
        }
        else {
            this.nodata = 1;
            this.creditList = [];
        }
    }
    gotoDetails(customerNo) {
        let navigationExtras = {
            state: {
                data: customerNo
            }
        };
        this.Router.navigate(['/creditDetails'], navigationExtras);
    }
};
showCreditsComponent.ctorParameters = () => [
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
showCreditsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-showCredits',
        template: _showCredits_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_showCredits_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], showCreditsComponent);



/***/ }),

/***/ 1846:
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersComponent": () => (/* binding */ UsersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _users_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.component.html?ngResource */ 230);
/* harmony import */ var _users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.component.scss?ngResource */ 6938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/user.service */ 997);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);






let UsersComponent = class UsersComponent {
    constructor(UserService, Router) {
        this.UserService = UserService;
        this.Router = Router;
        this.usersCount = 0;
        this.freeCoachingUsersCount = 0;
    }
    ngOnInit() {
        this.getRegisteredUsers();
        this.freeCoachingUsers();
    }
    //  Get free coaching users
    freeCoachingUsers() {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/get-freeCoaching-users");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.getFreeCoachingUsersCallback(xhr.responseText);
        let data = {
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    getFreeCoachingUsersCallback(res) {
        res = JSON.parse(res);
        this.freeCoachingUsersCount = res.freeCoachingsLength;
        console.log(this.freeCoachingUsersCount);
    }
    //  Get Registered users count
    getRegisteredUsers() {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", this.UserService.standardUrl + "/get-registered-users");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => this.getRegisteredUsersCallback(xhr.responseText);
        let data = {
            "access_token": this.UserService.access_token
        };
        xhr.send(JSON.stringify(data));
    }
    getRegisteredUsersCallback(res) {
        res = JSON.parse(res);
        this.usersCount = res.users.length;
    }
};
UsersComponent.ctorParameters = () => [
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
UsersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-users',
        template: _users_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UsersComponent);



/***/ }),

/***/ 333:
/*!**********************************************!*\
  !*** ./src/app/werbung/werbung.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WerbungComponent": () => (/* binding */ WerbungComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _werbung_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./werbung.component.html?ngResource */ 5280);
/* harmony import */ var _werbung_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./werbung.component.scss?ngResource */ 7067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _period_picker_period_picker_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../period-picker/period-picker.page */ 5116);
/* harmony import */ var src_app_api_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/database.service */ 2109);
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/user.service */ 997);








let WerbungComponent = class WerbungComponent {
    constructor(PopoverController, DatabaseService, UserService) {
        this.PopoverController = PopoverController;
        this.DatabaseService = DatabaseService;
        this.UserService = UserService;
    }
    ngOnInit() { }
    scheduleTime(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.PopoverController.create({
                component: _period_picker_period_picker_page__WEBPACK_IMPORTED_MODULE_2__.PeriodPickerPage,
                cssClass: 'set-time-class',
                event: ev,
                translucent: true
            });
            return yield popover.present();
        });
    }
    createAdvertise() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.UserService.page = 'create-advertisement';
        });
    }
};
WerbungComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.PopoverController },
    { type: src_app_api_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService }
];
WerbungComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-werbung',
        template: _werbung_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_werbung_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WerbungComponent);



/***/ }),

/***/ 1791:
/*!*************************************************************!*\
  !*** ./src/app/blessing/blessing.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGVzc2luZy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 4194:
/*!*******************************************************************!*\
  !*** ./src/app/bookingList/bookingList.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "/*Updated css*/\n.display-table {\n  display: table;\n  width: 100%;\n  height: 50%;\n}\n.display-table-cell {\n  display: table-cell;\n  width: 100%;\n  height: 50%;\n  text-align: center;\n  vertical-align: middle;\n}\n.no-data ion-icon {\n  color: #ccc !important;\n  font-size: 100px;\n}\n.no-data h3 {\n  margin: 0;\n  padding: 15px 0 0;\n  font-size: 2rem !important;\n}\n/*end*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmdMaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFDQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNKO0FBRUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUNKO0FBR0k7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0FBQU47QUFHSTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBRE47QUFJRSxNQUFBIiwiZmlsZSI6ImJvb2tpbmdMaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypVcGRhdGVkIGNzcyovXHJcbi5kaXNwbGF5LXRhYmxlIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLmRpc3BsYXktdGFibGUtY2VsbCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uby1kYXRhIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6ICNjY2MgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIH1cclxuICBcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDAgMDtcclxuICAgICAgZm9udC1zaXplOiAyLjByZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLyplbmQqLyJdfQ== */";

/***/ }),

/***/ 7604:
/*!*********************************************************************!*\
  !*** ./src/app/categoryList/categoryList.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "/*Updated css*/\n.display-table {\n  display: table;\n  width: 100%;\n  height: 50%;\n}\n.display-table-cell {\n  display: table-cell;\n  width: 100%;\n  height: 50%;\n  text-align: center;\n  vertical-align: middle;\n}\n.no-data ion-icon {\n  color: #ccc !important;\n  font-size: 100px;\n}\n.no-data h3 {\n  margin: 0;\n  padding: 15px 0 0;\n  font-size: 2rem !important;\n}\n/*end*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5TGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDRjtBQUVBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUdFO0VBQ0Usc0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBR0U7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQURKO0FBS0EsTUFBQSIsImZpbGUiOiJjYXRlZ29yeUxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlVwZGF0ZWQgY3NzKi9cclxuLmRpc3BsYXktdGFibGUge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG59XHJcblxyXG4uZGlzcGxheS10YWJsZS1jZWxsIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ubm8tZGF0YSB7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6ICNjY2MgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDAgMDtcclxuICAgIGZvbnQtc2l6ZTogMi4wcmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKmVuZCovIl19 */";

/***/ }),

/***/ 8567:
/*!*************************************************************!*\
  !*** ./src/app/chatList/chatList.component.scss?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "/*Updated css*/\n.display-table {\n  display: table;\n  width: 100%;\n  height: 50%;\n}\n.display-table-cell {\n  display: table-cell;\n  width: 100%;\n  height: 50%;\n  text-align: center;\n  vertical-align: middle;\n}\n.no-data ion-icon {\n  color: #ccc !important;\n  font-size: 100px;\n}\n.no-data h3 {\n  margin: 0;\n  padding: 15px 0 0;\n  font-size: 2rem !important;\n}\n/*end*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRMaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFDQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNKO0FBRUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUNKO0FBR0k7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0FBQU47QUFHSTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBRE47QUFJRSxNQUFBIiwiZmlsZSI6ImNoYXRMaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypVcGRhdGVkIGNzcyovXHJcbi5kaXNwbGF5LXRhYmxlIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLmRpc3BsYXktdGFibGUtY2VsbCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uby1kYXRhIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6ICNjY2MgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIH1cclxuICBcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDAgMDtcclxuICAgICAgZm9udC1zaXplOiAyLjByZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLyplbmQqLyJdfQ== */";

/***/ }),

/***/ 7074:
/*!***********************************************************!*\
  !*** ./src/app/coaches/coaches.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/*Updated css*/\n.display-table {\n  display: table;\n  width: 100%;\n  height: 50%;\n}\n.display-table-cell {\n  display: table-cell;\n  width: 100%;\n  height: 50%;\n  text-align: center;\n  vertical-align: middle;\n}\n.no-data ion-icon {\n  color: #ccc !important;\n  font-size: 100px;\n}\n.no-data h3 {\n  margin: 0;\n  padding: 15px 0 0;\n  font-size: 2rem !important;\n}\n/*end*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvYWNoZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBQTtBQUNBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0o7QUFFRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFHSTtFQUNFLHNCQUFBO0VBQ0EsZ0JBQUE7QUFBTjtBQUdJO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUFETjtBQU1FLE1BQUEiLCJmaWxlIjoiY29hY2hlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qVXBkYXRlZCBjc3MqL1xyXG4uZGlzcGxheS10YWJsZSB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXNwbGF5LXRhYmxlLWNlbGwge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICBcclxuICAubm8tZGF0YSB7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjY2NjICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBoMyB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMTVweCAwIDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4wcmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyplbmQqLyJdfQ== */";

/***/ }),

/***/ 9183:
/*!***************************************************************!*\
  !*** ./src/app/coachings/coachings.component.scss?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".coupon {\n  border: 5px dotted #bbb;\n  width: 80%;\n  border-radius: 15px;\n  max-width: 370px;\n}\n\n.container {\n  padding: 2px 16px;\n  background-color: #f1f1f1;\n}\n\n.promo {\n  background: #ccc;\n  padding: 3px;\n}\n\n.expire {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvYWNoaW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFO0VBQ0UsVUFBQTtBQUFKIiwiZmlsZSI6ImNvYWNoaW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY291cG9uIHtcclxuICAgIGJvcmRlcjogNXB4IGRvdHRlZCAjYmJiO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDM3MHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICB9XHJcbiAgXHJcbiAgLnByb21vIHtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leHBpcmUge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9Il19 */";

/***/ }),

/***/ 1460:
/*!*************************************************************************************!*\
  !*** ./src/app/create-advertisement/create-advertisement.component.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtYWR2ZXJ0aXNlbWVudC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 8332:
/*!*********************************************************************!*\
  !*** ./src/app/gutschriften/gutschriften.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = ".coupon {\n  border: 5px dotted #bbb;\n  width: 80%;\n  border-radius: 15px;\n  max-width: 370px;\n}\n\n.container {\n  padding: 2px 16px;\n  background-color: #f1f1f1;\n}\n\n.promo {\n  background: #ccc;\n  padding: 3px;\n}\n\n.expire {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImd1dHNjaHJpZnRlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFO0VBQ0UsVUFBQTtBQUFKIiwiZmlsZSI6Imd1dHNjaHJpZnRlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY291cG9uIHtcclxuICAgIGJvcmRlcjogNXB4IGRvdHRlZCAjYmJiO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDM3MHB4O1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDJweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICB9XHJcbiAgXHJcbiAgLnByb21vIHtcclxuICAgIGJhY2tncm91bmQ6ICNjY2M7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leHBpcmUge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9Il19 */";

/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6891:
/*!*******************************************************************!*\
  !*** ./src/app/showCredits/showCredits.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "/*Updated css*/\n.display-table {\n  display: table;\n  width: 100%;\n  height: 50%;\n}\n.display-table-cell {\n  display: table-cell;\n  width: 100%;\n  height: 50%;\n  text-align: center;\n  vertical-align: middle;\n}\n.no-data ion-icon {\n  color: #ccc !important;\n  font-size: 100px;\n}\n.no-data h3 {\n  margin: 0;\n  padding: 15px 0 0;\n  font-size: 2rem !important;\n}\n/*end*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3dDcmVkaXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQUE7QUFDQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNKO0FBRUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUNKO0FBR0k7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0FBQU47QUFHSTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBRE47QUFJRSxNQUFBIiwiZmlsZSI6InNob3dDcmVkaXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypVcGRhdGVkIGNzcyovXHJcbi5kaXNwbGF5LXRhYmxlIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9XHJcbiAgXHJcbiAgLmRpc3BsYXktdGFibGUtY2VsbCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uby1kYXRhIHtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6ICNjY2MgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIH1cclxuICBcclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDAgMDtcclxuICAgICAgZm9udC1zaXplOiAyLjByZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLyplbmQqLyJdfQ== */";

/***/ }),

/***/ 6938:
/*!*******************************************************!*\
  !*** ./src/app/users/users.component.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 7067:
/*!***********************************************************!*\
  !*** ./src/app/werbung/werbung.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".flex-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flex-container > div {\n  background-color: #f1f1f1;\n  width: 400px;\n  margin: 20px;\n  text-align: center;\n  line-height: 25px;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlcmJ1bmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoid2VyYnVuZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICBcclxuICAuZmxleC1jb250YWluZXIgPiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG5cclxuICB9XHJcblxyXG5cclxuICAiXX0= */";

/***/ }),

/***/ 3509:
/*!*************************************************************!*\
  !*** ./src/app/blessing/blessing.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<div style=\"display: flex; justify-content: center; align-content: center;\">\r\n  <div style=\" width: 300px !important; background-color: lightgrey; margin: 10px; padding: 10px; border-radius: 15px;\">\r\n    <ion-label>Blessing</ion-label>\r\n    <ion-textarea [(ngModel)]=\"blessingObj.blessing\" step=\"font-size: 2.0rem !important;\" maxlength=\"70\" type=\"text\" placeholder=\"Blessing hinzufügen...\">\r\n    </ion-textarea>\r\n\r\n    <ion-item>\r\n      <input type=\"file\" name=\"avatar\" accept=\"image/png, image/jpeg\" (change)=\"handleUpload($event)\">\r\n    </ion-item>\r\n\r\n    \r\n    <ion-button color=\"success\" expand=\"block\" (click)=\"createBlessing()\">Veröffentlichen</ion-button>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 2278:
/*!*******************************************************************!*\
  !*** ./src/app/bookingList/bookingList.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Booking List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n <!-- No Booking list available -->\r\n <div class=\"display-table\" *ngIf=\"nodata ==1\">\r\n  <div class=\"display-table-cell\">\r\n    <div class=\"no-data\">\r\n    <ion-icon name=\"calendar\"></ion-icon>\r\n    <h3 style=\"font-size: 20px !important;\">No bookings</h3>\r\n    </div>\r\n  </div>\r\n</div>    \r\n<!-- No Booking list available End-->\r\n<div *ngIf=\"nodata == 0\">\r\n  <ion-card *ngFor=\"let bookingItem of bookingUsersList\"  >\r\n    <ion-card-header>\r\n      <ion-card-title style=\"font-size: 15px;\">Booking Date: {{bookingItem.bookingDate | date:'d MMM y'}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n    <ion-list>\r\n      <ion-item style=\"font-size: 14px;\">Coach Name: {{bookingItem.coachFirstName + \" \" + bookingItem.coachLastName}}</ion-item>\r\n      <ion-item style=\"font-size: 14px;\">Customer No.: {{bookingItem.customerNo}}  </ion-item>\r\n      <ion-item style=\"font-size: 14px;\">User Name: {{bookingItem.username}}  </ion-item>\r\n      <ion-item style=\"font-size: 14px;\">Service: {{bookingItem.serviceName}}  </ion-item>\r\n      <ion-item style=\"font-size: 14px;\">Price: {{bookingItem.price | currency:'EUR'}}  </ion-item>\r\n      <ion-item style=\"font-size: 14px;\">Status: {{bookingItem.status}}  </ion-item>\r\n    </ion-list>  \r\n    </ion-card-content>\r\n  </ion-card>\r\n    </div>\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 1960:
/*!*********************************************************************!*\
  !*** ./src/app/categoryList/categoryList.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Category List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content style=\"max-height: 100%;\">\r\n\r\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" color=\"primary\" horizontal=\"end\" style=\"margin-bottom: 28px;\">\r\n    <ion-fab-button (click)=\"addCategory()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <!-- No Category list available -->\r\n  <div class=\"display-table\" *ngIf=\"nodata ==1\">\r\n    <div class=\"display-table-cell\">\r\n      <div class=\"no-data\">\r\n        <ion-icon name=\"list\"></ion-icon>\r\n        <h3 style=\"font-size: 20px !important;\">No category added</h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- No Category list available End-->\r\n  <div *ngIf=\"nodata == 0\">\r\n    <ion-card *ngFor='let categoryItem of categoryList; let i = index' [attr.data-index]='i'>\r\n      <ion-card-header>\r\n        <ion-card-title style=\"font-size: 15px;\">{{categoryItem.name }}</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-card-content style=\"font-size: 13px;\">\r\n        Created at: {{categoryItem.created_at | date:'d MMM y'}}\r\n      </ion-card-content>\r\n\r\n      <ion-button size=\"small\" (click)=\"delCat(categoryItem.id,i)\" shape=\"round\" color=\"danger \"\r\n        style=\"font-size: 14px; margin-left: 20px; margin-bottom: 15px;\">Delete</ion-button>\r\n    </ion-card>\r\n  </div>\r\n\r\n\r\n\r\n</ion-content>";

/***/ }),

/***/ 9625:
/*!*************************************************************!*\
  !*** ./src/app/chatList/chatList.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Chat List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n <!-- No chat list available -->\r\n <div class=\"display-table\" *ngIf=\"nodata ==1\">\r\n  <div class=\"display-table-cell\">\r\n    <div class=\"no-data\">\r\n    <ion-icon name=\"people\"></ion-icon>\r\n    <h3 style=\"font-size: 20px !important;\">No Chat List</h3>\r\n    </div>\r\n  </div>\r\n</div>    \r\n<!-- No chat list available End-->\r\n<div *ngIf=\"nodata == 0\">\r\n  <ion-card *ngFor=\"let chatItems of chatUsersList\"  (click) =\"gotoChatHistory(chatItems)\">\r\n    <ion-card-header>\r\n      <ion-card-title style=\"font-size: 17px;\">Room Name: {{chatItems.roomName}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n    <ion-list>\r\n      <ion-item>User: {{chatItems.username}}</ion-item>\r\n      <ion-item>Coach: {{chatItems.coach_vorname + \" \" + chatItems.coach_nachname}}</ion-item>\r\n      <ion-item>Created At: {{chatItems.created_at | date:'d MMM y'}}  </ion-item>\r\n    </ion-list>  \r\n    </ion-card-content>\r\n  </ion-card>\r\n    </div>\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 3407:
/*!***********************************************************!*\
  !*** ./src/app/coaches/coaches.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<ion-header style=\"margin-bottom: 20px;\">\r\n  <ion-toolbar>\r\n    <ion-title>{{UserService.coachFilterOpt}} Coaches</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div style=\"max-width: 400px; float: right;\" *ngIf=\"UserService.coachFilterOpt ==''\">\r\n  <ion-segment [value]=\"this.filterInput\">\r\n    <ion-segment-button mode=\"ios\" value=\"anfragen\" (click)=\"getBecomeCoachRequests()\">\r\n      <ion-icon color=\"warning\" name=\"help-circle-outline\"></ion-icon>Anfragen\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"ios\" value=\"aktiv\" (click)=\"getActiveCoaches()\">\r\n      <ion-icon color=\"success\" name=\"checkmark-circle-outline\"></ion-icon>Aktiv\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</div>\r\n\r\n <!-- If Coach list not available -->\r\n <div class=\"display-table\" *ngIf=\"nodata ==1\">\r\n  <div class=\"display-table-cell\">\r\n    <div class=\"no-data\">\r\n    <ion-icon name=\"people\"></ion-icon>\r\n    <h3 style=\"font-size: 18px !important;\">No {{UserService.coachFilterOpt}} coaches</h3>\r\n    </div>\r\n  </div>\r\n</div>    \r\n <!-- If Coach list not available End -->\r\n\r\n\r\n<div style=\"margin-top: 100px; display: flex; flex-wrap: wrap;\"  *ngIf=\"nodata ==0\">\r\n  <ion-card *ngFor=\"let request of requests\" style=\"padding: 10px;\">\r\n    <div style=\"display: flex; flex-direction: row\">\r\n      <div>\r\n        <ion-avatar>\r\n          <img alt=\"Request\" [src]=\"request.profileImage\" />\r\n        </ion-avatar>\r\n      </div>\r\n      <div>\r\n        <ion-item>\r\n          <ion-label>{{ request.vorname + ' ' + request.nachname }}  \r\n          <ion-button *ngIf=\"request.coach_profile_requests_id\" fill=\"outline\" color=\"danger\" (click)=\"cancelCoach(request.owner_id, request.coach_profile_requests_id)\">\r\n          <ion-icon size=\"small\" color=\"danger\" name=\"alert-circle-outline\"></ion-icon>\r\n          </ion-button>\r\n          </ion-label>\r\n        </ion-item>\r\n      </div>\r\n    </div>\r\n\r\n    <div>\r\n      <ion-item>\r\n        <ion-label>{{ request.email }}</ion-label>\r\n      </ion-item>\r\n    </div>\r\n    <div>\r\n      <ion-item>\r\n        <ion-label>{{ request.handynummer }}</ion-label>\r\n      </ion-item>\r\n    </div>\r\n    <div style=\"display: flex; flex-direction: row; justify-content: space-evenly;\">\r\n      <ion-button *ngIf=\"!request.coach_profile_requests_id\" fill=\"outline\" color=\"danger\" (click)=\"rejectCoach(request.owner_id, request.id)\">\r\n        <ion-icon size=\"large\" color=\"danger\" name=\"close-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button *ngIf=\"!request.coach_profile_requests_id\" fill=\"outline\" color=\"success\" (click)=\"acceptCoach(request.owner_id, request.id)\">\r\n        <ion-icon size=\"large\" color=\"success\" name=\"checkmark-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button fill=\"outline\" color=\"primary\" (click)=\"navToCoachProfile(request.id)\">\r\n        <ion-icon size=\"large\" color=\"primary\" name=\"chevron-forward-outline\"></ion-icon>\r\n      </ion-button>\r\n     \r\n    </div>\r\n  </ion-card>\r\n</div>";

/***/ }),

/***/ 9309:
/*!***************************************************************!*\
  !*** ./src/app/coachings/coachings.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "<ion-header style=\"margin-bottom: 20px;\">\r\n  <ion-toolbar>\r\n    <ion-title>Coachings</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div style=\"max-width: 400px; float: right;\">\r\n  <ion-segment [value]=\"filterInput\">\r\n    <ion-segment-button mode=\"ios\" value=\"anfragen\" (click)=\"getCoachingRequests()\">\r\n      <ion-icon color=\"warning\" name=\"help-circle-outline\"></ion-icon>Anfragen\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"ios\" value=\"aktiv\" (click)=\"getActiveCoachings()\">\r\n      <ion-icon color=\"success\" name=\"checkmark-circle-outline\"></ion-icon>Aktiv\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n</div>\r\n<div style=\"margin-top: 100px; display: flex; flex-wrap: wrap;\">\r\n  <div *ngFor=\"let coaching of data\" class=\"coupon\" style=\"margin-left: 10px; margin-right: 10px;\">\r\n    <div class=\"container\">\r\n      <h3>Titel: {{ coaching.titel }}</h3>\r\n    </div>\r\n    <ion-img [src]=\"coaching.foto\" alt=\"Avatar\" style=\"width:100%;\"></ion-img>\r\n    <div class=\"container\" style=\"background-color:white\">\r\n      <div style=\"font-size: 16px;\"><b>{{ coaching.categories }}</b></div> \r\n      <p>{{ coaching.beschreibung }}</p>\r\n    </div>\r\n    <div *ngIf=\"!coaching.coaching_requests_id\" class=\"container\">\r\n      <div *ngFor=\"let pakets of coaching.pakete\">\r\n        <ion-label>{{ pakets.name }}</ion-label>\r\n        <ion-input (ionChange)=\"logPakete(pakets)\" [(ngModel)]=\"pakets.productName\" type=\"text\"></ion-input>\r\n      </div>\r\n    </div>\r\n    <div style=\"display: flex; flex-direction: row; justify-content: space-evenly;\">\r\n      <ion-button *ngIf=\"!coaching.coaching_requests_id\" fill=\"outline\" color=\"danger\" (click)=\"rejectCoaching(coaching.owner_id, coaching.id)\">\r\n        <ion-icon size=\"large\" color=\"danger\" name=\"close-circle-outline\"></ion-icon>\r\n        Ablehnen\r\n      </ion-button>\r\n      <ion-button *ngIf=\"!coaching.coaching_requests_id\" fill=\"outline\" color=\"success\" (click)=\"acceptCoaching(coaching.owner_id, coaching.id, coaching.pakete)\">\r\n        <ion-icon size=\"large\" color=\"success\" name=\"checkmark-circle-outline\"></ion-icon>\r\n        Akzeptieren\r\n      </ion-button>\r\n      <ion-button *ngIf=\"coaching.coaching_requests_id\" fill=\"outline\" color=\"danger\" (click)=\"cancelCoaching(coaching.owner_id, coaching.coaching_requests_id, coaching.id)\">Coaching löschen</ion-button>\r\n      <!--<ion-button fill=\"outline\" color=\"primary\" (click)=\"navToCoachingProfile(coaching.id)\">\r\n        <ion-icon size=\"large\" color=\"primary\" name=\"chevron-forward-outline\"></ion-icon>\r\n      </ion-button>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!--<div style=\"margin-top: 100px; display: flex; flex-wrap: wrap;\">\r\n  <ion-card *ngFor=\"let coaching of data\" style=\"padding: 10px; max-width: 300px;\">\r\n    <div style=\"display: flex; flex-direction: row\">\r\n      <div>\r\n        <ion-avatar>\r\n          <img alt=\"Coach\" [src]=\"coaching.foto\" />\r\n        </ion-avatar>\r\n      </div>\r\n      <div>\r\n        <ion-item>\r\n          <ion-label>{{ coaching.titel }}</ion-label>\r\n        </ion-item>\r\n      </div>\r\n    </div>\r\n    <ion-button *ngIf=\"coaching.coaching_requests_id\" fill=\"outline\" color=\"danger\" (click)=\"cancelCoaching(coaching.owner_id, coaching.coaching_requests_id, coaching.id)\"></ion-button>\r\n    <div>\r\n      <ion-item>\r\n        <ion-label>{{ coaching.beschreibung }}</ion-label>\r\n      </ion-item>\r\n    </div>\r\n    <div>\r\n      <ion-item>\r\n        <ion-label>{{ coaching.categories }}</ion-label>\r\n      </ion-item>\r\n    </div>\r\n    <div style=\"display: flex; flex-direction: row; justify-content: space-evenly;\">\r\n      <ion-button *ngIf=\"!coaching.coaching_requests_id\" fill=\"outline\" color=\"danger\" (click)=\"rejectCoaching(coaching.owner_id, coaching.id)\">\r\n        <ion-icon size=\"large\" color=\"danger\" name=\"close-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button *ngIf=\"!coaching.coaching_requests_id\" fill=\"outline\" color=\"success\" (click)=\"acceptCoaching(coaching.owner_id, coaching.id)\">\r\n        <ion-icon size=\"large\" color=\"success\" name=\"checkmark-circle-outline\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button fill=\"outline\" color=\"primary\" (click)=\"navToCoachingProfile(coaching.id)\">\r\n        <ion-icon size=\"large\" color=\"primary\" name=\"chevron-forward-outline\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </ion-card>\r\n</div>-->";

/***/ }),

/***/ 594:
/*!*************************************************************************************!*\
  !*** ./src/app/create-advertisement/create-advertisement.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header style=\"margin-bottom: 20px;\">\r\n  <ion-toolbar>\r\n    <ion-title>Advertisement</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div style=\"width: 500px; margin-left: auto; margin-right: auto;\">\r\n\r\n  <ion-item>\r\n    <ion-label>Bezeichnung:</ion-label>\r\n    <ion-input [(ngModel)]=\"this.AdvertiseName\" placeholder=\"...\"></ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <input type=\"file\" name=\"avatar\" accept=\"image/png, image/jpeg\" (change)=\"handleUpload($event)\">\r\n  </ion-item>\r\n\r\n</div>\r\n\r\n\r\n  <iframe style=\"width: 80%; height: 70%;\" src=\"http://localhost:3000/crop-test.html\" title=\"W3Schools Free Online Web Tutorials\"></iframe>\r\n\r\n\r\n\r\n<div style=\"width: 500px; margin-left: auto; margin-right: auto;\">\r\n\r\n  <ion-item (click)=\"showDatepickerFrom()\">\r\n    <ion-label position=\"stacked\">Beginn</ion-label>\r\n    <ion-input readonly>{{ this.DatabaseService.startDate }}</ion-input>\r\n  </ion-item>\r\n\r\n  <ion-item (click)=\"showDatepickerTo()\">\r\n    <ion-label position=\"stacked\">Ende</ion-label>\r\n    <ion-input readonly>{{ this.DatabaseService.endDate }}</ion-input>\r\n  </ion-item>\r\n\r\n  <ion-button style=\"margin: 5% 10%;\" color=\"primary\" (click)=\"set()\" expand=\"block\">Speichern</ion-button>\r\n\r\n</div>";

/***/ }),

/***/ 6349:
/*!*********************************************************************!*\
  !*** ./src/app/gutschriften/gutschriften.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header style=\"margin-bottom: 20px;\">\r\n  <ion-toolbar>\r\n    <ion-title>Gutschriften Anfragen</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div style=\"margin-top: 100px; display: flex; flex-wrap: wrap;\">\r\n  <div *ngFor=\"let coaching of data\" class=\"coupon\" style=\"margin-left: 10px; margin-right: 10px;\">\r\n\r\n    <div class=\"container\">\r\n      <h3>Name: {{ coaching.username }}</h3>\r\n    </div>\r\n\r\n    <ion-img [src]=\"coaching.profileImage\" alt=\"Avatar\" style=\"max-width: 200px; margin-left: auto; margin-right: auto;\"></ion-img>\r\n\r\n    <div class=\"container\" style=\"background-color:white; width:161px; margin-left: auto; margin-right: auto;\">\r\n      <div style=\"font-size: 26px; width: 200px;\">Betrag: {{ coaching.betrag }} €</div> \r\n    </div>\r\n\r\n    <div style=\"display: flex; flex-direction: row; justify-content: space-evenly;\">\r\n      <ion-button *ngIf=\"!coaching.coaching_requests_id\" fill=\"outline\" color=\"danger\" (click)=\"rejectCoach(coaching)\">\r\n        <ion-icon size=\"large\" color=\"danger\" name=\"close-circle-outline\"></ion-icon>\r\n        Ablehnen\r\n      </ion-button>\r\n      <ion-button *ngIf=\"!coaching.coaching_requests_id\" fill=\"outline\" color=\"success\" (click)=\"acceptCoach(coaching)\">\r\n        <ion-icon size=\"large\" color=\"success\" name=\"checkmark-circle-outline\"></ion-icon>\r\n        Akzeptieren\r\n      </ion-button>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-menu contentId=\"main-content\">\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-img src=\"../assets/inchange_logo.svg\"\r\n        style=\"width: 250px; margin: auto; margin-top: 30px; margin-bottom: 30px;\"></ion-img>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content class=\"ion-padding\">\r\n    <div auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n      <ion-item button detail=\"false\" *ngIf=\"p.url!='coaches'\" (click)=\"UserService.page = p.url\">\r\n        <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\"></ion-icon>\r\n        <ion-label>{{ p.title }}</ion-label>\r\n      </ion-item>\r\n      <ion-item button detail=\"false\" *ngIf=\"p.url=='coaches'\" (click)=\"gotoCoachOpt('all')\">\r\n        <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\"></ion-icon>\r\n        <ion-label>{{ p.title }}</ion-label>\r\n      </ion-item>\r\n\r\n      <!-- Code for Submenus-->\r\n      <ion-item-group style=\"margin-left:50px\" submenu [class.visible]=\"showForce\" *ngIf=\"p.url=='coaches'\">\r\n        <ion-item (click)=\"gotoCoachOpt(coachOpt.value)\" button detail=\"false\" *ngFor=\"let coachOpt of subCoachEntries\">\r\n          <ion-label> - {{coachOpt.title}}</ion-label>\r\n        </ion-item>\r\n      </ion-item-group>\r\n      <!-- Code for Submenus-->\r\n\r\n    </div>\r\n  </ion-content>\r\n</ion-menu>\r\n<div class=\"ion-page\" id=\"main-content\">\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>INCHANGE - ADMIN</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content class=\"ion-padding\">\r\n\r\n    <app-coaches *ngIf=\"UserService.page == 'coaches'\">\r\n\r\n    </app-coaches>\r\n\r\n    <app-coachings *ngIf=\"UserService.page == 'coachings'\">\r\n\r\n    </app-coachings>\r\n\r\n    <app-werbung *ngIf=\"UserService.page == 'werbung'\">\r\n\r\n    </app-werbung>\r\n\r\n    <app-users *ngIf=\"UserService.page == 'users'\">\r\n\r\n    </app-users>\r\n\r\n    <app-chatList *ngIf=\"UserService.page == 'chatList'\">\r\n\r\n    </app-chatList>\r\n\r\n    <app-blessing *ngIf=\"UserService.page == 'blessing'\">\r\n\r\n    </app-blessing>\r\n\r\n    <app-create-advertisement *ngIf=\"UserService.page == 'create-advertisement'\">\r\n\r\n    </app-create-advertisement>\r\n\r\n    <app-categoryList *ngIf=\"UserService.page == 'categoryList'\">\r\n\r\n    </app-categoryList>\r\n\r\n    <app-bookingList *ngIf=\"UserService.page == 'bookingList'\">\r\n\r\n    </app-bookingList>\r\n\r\n    <app-showCredits *ngIf=\"UserService.page == 'showCredits'\">\r\n\r\n    </app-showCredits>\r\n\r\n    <app-gutschriften *ngIf=\"UserService.page == 'gutschriften'\">\r\n\r\n    </app-gutschriften>\r\n\r\n  </ion-content>\r\n</div>";

/***/ }),

/***/ 1597:
/*!*******************************************************************!*\
  !*** ./src/app/showCredits/showCredits.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Show Credits</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n <!-- No Credits list available -->\r\n <div class=\"display-table\" *ngIf=\"nodata ==1\">\r\n  <div class=\"display-table-cell\">\r\n    <div class=\"no-data\">\r\n    <ion-icon name=\"cash\"></ion-icon>\r\n    <h3 style=\"font-size: 20px !important;\">No Credits list</h3>\r\n    </div>\r\n  </div>\r\n</div>    \r\n<!-- No Credits list available End-->\r\n<div *ngIf=\"nodata == 0\">\r\n  <ion-card *ngFor=\"let creditItem of creditList\"  >\r\n    <ion-card-header>\r\n      <ion-card-title style=\"font-size: 15px;\">Customer No: {{creditItem.customerNo !='' ? creditItem.customerNo : '-'}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n    <ion-list>\r\n      <ion-item style=\"font-size: 14px;\">Coach Name: {{creditItem.coachFirstName + \" \" + creditItem.coachLastName}}</ion-item>\r\n      <ion-item style=\"font-size: 14px;\">Address: {{creditItem.address + \", \"+ creditItem.city}}  </ion-item>\r\n      <ion-item style=\"font-size: 14px;\">Zip: {{creditItem.zip}}  </ion-item>\r\n      </ion-list>  \r\n    </ion-card-content>\r\n    <ion-button (click)=\"gotoDetails(creditItem.customerNo)\" size=\"small\"  shape=\"round\" color =\"primary\" style=\"font-size: 14px; margin-left: 100px; margin-bottom: 15px;\" >View</ion-button>\r\n  </ion-card>\r\n    </div>\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 230:
/*!*******************************************************!*\
  !*** ./src/app/users/users.component.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Users</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<!-- Count of Registered users-->\r\n<div style=\"margin:10px\">\r\n  registrierte Nutzer: {{usersCount}}\r\n</div>\r\n\r\n<div style=\"margin:10px\">\r\n  kostenlose Coachings: {{freeCoachingUsersCount}}\r\n</div>\r\n\r\n</ion-content>\r\n";

/***/ }),

/***/ 5280:
/*!***********************************************************!*\
  !*** ./src/app/werbung/werbung.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "<!--<ion-item button>\r\n  <ion-avatar slot=\"start\">\r\n    <img alt=\"Silhouette of a person's head\" src=\"https://ionicframework.com/docs/img/demos/avatar.svg\" />\r\n  </ion-avatar>\r\n  <ion-label>\r\n    Anzeige 1\r\n  </ion-label>\r\n  <ion-button (click)=\"openTimeSetter($event)\">\r\n    Planen\r\n  </ion-button>\r\n</ion-item>\r\n\r\n<ion-item button>\r\n  <ion-avatar slot=\"start\">\r\n    <img alt=\"Silhouette of a person's head\" src=\"https://ionicframework.com/docs/img/demos/avatar.svg\" />\r\n  </ion-avatar>\r\n  <ion-label>\r\n    Anzeige 2\r\n  </ion-label>\r\n  <ion-button (click)=\"openTimeSetter($event)\">\r\n    Planen\r\n  </ion-button>\r\n</ion-item>-->\r\n\r\n<ion-header style=\"margin-bottom: 20px;\">\r\n  <ion-toolbar>\r\n    <ion-title>Werbung</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<div class=\"flex-container\">\r\n  <div *ngFor=\"let advertise of this.DatabaseService.advertises\">\r\n    <ion-card>\r\n      <img alt=\"Silhouette of mountains\" [src]=\"advertise.img\" />\r\n      <ion-card-header>\r\n        <ion-card-title>{{ advertise.derName }}</ion-card-title>\r\n        <!--<ion-card-subtitle>Card Subtitle</ion-card-subtitle>-->\r\n      </ion-card-header>\r\n      <ion-button (click)=\"scheduleTime($event)\" fill=\"clear\">Zeitplanung</ion-button>\r\n      <ion-button fill=\"clear\">deaktivieren</ion-button>\r\n      <ion-button fill=\"clear\">Stummschalten</ion-button>\r\n    </ion-card>\r\n  </div>\r\n\r\n\r\n\r\n  <div>\r\n    <ion-card style=\"margin-top: 66px;\">\r\n      <div style=\"width: 120px; margin-left: auto; margin-right: auto; margin-top: 40px; margin-bottom: 40px;\">\r\n        <ion-fab-button (click)=\"createAdvertise()\" style=\"width: 120px; height: 120px;\" color=\"primary\">\r\n          <ion-icon name=\"add\"></ion-icon>\r\n          </ion-fab-button>\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n  \r\n</div>";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map