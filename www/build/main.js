webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, platform, alertCtrl, localNotifications) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.localNotifications = localNotifications;
        this.notifications = [];
        this.notifyTime = __WEBPACK_IMPORTED_MODULE_3_moment__(new Date()).format();
        this.chosenHours = new Date().getHours();
        this.chosenMinutes = new Date().getMinutes();
        this.days = [
            { title: 'Monday', dayCode: 1, checked: false },
            { title: 'Tuesday', dayCode: 2, checked: false },
            { title: 'Wednesday', dayCode: 3, checked: false },
            { title: 'Thursday', dayCode: 4, checked: false },
            { title: 'Friday', dayCode: 5, checked: false },
            { title: 'Saturday', dayCode: 6, checked: false },
            { title: 'Sunday', dayCode: 0, checked: false }
        ];
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.timeChange = function (time) {
        this.chosenHours = time.hour.value;
        this.chosenMinutes = time.minute.value;
    };
    HomePage.prototype.addNotifications = function () {
        var _this = this;
        var currentDate = new Date();
        var currentDay = currentDate.getDay(); // Sunday = 0, Monday = 1, etc.
        for (var _i = 0, _a = this.days; _i < _a.length; _i++) {
            var day = _a[_i];
            if (day.checked) {
                var firstNotificationTime = new Date();
                var dayDifference = day.dayCode - currentDay;
                if (dayDifference < 0) {
                    dayDifference = dayDifference + 7; // for cases where the day is in the following week
                }
                firstNotificationTime.setHours(firstNotificationTime.getHours() + (24 * (dayDifference)));
                firstNotificationTime.setHours(this.chosenHours);
                firstNotificationTime.setMinutes(this.chosenMinutes);
                var notification = {
                    id: day.dayCode,
                    title: 'Hey!',
                    text: 'You just got notified :)',
                    at: firstNotificationTime,
                    every: 'week'
                };
                this.notifications.push(notification);
            }
        }
        console.log("Notifications to be scheduled: ", this.notifications);
        if (this.platform.is('cordova')) {
            // Cancel any existing notifications
            this.localNotifications.cancelAll().then(function () {
                // Schedule the new notifications
                _this.localNotifications.schedule(_this.notifications);
                _this.notifications = [];
                var alert = _this.alertCtrl.create({
                    title: 'Notifications set',
                    buttons: ['Ok']
                });
                alert.present();
            });
        }
    };
    HomePage.prototype.cancelAll = function () {
        this.localNotifications.cancelAll();
        var alert = this.alertCtrl.create({
            title: 'Notifications cancelled',
            buttons: ['Ok']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/bpdesilva/Notif/ionic2-local-notification/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Notifications\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n \n    <ion-list no-lines>\n \n        <ion-item>\n          <ion-label>Notify me at: </ion-label>\n          <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="notifyTime" (ionChange)="timeChange($event)"></ion-datetime>\n        </ion-item>\n \n        <ion-item>\n            <ion-label>on the following days:</ion-label>\n        </ion-item>\n \n        <ion-item *ngFor="let day of days">\n            <ion-label>{{day.title}}</ion-label>\n            <ion-checkbox [(ngModel)]="day.checked" color="primary"></ion-checkbox>\n        </ion-item>\n \n    </ion-list>\n \n</ion-content>\n \n<ion-footer>\n \n    <button (click)="addNotifications()" ion-button color="primary" full>Schedule</button>\n    <button (click)="cancelAll()" ion-button color="danger" full>Leave me alone!</button>\n \n</ion-footer>'/*ion-inline-end:"/Users/bpdesilva/Notif/ionic2-local-notification/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(343);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_local_notifications__["a" /* LocalNotifications */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/bpdesilva/Notif/ionic2-local-notification/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/bpdesilva/Notif/ionic2-local-notification/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 197,
	"./af.js": 197,
	"./ar": 198,
	"./ar-dz": 199,
	"./ar-dz.js": 199,
	"./ar-kw": 200,
	"./ar-kw.js": 200,
	"./ar-ly": 201,
	"./ar-ly.js": 201,
	"./ar-ma": 202,
	"./ar-ma.js": 202,
	"./ar-sa": 203,
	"./ar-sa.js": 203,
	"./ar-tn": 204,
	"./ar-tn.js": 204,
	"./ar.js": 198,
	"./az": 205,
	"./az.js": 205,
	"./be": 206,
	"./be.js": 206,
	"./bg": 207,
	"./bg.js": 207,
	"./bm": 208,
	"./bm.js": 208,
	"./bn": 209,
	"./bn.js": 209,
	"./bo": 210,
	"./bo.js": 210,
	"./br": 211,
	"./br.js": 211,
	"./bs": 212,
	"./bs.js": 212,
	"./ca": 213,
	"./ca.js": 213,
	"./cs": 214,
	"./cs.js": 214,
	"./cv": 215,
	"./cv.js": 215,
	"./cy": 216,
	"./cy.js": 216,
	"./da": 217,
	"./da.js": 217,
	"./de": 218,
	"./de-at": 219,
	"./de-at.js": 219,
	"./de-ch": 220,
	"./de-ch.js": 220,
	"./de.js": 218,
	"./dv": 221,
	"./dv.js": 221,
	"./el": 222,
	"./el.js": 222,
	"./en-au": 223,
	"./en-au.js": 223,
	"./en-ca": 224,
	"./en-ca.js": 224,
	"./en-gb": 225,
	"./en-gb.js": 225,
	"./en-ie": 226,
	"./en-ie.js": 226,
	"./en-il": 227,
	"./en-il.js": 227,
	"./en-nz": 228,
	"./en-nz.js": 228,
	"./eo": 229,
	"./eo.js": 229,
	"./es": 230,
	"./es-do": 231,
	"./es-do.js": 231,
	"./es-us": 232,
	"./es-us.js": 232,
	"./es.js": 230,
	"./et": 233,
	"./et.js": 233,
	"./eu": 234,
	"./eu.js": 234,
	"./fa": 235,
	"./fa.js": 235,
	"./fi": 236,
	"./fi.js": 236,
	"./fo": 237,
	"./fo.js": 237,
	"./fr": 238,
	"./fr-ca": 239,
	"./fr-ca.js": 239,
	"./fr-ch": 240,
	"./fr-ch.js": 240,
	"./fr.js": 238,
	"./fy": 241,
	"./fy.js": 241,
	"./gd": 242,
	"./gd.js": 242,
	"./gl": 243,
	"./gl.js": 243,
	"./gom-latn": 244,
	"./gom-latn.js": 244,
	"./gu": 245,
	"./gu.js": 245,
	"./he": 246,
	"./he.js": 246,
	"./hi": 247,
	"./hi.js": 247,
	"./hr": 248,
	"./hr.js": 248,
	"./hu": 249,
	"./hu.js": 249,
	"./hy-am": 250,
	"./hy-am.js": 250,
	"./id": 251,
	"./id.js": 251,
	"./is": 252,
	"./is.js": 252,
	"./it": 253,
	"./it.js": 253,
	"./ja": 254,
	"./ja.js": 254,
	"./jv": 255,
	"./jv.js": 255,
	"./ka": 256,
	"./ka.js": 256,
	"./kk": 257,
	"./kk.js": 257,
	"./km": 258,
	"./km.js": 258,
	"./kn": 259,
	"./kn.js": 259,
	"./ko": 260,
	"./ko.js": 260,
	"./ky": 261,
	"./ky.js": 261,
	"./lb": 262,
	"./lb.js": 262,
	"./lo": 263,
	"./lo.js": 263,
	"./lt": 264,
	"./lt.js": 264,
	"./lv": 265,
	"./lv.js": 265,
	"./me": 266,
	"./me.js": 266,
	"./mi": 267,
	"./mi.js": 267,
	"./mk": 268,
	"./mk.js": 268,
	"./ml": 269,
	"./ml.js": 269,
	"./mr": 270,
	"./mr.js": 270,
	"./ms": 271,
	"./ms-my": 272,
	"./ms-my.js": 272,
	"./ms.js": 271,
	"./mt": 273,
	"./mt.js": 273,
	"./my": 274,
	"./my.js": 274,
	"./nb": 275,
	"./nb.js": 275,
	"./ne": 276,
	"./ne.js": 276,
	"./nl": 277,
	"./nl-be": 278,
	"./nl-be.js": 278,
	"./nl.js": 277,
	"./nn": 279,
	"./nn.js": 279,
	"./pa-in": 280,
	"./pa-in.js": 280,
	"./pl": 281,
	"./pl.js": 281,
	"./pt": 282,
	"./pt-br": 283,
	"./pt-br.js": 283,
	"./pt.js": 282,
	"./ro": 284,
	"./ro.js": 284,
	"./ru": 285,
	"./ru.js": 285,
	"./sd": 286,
	"./sd.js": 286,
	"./se": 287,
	"./se.js": 287,
	"./si": 288,
	"./si.js": 288,
	"./sk": 289,
	"./sk.js": 289,
	"./sl": 290,
	"./sl.js": 290,
	"./sq": 291,
	"./sq.js": 291,
	"./sr": 292,
	"./sr-cyrl": 293,
	"./sr-cyrl.js": 293,
	"./sr.js": 292,
	"./ss": 294,
	"./ss.js": 294,
	"./sv": 295,
	"./sv.js": 295,
	"./sw": 296,
	"./sw.js": 296,
	"./ta": 297,
	"./ta.js": 297,
	"./te": 298,
	"./te.js": 298,
	"./tet": 299,
	"./tet.js": 299,
	"./tg": 300,
	"./tg.js": 300,
	"./th": 301,
	"./th.js": 301,
	"./tl-ph": 302,
	"./tl-ph.js": 302,
	"./tlh": 303,
	"./tlh.js": 303,
	"./tr": 304,
	"./tr.js": 304,
	"./tzl": 305,
	"./tzl.js": 305,
	"./tzm": 306,
	"./tzm-latn": 307,
	"./tzm-latn.js": 307,
	"./tzm.js": 306,
	"./ug-cn": 308,
	"./ug-cn.js": 308,
	"./uk": 309,
	"./uk.js": 309,
	"./ur": 310,
	"./ur.js": 310,
	"./uz": 311,
	"./uz-latn": 312,
	"./uz-latn.js": 312,
	"./uz.js": 311,
	"./vi": 313,
	"./vi.js": 313,
	"./x-pseudo": 314,
	"./x-pseudo.js": 314,
	"./yo": 315,
	"./yo.js": 315,
	"./zh-cn": 316,
	"./zh-cn.js": 316,
	"./zh-hk": 317,
	"./zh-hk.js": 317,
	"./zh-tw": 318,
	"./zh-tw.js": 318
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 396;

/***/ })

},[319]);
//# sourceMappingURL=main.js.map