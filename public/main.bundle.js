webpackJsonp([1,5],{

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.authenticateUser = function (user) {
        console.log(user);
        if (user.username == 'provider' && user.password == 'pass@123') {
            return this.http.get('./assets/data/provider.json')
                .map(function (res) { return res.json(); });
        }
        else if (user.username == 'facilitator' && user.password == 'pass@123') {
            return this.http.get('./assets/data/faciliator.json')
                .map(function (res) { return res.json(); });
        }
        else if (user.username == 'supplier' && user.password == 'pass@123') {
            return this.http.get('./assets/data/supplier.json')
                .map(function (res) { return res.json(); });
        }
        else {
            return this.http.get('./assets/data/error.json')
                .map(function (res) { return res.json(); });
        }
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.deviceList = function () {
        return this.http.get('assets/data/devices.json')
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 207;


/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(256);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.title = 'app works!';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        $.widget.bridge('uibutton', $.ui.button);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(406),
        styles: [__webpack_require__(371)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_sidebar_sidebar_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_right_sidebar_right_sidebar_component__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_devices_devices_component__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_users_users_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_reports_reports_component__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_facilities_facilities_component__ = __webpack_require__(245);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'devices', component: __WEBPACK_IMPORTED_MODULE_18__components_devices_devices_component__["a" /* DevicesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_19__components_users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_20__components_reports_reports_component__["a" /* ReportsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'facilities', component: __WEBPACK_IMPORTED_MODULE_21__components_facilities_facilities_component__["a" /* FacilitiesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */] },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_right_sidebar_right_sidebar_component__["a" /* RightSidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_devices_devices_component__["a" /* DevicesComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_reports_reports_component__["a" /* ReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_facilities_facilities_component__["a" /* FacilitiesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(407),
        styles: [__webpack_require__(372)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DevicesComponent = (function () {
    function DevicesComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    DevicesComponent.prototype.ngOnInit = function () {
        this.devices = [{
                "success": true,
                "responseContent": [
                    {
                        "contact": "9826012461",
                        "patient_gender": "M",
                        "device_udi": "28-051691b6b4ff",
                        "is_available": true,
                        "device_name": "Temperature_Sensor",
                        "supplier_username": "saurav",
                        "supplier_email": "saurav.kumar@impetus.co.in",
                        "supplier_city": "India",
                        "supplier_contact": "8447541999",
                        "device_state": true,
                        "device_type": "IOT",
                    }
                ],
                "responseCode": 1000,
                "status": 200,
                "errorCode": null,
                "errorMessage": null
            },
            {
                "success": true,
                "responseContent": [
                    {
                        "contact": "9826012461",
                        "patient_gender": "M",
                        "device_udi": "HDXMIA",
                        "is_available": true,
                        "device_name": "Zephyr",
                        "supplier_username": "Vinit",
                        "supplier_email": "vinit@impetus.co.in",
                        "supplier_city": "India",
                        "supplier_contact": "8447458999",
                        "device_state": false,
                        "device_type": "IOT",
                    }
                ],
                "responseCode": 1000,
                "status": 200,
                "errorCode": null,
                "errorMessage": null
            },
            {
                "success": true,
                "responseContent": [
                    {
                        "contact": "9826012461",
                        "patient_gender": "M",
                        "device_udi": "29-232ASX",
                        "is_available": true,
                        "device_name": "BP",
                        "supplier_username": "tarun",
                        "supplier_email": "taruna@impetus.co.in",
                        "supplier_city": "India",
                        "supplier_contact": "8478441999",
                        "device_state": true,
                        "device_type": "IOT",
                    }
                ],
                "responseCode": 1000,
                "status": 200,
                "errorCode": null,
                "errorMessage": null
            },
            {
                "success": true,
                "responseContent": [
                    {
                        "contact": "9826012461",
                        "patient_gender": "M",
                        "device_udi": "HDXMIA",
                        "is_available": true,
                        "device_name": "Zephyr",
                        "supplier_username": "Vinit",
                        "supplier_email": "vinit@impetus.co.in",
                        "supplier_city": "India",
                        "supplier_contact": "8447458999",
                        "device_state": false,
                        "device_type": "IOT",
                    }
                ],
                "responseCode": 1000,
                "status": 200,
                "errorCode": null,
                "errorMessage": null
            },
            {
                "success": true,
                "responseContent": [
                    {
                        "contact": "9826012461",
                        "patient_gender": "M",
                        "device_udi": "29-232ASX",
                        "is_available": true,
                        "device_name": "BP",
                        "supplier_username": "tarun",
                        "supplier_email": "taruna@impetus.co.in",
                        "supplier_city": "India",
                        "supplier_contact": "8478441999",
                        "device_state": true,
                        "device_type": "IOT",
                    }
                ],
                "responseCode": 1000,
                "status": 200,
                "errorCode": null,
                "errorMessage": null
            }, {
                "success": true,
                "responseContent": [
                    {
                        "contact": "9826012461",
                        "patient_gender": "M",
                        "device_udi": "HDXMIA",
                        "is_available": true,
                        "device_name": "Zephyr",
                        "supplier_username": "Vinit",
                        "supplier_email": "vinit@impetus.co.in",
                        "supplier_city": "India",
                        "supplier_contact": "8447458999",
                        "device_state": false,
                        "device_type": "IOT",
                    }
                ],
                "responseCode": 1000,
                "status": 200,
                "errorCode": null,
                "errorMessage": null
            },
            {
                "success": true,
                "responseContent": [
                    {
                        "contact": "9826012461",
                        "patient_gender": "M",
                        "device_udi": "29-232ASX",
                        "is_available": true,
                        "device_name": "BP",
                        "supplier_username": "tarun",
                        "supplier_email": "taruna@impetus.co.in",
                        "supplier_city": "India",
                        "supplier_contact": "8478441999",
                        "device_state": true,
                        "device_type": "IOT",
                    }
                ],
                "responseCode": 1000,
                "status": 200,
                "errorCode": null,
                "errorMessage": null
            }, {
                "success": true,
                "responseContent": [
                    {
                        "contact": "9826012461",
                        "patient_gender": "M",
                        "device_udi": "28-051691b6b4ff",
                        "is_available": true,
                        "device_name": "Temperature_Sensor",
                        "supplier_username": "saurav",
                        "supplier_email": "saurav.kumar@impetus.co.in",
                        "supplier_city": "India",
                        "supplier_contact": "8447541999",
                        "device_state": true,
                        "device_type": "IOT",
                    }
                ],
                "responseCode": 1000,
                "status": 200,
                "errorCode": null,
                "errorMessage": null
            },
            {
                "success": true,
                "responseContent": [
                    {
                        "contact": "9826012461",
                        "patient_gender": "M",
                        "device_udi": "HDXMIA",
                        "is_available": true,
                        "device_name": "Zephyr",
                        "supplier_username": "Vinit",
                        "supplier_email": "vinit@impetus.co.in",
                        "supplier_city": "India",
                        "supplier_contact": "8447458999",
                        "device_state": false,
                        "device_type": "IOT",
                    }
                ],
                "responseCode": 1000,
                "status": 200,
                "errorCode": null,
                "errorMessage": null
            }];
        /*     this.device = this.authService.deviceList(); */
        console.log(this.devices[0].responseContent[0].device_name);
    };
    return DevicesComponent;
}());
DevicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-devices',
        template: __webpack_require__(408),
        styles: [__webpack_require__(373)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], DevicesComponent);

var _a, _b, _c;
//# sourceMappingURL=devices.component.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacilitiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FacilitiesComponent = (function () {
    function FacilitiesComponent() {
    }
    FacilitiesComponent.prototype.ngOnInit = function () {
    };
    return FacilitiesComponent;
}());
FacilitiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-facilities',
        template: __webpack_require__(409),
        styles: [__webpack_require__(374)]
    }),
    __metadata("design:paramtypes", [])
], FacilitiesComponent);

//# sourceMappingURL=facilities.component.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooterComponent = (function () {
    function FooterComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(410),
        styles: [__webpack_require__(375)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], FooterComponent);

var _a, _b, _c;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(411),
        styles: [__webpack_require__(376)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(412),
        styles: [__webpack_require__(377)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user)
            .subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show("You are now logged in", { cssClass: 'alert alert-success', timeout: 5000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'alert alert-danger', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(413),
        styles: [__webpack_require__(378)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log("profile->", this.user);
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(414),
        styles: [__webpack_require__(379)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = (function () {
    function ReportsComponent() {
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
        this.pieChartType = 'pie';
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        // bar chart
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
        ];
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent.prototype.lineRandomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    ReportsComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ReportsComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ReportsComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40
        ];
        var clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reports',
        template: __webpack_require__(415),
        styles: [__webpack_require__(380)]
    }),
    __metadata("design:paramtypes", [])
], ReportsComponent);

//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightSidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RightSidebarComponent = (function () {
    function RightSidebarComponent() {
    }
    RightSidebarComponent.prototype.ngOnInit = function () {
    };
    return RightSidebarComponent;
}());
RightSidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-right-sidebar',
        template: __webpack_require__(416),
        styles: [__webpack_require__(381)]
    }),
    __metadata("design:paramtypes", [])
], RightSidebarComponent);

//# sourceMappingURL=right-sidebar.component.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidebarComponent = (function () {
    function SidebarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user);
    };
    SidebarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show("You are logged out", {
            cssClass: "alert alert-success",
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(417),
        styles: [__webpack_require__(382)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], SidebarComponent);

var _a, _b, _c;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__(418),
        styles: [__webpack_require__(383)]
    }),
    __metadata("design:paramtypes", [])
], UsersComponent);

//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".emg_alt {\r\n    color: red!important;\r\n    font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".loginfooter{\r\n     margin-left: 0px!important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".logo-lg img {\r\n    width: 179px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".content-wrapper, .right-side, .main-footer{\r\n     margin-left: 0px!important;\r\n}\r\n#regContainer{\r\n    margin-top: 10%;\r\n}\r\nbody {\r\n    padding-top: 90px;\r\n}\r\n.panel-login {\r\n\tborder-color: #ccc;\r\n\tbox-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\r\n}\r\n.panel-login>.panel-heading {\r\n\tcolor: #00415d;\r\n\tbackground-color: #fff;\r\n\tborder-color: #fff;\r\n\ttext-align:center;\r\n}\r\n.panel-login>.panel-heading a{\r\n\ttext-decoration: none;\r\n\tcolor: #666;\r\n\tfont-weight: bold;\r\n\tfont-size: 15px;\r\n\ttransition: all 0.1s linear;\r\n}\r\n.panel-login>.panel-heading a.active{\r\n\tcolor: #029f5b;\r\n\tfont-size: 18px;\r\n}\r\n.panel-login>.panel-heading hr{\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 0px;\r\n\tclear: both;\r\n\tborder: 0;\r\n\theight: 1px;\r\n\tbackground-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\r\n}\r\n.panel-login input[type=\"text\"],.panel-login input[type=\"email\"],.panel-login input[type=\"password\"] {\r\n\theight: 45px;\r\n\tborder: 1px solid #ddd;\r\n\tfont-size: 16px;\r\n\ttransition: all 0.1s linear;\r\n}\r\n.panel-login input:hover,\r\n.panel-login input:focus {\r\n\toutline:none;\r\n\tbox-shadow: none;\r\n\tborder-color: #ccc;\r\n}\r\n.btn-login {\r\n\tbackground-color: #59B2E0;\r\n\toutline: none;\r\n\tcolor: #fff;\r\n\tfont-size: 14px;\r\n\theight: auto;\r\n\tfont-weight: normal;\r\n\tpadding: 14px 0;\r\n\ttext-transform: uppercase;\r\n\tborder-color: #59B2E6;\r\n}\r\n.btn-login:hover,\r\n.btn-login:focus {\r\n\tcolor: #fff;\r\n\tbackground-color: #53A3CD;\r\n\tborder-color: #53A3CD;\r\n}\r\n.forgot-password {\r\n\ttext-decoration: underline;\r\n\tcolor: #888;\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:focus {\r\n\ttext-decoration: underline;\r\n\tcolor: #666;\r\n}\r\n\r\n.btn-register {\r\n\tbackground-color: #1CB94E;\r\n\toutline: none;\r\n\tcolor: #fff;\r\n\tfont-size: 14px;\r\n\theight: auto;\r\n\tfont-weight: normal;\r\n\tpadding: 14px 0;\r\n\ttext-transform: uppercase;\r\n\tborder-color: #1CB94A;\r\n}\r\n.btn-register:hover,\r\n.btn-register:focus {\r\n\tcolor: #fff;\r\n\tbackground-color: #1CA347;\r\n\tborder-color: #1CA347;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 82,
	"./af.js": 82,
	"./ar": 89,
	"./ar-dz": 83,
	"./ar-dz.js": 83,
	"./ar-kw": 84,
	"./ar-kw.js": 84,
	"./ar-ly": 85,
	"./ar-ly.js": 85,
	"./ar-ma": 86,
	"./ar-ma.js": 86,
	"./ar-sa": 87,
	"./ar-sa.js": 87,
	"./ar-tn": 88,
	"./ar-tn.js": 88,
	"./ar.js": 89,
	"./az": 90,
	"./az.js": 90,
	"./be": 91,
	"./be.js": 91,
	"./bg": 92,
	"./bg.js": 92,
	"./bn": 93,
	"./bn.js": 93,
	"./bo": 94,
	"./bo.js": 94,
	"./br": 95,
	"./br.js": 95,
	"./bs": 96,
	"./bs.js": 96,
	"./ca": 97,
	"./ca.js": 97,
	"./cs": 98,
	"./cs.js": 98,
	"./cv": 99,
	"./cv.js": 99,
	"./cy": 100,
	"./cy.js": 100,
	"./da": 101,
	"./da.js": 101,
	"./de": 104,
	"./de-at": 102,
	"./de-at.js": 102,
	"./de-ch": 103,
	"./de-ch.js": 103,
	"./de.js": 104,
	"./dv": 105,
	"./dv.js": 105,
	"./el": 106,
	"./el.js": 106,
	"./en-au": 107,
	"./en-au.js": 107,
	"./en-ca": 108,
	"./en-ca.js": 108,
	"./en-gb": 109,
	"./en-gb.js": 109,
	"./en-ie": 110,
	"./en-ie.js": 110,
	"./en-nz": 111,
	"./en-nz.js": 111,
	"./eo": 112,
	"./eo.js": 112,
	"./es": 114,
	"./es-do": 113,
	"./es-do.js": 113,
	"./es.js": 114,
	"./et": 115,
	"./et.js": 115,
	"./eu": 116,
	"./eu.js": 116,
	"./fa": 117,
	"./fa.js": 117,
	"./fi": 118,
	"./fi.js": 118,
	"./fo": 119,
	"./fo.js": 119,
	"./fr": 122,
	"./fr-ca": 120,
	"./fr-ca.js": 120,
	"./fr-ch": 121,
	"./fr-ch.js": 121,
	"./fr.js": 122,
	"./fy": 123,
	"./fy.js": 123,
	"./gd": 124,
	"./gd.js": 124,
	"./gl": 125,
	"./gl.js": 125,
	"./gom-latn": 126,
	"./gom-latn.js": 126,
	"./he": 127,
	"./he.js": 127,
	"./hi": 128,
	"./hi.js": 128,
	"./hr": 129,
	"./hr.js": 129,
	"./hu": 130,
	"./hu.js": 130,
	"./hy-am": 131,
	"./hy-am.js": 131,
	"./id": 132,
	"./id.js": 132,
	"./is": 133,
	"./is.js": 133,
	"./it": 134,
	"./it.js": 134,
	"./ja": 135,
	"./ja.js": 135,
	"./jv": 136,
	"./jv.js": 136,
	"./ka": 137,
	"./ka.js": 137,
	"./kk": 138,
	"./kk.js": 138,
	"./km": 139,
	"./km.js": 139,
	"./kn": 140,
	"./kn.js": 140,
	"./ko": 141,
	"./ko.js": 141,
	"./ky": 142,
	"./ky.js": 142,
	"./lb": 143,
	"./lb.js": 143,
	"./lo": 144,
	"./lo.js": 144,
	"./lt": 145,
	"./lt.js": 145,
	"./lv": 146,
	"./lv.js": 146,
	"./me": 147,
	"./me.js": 147,
	"./mi": 148,
	"./mi.js": 148,
	"./mk": 149,
	"./mk.js": 149,
	"./ml": 150,
	"./ml.js": 150,
	"./mr": 151,
	"./mr.js": 151,
	"./ms": 153,
	"./ms-my": 152,
	"./ms-my.js": 152,
	"./ms.js": 153,
	"./my": 154,
	"./my.js": 154,
	"./nb": 155,
	"./nb.js": 155,
	"./ne": 156,
	"./ne.js": 156,
	"./nl": 158,
	"./nl-be": 157,
	"./nl-be.js": 157,
	"./nl.js": 158,
	"./nn": 159,
	"./nn.js": 159,
	"./pa-in": 160,
	"./pa-in.js": 160,
	"./pl": 161,
	"./pl.js": 161,
	"./pt": 163,
	"./pt-br": 162,
	"./pt-br.js": 162,
	"./pt.js": 163,
	"./ro": 164,
	"./ro.js": 164,
	"./ru": 165,
	"./ru.js": 165,
	"./sd": 166,
	"./sd.js": 166,
	"./se": 167,
	"./se.js": 167,
	"./si": 168,
	"./si.js": 168,
	"./sk": 169,
	"./sk.js": 169,
	"./sl": 170,
	"./sl.js": 170,
	"./sq": 171,
	"./sq.js": 171,
	"./sr": 173,
	"./sr-cyrl": 172,
	"./sr-cyrl.js": 172,
	"./sr.js": 173,
	"./ss": 174,
	"./ss.js": 174,
	"./sv": 175,
	"./sv.js": 175,
	"./sw": 176,
	"./sw.js": 176,
	"./ta": 177,
	"./ta.js": 177,
	"./te": 178,
	"./te.js": 178,
	"./tet": 179,
	"./tet.js": 179,
	"./th": 180,
	"./th.js": 180,
	"./tl-ph": 181,
	"./tl-ph.js": 181,
	"./tlh": 182,
	"./tlh.js": 182,
	"./tr": 183,
	"./tr.js": 183,
	"./tzl": 184,
	"./tzl.js": 184,
	"./tzm": 186,
	"./tzm-latn": 185,
	"./tzm-latn.js": 185,
	"./tzm.js": 186,
	"./uk": 187,
	"./uk.js": 187,
	"./ur": 188,
	"./ur.js": 188,
	"./uz": 190,
	"./uz-latn": 189,
	"./uz-latn.js": 189,
	"./uz.js": 190,
	"./vi": 191,
	"./vi.js": 191,
	"./x-pseudo": 192,
	"./x-pseudo.js": 192,
	"./yo": 193,
	"./yo.js": 193,
	"./zh-cn": 194,
	"./zh-cn.js": 194,
	"./zh-hk": 195,
	"./zh-hk.js": 195,
	"./zh-tw": 196,
	"./zh-tw.js": 196
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 385;


/***/ }),

/***/ 406:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <app-header *ngIf=\"authService.loggedIn()\"></app-header>\n\n  <!-- Left side column. contains the logo and sidebar -->\n  <app-sidebar *ngIf=\"authService.loggedIn()\"></app-sidebar>\n\n        <!-- Dashboard content -->\n     <div class=\"container-fluid row flashmsg\" [class.aftrlgn]=\"authService.loggedIn()\">\n          <flash-messages></flash-messages>\n     </div>\n     <router-outlet></router-outlet>\n  <!-- /.content-wrapper -->\n  <app-footer *ngIf=\"authService.loggedIn()\"></app-footer>\n\n  <!-- Control Sidebar -->\n  <app-right-sidebar></app-right-sidebar>\n  <!-- /.control-sidebar -->\n  <!-- Add the sidebar's background. This div must be placed\n       immediately after the control sidebar -->\n</div>\n"

/***/ }),

/***/ 407:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n   <h1>\n      Dashboard\n      <small>Control panel</small>\n   </h1>\n   <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n      <li class=\"active\">Dashboard</li>\n   </ol>\n  </section>\n     <!-- Main content -->\n     <section class=\"content\">\n\n   <!-- Small boxes (Stat box) -->\n   <div class=\"row\">\n      <div class=\"col-lg-3 col-xs-6\">\n        <!-- small box -->\n        <div class=\"small-box bg-aqua\">\n          <div class=\"inner\">\n            <h3>150</h3>\n\n            <p>Active Users</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-person\"></i>\n          </div>\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n      <div class=\"col-lg-3 col-xs-6\">\n        <!-- small box -->\n        <div class=\"small-box bg-green\">\n          <div class=\"inner\">\n            <h3>553</h3>\n\n            <p>Total Devices</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-android-watch\"></i>\n          </div>\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n      <div class=\"col-lg-3 col-xs-6\">\n        <!-- small box -->\n        <div class=\"small-box bg-yellow\">\n          <div class=\"inner\">\n            <h3>344</h3>\n\n            <p>Total Users</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-person-add\"></i>\n          </div>\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n      <div class=\"col-lg-3 col-xs-6\">\n        <!-- small box -->\n        <div class=\"small-box bg-red\">\n          <div class=\"inner\">\n            <h3>65</h3>\n\n            <p>Emergency Alerts</p>\n          </div>\n          <div class=\"icon\">\n            <i class=\"ion ion-pie-graph\"></i>\n          </div>\n          <a href=\"#\" class=\"small-box-footer\">More info <i class=\"fa fa-arrow-circle-right\"></i></a>\n        </div>\n      </div>\n      <!-- ./col -->\n   </div>\n   <!-- /.row -->\n   <!-- Main row -->\n   <div class=\"row\">\n      <!-- Left col -->\n      <section class=\"col-lg-7 connectedSortable\">\n        <!-- Custom tabs (Charts with tabs)-->\n        <!-- /.nav-tabs-custom -->\n\n        <!-- Chat box -->\n        <div class=\"box box-success\">\n          <div class=\"box-header\">\n            <i class=\"fa fa-comments-o\"></i>\n\n            <h3 class=\"box-title\">Chat with users</h3>\n\n            <div class=\"box-tools pull-right\" data-toggle=\"tooltip\" title=\"Status\">\n              <div class=\"btn-group\" data-toggle=\"btn-toggle\">\n                <button type=\"button\" class=\"btn btn-default btn-sm active\"><i class=\"fa fa-square text-green\"></i>\n                </button>\n                <button type=\"button\" class=\"btn btn-default btn-sm\"><i class=\"fa fa-square text-red\"></i></button>\n              </div>\n            </div>\n          </div>\n          <div class=\"box-body chat\" id=\"chat-box\">\n            <!-- chat item -->\n            <div class=\"item\">\n              <img src=\"./assets/img/user4-128x128.jpg\" alt=\"user image\" class=\"online\">\n\n              <p class=\"message\">\n                <a href=\"#\" class=\"name\">\n                  <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 2:15</small>\n                  Mike Doe\n                </a>\n                I would like to meet you to discuss the latest news about\n                the arrival of the new theme. They say it is going to be one the\n                best themes on the market\n              </p>\n              <div class=\"attachment\">\n                <h4>Attachments:</h4>\n\n                <p class=\"filename\">\n                  Theme-thumbnail-image.jpg\n                </p>\n\n                <div class=\"pull-right\">\n                  <button type=\"button\" class=\"btn btn-primary btn-sm btn-flat\">Open</button>\n                </div>\n              </div>\n              <!-- /.attachment -->\n            </div>\n            <!-- /.item -->\n            <!-- chat item -->\n            <div class=\"item\">\n              <img src=\"./assets/img/user3-128x128.jpg\" alt=\"user image\" class=\"offline\">\n\n              <p class=\"message\">\n                <a href=\"#\" class=\"name\">\n                  <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 5:15</small>\n                  Alexander Pierce\n                </a>\n                I would like to meet you to discuss the latest news about\n                the arrival of the new theme. They say it is going to be one the\n                best themes on the market\n              </p>\n            </div>\n            <!-- /.item -->\n            <!-- chat item -->\n            <div class=\"item\">\n              <img src=\"./assets/img/user2-160x160.jpg\" alt=\"user image\" class=\"offline\">\n\n              <p class=\"message\">\n                <a href=\"#\" class=\"name\">\n                  <small class=\"text-muted pull-right\"><i class=\"fa fa-clock-o\"></i> 5:30</small>\n                  Susan Doe\n                </a>\n                I would like to meet you to discuss the latest news about\n                the arrival of the new theme. They say it is going to be one the\n                best themes on the market\n              </p>\n            </div>\n            <!-- /.item -->\n          </div>\n          <!-- /.chat -->\n          <div class=\"box-footer\">\n            <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"Type message...\">\n\n              <div class=\"input-group-btn\">\n                <button type=\"button\" class=\"btn btn-success\"><i class=\"fa fa-plus\"></i></button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- /.box (chat box) -->\n\n        <!-- TO DO List -->\n        <div class=\"box box-primary\">\n          <div class=\"box-header\">\n            <i class=\"ion ion-clipboard\"></i>\n\n            <h3 class=\"box-title emg_alt\">Emergency Alerts</h3>\n\n            <div class=\"box-tools pull-right\">\n              <ul class=\"pagination pagination-sm inline\">\n                <li><a href=\"#\">&laquo;</a></li>\n                <li><a href=\"#\">1</a></li>\n                <li><a href=\"#\">2</a></li>\n                <li><a href=\"#\">3</a></li>\n                <li><a href=\"#\">&raquo;</a></li>\n              </ul>\n            </div>\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body\">\n            <ul class=\"todo-list\">\n              <li>\n                <!-- drag handle -->\n                    <span class=\"handle\">\n                     <i class=\"fa fa-ellipsis-v\"></i>\n                     <i class=\"fa fa-ellipsis-v\"></i>\n                    </span>\n                <!-- checkbox -->\n                <input type=\"checkbox\" value=\"\">\n                <!-- todo text -->\n                <span class=\"text\">Design a nice theme</span>\n                <!-- Emphasis label -->\n                <small class=\"label label-danger\"><i class=\"fa fa-clock-o\"></i> 2 mins</small>\n                <!-- General tools such as edit or delete-->\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                    <span class=\"handle\">\n                     <i class=\"fa fa-ellipsis-v\"></i>\n                     <i class=\"fa fa-ellipsis-v\"></i>\n                    </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Make the theme responsive</span>\n                <small class=\"label label-info\"><i class=\"fa fa-clock-o\"></i> 4 hours</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                    <span class=\"handle\">\n                     <i class=\"fa fa-ellipsis-v\"></i>\n                     <i class=\"fa fa-ellipsis-v\"></i>\n                    </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Let theme shine like a star</span>\n                <small class=\"label label-warning\"><i class=\"fa fa-clock-o\"></i> 1 day</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                    <span class=\"handle\">\n                     <i class=\"fa fa-ellipsis-v\"></i>\n                     <i class=\"fa fa-ellipsis-v\"></i>\n                    </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Let theme shine like a star</span>\n                <small class=\"label label-success\"><i class=\"fa fa-clock-o\"></i> 3 days</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                    <span class=\"handle\">\n                     <i class=\"fa fa-ellipsis-v\"></i>\n                     <i class=\"fa fa-ellipsis-v\"></i>\n                    </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Check your messages and notifications</span>\n                <small class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> 1 week</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n              <li>\n                    <span class=\"handle\">\n                     <i class=\"fa fa-ellipsis-v\"></i>\n                     <i class=\"fa fa-ellipsis-v\"></i>\n                    </span>\n                <input type=\"checkbox\" value=\"\">\n                <span class=\"text\">Let theme shine like a star</span>\n                <small class=\"label label-default\"><i class=\"fa fa-clock-o\"></i> 1 month</small>\n                <div class=\"tools\">\n                  <i class=\"fa fa-edit\"></i>\n                  <i class=\"fa fa-trash-o\"></i>\n                </div>\n              </li>\n            </ul>\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer clearfix no-border\">\n            <button type=\"button\" class=\"btn btn-default pull-right\"><i class=\"fa fa-plus\"></i> Add item</button>\n          </div>\n        </div>\n        <!-- /.box -->\n\n        <!-- quick email widget -->\n        <div class=\"box box-info\">\n          <div class=\"box-header\">\n            <i class=\"fa fa-envelope\"></i>\n\n            <h3 class=\"box-title\">Quick Email</h3>\n            <!-- tools box -->\n            <div class=\"pull-right box-tools\">\n              <button type=\"button\" class=\"btn btn-info btn-sm\" data-widget=\"remove\" data-toggle=\"tooltip\" title=\"Remove\">\n                <i class=\"fa fa-times\"></i></button>\n            </div>\n            <!-- /. tools -->\n          </div>\n          <div class=\"box-body\">\n            <form action=\"#\" method=\"post\">\n              <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" name=\"emailto\" placeholder=\"Email to:\">\n              </div>\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" name=\"subject\" placeholder=\"Subject\">\n              </div>\n              <div>\n                <textarea class=\"textarea\" placeholder=\"Message\" style=\"width: 100%; height: 125px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;\"></textarea>\n              </div>\n            </form>\n          </div>\n          <div class=\"box-footer clearfix\">\n            <button type=\"button\" class=\"pull-right btn btn-default\" id=\"sendEmail\">Send\n              <i class=\"fa fa-arrow-circle-right\"></i></button>\n          </div>\n        </div>\n\n      </section>\n      <!-- /.Left col -->\n      <!-- right col (We are only adding the ID to make the widgets sortable)-->\n      <section class=\"col-lg-5 connectedSortable\">\n\n        <!-- Map box -->\n        <div class=\"box box-solid bg-light-blue-gradient\">\n          <div class=\"box-header\">\n            <!-- tools box -->\n            <div class=\"pull-right box-tools\">\n              <button type=\"button\" class=\"btn btn-primary btn-sm daterange pull-right\" data-toggle=\"tooltip\" title=\"Date range\">\n                <i class=\"fa fa-calendar\"></i></button>\n              <button type=\"button\" class=\"btn btn-primary btn-sm pull-right\" data-widget=\"collapse\" data-toggle=\"tooltip\" title=\"Collapse\" style=\"margin-right: 5px;\">\n                <i class=\"fa fa-minus\"></i></button>\n            </div>\n            <!-- /. tools -->\n\n            <i class=\"fa fa-map-marker\"></i>\n\n            <h3 class=\"box-title\">\n              Visitors\n            </h3>\n          </div>\n          <div class=\"box-body\">\n            <div id=\"world-map\" style=\"height: 250px; width: 100%;\"></div>\n          </div>\n          <!-- /.box-body-->\n          <div class=\"box-footer no-border\">\n            <div class=\"row\">\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\n                <div id=\"sparkline-1\"></div>\n                <div class=\"knob-label\">Visitors</div>\n              </div>\n              <!-- ./col -->\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\n                <div id=\"sparkline-2\"></div>\n                <div class=\"knob-label\">Online</div>\n              </div>\n              <!-- ./col -->\n              <div class=\"col-xs-4 text-center\">\n                <div id=\"sparkline-3\"></div>\n                <div class=\"knob-label\">Exists</div>\n              </div>\n              <!-- ./col -->\n            </div>\n            <!-- /.row -->\n          </div>\n        </div>\n        <!-- /.box -->\n\n        <!-- solid sales graph -->\n        <div class=\"box box-solid bg-teal-gradient\">\n          <div class=\"box-header\">\n            <i class=\"fa fa-th\"></i>\n\n            <h3 class=\"box-title\">Sales Graph</h3>\n\n            <div class=\"box-tools pull-right\">\n              <button type=\"button\" class=\"btn bg-teal btn-sm\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n              </button>\n              <button type=\"button\" class=\"btn bg-teal btn-sm\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\n              </button>\n            </div>\n          </div>\n          <div class=\"box-body border-radius-none\">\n            <div class=\"chart\" id=\"line-chart\" style=\"height: 250px;\"></div>\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer no-border\">\n            <div class=\"row\">\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"20\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\n\n                <div class=\"knob-label\">Mail-Orders</div>\n              </div>\n              <!-- ./col -->\n              <div class=\"col-xs-4 text-center\" style=\"border-right: 1px solid #f4f4f4\">\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"50\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\n\n                <div class=\"knob-label\">Online</div>\n              </div>\n              <!-- ./col -->\n              <div class=\"col-xs-4 text-center\">\n                <input type=\"text\" class=\"knob\" data-readonly=\"true\" value=\"30\" data-width=\"60\" data-height=\"60\" data-fgColor=\"#39CCCC\">\n\n                <div class=\"knob-label\">In-Store</div>\n              </div>\n              <!-- ./col -->\n            </div>\n            <!-- /.row -->\n          </div>\n          <!-- /.box-footer -->\n        </div>\n        <!-- /.box -->\n\n        <!-- Calendar -->\n        <div class=\"box box-solid bg-green-gradient\">\n          <div class=\"box-header\">\n            <i class=\"fa fa-calendar\"></i>\n\n            <h3 class=\"box-title\">Calendar</h3>\n            <!-- tools box -->\n            <div class=\"pull-right box-tools\">\n              <!-- button with a dropdown -->\n              <div class=\"btn-group\">\n                <button type=\"button\" class=\"btn btn-success btn-sm dropdown-toggle\" data-toggle=\"dropdown\">\n                  <i class=\"fa fa-bars\"></i></button>\n                <ul class=\"dropdown-menu pull-right\" role=\"menu\">\n                  <li><a href=\"#\">Add new event</a></li>\n                  <li><a href=\"#\">Clear events</a></li>\n                  <li class=\"divider\"></li>\n                  <li><a href=\"#\">View calendar</a></li>\n                </ul>\n              </div>\n              <button type=\"button\" class=\"btn btn-success btn-sm\" data-widget=\"collapse\"><i class=\"fa fa-minus\"></i>\n              </button>\n              <button type=\"button\" class=\"btn btn-success btn-sm\" data-widget=\"remove\"><i class=\"fa fa-times\"></i>\n              </button>\n            </div>\n            <!-- /. tools -->\n          </div>\n          <!-- /.box-header -->\n          <div class=\"box-body no-padding\">\n            <!--The calendar -->\n            <div id=\"calendar\" style=\"width: 100%\"></div>\n          </div>\n          <!-- /.box-body -->\n          <div class=\"box-footer text-black\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <!-- Progress bars -->\n                <div class=\"clearfix\">\n                  <span class=\"pull-left\">Task #1</span>\n                  <small class=\"pull-right\">90%</small>\n                </div>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 90%;\"></div>\n                </div>\n\n                <div class=\"clearfix\">\n                  <span class=\"pull-left\">Task #2</span>\n                  <small class=\"pull-right\">70%</small>\n                </div>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 70%;\"></div>\n                </div>\n              </div>\n              <!-- /.col -->\n              <div class=\"col-sm-6\">\n                <div class=\"clearfix\">\n                  <span class=\"pull-left\">Task #3</span>\n                  <small class=\"pull-right\">60%</small>\n                </div>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 60%;\"></div>\n                </div>\n\n                <div class=\"clearfix\">\n                  <span class=\"pull-left\">Task #4</span>\n                  <small class=\"pull-right\">40%</small>\n                </div>\n                <div class=\"progress xs\">\n                  <div class=\"progress-bar progress-bar-green\" style=\"width: 40%;\"></div>\n                </div>\n              </div>\n              <!-- /.col -->\n            </div>\n            <!-- /.row -->\n          </div>\n        </div>\n        <!-- /.box -->\n\n      </section>\n      <!-- right col -->\n   </div>\n   <!-- /.row (main row) -->\n</section>\n</div>\n"

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <!-- Content Header (Page header) -->\n    <section class=\"content-header\">\n        <h1>\n                <span id=\"spa-title\">Devices</span>\n                <small>Control panel</small>\n        </h1>\n\n\n                <ol class=\"breadcrumb\">\n                <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n                <li class=\"active\" id=\"spa-title\">Devices</li>\n                </ol>\n    </section>\n\n    <!-- Main content -->\n    <section class=\"content\">\n            <div id=\"system-message-container\">\n\t</div>\n\n     <div>\n          <div>\n               <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12\">\n\n<!-- start -->\n<div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                         <h4 class=\"panel-title\">Device List</h4>\n                    </div>\n                    <div class=\"panel-body\">\n                         <div class=\"form-group\">\n                              <table class=\"table table-striped table-bordered\">\n                                  <thead>\n                                     <tr>\n                                          <th>Name</th>\n                                          <th>Type</th>\n                                          <th>UDI</th>\n                                          <th>Supplier Username</th>\n                                          <th>Supplier Contact</th>\n                                          <th>Supplier Email</th>\n                                          <th>Supplier City</th>\n                                          <th>Status</th>\n                                     </tr>\n                                  </thead>\n                                  <tbody>\n                                     <tr  *ngFor=\"let device of devices\">\n                                          <td>{{device.responseContent[0].device_name}}</td>\n                                          <td>{{device.responseContent[0].device_type}}</td>\n                                          <td>{{device.responseContent[0].device_udi}}</td>\n                                          <td>{{device.responseContent[0].supplier_username}}</td>\n                                          <td>{{device.responseContent[0].supplier_contact}}</td>\n                                          <td>{{device.responseContent[0].supplier_email}}</td>\n                                          <td>{{device.responseContent[0].supplier_city}}</td>\n                                          <td>{{ (device.responseContent[0].device_state==true?\"Enable\":\"Disable\")}}</td>\n                                     </tr>\n                                  </tbody>\n                              </table>\n\n                         </div>\n                    </div>\n</div>\n\n<!-- end -->\n\n\n\n                    </div>\n               </div>\n          </div>\n     </div>\n\n    </section>\n    <!-- /.content -->\n  </div>\n"

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <!-- Content Header (Page header) -->\n    <section class=\"content-header\">\n        <h1>\n                <span id=\"spa-title\">Facilitators</span>\n                <small>Control panel</small>\n        </h1>\n\n\n                <ol class=\"breadcrumb\">\n                <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n                <li class=\"active\" id=\"spa-title\">Facilitators</li>\n                </ol>\n    </section>\n\n    <!-- Main content -->\n    <section class=\"content\">\n            <div id=\"system-message-container\">\n\t</div>\n\n     <div>\n          <div>\n               <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12\">\n\n<!-- start -->\n<div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                         <h4 class=\"panel-title\">Facilitator List</h4>\n                    </div>\n                    <div class=\"panel-body\">\n                         <div class=\"form-group\">\n                              Coming Soon...\n\n                         </div>\n                    </div>\n</div>\n\n<!-- end -->\n\n\n\n                    </div>\n               </div>\n          </div>\n     </div>\n\n    </section>\n    <!-- /.content -->\n  </div>\n"

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\" *ngIf=\"authService.loggedIn()\">\n  <div class=\"pull-right hidden-xs\">\n   <b>Version</b> 2.3.8\n  </div>\n  <strong>Copyright &copy; 2017 Welloculus. All Rights Reserved.\nDeveloped by <a href=\"http://www.transility.com\">www.transility.com</a>.</strong> All rights\n  reserved.\n</footer>\n\n<footer class=\"main-footer loginfooter\" *ngIf=\"!authService.loggedIn()\">\n  <div class=\"pull-right hidden-xs\">\n   <b>Version</b> 2.3.8\n  </div>\n  <strong>Copyright &copy; 2017 Welloculus. All Rights Reserved.\nDeveloped by <a href=\"http://www.transility.com\">www.transility.com</a>.</strong> All rights\n  reserved.\n</footer>\n"

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n  <!-- Logo -->\n  <a href=\"#\" class=\"logo\">\n   <!-- mini logo for sidebar mini 50x50 pixels -->\n   <span class=\"logo-mini\">\n        <img src=\"./assets/img/logo/favicon.png\" alt=\"Welloculus-Admin\">\n   </span>\n   <!-- logo for regular state and mobile devices -->\n   <span class=\"logo-lg\">\n        <img src=\"./assets/img/logo/logo.png\" alt=\"Welloculus-Admin\">\n   </span>\n  </a>\n  <!-- Header Navbar: style can be found in header.less -->\n  <nav class=\"navbar navbar-static-top\">\n   <!-- Sidebar toggle button-->\n   <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n      <span class=\"sr-only\">Toggle navigation</span>\n   </a>\n\n   <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n        <!-- Messages: style can be found in dropdown.less-->\n        <li class=\"dropdown messages-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-envelope-o\"></i>\n            <span class=\"label label-success\">4</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 4 messages</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li><!-- start message -->\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                     <img src=\"./assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                     Support Team\n                     <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <!-- end message -->\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                     <img src=\"./assets/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                     AdminLTE Design Team\n                     <small><i class=\"fa fa-clock-o\"></i> 2 hours</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                     <img src=\"./assets/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                     Developers\n                     <small><i class=\"fa fa-clock-o\"></i> Today</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                     <img src=\"./assets/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                     Sales Department\n                     <small><i class=\"fa fa-clock-o\"></i> Yesterday</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                     <img src=\"./assets/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <h4>\n                     Reviewers\n                     <small><i class=\"fa fa-clock-o\"></i> 2 days</small>\n                    </h4>\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n          </ul>\n        </li>\n        <!-- Notifications: style can be found in dropdown.less -->\n        <li class=\"dropdown notifications-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-bell-o\"></i>\n            <span class=\"label label-warning\">10</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 10 notifications</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the\n                    page and may cause design problems\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-users text-red\"></i> 5 new members joined\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\n                  </a>\n                </li>\n                <li>\n                  <a href=\"#\">\n                    <i class=\"fa fa-user text-red\"></i> You changed your username\n                  </a>\n                </li>\n              </ul>\n            </li>\n            <li class=\"footer\"><a href=\"#\">View all</a></li>\n          </ul>\n        </li>\n        <!-- Tasks: style can be found in dropdown.less -->\n        <li class=\"dropdown tasks-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-flag-o\"></i>\n            <span class=\"label label-danger\">9</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 9 tasks</li>\n            <li>\n              <!-- inner menu: contains the actual data -->\n              <ul class=\"menu\">\n                <li><!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                     Design some buttons\n                     <small class=\"pull-right\">20%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                     <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">20% Complete</span>\n                     </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li><!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                     Create a nice theme\n                     <small class=\"pull-right\">40%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                     <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">40% Complete</span>\n                     </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li><!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                     Some task I need to do\n                     <small class=\"pull-right\">60%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                     <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">60% Complete</span>\n                     </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n                <li><!-- Task item -->\n                  <a href=\"#\">\n                    <h3>\n                     Make beautiful transitions\n                     <small class=\"pull-right\">80%</small>\n                    </h3>\n                    <div class=\"progress xs\">\n                     <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">80% Complete</span>\n                     </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n              </ul>\n            </li>\n            <li class=\"footer\">\n              <a href=\"#\">View all tasks</a>\n            </li>\n          </ul>\n        </li>\n        <!-- User Account: style can be found in dropdown.less -->\n        <li class=\"dropdown user user-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <img src=\"./assets/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n            <span class=\"hidden-xs\">{{user.name | uppercase}}</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <!-- User image -->\n            <li class=\"user-header\">\n              <img src=\"./assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n              <p>\n                {{user.name | uppercase}} - {{user.user_type}}\n                <!--<small>Member since Nov. 2012</small>-->\n              </p>\n            </li>\n            <!-- Menu Body -->\n            <li class=\"user-body\">\n              <div class=\"row\">\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Followers</a>\n                </div>\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Sales</a>\n                </div>\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Friends</a>\n                </div>\n              </div>\n              <!-- /.row -->\n            </li>\n            <!-- Menu Footer-->\n            <li class=\"user-footer\">\n              <div class=\"pull-left\">\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n              </div>\n              <div class=\"pull-right\">\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <!-- Control Sidebar Toggle Button -->\n        <li>\n          <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\n        </li>\n      </ul>\n   </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

module.exports = "<h1>home</h1>\n"

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

module.exports = " <div class=\"content-wrapper\">\n      <!-- Main content -->\n      <section class=\"content\">\n           <div id=\"regContainer\" class=\"container\">\n        <div class=\"row\">\n\t\t\t<div class=\"col-md-6 col-md-offset-3\">\n                    <h3>Welloculus cockpit Login!</h3>\n\t\t\t\t<div class=\"panel panel-login\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"active\" id=\"login-form-link\">Login</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t<form id=\"login-form\" (submit)=\"onLoginSubmit()\" role=\"form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"username\" id=\"username\" [(ngModel)]=\"username\"  tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"submit\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-login\" value=\"Log In\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n      </section>\n\n</div>\n"

/***/ }),

/***/ 414:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\" style=\"min-height: 595px;\">\n    <!-- Content Header (Page header) -->\n    <section class=\"content-header\">\n        <h1>\n                <span id=\"spa-title\">Profile</span>\n                <small>Control panel</small>\n        </h1>\n\n\n                <ol class=\"breadcrumb\">\n                <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n                <li class=\"active\" id=\"spa-title\">Profile</li>\n                </ol>\n    </section>\n\n    <!-- Main content -->\n    <section class=\"content\">\n            <div id=\"system-message-container\">\n\t</div>\n<!-- Small boxes (Stat box) -->\n<div ng-app=\"providerApp\" class=\"ng-scope\">\n<!-- ngView: undefined --><div class=\"container bootstrap snippets\">\n      <!-- ngIf: loading==true -->\n\n\n<div class=\"row\">\n     <div class=\"col-xs-12 col-sm-9\">\n          <form class=\"form-horizontal ng-pristine ng-valid\">\n               <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                         <h4 class=\"panel-title\">User info</h4>\n                    </div>\n                    <div class=\"panel-body\">\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">Location</label>\n                              <div class=\"col-sm-10\">\n                                   <select class=\"form-control\">\n                                        <option value=\"Select country\">Select country</option>\n                                        <option selected=\"\" value=\"India\">India</option>\n                                        <option value=\"US\">US</option>\n                                        <option value=\"Canda\">Canda</option>\n                                        <option value=\"Australia\">Australia</option>\n                                   </select>\n                              </div>\n                         </div>\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">Name</label>\n                              <div class=\"col-sm-10\"> <input type=\"text\" class=\"form-control\" name=\"name\" value=\"{{user.name}}\"></div>\n                         </div>\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">Username</label>\n                              <div class=\"col-sm-10\">\n                                   <input type=\"text\" class=\"form-control\" name=\"username\" disabled=\"\" value=\"{{user.user_type}}\">\n                              </div>\n                         </div>\n                    </div>\n               </div>\n               <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                         <h4 class=\"panel-title\">Contact info</h4>\n                    </div>\n                    <div class=\"panel-body\">\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">Work number</label>\n                              <div class=\"col-sm-10\">\n                                   <input type=\"tel\" class=\"form-control\">\n                              </div>\n                         </div>\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">Mobile number</label>\n                              <div class=\"col-sm-10\">\n                                   <input type=\"tel\" class=\"form-control\">\n                              </div>\n                         </div>\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">E-mail address</label>\n                              <div class=\"col-sm-10\">\n                                   <input type=\"email\" class=\"form-control\" value=\"provider@abc.com\">\n                              </div>\n                         </div>\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">Work address</label>\n                              <div class=\"col-sm-10\">\n                                   <textarea rows=\"3\" class=\"form-control\"></textarea>\n                              </div>\n                         </div>\n                    </div>\n               </div>\n               <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\"><h4 class=\"panel-title\">Security</h4></div>\n                    <div class=\"panel-body\">\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">Current password</label>\n                              <div class=\"col-sm-10\">\n                                   <input type=\"password\" class=\"form-control\">\n                              </div>\n                         </div>\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">New password</label>\n                              <div class=\"col-sm-10\">\n                                   <input type=\"password\" class=\"form-control\">\n                              </div>\n                         </div>\n                         <div class=\"form-group\">\n                              <div class=\"col-sm-10 col-sm-offset-2\">\n                                   <div class=\"checkbox\">\n                                        <input type=\"checkbox\" id=\"checkbox_1\">\n                                        <label for=\"checkbox_1\">Make this account public</label>\n                                   </div>\n                              </div>\n                         </div>\n                         <div class=\"form-group\">\n                              <div class=\"col-sm-10 col-sm-offset-2\">\n                                   <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                                   <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\n                              </div>\n                         </div>\n                    </div>\n               </div>\n          </form>\n     </div>\n     <div class=\"col-xs-12 col-sm-3\">\n          <div class=\"profile__contact-info\">\n               <div class=\"profile__contact-info-item\">\n                    <div class=\"profile__contact-info-icon\"> <i class=\"fa fa-comment\"></i></div>\n                    <div class=\"profile__contact-info-body\"><h5 class=\"profile__contact-info-heading\"> Quick tip</h5> You can change your password and update your profile directly here.</div>\n               </div>\n          </div>\n     </div>\n</div>\n\n\n</div>\n\n    <div class=\"container ng-scope\">\n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n        <div class=\"modal-dialog modal-sm\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n              <h4 class=\"modal-title\" id=\"pop-title\">Modal Header</h4>\n            </div>\n            <div class=\"modal-body\">\n              <p id=\"pop-body\">This is a small modal.</p>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-primary\" id=\"pop-proceed\" value=\"yes\">PROCEED</button>\n              <button type=\"button\" class=\"btn btn-default\" id=\"pop-cancel\" value=\"no\">CANCEL</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n</div>\n\n    </section>\n    <!-- /.content -->\n  </div>\n"

/***/ }),

/***/ 415:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n    <!-- Content Header (Page header) -->\n    <section class=\"content-header\">\n        <h1>\n                <span id=\"spa-title\">Reports</span>\n                <small>Control panel</small>\n        </h1>\n\n\n                <ol class=\"breadcrumb\">\n                <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n                <li class=\"active\" id=\"spa-title\">Reports</li>\n                </ol>\n    </section>\n\n    <!-- Main content -->\n    <section class=\"content\">\n            <div id=\"system-message-container\">\n\t</div>\n\n     <div>\n          <div>\n               <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12\">\n\n<!-- start -->\n<div>\n     <div class=\"col-md-5 panel panel-default\">\n          <div style=\"display: block\">\n            <canvas baseChart\n                    [data]=\"pieChartData\"\n                    [labels]=\"pieChartLabels\"\n                    [chartType]=\"pieChartType\"\n                    (chartHover)=\"chartHovered($event)\"\n                    (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n     </div>\n<div>\n     <div class=\"col-sm-offset-1 col-md-5 panel panel-default\">\n    <div style=\"display: block;\">\n    <canvas baseChart width=\"400\" height=\"400\"\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [legend]=\"lineChartLegend\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n  </div>\n</div>\n</div>\n<div>\n     <div class=\"col-md-6 panel panel-default\">\n     <div style=\"display: block\">\n         <canvas baseChart\n                 [datasets]=\"barChartData\"\n                 [labels]=\"barChartLabels\"\n                 [options]=\"barChartOptions\"\n                 [legend]=\"barChartLegend\"\n                 [chartType]=\"barChartType\"\n                 (chartHover)=\"chartHovered($event)\"\n                 (chartClick)=\"chartClicked($event)\"></canvas>\n       </div>\n </div>\n\n</div>\n<!-- end -->\n\n\n\n                    </div>\n               </div>\n          </div>\n     </div>\n\n    </section>\n    <!-- /.content -->\n  </div>\n"

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

module.exports = "<aside class=\"control-sidebar control-sidebar-dark\">\n  <!-- Create the tabs -->\n  <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n   <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n   <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\n  </ul>\n  <!-- Tab panes -->\n  <div class=\"tab-content\">\n   <!-- Home tab content -->\n   <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\n      <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n      <ul class=\"control-sidebar-menu\">\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\n            <div class=\"menu-info\">\n              <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\n              <p>Will be 23 on April 24th</p>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"menu-icon fa fa-user bg-yellow\"></i>\n\n            <div class=\"menu-info\">\n              <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\n\n              <p>New phone +1(800)555-1234</p>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\n\n            <div class=\"menu-info\">\n              <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\n\n              <p>nora@example.com</p>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\n\n            <div class=\"menu-info\">\n              <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\n\n              <p>Execution time 5 seconds</p>\n            </div>\n          </a>\n        </li>\n      </ul>\n      <!-- /.control-sidebar-menu -->\n\n      <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n      <ul class=\"control-sidebar-menu\">\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Custom Template Design\n              <span class=\"label label-danger pull-right\">70%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Update Resume\n              <span class=\"label label-success pull-right\">95%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Laravel Integration\n              <span class=\"label label-warning pull-right\">50%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Back End Framework\n              <span class=\"label label-primary pull-right\">68%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\n            </div>\n          </a>\n        </li>\n      </ul>\n      <!-- /.control-sidebar-menu -->\n\n   </div>\n   <!-- /.tab-pane -->\n   <!-- Stats tab content -->\n   <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\n   <!-- /.tab-pane -->\n   <!-- Settings tab content -->\n   <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n      <form method=\"post\">\n        <h3 class=\"control-sidebar-heading\">General Settings</h3>\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Report panel usage\n            <input type=\"checkbox\" class=\"pull-right\" checked>\n          </label>\n\n          <p>\n            Some information about this general settings option\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Allow mail redirect\n            <input type=\"checkbox\" class=\"pull-right\" checked>\n          </label>\n\n          <p>\n            Other sets of options are available\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Expose author name in posts\n            <input type=\"checkbox\" class=\"pull-right\" checked>\n          </label>\n\n          <p>\n            Allow the user to show his name in blog posts\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Show me as online\n            <input type=\"checkbox\" class=\"pull-right\" checked>\n          </label>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Turn off notifications\n            <input type=\"checkbox\" class=\"pull-right\">\n          </label>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Delete chat history\n            <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\n          </label>\n        </div>\n        <!-- /.form-group -->\n      </form>\n   </div>\n   <!-- /.tab-pane -->\n  </div>\n</aside>\n\n<div class=\"control-sidebar-bg\"></div>\n"

/***/ }),

/***/ 417:
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\n  <!-- sidebar: style can be found in sidebar.less -->\n  <section class=\"sidebar\">\n   <!-- Sidebar user panel -->\n   <div class=\"user-panel\">\n      <div class=\"pull-left image\">\n        <img src=\"./assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n      </div>\n      <div class=\"pull-left info\">\n        <p>{{ user.username | uppercase }}</p>\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online as a {{ user.user_type }}</a>\n      </div>\n   </div>\n   <!-- /.search form -->\n   <!-- sidebar menu: : style can be found in sidebar.less -->\n   <ul class=\"sidebar-menu\">\n      <li class=\"header\">MAIN NAVIGATION</li>\n      <li *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\"><i class=\"fa fa-dashboard\"></i> <span>Dashboard</span></a></li>\n      <li *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/devices']\"><i class=\"fa fa-tablet\"></i> <span>Devices</span></a></li>\n      <li *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/users']\"><i class=\"fa fa-users\"></i> <span>Users</span></a></li>\n      <li *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/facilities']\"><i class=\"fa fa-sitemap\"></i> <span>Facilities</span></a></li>\n      <li *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/reports']\"><i class=\"fa fa-line-chart\"></i> <span>Reports</span></a></li>\n      <li *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\"><i class=\"fa fa-user\"></i> <span>Profile</span></a></li>\n      <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\"><i class=\"fa fa-book\"></i> <span>Logout</span></a></li>\n      <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Login</a></li>\n   </ul>\n  </section>\n  <!-- /.sidebar -->\n</aside>\n"

/***/ }),

/***/ 418:
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n    <!-- Content Header (Page header) -->\r\n    <section class=\"content-header\">\r\n        <h1>\r\n                <span id=\"spa-title\">Users</span>\r\n                <small>Control panel</small>\r\n        </h1>\r\n\r\n\r\n                <ol class=\"breadcrumb\">\r\n                <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n                <li class=\"active\" id=\"spa-title\">Users</li>\r\n                </ol>\r\n    </section>\r\n\r\n    <!-- Main content -->\r\n    <section class=\"content\">\r\n            <div id=\"system-message-container\">\r\n\t</div>\r\n\r\n     <div>\r\n          <div>\r\n               <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-sm-12\">\r\n\r\n<!-- start -->\r\n<div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                         <h4 class=\"panel-title\">Users List</h4>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                         <div class=\"form-group\">\r\n                              <table class=\"table table-striped table-bordered\">\r\n                                  <thead>\r\n                                     <tr>\r\n                                          <th>Row</th>\r\n                                          <th>First Name</th>\r\n                                          <th>Last Name</th>\r\n                                          <th>Email</th>\r\n                                     </tr>\r\n                                  </thead>\r\n                                  <tbody>\r\n                                     <tr>\r\n                                          <td>1</td>\r\n                                          <td>John</td>\r\n                                          <td>Carter</td>\r\n                                          <td>johncarter@mail.com</td>\r\n                                     </tr>\r\n                                     <tr>\r\n                                          <td>2</td>\r\n                                          <td>Peter</td>\r\n                                          <td>Parker</td>\r\n                                          <td>peterparker@mail.com</td>\r\n                                     </tr>\r\n                                     <tr>\r\n                                          <td>3</td>\r\n                                          <td>John</td>\r\n                                          <td>Rambo</td>\r\n                                          <td>johnrambo@mail.com</td>\r\n                                     </tr>\r\n                                  </tbody>\r\n                              </table>\r\n\r\n                         </div>\r\n                    </div>\r\n</div>\r\n\r\n<!-- end -->\r\n\r\n\r\n\r\n                    </div>\r\n               </div>\r\n          </div>\r\n     </div>\r\n\r\n    </section>\r\n    <!-- /.content -->\r\n  </div>\r\n"

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(208);


/***/ })

},[462]);
//# sourceMappingURL=main.bundle.js.map