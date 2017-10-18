webpackJsonp([1,5],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config_app_config__ = __webpack_require__(78);
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
    function AuthService(http, config) {
        this.http = http;
        this.config = config;
        this.userdata = JSON.parse(localStorage.getItem('user'));
        this.host = config.getConfig('host');
        this.port = config.getConfig('port');
        this.auth_token = config.getConfig('auth_token');
        /*
               console.log("Host->"+this.host);
               console.log("Port->"+this.port);
               console.log("Auth_token->"+this.auth_token);
        */
    }
    AuthService.prototype.authenticateUser = function (user) {
        /*       console.log(user); */
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
    AuthService.prototype.getDeviceList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.auth_token);
        headers.append('userId', this.userdata.id);
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Credentials', 'true');
        return this.http.get('//' + this.host + ':' + this.port + '/ApiGateway/' + this.userdata.user_type + '/devices/getDevices', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getDeviceDetails = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.auth_token);
        headers.append('userId', this.userdata.id);
        headers.append('deviceId', id);
        return this.http.get('http://' + this.host + ':' + this.port + '/ApiGateway/' + this.userdata.user_type + '/devices/getDevices', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getPatientList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.auth_token);
        headers.append('userId', this.userdata.id);
        return this.http.get('http://' + this.host + ':' + this.port + '/ApiGateway/' + this.userdata.user_type + '/patients/getPatients', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getHeartBitList = function (filter_data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.auth_token);
        headers.append('userId', this.userdata.id);
        return this.http.post('http://' + this.host + ':' + this.port + '/ApiGateway/' + this.userdata.user_type + '/healthRecords/getHealthRecords', filter_data, { headers: headers })
            .map(function (res) { return res.json(); });
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__app_config_app_config__["a" /* AppConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_config_app_config__["a" /* AppConfig */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])();
var Globals = (function () {
    function Globals() {
        this.title = 'Dashboard';
        this.header = '';
    }
    return Globals;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 219;


/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(249);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(17);
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
        template: __webpack_require__(404),
        styles: [__webpack_require__(382)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_app_config__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_header_header_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_sidebar_sidebar_component__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_right_sidebar_right_sidebar_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_profile_profile_component__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_devices_devices_component__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_users_users_component__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_reports_reports_component__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_facilities_facilities_component__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_manage_alerts_manage_alerts_component__ = __webpack_require__(242);
/* unused harmony export configLoad */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_19__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'devices', component: __WEBPACK_IMPORTED_MODULE_20__components_devices_devices_component__["a" /* DevicesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_21__components_users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'reports', component: __WEBPACK_IMPORTED_MODULE_22__components_reports_reports_component__["a" /* ReportsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'facilities', component: __WEBPACK_IMPORTED_MODULE_23__components_facilities_facilities_component__["a" /* FacilitiesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'manage-alerts', component: __WEBPACK_IMPORTED_MODULE_24__components_manage_alerts_manage_alerts_component__["a" /* ManageAlertsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: '/dashboard', pathMatch: 'full' }
];
function configLoad(config) { return function () { return config.load(); }; }
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_right_sidebar_right_sidebar_component__["a" /* RightSidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_devices_devices_component__["a" /* DevicesComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_reports_reports_component__["a" /* ReportsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_facilities_facilities_component__["a" /* FacilitiesComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_manage_alerts_manage_alerts_component__["a" /* ManageAlertsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__config_app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_8__config_global__["a" /* Globals */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["APP_INITIALIZER"], useFactory: configLoad, deps: [__WEBPACK_IMPORTED_MODULE_7__config_app_config__["a" /* AppConfig */]], multi: true }, __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config_global__ = __webpack_require__(12);
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
    function DashboardComponent(globals) {
        this.globals = globals;
        this.globals.title = "Dashboard";
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.ngAfterViewInit = function () { };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(405),
        styles: [__webpack_require__(383)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_config_global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_config_global__["a" /* Globals */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config_global__ = __webpack_require__(12);
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
    function DevicesComponent(authService, router, flashMessage, globals) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.globals = globals;
        this.deviceModel = {
            "_id": "",
            "device_id": "",
            "device_name": "",
            "status": "",
            "version": "",
            "data_type": "",
            "communication_type": "",
            "description": "",
            "stock_availability": "",
            "info_url": "",
            "supplier_id": "",
            "supplier_name": "",
            "supplier_city": ""
        };
        this.globals.title = "Devices";
    }
    DevicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getDeviceList()
            .subscribe(function (data) {
            _this.devices = data.responseContent;
        });
    };
    DevicesComponent.prototype.ngAfterViewInit = function () {
        /* BOOTSNIPP FULLSCREEN FIX */
        $('#fullscreen').on('click', function (event) {
            event.preventDefault();
        });
        /*  $('tbody > tr').on('click', function(event) {
              event.preventDefault();
              $('#myModal').modal('show');
          })
        */
        $('.btn-mais-info').on('click', function (event) {
            $('.open_info').toggleClass("hide");
        });
    };
    DevicesComponent.prototype.openDeviceModel = function (i) {
        console.log(i);
        if (this.devices[i]) {
            this.deviceModel = this.devices[i];
            console.log(this.deviceModel);
            event.preventDefault();
            $('#myModal').modal('show');
        }
    };
    return DevicesComponent;
}());
DevicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-devices',
        template: __webpack_require__(406),
        styles: [__webpack_require__(384)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__app_config_global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_config_global__["a" /* Globals */]) === "function" && _d || Object])
], DevicesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=devices.component.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config_global__ = __webpack_require__(12);
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
    function FacilitiesComponent(globals) {
        this.globals = globals;
        this.globals.title = "Facilities";
    }
    FacilitiesComponent.prototype.ngOnInit = function () {
    };
    return FacilitiesComponent;
}());
FacilitiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-facilities',
        template: __webpack_require__(407),
        styles: [__webpack_require__(385)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_config_global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_config_global__["a" /* Globals */]) === "function" && _a || Object])
], FacilitiesComponent);

var _a;
//# sourceMappingURL=facilities.component.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(17);
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
        template: __webpack_require__(408),
        styles: [__webpack_require__(386)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], FooterComponent);

var _a, _b, _c;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(17);
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
    HeaderComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show("You are logged out", {
            cssClass: "alert alert-success",
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(409),
        styles: [__webpack_require__(387)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], HeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config_global__ = __webpack_require__(12);
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
    function HomeComponent(globals) {
        this.globals = globals;
        this.globals.title = "Home";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(410),
        styles: [__webpack_require__(388)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_config_global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_config_global__["a" /* Globals */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(17);
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
        if (localStorage.getItem('id_token')) {
            this.router.navigate(['/dashboard']);
        }
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
        template: __webpack_require__(411),
        styles: [__webpack_require__(389)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config_global__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageAlertsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManageAlertsComponent = (function () {
    function ManageAlertsComponent(globals) {
        this.globals = globals;
        this.globals.title = "Manage Alerts";
    }
    ManageAlertsComponent.prototype.ngOnInit = function () {
    };
    return ManageAlertsComponent;
}());
ManageAlertsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-manage-alerts',
        template: __webpack_require__(412),
        styles: [__webpack_require__(390)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_config_global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_config_global__["a" /* Globals */]) === "function" && _a || Object])
], ManageAlertsComponent);

var _a;
//# sourceMappingURL=manage-alerts.component.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config_global__ = __webpack_require__(12);
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
    function ProfileComponent(authService, router, flashMessage, globals) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.globals = globals;
        this.globals.title = "Profile";
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
        template: __webpack_require__(413),
        styles: [__webpack_require__(391)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__app_config_global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_config_global__["a" /* Globals */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config_global__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_crypto_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_crypto_js__);
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
    function ReportsComponent(authService, globals, sanitizer) {
        this.authService = authService;
        this.globals = globals;
        this.sanitizer = sanitizer;
        this.title1 = "Device Type With Total Users";
        this.title2 = "Device Type With Total Devices";
        this.title3 = "Age Range With Device Type & Total Users";
        this.title4 = "Age Range With Total Device";
        this.title5 = "Gender With Total Device";
        this.title6 = "Gender With Total Users";
        this.title7 = "Month Reports With Total Active Users";
        this.title8 = "Pulse Report";
        // lineChart
        this.lineChartData = [
            { data: [100, 160, 120, 170, 180], label: 'Max Pulse Rate' },
            { data: [40, 70, 60, 90, 120], label: 'Min Pulse Rate' }
        ];
        this.lineChartLabels = ['Critically low', 'Slightly low', 'Normal', 'Slightly High', 'Critically High'];
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
        this.barChartLabels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [30, 33, 40, 45, 49, 32, 35], label: 'Max Temperature' },
            { data: [25, 28, 35, 35, 45, 29, 26], label: 'Min Temperature' }
        ];
        this.globals.title = "Reports";
    }
    ReportsComponent.prototype.ngOnInit = function () {
        this.start_date = "2017-07-01";
        this.end_date = this.getEndDate();
        console.log("userdata list:");
        console.log(this.authService.userdata);
        this.provider_id = this.authService.userdata.id;
        console.log("provider_id", this.provider_id);
        this.getPieChartRecords();
        var url1 = "http://192.168.146.54:5601/app/kibana#/visualize/edit/edb6a710-9f75-11e7-97d0-29020f5a4e5c?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:healthrecords,key:provider_id,negate:!f,type:phrase,value:'" + this.provider_id + "'),query:(match:(provider_id:(query:'" + this.provider_id + "',type:phrase))))),linked:!f,query:(match_all:()),uiState:(vis:(legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Total+Users',field:user_id),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(customLabel:Type,field:datatype,order:desc,orderBy:'1',size:5),schema:segment,type:terms)),listeners:(),params:(addLegend:!t,addTooltip:!t,isDonut:!f,legendPosition:right),title:'Provider:+Datatype+with+total+users',type:pie))";
        var url2 = "http://192.168.146.54:5601/app/kibana#/visualize/edit/4efd69b0-9f75-11e7-97d0-29020f5a4e5c?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:healthrecords,key:provider_id,negate:!f,type:phrase,value:'" + this.provider_id + "'),query:(match:(provider_id:(query:'" + this.provider_id + "',type:phrase))))),linked:!f,query:(match_all:()),uiState:(vis:(legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Total+Devices',field:device_id.keyword,json:''),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(customLabel:Type,field:datatype,order:desc,orderBy:'1',size:5),schema:segment,type:terms)),listeners:(),params:(addLegend:!t,addTooltip:!t,isDonut:!f,legendPosition:right),title:'Provider:+Datatype+with+total+device',type:pie))";
        var url3 = "http://192.168.146.54:5601/app/kibana#/visualize/edit/24cf0190-a1b8-11e7-97d0-29020f5a4e5c?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:healthrecords,key:provider_id,negate:!f,type:phrase,value:'" + this.provider_id + "'),query:(match:(provider_id:(query:'" + this.provider_id + "',type:phrase))))),linked:!f,query:(match_all:()),uiState:(vis:(legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Total+Users',field:user_id),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(customLabel:'Age+Range',field:age,ranges:!((from:0,to:20),(from:21,to:40),(from:41,to:60),(from:61,to:80),(from:81,to:100))),schema:segment,type:range),(enabled:!t,id:'3',params:(customLabel:'Data+Type',field:datatype,order:desc,orderBy:'1',size:5),schema:group,type:terms)),listeners:(),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(text:'Age+Range'),type:category)),grid:(categoryLines:!f,style:(color:%23eee)),legendPosition:right,seriesParams:!((data:(id:'1',label:'Total+Users'),drawLinesBetweenPoints:!t,interpolate:step-after,mode:normal,show:true,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),times:!(),valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Total+Users'),type:value),(id:ValueAxis-2,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:RightAxis-1,position:right,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:''),type:value))),title:'Provider:+Age+with+datatype',type:histogram))";
        var url4 = "http://192.168.146.54:5601/app/kibana#/visualize/edit/099d07f0-a1b8-11e7-97d0-29020f5a4e5c?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!t,index:healthrecords,key:query,negate:!f,type:query_string,value:'device_*'),query:(query_string:(analyze_wildcard:!t,query:'device_*'))),('$state':(store:appState),meta:(alias:!n,disabled:!f,index:healthrecords,key:provider_id,negate:!f,type:phrase,value:'" + this.provider_id + "'),query:(match:(provider_id:(query:'" + this.provider_id + "',type:phrase))))),linked:!f,query:(match_all:()),uiState:(vis:(legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Total+Devices',field:device_id.keyword),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(customLabel:'Age+Range',field:age,ranges:!((from:0,to:20),(from:21,to:40),(from:41,to:60),(from:61,to:80),(from:81,to:100))),schema:segment,type:range)),listeners:(),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(text:'Age+Range'),type:category)),grid:(categoryLines:!f,style:(color:%23eee)),legendPosition:right,seriesParams:!((data:(id:'1',label:'Total+Devices'),drawLinesBetweenPoints:!t,mode:stacked,show:true,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),times:!(),valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Total+Devices'),type:value))),title:'Provider:+Age+wise+data',type:histogram))";
        var url5 = "http://192.168.146.54:5601/app/kibana#/visualize/edit/d294c5c0-a1b4-11e7-97d0-29020f5a4e5c?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:healthrecords,key:provider_id,negate:!f,type:phrase,value:'" + this.provider_id + "'),query:(match:(provider_id:(query:'" + this.provider_id + "',type:phrase))))),linked:!f,query:(match_all:()),uiState:(vis:(legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Total+Devices',field:device_id.keyword),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(customLabel:Gender,exclude:male,field:gender,order:desc,orderBy:'1',size:2),schema:segment,type:terms)),listeners:(),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(text:Gender),type:category)),grid:(categoryLines:!f,style:(color:%23eee),valueAxis:!n),legendPosition:right,orderBucketsBySum:!f,seriesParams:!((data:(id:'1',label:'Total+Devices'),drawLinesBetweenPoints:!t,mode:normal,show:true,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),times:!(),valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Total+Devices'),type:value))),title:'Provider:+Gender+with+total+devices',type:histogram))";
        var url6 = "http://192.168.146.54:5601/app/kibana#/visualize/edit/8115c900-a1c4-11e7-97d0-29020f5a4e5c?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:healthrecords,key:provider_id,negate:!f,type:phrase,value:'" + this.provider_id + "'),query:(match:(provider_id:(query:'" + this.provider_id + "',type:phrase))))),linked:!f,query:(match_all:()),uiState:(vis:(legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Total+Users',field:user_id),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(customLabel:Gender,field:gender,order:desc,orderBy:'1',size:2),schema:segment,type:terms)),listeners:(),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(text:Gender),type:category)),grid:(categoryLines:!f,style:(color:%23eee),valueAxis:!n),legendPosition:right,orderBucketsBySum:!f,seriesParams:!((data:(id:'1',label:'Total+Users'),drawLinesBetweenPoints:!t,mode:normal,show:true,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),times:!(),valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Total+Users'),type:value))),title:'Provider:+Gender+with+total+users',type:histogram))";
        var url7 = "http://192.168.146.54:5601/app/kibana#/visualize/edit/5bedc510-a1d3-11e7-97d0-29020f5a4e5c?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:healthrecords,key:provider_id,negate:!f,type:phrase,value:'" + this.provider_id + "'),query:(match:(provider_id:(query:'" + this.provider_id + "',type:phrase))))),linked:!f,query:(match_all:()),uiState:(vis:(defaultColors:('0%25+-+25%25':'rgb(247,251,255)','25%25+-+50%25':'rgb(198,219,239)','50%25+-+75%25':'rgb(107,174,214)','75%25+-+100%25':'rgb(33,113,181)'),legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Active+Users',field:user_id),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(customLabel:Date,field:time,ranges:!((from:now-1M,to:now),(from:now-2M,to:now-1M),(from:now-3M,to:now-2M),(from:now-4M,to:now-3M),(from:now-5M,to:now-4M),(from:now-6M,to:now-5M))),schema:segment,type:date_range)),listeners:(),params:(addLegend:!t,addTooltip:!t,colorSchema:Blues,colorsNumber:4,colorsRange:!(),enableHover:!f,invertColors:!f,legendPosition:right,percentageMode:!t,setColorRange:!f,times:!(),valueAxes:!((id:ValueAxis-1,labels:(color:%23000,rotate:0,show:!t),scale:(defaultYExtents:!f,type:linear),show:!f,type:value))),title:'Provider:+Month+Reports+(total+users)',type:heatmap))";
        var url8 = "http://192.168.146.54:5601/app/kibana#/visualize/edit/2b11dd30-a1d0-11e7-97d0-29020f5a4e5c?embed=true&_g=()&_a=(filters:!(('$state':(store:appState),meta:(alias:!n,disabled:!f,index:healthrecords,key:provider_id,negate:!f,type:phrase,value:'" + this.provider_id + "'),query:(match:(provider_id:(query:'" + this.provider_id + "',type:phrase))))),linked:!f,query:(match_all:()),uiState:(vis:(legendOpen:!f)),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Total+Users',field:user_id),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(field:pulse,ranges:!((from:0,to:20),(from:21,to:40),(from:41,to:60),(from:61,to:80),(from:81,to:90),(from:91,to:100),(from:121,to:140),(from:141,to:160),(from:161,to:180),(from:181,to:200),(from:201,to:220),(from:220,to:240))),schema:segment,type:range)),listeners:(),params:(addLegend:!t,addTooltip:!t,isDonut:!t,legendPosition:right),title:'Provider:+Pulse+Pie+chart',type:pie))";
        this.iframe1_url = this.sanitizer.bypassSecurityTrustResourceUrl(url1);
        this.iframe2_url = this.sanitizer.bypassSecurityTrustResourceUrl(url2);
        this.iframe3_url = this.sanitizer.bypassSecurityTrustResourceUrl(url3);
        this.iframe4_url = this.sanitizer.bypassSecurityTrustResourceUrl(url4);
        this.iframe5_url = this.sanitizer.bypassSecurityTrustResourceUrl(url5);
        this.iframe6_url = this.sanitizer.bypassSecurityTrustResourceUrl(url6);
        this.iframe7_url = this.sanitizer.bypassSecurityTrustResourceUrl(url7);
        this.iframe8_url = this.sanitizer.bypassSecurityTrustResourceUrl(url8);
        console.log("iframe1_url", this.iframe1_url);
        console.log("iframe2_url", this.iframe2_url);
        console.log("iframe3_url", this.iframe3_url);
        console.log("iframe4_url", this.iframe4_url);
    };
    ReportsComponent.prototype.ngAfterViewInit = function () {
    };
    ReportsComponent.prototype.dcData = function (ciphertext, passPhrase, salt, iv) {
        var cipherParams = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["lib"].CipherParams.create({
            ciphertext: __WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Base64.parse(ciphertext)
        });
        console.log("cipherParams", cipherParams);
        var ckey = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["PBKDF2"](passPhrase, __WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Hex.parse(salt), { keySize: (256 + 128) / 32, iterations: 1000 });
        console.log("ckey-->", ckey);
        /*
             var decrypted = CryptoJS.AES.decrypt(
             cipherParams,
             ckey,
             { iv: iv });
             console.log("decrypted--->",decrypted);
             console.log("decrypted string--->",decrypted.toString(CryptoJS.enc.Utf8));
        */
    };
    ReportsComponent.prototype.decryptData = function (data) {
        var base64Key = "wellie";
        console.log("base64Key = " + base64Key);
        // this is the actual key as a sequence of bytes
        var key = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Base64.parse(base64Key);
        console.log("key = " + key);
        console.log("decryptData", data);
        var myString = "https://www.titanesmedellin.com/";
        var myPassword = "wellie";
        // PROCESS
        var gen_key = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["SHA1"](myPassword).toString();
        var encrypted = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["AES"].encrypt(myString, gen_key);
        var decrypted = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["AES"].decrypt(encrypted, gen_key);
        var plaintext = decrypted.toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Utf8);
        console.log("encrypted", encrypted);
        console.log("decrypted", plaintext);
        var salt = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["lib"].WordArray.random(128 / 8);
        var key = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["PBKDF2"](myPassword, salt, { keySize: 128 / 32, iterations: 100 });
        var iv = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["lib"].WordArray.random(128 / 8);
        var ivv = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Hex.parse('00000000000000000000000000000000');
        key = "[B@f4832da";
        var passPhrase = "wellie";
        var keySize = 128 / 8;
        key = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Utf8.parse(key);
        console.log("key", key);
        console.log("iv", iv);
        console.log("ivv", ivv);
        //    this.decrypt();
        if (data.success == true && 1 == 1) {
            var encrypt_data = data.responseContent.heart_rate;
            console.log("encrypt_data", encrypt_data);
            for (var i = 0; i <= encrypt_data.length; i++) {
                //this.dcData(encrypt_data[i], passPhrase, salt, iv);
                // this is the decrypted data as a sequence of bytes
                var encryptedStr = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Base64.parse(encrypt_data[i]);
                var cryptkey = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Utf8.parse('wellie');
                console.log("key", cryptkey);
                console.log("encryptedStr", encryptedStr);
                var rawData = atob(encryptedStr);
                console.log("rawData", rawData);
                var decrypt = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["AES"].decrypt({ ciphertext: encryptedStr }, cryptkey, {
                    iv: iv,
                    mode: __WEBPACK_IMPORTED_MODULE_4_crypto_js__["mode"].CBC,
                    padding: __WEBPACK_IMPORTED_MODULE_4_crypto_js__["pad"].Pkcs7
                });
                console.log(decrypt.toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Utf8));
                //var decrypted = CryptoJS.AES.decrypt({ciphertext: encryptedStr}, key, { iv: iv, mode:CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
                //var decrypted = this.decryptByDES(encryptedStr,myPassword);
                // this is the decrypted data as a string
                //console.log(i+"->",encrypt_data[i]);
                //var decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
                //console.log('decrypted text : '+ decryptedText);
                //console.log( "decryptedData = " + decrypted);
            }
        }
    };
    ReportsComponent.prototype.decryptByDES = function (ciphertext, key) {
        var keyHex = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Utf8.parse(key);
        // direct decrypt ciphertext
        var decrypted = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["DES"].decrypt({
            ciphertext: __WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Base64.parse(ciphertext)
        }, keyHex, {
            mode: __WEBPACK_IMPORTED_MODULE_4_crypto_js__["mode"].ECB,
            padding: __WEBPACK_IMPORTED_MODULE_4_crypto_js__["pad"].Pkcs7
        });
        return decrypted.toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Utf8);
    };
    ReportsComponent.prototype.decrypt = function () {
        var salt = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Hex.parse("3A79D3242F9D0DCE0C811DCCE7F830C5");
        var iv = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Hex.parse("9BCBD77036744C7F26DF591AE6A772C6");
        var encryptedBase64 = "eKCnyuKiH3lvknsNZq9hARCr6xtDLU/De7sPc3RPSRFAh7WCurBKmDZx/Ol0mbROBtAJBCT0+U927iygd4GspQ==";
        var key = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["PBKDF2"]("passwordA", salt, { keySize: 128 / 32, iterations: 100 });
        console.log('key ' + key);
        var encryptedStr = encryptedBase64; //CryptoJS.enc.Base64.parse(encryptedBase64);
        console.log('encryptedStr  : ' + encryptedStr);
        var decrypted = __WEBPACK_IMPORTED_MODULE_4_crypto_js__["AES"].decrypt(encryptedStr, key, { iv: iv, mode: __WEBPACK_IMPORTED_MODULE_4_crypto_js__["mode"].CBC, padding: __WEBPACK_IMPORTED_MODULE_4_crypto_js__["pad"].Pkcs7 });
        console.log('decrypted : ' + decrypted);
        var decryptedText = decrypted.toString(__WEBPACK_IMPORTED_MODULE_4_crypto_js__["enc"].Utf8);
        console.log('decrypted text : ' + decryptedText);
    };
    ReportsComponent.prototype.getEndDate = function () {
        var date = new Date();
        var month = "0" + (date.getMonth() + 1);
        var day = "0" + (date.getDate());
        if (month.length != 2) {
            month = "" + (date.getMonth() + 1);
        }
        if (day.length != 2) {
            day = "" + (date.getDate());
        }
        return date.getFullYear() + "-" + month + "-" + day;
    };
    ReportsComponent.prototype.getPieChartRecords = function () {
        var _this = this;
        // Pie
        this.pieChartLabels = ['Critical Low', 'Slightly Low', 'Normal', 'Slightly High', 'Critical High'];
        this.pieChartType = 'pie';
        this.pieChartData = [0, 0, 0, 0, 0];
        this.pieChartColors = [{ backgroundColor: ['#b9cff0', '#dfb9f1', '#e0e0e0', '#f7b391', '#ff6060'] }];
        var filter_data = {
            "start_date": this.start_date,
            "end_date": this.end_date,
            "data_type": "heart_rate"
        };
        console.log(filter_data);
        this.authService.getHeartBitList(filter_data)
            .subscribe(function (data) {
            console.log(data);
            _this.decryptData(data);
            if (data.success == true && data.responseContent.heart_rate != undefined && data.responseContent.heart_rate.length > 0) {
                _this.heart_rate = data.responseContent.heart_rate;
                var cl = 0, sl = 0, n = 0, sh = 0, ch = 0;
                var heart_data = data.responseContent.heart_rate;
                for (var i = 0; i < heart_data.length; i++) {
                    var cmp_data = parseInt(heart_data[i].heart_rate);
                    if (cmp_data < 60) {
                        cl++;
                    }
                    else if (cmp_data > 60 && cmp_data <= 70) {
                        sl++;
                    }
                    else if (cmp_data > 70 && cmp_data <= 90) {
                        n++;
                    }
                    else if (cmp_data > 90 && cmp_data <= 100) {
                        sh++;
                    }
                    else if (cmp_data > 100) {
                        ch++;
                    }
                }
                console.log('Critically low:', cl, 'Slightly low:', sl, 'Normal:', n, 'Slightly High:', sh, 'Critically High:', ch);
            }
            _this.pieChartData = [cl, sl, n, sh, ch];
        });
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
        template: __webpack_require__(414),
        styles: [__webpack_require__(392)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_config_global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_config_global__["a" /* Globals */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object])
], ReportsComponent);

var _a, _b, _c;
//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ 245:
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
        template: __webpack_require__(415),
        styles: [__webpack_require__(393)]
    }),
    __metadata("design:paramtypes", [])
], RightSidebarComponent);

//# sourceMappingURL=right-sidebar.component.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config_global__ = __webpack_require__(12);
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
    function SidebarComponent(authService, router, flashMessage, globals) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.globals = globals;
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
        template: __webpack_require__(416),
        styles: [__webpack_require__(394)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__app_config_global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_config_global__["a" /* Globals */]) === "function" && _d || Object])
], SidebarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config_global__ = __webpack_require__(12);
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
    function UsersComponent(authService, globals) {
        this.authService = authService;
        this.globals = globals;
        this.globals.title = "Users";
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getPatientList()
            .subscribe(function (data) {
            _this.users = data.responseContent;
        });
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-users',
        template: __webpack_require__(417),
        styles: [__webpack_require__(395)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_config_global__["a" /* Globals */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_config_global__["a" /* Globals */]) === "function" && _b || Object])
], UsersComponent);

var _a, _b;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(10);
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

/***/ 249:
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

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\r\n.emg_alt {\r\n    color: red!important;\r\n    font-weight: bold;\r\n}\r\ntbody > tr td:nth-of-type(even), tbody > tr th:nth-of-type(even) {\r\n    float: none;\r\n}\r\nthead>tr th:nth-of-type(even) {\r\n    text-align: left;\r\n    padding-right: 0px;\r\n}\r\n.table-hover>tbody>tr:hover>td, .table>tbody>tr:hover>td, .table-hover>tbody>tr:hover>th, .table>tbody>tr:hover>th{\r\n     background-color: inherit;\r\n}\r\n.table-hover>tbody>tr:hover>td a, .table>tbody>tr:hover>td a, .table-hover>tbody>tr:hover>th a, .table>tbody>tr:hover>th a{\r\n     text-decoration: none;\r\n     color: inherit;\r\n}\r\n.table-hover>tbody>tr:hover, .table>tbody>tr:hover, .table-hover>tbody>tr:hover, .table>tbody>tr:hover{\r\n     background: #f7f7f7; \r\n     cursor: pointer;\r\n\r\n}\r\n.module .module-content-inner{\r\n     padding-top: 0px;\r\n     padding-bottom: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".dtxt{\r\n     line-height: 2.5;\r\n}\r\ntbody > tr {\r\n    cursor: pointer;\r\n}\r\ndiv#myModal {\r\n    padding-top: 5%;\r\n}\r\ntbody>tr td:nth-of-type(even) {\r\n    float: none;\r\n}\r\n@media (min-width: 768px){\r\n     .modal-content {\r\n         box-shadow: 0 5px 15px rgba(0,0,0,.5);\r\n     }\r\n}\r\n.modal-content {\r\n    position: relative;\r\n    background-color: #fff;\r\n    border: 1px solid #999;\r\n    border: 1px solid rgba(0,0,0,.2);\r\n    border-radius: 6px;\r\n    box-shadow: 0 3px 9px rgba(0,0,0,.5);\r\n    background-clip: padding-box;\r\n    outline: 0;\r\n}\r\n.form-control {\r\n    display: block;\r\n    width: 100%;\r\n    height: 34px;\r\n    padding: 6px 12px;\r\n    font-size: 14px;\r\n    line-height: 1.428571429;\r\n    color: #555;\r\n    vertical-align: middle;\r\n    background-color: #fff;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\r\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\r\n}\r\n\r\n\r\n\r\n\r\n\r\ntbody>tr td:nth-of-type(even) {\r\n    float: none;\r\n}\r\n\r\n\r\n/*\r\nMax width before this PARTICULAR table gets nasty\r\nThis query will take effect for any screen smaller than 760px\r\nand also iPads specifically.\r\n*/\r\n@media\r\nonly screen and (max-width: 1075px),\r\n(min-device-width: 768px) and (max-device-width: 1075px)  {\r\n\r\n\r\n     .table-striped>tbody>tr:nth-child(odd)>td, .table>tbody>tr:nth-child(odd)>td, .table-striped>tbody>tr:nth-child(odd)>th, .table>tbody>tr:nth-child(odd)>th {\r\n          background-color: #fff;\r\n     }\r\n     .table-striped>tbody>tr:nth-child(even)>td, .table>tbody>tr:nth-child(even)>td, .table-striped>tbody>tr:nth-child(even)>th, .table>tbody>tr:nth-child(even)>th {\r\n          background-color: #eee;\r\n     }\r\n\r\n\t/* Force table to not be like tables anymore */\r\n\ttable, thead, tbody, th, td, tr {\r\n\t\tdisplay: block;\r\n\t}\r\n     tbody tr:nth-of-type(odd) {\r\n         background: #eee;\r\n     }\r\n\t/* Hide table headers (but not display: none;, for accessibility) */\r\n\tthead tr {\r\n\t\tposition: absolute;\r\n\t\ttop: -9999px;\r\n\t\tleft: -9999px;\r\n\t}\r\n\r\n\ttr { /* border: 1px solid #ccc; */ margin-bottom: 20px; }\r\n\r\n\ttd {\r\n\t\t/* Behave  like a \"row\" */\r\n\t\tborder: none;\r\n\t\tborder-bottom: 1px solid #eee;\r\n\t\tposition: relative;\r\n\t\tpadding-left: 50%;\r\n          min-height: 38px;\r\n\t}\r\n\r\n     .table>thead>tr>th, .table>thead>tr>td, .table>tbody>tr>th, .table>tbody>tr>td, .table>tfoot>tr>th, .table>tfoot>tr>td {\r\n         padding-left: 180px;\r\n     }\r\n\ttd:before {\r\n\t\t/* Now like a table header */\r\n\t\tposition: absolute;\r\n\t\t/* Top/left values mimic padding */\r\n\t\ttop: 6px;\r\n\t\tleft: 6px;\r\n\t\twidth: 45%;\r\n\t\tpadding-right: 10px;\r\n\t\twhite-space: nowrap;\r\n          font-weight: bold;\r\n\t}\r\n\r\n.table-bordered{\r\n     border: none;\r\n}\r\n     /*\r\n\tLabel the data\r\n\t*/\r\n     td:nth-of-type(1):before { content: \"#\"; }\r\n\ttd:nth-of-type(2):before { content: \"Name\"; }\r\n\ttd:nth-of-type(3):before { content: \"Type\"; }\r\n\ttd:nth-of-type(4):before { content: \"In Stock\"; }\r\n\ttd:nth-of-type(5):before { content: \"Supplier Name\"; }\r\n\ttd:nth-of-type(6):before { content: \"Supplier City\"; }\r\n\ttd:nth-of-type(7):before { content: \"Status\"; }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".loginfooter{\r\n     margin-left: 0px!important;\r\n     \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".logo-lg img {\r\n    width: 179px;\r\n}\r\n\r\n#navbar .navbar-nav>li>.notification_dropdown {\r\n    margin-top: -5px;\r\n    width: 350px;\r\n    background: #f1f1f1;\r\n    position: absolute;\r\n    left: -185px;\r\n}\r\n.notification_dropdown{\r\n     padding-top: 0px;\r\n     padding-bottom: 0px;\r\n}\r\n.notification_dropdown li{\r\n     padding: 20px;\r\n     border-bottom: 1px solid #b9b9bb;\r\n     border-bottom-left-radius: 5px;\r\n     border-bottom-right-radius: 5px;\r\n}\r\n.notification_dropdown li:hover{\r\n     background: white;\r\n     cursor: pointer;\r\n}\r\n.notification_dropdown li:last-child{\r\n     border-bottom: none;\r\n}\r\n.notification_dropdown li a{\r\n     color: #0a0a0a\r\n}\r\n.notification_dropdown li span {\r\n     display: inline-block;\r\n     width: 30%;\r\n     font-weight: bold;\r\n}\r\n.notification_dropdown li span:first{\r\n     float: left;\r\n}\r\n.notification_dropdown li span:nth-child(2){\r\n     text-align: center;\r\n     width: 40%;\r\n}\r\n.notification_dropdown li span:last-child{\r\n     float: right;\r\n     width: 25%;\r\n     text-align: right;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".content-wrapper, .right-side, .main-footer{\r\n     margin-left: 0px!important;\r\n}\r\n#regContainer{\r\n    margin-top: 10%;\r\n}\r\nbody {\r\n    padding-top: 90px;\r\n}\r\n.panel-login {\r\n\tborder-color: #ccc;\r\n\tbox-shadow: 0px 2px 3px 0px rgba(0,0,0,0.2);\r\n}\r\n.panel-login>.panel-heading {\r\n\tcolor: #00415d;\r\n\tbackground-color: #fff;\r\n\tborder-color: #fff;\r\n\ttext-align:center;\r\n}\r\n.panel-login>.panel-heading a{\r\n\ttext-decoration: none;\r\n\tcolor: #666;\r\n\tfont-weight: bold;\r\n\tfont-size: 15px;\r\n\ttransition: all 0.1s linear;\r\n}\r\n.panel-login>.panel-heading a.active{\r\n\tcolor: #029f5b;\r\n\tfont-size: 18px;\r\n}\r\n.panel-login>.panel-heading hr{\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 0px;\r\n\tclear: both;\r\n\tborder: 0;\r\n\theight: 1px;\r\n\tbackground-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\r\n}\r\n.panel-login input[type=\"text\"],.panel-login input[type=\"email\"],.panel-login input[type=\"password\"] {\r\n\theight: 45px;\r\n\tborder: 1px solid #ddd;\r\n\tfont-size: 16px;\r\n\ttransition: all 0.1s linear;\r\n}\r\n.panel-login input:hover,\r\n.panel-login input:focus {\r\n\toutline:none;\r\n\tbox-shadow: none;\r\n\tborder-color: #ccc;\r\n}\r\n.btn-login {\r\n\tbackground-color: #59B2E0;\r\n\toutline: none;\r\n\tcolor: #fff;\r\n\tfont-size: 14px;\r\n\theight: auto;\r\n\tfont-weight: normal;\r\n\tpadding: 14px 0;\r\n\ttext-transform: uppercase;\r\n\tborder-color: #59B2E6;\r\n}\r\n.btn-login:hover,\r\n.btn-login:focus {\r\n\tcolor: #fff;\r\n\tbackground-color: #53A3CD;\r\n\tborder-color: #53A3CD;\r\n}\r\n.forgot-password {\r\n\ttext-decoration: underline;\r\n\tcolor: #888;\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:focus {\r\n\ttext-decoration: underline;\r\n\tcolor: #666;\r\n}\r\n\r\n.btn-register {\r\n\tbackground-color: #1CB94E;\r\n\toutline: none;\r\n\tcolor: #fff;\r\n\tfont-size: 14px;\r\n\theight: auto;\r\n\tfont-weight: normal;\r\n\tpadding: 14px 0;\r\n\ttext-transform: uppercase;\r\n\tborder-color: #1CB94A;\r\n}\r\n.btn-register:hover,\r\n.btn-register:focus {\r\n\tcolor: #fff;\r\n\tbackground-color: #1CA347;\r\n\tborder-color: #1CA347;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".tac{\r\n     padding: 0px;\r\n     margin: 0px;\r\n     text-align: center;\r\n     font-size: 18px;\r\n     padding-top: 5px;\r\n}\r\niframe#bpc .filter-bar{\r\n     opacity: 0;\r\n}\r\n.filter-bar {\r\n    display: none!important;\r\n}\r\n.panel {\r\n    border-radius: 10px;\r\n}\r\n.rdiv{\r\n/*     min-height: 375px; */\r\n}\r\n/* xs < 768 */\r\n@media screen and (max-width: 767px) {\r\n    body {\r\n        font-size: 0.9em;\r\n    }\r\n}\r\n\r\n/* sm */\r\n@media screen and (min-width: 768px) {\r\n    body {\r\n        font-size: 1em;\r\n    }\r\n}\r\n\r\n/* md */\r\n@media screen and (min-width: 992px) {\r\n    body {\r\n        font-size: 1.2em;\r\n    }\r\n}\r\n\r\n/* lg */\r\n@media screen and (min-width: 1200px) {\r\n    body {\r\n        font-size: 1.3em;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css);", ""]);
exports.push([module.i, "@import url(https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css);", ""]);

// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "tbody>tr td:nth-of-type(even) {\r\n    float: none;\r\n}\r\n\r\n\r\n/*\r\nMax width before this PARTICULAR table gets nasty\r\nThis query will take effect for any screen smaller than 760px\r\nand also iPads specifically.\r\n*/\r\n@media\r\nonly screen and (max-width: 1075px),\r\n(min-device-width: 768px) and (max-device-width: 1075px)  {\r\n\r\n     .table-striped>tbody>tr:nth-child(odd)>td, .table>tbody>tr:nth-child(odd)>td, .table-striped>tbody>tr:nth-child(odd)>th, .table>tbody>tr:nth-child(odd)>th {\r\n          background-color: #fff;\r\n     }\r\n     .table-striped>tbody>tr:nth-child(even)>td, .table>tbody>tr:nth-child(even)>td, .table-striped>tbody>tr:nth-child(even)>th, .table>tbody>tr:nth-child(even)>th {\r\n          background-color: #eee;\r\n     }\r\n\r\n\t/* Force table to not be like tables anymore */\r\n\ttable, thead, tbody, th, td, tr {\r\n\t\tdisplay: block;\r\n\t}\r\n\r\n     tr:nth-of-type(odd) {\r\n          background: #eee;\r\n     }\r\n\r\n\t/* Hide table headers (but not display: none;, for accessibility) */\r\n\tthead tr {\r\n\t\tposition: absolute;\r\n\t\ttop: -9999px;\r\n\t\tleft: -9999px;\r\n\t}\r\n\r\n\ttr { /* border: 1px solid #ccc; */ margin-bottom: 20px; }\r\n\r\n\ttd {\r\n\t\t/* Behave  like a \"row\" */\r\n\t\tborder: none;\r\n\t\tborder-bottom: 1px solid #eee;\r\n\t\tposition: relative;\r\n\t\tpadding-left: 50%;\r\n          min-height: 38px;\r\n\t}\r\n\r\n     .table>thead>tr>th, .table>thead>tr>td, .table>tbody>tr>th, .table>tbody>tr>td, .table>tfoot>tr>th, .table>tfoot>tr>td {\r\n         padding-left: 180px;\r\n     }\r\n\ttd:before {\r\n\t\t/* Now like a table header */\r\n\t\tposition: absolute;\r\n\t\t/* Top/left values mimic padding */\r\n\t\ttop: 6px;\r\n\t\tleft: 6px;\r\n\t\twidth: 45%;\r\n\t\tpadding-right: 10px;\r\n\t\twhite-space: nowrap;\r\n          font-weight: bold;\r\n\t}\r\n\r\n.table-bordered{\r\n     border: none;\r\n}\r\n     /*\r\n\tLabel the data\r\n\t*/\r\n     td:nth-of-type(1):before { content: \"#\"; }\r\n\ttd:nth-of-type(2):before { content: \"First Name\"; }\r\n\ttd:nth-of-type(3):before { content: \"Middle Name\"; }\r\n\ttd:nth-of-type(4):before { content: \"Last Name\"; }\r\n\ttd:nth-of-type(5):before { content: \"Contact\"; }\r\n\ttd:nth-of-type(6):before { content: \"Address\"; }\r\n\ttd:nth-of-type(7):before { content: \"Email\"; }\r\n\ttd:nth-of-type(8):before { content: \"Gender\"; }\r\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 94,
	"./af.js": 94,
	"./ar": 101,
	"./ar-dz": 95,
	"./ar-dz.js": 95,
	"./ar-kw": 96,
	"./ar-kw.js": 96,
	"./ar-ly": 97,
	"./ar-ly.js": 97,
	"./ar-ma": 98,
	"./ar-ma.js": 98,
	"./ar-sa": 99,
	"./ar-sa.js": 99,
	"./ar-tn": 100,
	"./ar-tn.js": 100,
	"./ar.js": 101,
	"./az": 102,
	"./az.js": 102,
	"./be": 103,
	"./be.js": 103,
	"./bg": 104,
	"./bg.js": 104,
	"./bn": 105,
	"./bn.js": 105,
	"./bo": 106,
	"./bo.js": 106,
	"./br": 107,
	"./br.js": 107,
	"./bs": 108,
	"./bs.js": 108,
	"./ca": 109,
	"./ca.js": 109,
	"./cs": 110,
	"./cs.js": 110,
	"./cv": 111,
	"./cv.js": 111,
	"./cy": 112,
	"./cy.js": 112,
	"./da": 113,
	"./da.js": 113,
	"./de": 116,
	"./de-at": 114,
	"./de-at.js": 114,
	"./de-ch": 115,
	"./de-ch.js": 115,
	"./de.js": 116,
	"./dv": 117,
	"./dv.js": 117,
	"./el": 118,
	"./el.js": 118,
	"./en-au": 119,
	"./en-au.js": 119,
	"./en-ca": 120,
	"./en-ca.js": 120,
	"./en-gb": 121,
	"./en-gb.js": 121,
	"./en-ie": 122,
	"./en-ie.js": 122,
	"./en-nz": 123,
	"./en-nz.js": 123,
	"./eo": 124,
	"./eo.js": 124,
	"./es": 126,
	"./es-do": 125,
	"./es-do.js": 125,
	"./es.js": 126,
	"./et": 127,
	"./et.js": 127,
	"./eu": 128,
	"./eu.js": 128,
	"./fa": 129,
	"./fa.js": 129,
	"./fi": 130,
	"./fi.js": 130,
	"./fo": 131,
	"./fo.js": 131,
	"./fr": 134,
	"./fr-ca": 132,
	"./fr-ca.js": 132,
	"./fr-ch": 133,
	"./fr-ch.js": 133,
	"./fr.js": 134,
	"./fy": 135,
	"./fy.js": 135,
	"./gd": 136,
	"./gd.js": 136,
	"./gl": 137,
	"./gl.js": 137,
	"./gom-latn": 138,
	"./gom-latn.js": 138,
	"./he": 139,
	"./he.js": 139,
	"./hi": 140,
	"./hi.js": 140,
	"./hr": 141,
	"./hr.js": 141,
	"./hu": 142,
	"./hu.js": 142,
	"./hy-am": 143,
	"./hy-am.js": 143,
	"./id": 144,
	"./id.js": 144,
	"./is": 145,
	"./is.js": 145,
	"./it": 146,
	"./it.js": 146,
	"./ja": 147,
	"./ja.js": 147,
	"./jv": 148,
	"./jv.js": 148,
	"./ka": 149,
	"./ka.js": 149,
	"./kk": 150,
	"./kk.js": 150,
	"./km": 151,
	"./km.js": 151,
	"./kn": 152,
	"./kn.js": 152,
	"./ko": 153,
	"./ko.js": 153,
	"./ky": 154,
	"./ky.js": 154,
	"./lb": 155,
	"./lb.js": 155,
	"./lo": 156,
	"./lo.js": 156,
	"./lt": 157,
	"./lt.js": 157,
	"./lv": 158,
	"./lv.js": 158,
	"./me": 159,
	"./me.js": 159,
	"./mi": 160,
	"./mi.js": 160,
	"./mk": 161,
	"./mk.js": 161,
	"./ml": 162,
	"./ml.js": 162,
	"./mr": 163,
	"./mr.js": 163,
	"./ms": 165,
	"./ms-my": 164,
	"./ms-my.js": 164,
	"./ms.js": 165,
	"./my": 166,
	"./my.js": 166,
	"./nb": 167,
	"./nb.js": 167,
	"./ne": 168,
	"./ne.js": 168,
	"./nl": 170,
	"./nl-be": 169,
	"./nl-be.js": 169,
	"./nl.js": 170,
	"./nn": 171,
	"./nn.js": 171,
	"./pa-in": 172,
	"./pa-in.js": 172,
	"./pl": 173,
	"./pl.js": 173,
	"./pt": 175,
	"./pt-br": 174,
	"./pt-br.js": 174,
	"./pt.js": 175,
	"./ro": 176,
	"./ro.js": 176,
	"./ru": 177,
	"./ru.js": 177,
	"./sd": 178,
	"./sd.js": 178,
	"./se": 179,
	"./se.js": 179,
	"./si": 180,
	"./si.js": 180,
	"./sk": 181,
	"./sk.js": 181,
	"./sl": 182,
	"./sl.js": 182,
	"./sq": 183,
	"./sq.js": 183,
	"./sr": 185,
	"./sr-cyrl": 184,
	"./sr-cyrl.js": 184,
	"./sr.js": 185,
	"./ss": 186,
	"./ss.js": 186,
	"./sv": 187,
	"./sv.js": 187,
	"./sw": 188,
	"./sw.js": 188,
	"./ta": 189,
	"./ta.js": 189,
	"./te": 190,
	"./te.js": 190,
	"./tet": 191,
	"./tet.js": 191,
	"./th": 192,
	"./th.js": 192,
	"./tl-ph": 193,
	"./tl-ph.js": 193,
	"./tlh": 194,
	"./tlh.js": 194,
	"./tr": 195,
	"./tr.js": 195,
	"./tzl": 196,
	"./tzl.js": 196,
	"./tzm": 198,
	"./tzm-latn": 197,
	"./tzm-latn.js": 197,
	"./tzm.js": 198,
	"./uk": 199,
	"./uk.js": 199,
	"./ur": 200,
	"./ur.js": 200,
	"./uz": 202,
	"./uz-latn": 201,
	"./uz-latn.js": 201,
	"./uz.js": 202,
	"./vi": 203,
	"./vi.js": 203,
	"./x-pseudo": 204,
	"./x-pseudo.js": 204,
	"./yo": 205,
	"./yo.js": 205,
	"./zh-cn": 206,
	"./zh-cn.js": 206,
	"./zh-hk": 207,
	"./zh-hk.js": 207,
	"./zh-tw": 208,
	"./zh-tw.js": 208
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
webpackContext.id = 397;


/***/ }),

/***/ 404:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <app-header></app-header>\n\n  <div id=\"wrapper\" *ngIf=\"authService.loggedIn()\">\n       <!-- Left side column. contains the logo and sidebar -->\n      <app-sidebar></app-sidebar>\n\n      <!-- contains the main data -->\n     <div id=\"content\">\n          <flash-messages></flash-messages>\n          <router-outlet></router-outlet>\n          <app-footer></app-footer>\n     </div>\n  </div>\n  <div id=\"wrapper\" *ngIf=\"!authService.loggedIn()\">\n       <app-login></app-login>\n       <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ 405:
/***/ (function(module, exports) {

module.exports = "             <div class=\"ractangle-module module-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12\">\r\n                  <div class=\"rmcontainer \">\r\n\r\n               <div class=\"block div-square col-lg-1 col-md-2 col-sm-2 col-xs-6\">\r\n                         <a [routerLink]=\"['/devices']\">\r\n                              <i class=\"icon-mobile-phone icon-3x\"></i>\r\n                              <h4>Devices</h4>\r\n                         </a>\r\n               </div>\r\n\r\n                 <div class=\"block div-square col-lg-1 col-md-2 col-sm-2 col-xs-6\">\r\n                           <a [routerLink]=\"['/users']\">\r\n                                <i class=\"icon-user icon-3x\"></i>\r\n                                <h4>Users</h4>\r\n                           </a>\r\n                 </div>\r\n\r\n                 <div class=\"block div-square col-lg-1 col-md-2 col-sm-2 col-xs-6\">\r\n                           <a [routerLink]=\"['/manage-alerts']\">\r\n                                <i class=\"icon-bell icon-3x\"></i>\r\n                                <h4>Emergency Notifications</h4>\r\n                           </a>\r\n                 </div>\r\n\r\n                 <div class=\"block div-square col-lg-1 col-md-2 col-sm-2 col-xs-6\">\r\n                           <a [routerLink]=\"['/reports']\">\r\n                                <i class=\"icon-bar-chart icon-3x\"></i>\r\n                                <h4>Reports</h4>\r\n                           </a>\r\n                 </div>\r\n            </div>\r\n\r\n\r\n             </div>\r\n\r\n             <div class=\"module-wrapper col-lg-4 col-md-12 col-sm-12 col-xs-12\">\r\n             \t\t\t\t\t<section class=\"module module-has-footer module-projects-list\">\r\n             \t\t\t\t\t\t<div class=\"module-inner\">\r\n             \t\t\t\t\t\t\t<div class=\"module-heading\">\r\n             \t\t\t\t\t\t\t\t<h3 class=\"module-title\">Emergency Notification List</h3>\r\n             \t\t\t\t\t\t\t</div>\r\n\r\n             \t\t\t\t\t\t\t<div class=\"module-content collapse in\" id=\"content-projects\" aria-expanded=\"true\" style=\"\">\r\n             \t\t\t\t\t\t\t\t<div class=\"module-content-inner\">\r\n             \t\t\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n             \t\t\t\t\t\t\t\t\t\t<table class=\"table table-simple\">\r\n             \t\t\t\t\t\t\t\t\t\t\t<tbody>\r\n             \t\t\t\t\t\t\t\t\t\t\t\t<tr>\r\n             \t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"truncate\"><a href=\"project.html\">User1</a></td>\r\n                                                                           <td class=\"truncate\"><a href=\"project.html\">Hear Rate:146/85</a></td>\r\n                                                                           <td class=\"truncate\"><a href=\"project.html\"><i class=\"icon-time\"></i> 2 min</a></td>\r\n             \t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n                                                                      <tr>\r\n             \t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"truncate\"><a href=\"project.html\">User2</a></td>\r\n                                                                           <td class=\"truncate\"><a href=\"project.html\">Hear Rate:150/75</a></td>\r\n                                                                           <td class=\"truncate\"><a href=\"project.html\"><i class=\"icon-time\"></i> 4 min</a></td>\r\n             \t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n                                                                      <tr>\r\n             \t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"truncate\"><a href=\"project.html\">User3</a></td>\r\n                                                                           <td class=\"truncate\"><a href=\"project.html\">Hear Rate:120/60</a></td>\r\n                                                                           <td class=\"truncate\"><a href=\"project.html\"><i class=\"icon-time\"></i> 10 min</a></td>\r\n             \t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n                                                                      <tr>\r\n             \t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"truncate\"><a href=\"project.html\">User4</a></td>\r\n                                                                           <td class=\"truncate\"><a href=\"project.html\">Hear Rate:135/79</a></td>\r\n                                                                           <td class=\"truncate\"><a href=\"project.html\"><i class=\"icon-time\"></i> 15 min</a></td>\r\n             \t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n                                                                      <tr>\r\n             \t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"truncate\"><a href=\"project.html\">User5</a></td>\r\n                                                                           <td class=\"truncate\"><a href=\"project.html\">Hear Rate:180/95</a></td>\r\n                                                                           <td class=\"truncate\"><a href=\"project.html\"><i class=\"icon-time\"></i> 1 hr</a></td>\r\n             \t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n                                                                      <tr>\r\n             \t\t\t\t\t\t\t\t\t\t\t\t\t<td class=\"truncate\"><a href=\"project.html\">User6</a></td>\r\n                                                                           <td class=\"truncate\"><a href=\"project.html\">Hear Rate:155/85</a></td>\r\n                                                                           <td class=\"truncate\"><a href=\"project.html\"><i class=\"icon-time\"></i> 1:15 hr</a></td>\r\n             \t\t\t\t\t\t\t\t\t\t\t\t</tr>\r\n             \t\t\t\t\t\t\t\t\t\t\t</tbody>\r\n             \t\t\t\t\t\t\t\t\t\t</table>\r\n             \t\t\t\t\t\t\t\t\t</div>\r\n             \t\t\t\t\t\t\t\t</div>\r\n             \t\t\t\t\t\t\t</div>\r\n             \t\t\t\t\t\t</div>\r\n             \t\t\t\t\t</section>\r\n\r\n             \t\t\t\t</div>\r\n\r\n            <div class=\"module-wrapper col-lg-4 col-md-12 col-sm-12 col-xs-12\">\r\n                      <section class=\"module module-has-footer module-projects-list\">\r\n                           <div class=\"module-inner\">\r\n                           \t<div class=\"module-heading\">\r\n                           \t\t<h3 class=\"module-title\">Critical Users List</h3>\r\n                           \t</div>\r\n\r\n                           \t<div class=\"module-content collapse in\" id=\"content-projects\" aria-expanded=\"true\" style=\"\">\r\n                           \t\t<div class=\"module-content-inner\">\r\n                           \t\t\t<div class=\"table-responsive\">\r\n                           \t\t\t\t<table class=\"table table-simple\">\r\n                                                  <tbody>\r\n                                                       <tr>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\">User1</a></td>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\">Hear Rate:146/85</a></td>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\"><i class=\"icon-time\"></i> 2 min</a></td>\r\n                                                       </tr>\r\n                                                       <tr>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\">User2</a></td>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\">Hear Rate:150/75</a></td>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\"><i class=\"icon-time\"></i> 4 min</a></td>\r\n                                                       </tr>\r\n                                                       <tr>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\">User3</a></td>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\">Hear Rate:120/60</a></td>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\"><i class=\"icon-time\"></i> 10 min</a></td>\r\n                                                       </tr>\r\n                                                       <tr>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\">User4</a></td>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\">Hear Rate:135/79</a></td>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\"><i class=\"icon-time\"></i> 15 min</a></td>\r\n                                                       </tr>\r\n                                                       <tr>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\">User5</a></td>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\">Hear Rate:180/95</a></td>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\"><i class=\"icon-time\"></i> 1 hr</a></td>\r\n                                                       </tr>\r\n                                                       <tr>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\">User6</a></td>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\">Hear Rate:155/85</a></td>\r\n                                                            <td class=\"truncate\"><a href=\"project.html\"><i class=\"icon-time\"></i> 1:15 hr</a></td>\r\n                                                       </tr>\r\n                                                  </tbody>\r\n                           \t\t\t\t</table>\r\n                           \t\t\t</div>\r\n                           \t\t</div>\r\n                           \t</div>\r\n                           </div>\r\n                      </section>\r\n            </div>\r\n\r\n            <div class=\"module-wrapper col-lg-4 col-md-12 col-sm-12 col-xs-12\">\r\n                      <section class=\"module module-has-footer module-projects-list\">\r\n                           <div class=\"module-inner\">\r\n                           \t<div class=\"module-heading\">\r\n                           \t\t<h3 class=\"module-title\">Recent Users List</h3>\r\n                           \t</div>\r\n\r\n                           \t<div class=\"module-content collapse in\" id=\"content-projects\" aria-expanded=\"true\" style=\"\">\r\n                           \t\t<div class=\"module-content-inner\">\r\n                           \t\t\t<div class=\"table-responsive\">\r\n                           \t\t\t\t<table class=\"table table-simple\">\r\n                           \t\t\t\t\t<tbody>\r\n                           \t\t\t\t\t\t<tr>\r\n                           \t\t\t\t\t\t\t<td class=\"truncate\"><a href=\"project.html\">Project lorem ipsum</a></td>\r\n                           \t\t\t\t\t\t\t<td>\r\n                           \t\t\t\t\t\t\t\t<div class=\"progress-container\">\r\n                           \t\t\t\t\t\t\t\t\t<span class=\"progress progress-sm\">\r\n                           \t\t\t\t\t\t\t\t\t\t\t<span class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"55\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 55%\">\r\n\r\n                           \t\t\t\t\t\t\t\t\t\t\t</span>\r\n                           \t\t\t\t\t\t\t\t\t</span>\r\n\r\n                           \t\t\t\t\t\t\t\t\t<span class=\"progress-pc hidden-xs\">55%</span>\r\n                           \t\t\t\t\t\t\t\t</div>\r\n\r\n                           \t\t\t\t\t\t\t</td>\r\n                           \t\t\t\t\t\t</tr>\r\n                           \t\t\t\t\t\t<tr>\r\n                           \t\t\t\t\t\t\t<td class=\"truncate\"><a href=\"project.html\">Mobile app for egestas vehicula</a></td>\r\n                           \t\t\t\t\t\t\t<td>\r\n                           \t\t\t\t\t\t\t\t<div class=\"progress-container\">\r\n                           \t\t\t\t\t\t\t\t\t<span class=\"progress progress-sm\">\r\n                           \t\t\t\t\t\t\t\t\t\t\t<span class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"110\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 110%\">\r\n\r\n                           \t\t\t\t\t\t\t\t\t\t\t</span>\r\n                           \t\t\t\t\t\t\t\t\t</span>\r\n\r\n                           \t\t\t\t\t\t\t\t\t<span class=\"progress-pc hidden-xs\">110%</span>\r\n                           \t\t\t\t\t\t\t\t</div>\r\n\r\n                           \t\t\t\t\t\t\t</td>\r\n                           \t\t\t\t\t\t</tr>\r\n                           \t\t\t\t\t\t<tr>\r\n                           \t\t\t\t\t\t\t<td class=\"truncate\"><a href=\"project.html\">Campaign for vivamus elementum fringilla mauris amet adipiscing</a></td>\r\n                           \t\t\t\t\t\t\t<td>\r\n                           \t\t\t\t\t\t\t\t<div class=\"progress-container\">\r\n                           \t\t\t\t\t\t\t\t\t<span class=\"progress progress-sm\">\r\n                           \t\t\t\t\t\t\t\t\t\t\t<span class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 25%\">\r\n\r\n                           \t\t\t\t\t\t\t\t\t\t\t</span>\r\n                           \t\t\t\t\t\t\t\t\t</span>\r\n\r\n                           \t\t\t\t\t\t\t\t\t<span class=\"progress-pc hidden-xs\">25%</span>\r\n                           \t\t\t\t\t\t\t\t</div>\r\n\r\n                           \t\t\t\t\t\t\t</td>\r\n                           \t\t\t\t\t\t</tr>\r\n                           \t\t\t\t\t\t<tr>\r\n                           \t\t\t\t\t\t\t<td class=\"truncate\"><a href=\"project.html\">Campaign for Etiam Sit amet</a></td>\r\n                           \t\t\t\t\t\t\t<td>\r\n                           \t\t\t\t\t\t\t\t<div class=\"progress-container\">\r\n                           \t\t\t\t\t\t\t\t\t<span class=\"progress progress-sm\">\r\n                           \t\t\t\t\t\t\t\t\t\t\t<span class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 95%\">\r\n\r\n                           \t\t\t\t\t\t\t\t\t\t\t</span>\r\n                           \t\t\t\t\t\t\t\t\t</span>\r\n\r\n                           \t\t\t\t\t\t\t\t\t<span class=\"progress-pc hidden-xs\">75%</span>\r\n                           \t\t\t\t\t\t\t\t</div>\r\n\r\n                           \t\t\t\t\t\t\t</td>\r\n                           \t\t\t\t\t\t</tr>\r\n                           \t\t\t\t\t\t<tr>\r\n                           \t\t\t\t\t\t\t<td class=\"truncate\"><a href=\"project.html\">Webapp for Pede Justo</a></td>\r\n                           \t\t\t\t\t\t\t<td>\r\n                           \t\t\t\t\t\t\t\t<div class=\"progress-container\">\r\n                           \t\t\t\t\t\t\t\t\t<span class=\"progress progress-sm\">\r\n                           \t\t\t\t\t\t\t\t\t\t\t<span class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 95%\">\r\n\r\n                           \t\t\t\t\t\t\t\t\t\t\t</span>\r\n                           \t\t\t\t\t\t\t\t\t</span>\r\n\r\n                           \t\t\t\t\t\t\t\t\t<span class=\"progress-pc hidden-xs\">95%</span>\r\n                           \t\t\t\t\t\t\t\t</div>\r\n\r\n                           \t\t\t\t\t\t\t</td>\r\n                           \t\t\t\t\t\t</tr>\r\n                           \t\t\t\t\t</tbody>\r\n                           \t\t\t\t</table>\r\n                           \t\t\t</div>\r\n                           \t\t</div>\r\n                           \t</div>\r\n                           </div>\r\n\r\n                      </section>\r\n            </div>\r\n"

/***/ }),

/***/ 406:
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <!-- Main content -->\n    <section class=\"content\">\n            <div id=\"system-message-container\">\n\t</div>\n\n     <div>\n          <div>\n               <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12\">\n\n<!-- start -->\n<div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                         <h4 class=\"panel-title\">Device List</h4>\n                    </div>\n                    <div class=\"panel-body\">\n                         <div class=\"form-group\">\n                              <table class=\"table table-bordered\">\n                                  <thead>\n                                     <tr>\n                                          <th>#</th>\n                                          <th>Name</th>\n                                          <th>Type</th>\n                                          <th>In Stock</th>\n                                          <th>Supplier Name</th>\n                                          <th>Supplier City</th>\n                                          <th>Status</th>\n                                     </tr>\n                                  </thead>\n                                  <tbody>\n                                     <tr  *ngFor=\"let device of devices; let i = index\" [attr.data-index]=\"i\" (click)=\"openDeviceModel(i)\">\n                                          <td>{{(i+1)}}</td>\n                                          <td>{{device.device_name}}</td>\n                                          <td>{{device.data_type}}</td>\n                                          <td>{{device.stock_availability}}</td>\n                                          <td>{{device.supplier_name}}</td>\n                                          <td>{{device.supplier_city}}</td>\n                                          <td>\n                                               <a *ngIf=\"device.status==1\" title=\"Enable\">\n                                                    <span><i class=\"fa fa-toggle-on fa-2x\" aria-hidden=\"true\"></i></span>\n                                              </a>\n                                               <a *ngIf=\"device.status==0\" title=\"Disable\">\n                                                   <span><i class=\"fa fa-toggle-off fa-2x\" aria-hidden=\"true\"></i></span>\n                                              </a>\n\n                                          </td>\n                                     </tr>\n                                  </tbody>\n                              </table>\n\n                         </div>\n                    </div>\n</div>\n\n<!-- end -->\n\n\n\n                    </div>\n               </div>\n          </div>\n     </div>\n\n    </section>\n    <!-- /.content -->\n  </div>\n\n\n\n  <!-- Modal -->\n              <div class=\"modal\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                <div class=\"modal-dialog\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\"><i class=\"text-danger fa fa-times\"></i></button>\n                      <h4 class=\"modal-title\" id=\"myModalLabel\"><i class=\"text-muted fa fa-info-circle\"></i> Device Details </h4>\n                    </div>\n                    <div class=\"modal-body\">\n\n<div class=\"col-md-12 col-md-offset-0\">\n                            <form class=\"form-horizontal\" role=\"form\">\n                              <fieldset>\n                                <!-- Text input-->\n                                <div class=\"form-group\">\n                                  <label class=\"col-sm-4 control-label\" for=\"textinput\">Name</label>\n                                  <div class=\"col-sm-8\">\n                                    <input type=\"text\" placeholder=\"Name\" class=\"form-control\" value=\"{{deviceModel.device_name}}\" readonly=\"readonly\" disabled=\"disabled\">\n                                  </div>\n                                </div>\n\n                                <!-- Text input-->\n                                <div class=\"form-group\">\n                                  <label class=\"col-sm-4 control-label\" for=\"textinput\">Type</label>\n                                  <div class=\"col-sm-8\">\n                                    <input type=\"text\" placeholder=\"Type\" class=\"form-control\" value=\"{{deviceModel.data_type}}\" readonly=\"readonly\" disabled=\"disabled\">\n                                  </div>\n                                </div>\n\n                                <!-- Text input-->\n                                <div class=\"form-group\">\n                                  <label class=\"col-sm-4 control-label\" for=\"textinput\">Device ID</label>\n                                  <div class=\"col-sm-8\">\n                                    <input type=\"text\" placeholder=\"Device ID\" class=\"form-control\" value=\"{{deviceModel.device_id}}\" readonly=\"readonly\" disabled=\"disabled\">\n                                  </div>\n                                </div>\n\n                                <!-- Text input-->\n                                <div class=\"form-group\">\n                                  <label class=\"col-sm-4 control-label\" for=\"textinput\">Device Version</label>\n                                  <div class=\"col-sm-8\">\n                                    <input type=\"text\" placeholder=\"Device Version\" class=\"form-control\" value=\"{{deviceModel.version}}\" readonly=\"readonly\" disabled=\"disabled\">\n                                  </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                  <label class=\"col-sm-4 control-label\" for=\"textinput\">In Stock</label>\n                                  <div class=\"col-sm-8\">\n                                    <input type=\"text\" placeholder=\"In Stock\" class=\"form-control\" value=\"{{deviceModel.stock_availability}}\" readonly=\"readonly\" disabled=\"disabled\">\n                                  </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                  <label class=\"col-sm-4 control-label\" for=\"textinput\">Description</label>\n                                  <div class=\"col-sm-8\">\n                                    <textarea placeholder=\"Supplier City\" row=\"10\" col=\"10\" class=\"form-control\" value=\"{{deviceModel.description}}\" readonly=\"readonly\" disabled=\"disabled\"></textarea>\n                                  </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                  <label class=\"col-sm-4 control-label\" for=\"textinput\">Communication Type</label>\n                                  <div class=\"col-sm-8\">\n                                    <input type=\"text\" placeholder=\"Supplier City\" class=\"form-control\" value=\"{{deviceModel.communication_type}}\" readonly=\"readonly\" disabled=\"disabled\">\n                                  </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                  <label class=\"col-sm-4 control-label\" for=\"textinput\">Supplier Name</label>\n                                  <div class=\"col-sm-8\">\n                                    <input type=\"text\" placeholder=\"Supplier Name\" class=\"form-control\" value=\"{{deviceModel.supplier_name}}\" readonly=\"readonly\" disabled=\"disabled\">\n                                  </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                  <label class=\"col-sm-4 control-label\" for=\"textinput\">Supplier City</label>\n                                  <div class=\"col-sm-8\">\n                                    <input type=\"text\" placeholder=\"Supplier City\" class=\"form-control\" value=\"{{deviceModel.supplier_city}}\" readonly=\"readonly\" disabled=\"disabled\">\n                                  </div>\n                                </div>\n\n                                <div class=\"form-group\">\n                                  <label class=\"col-sm-4 control-label\" for=\"textinput\">Device Status</label>\n                                  <div class=\"col-sm-8 dtxt\">\n                                       {{(deviceModel.status==1?'Enable':'Disable')}}\n                                  </div>\n                                </div>\n\n                                <div class=\"form-group\" *ngIf=\"deviceModel.info_url!=''\">\n                                  <div class=\"col-sm-12 text-right\"><a href=\"{{deviceModel.info_url}}\" target=\"_blank\">More Details</a></div>\n                                </div>\n\n                                <!--<div class=\"form-group\">\n                                  <div class=\"col-sm-offset-2 col-sm-10\">\n                                    <div class=\"pull-right\">\n                                      <button type=\"submit\" class=\"btn btn-default\">Cancel</button>\n                                      <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n                                    </div>\n                                  </div>\n                             </div>-->\n\n                              </fieldset>\n                            </form>\n                       </div>\n\n                      <div class=\"clearfix\"></div>\n                     <p class=\"open_info hide\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>\n                    </div>\n\n                </div>\n              </div>\n              </div>\n  <!-- fim Modal-->\n"

/***/ }),

/***/ 407:
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <!-- Main content -->\n    <section class=\"content\">\n            <div id=\"system-message-container\">\n\t</div>\n\n     <div>\n          <div>\n               <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12\">\n\n<!-- start -->\n<div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                         <h4 class=\"panel-title\">Facilitator List</h4>\n                    </div>\n                    <div class=\"panel-body\">\n                         <div class=\"form-group\">\n                              Coming Soon...\n\n                         </div>\n                    </div>\n</div>\n\n<!-- end -->\n\n\n\n                    </div>\n               </div>\n          </div>\n     </div>\n\n    </section>\n    <!-- /.content -->\n  </div>\n"

/***/ }),

/***/ 408:
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer navbar-default navbar-fixed-bottom\" *ngIf=\"authService.loggedIn()\">\n     <strong>&copy; 2017 Welloculus. Developed by <a href=\"http://www.transility.com\" target=\"_blank\">Transility</a>.</strong>\n</footer>\n\n<footer class=\"main-footer navbar-default navbar-fixed-bottom loginfooter\" *ngIf=\"!authService.loggedIn()\">\n  <strong>&copy; 2017 Welloculus. Developed by <a href=\"http://www.transility.com\" target=\"_blank\">Transility</a>.</strong>\n</footer>\n"

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\" id=\"navbar\">\n        <a class=\"navbar-brand\" href=\"#\">\n             <img alt=\"Welloculus\" class=\"image-logo\" src=\"./assets/img/logo/logo.png\">\n        </a>\n        <ul class=\"nav navbar-nav pull-right\" *ngIf=\"authService.loggedIn()\">\n          <li class=\"dropdown\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n              <i class=\"icon-envelope\"></i>\n              Notifications\n              <span class=\"badge\">5</span>\n              <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu notification_dropdown\">\n                 <li>\n                       <span>User1</span>\n                       <span>Heart Rate:174/64</span>\n                       <span>1 Min</span>\n                 </li>\n                 <li>\n                       <span>User2</span>\n                       <span>Heart Rate:174/64</span>\n                       <span>1 Min</span>\n                 </li>\n                 <li>\n                       <span>User3</span>\n                       <span>Heart Rate:174/64</span>\n                       <span>1 Min</span>\n                 </li>\n                 <li>\n                       <span>User4</span>\n                       <span>Heart Rate:174/64</span>\n                       <span>1 Min</span>\n                 </li>\n            </ul>\n          </li>\n          <li class=\"dropdown user\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n              <i class=\"icon-user\"></i>\n              <strong>Saurav</strong>\n              <b class=\"caret\"></b>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li>\n                <a [routerLink]=\"['/profile']\">Edit Profile</a>\n              </li>\n              <li class=\"divider\"></li>\n              <li>\n                <a (click)=\"onLogoutClick()\">Sign out</a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n"

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

module.exports = "<h1>home</h1>\n"

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

module.exports = " <div class=\"content-wrapper\">\n      <flash-messages></flash-messages>\n\n      <!-- Main content -->\n      <section class=\"content\">\n           <div id=\"regContainer\" class=\"container\">\n        <div class=\"row\">\n\t\t\t<div class=\"col-md-6 col-md-offset-3\">\n                    <h3>Welloculus cockpit Login!</h3>\n\t\t\t\t<div class=\"panel panel-login\">\n\t\t\t\t\t<div class=\"panel-heading\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"active\" id=\"login-form-link\">Login</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<hr>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"panel-body\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\n\t\t\t\t\t\t\t\t<form id=\"login-form\" (submit)=\"onLoginSubmit()\" role=\"form\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"username\" id=\"username\" [(ngModel)]=\"username\"  tabindex=\"1\" class=\"form-control\" placeholder=\"Username\" value=\"\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" name=\"password\" id=\"password\" [(ngModel)]=\"password\" tabindex=\"2\" class=\"form-control\" placeholder=\"Password\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-6 col-sm-offset-3\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"submit\" name=\"login-submit\" id=\"login-submit\" tabindex=\"4\" class=\"form-control btn btn-login\" value=\"Log In\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n      </section>\n\n</div>\n"

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <!-- Main content -->\n    <section class=\"content\">\n            <div id=\"system-message-container\">\n\t</div>\n\n     <div>\n          <div>\n               <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12\">\n\n<!-- start -->\n<div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                         <h4 class=\"panel-title\">Alert List</h4>\n                    </div>\n                    <div class=\"panel-body\">\n                         <div class=\"form-group\">\n                              Coming Soon...\n\n                         </div>\n                    </div>\n</div>\n\n<!-- end -->\n\n\n\n                    </div>\n               </div>\n          </div>\n     </div>\n\n    </section>\n    <!-- /.content -->\n  </div>\n"

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

module.exports = "<div style=\"min-height: 595px;\">\n   <!-- Main content -->\n    <section class=\"content\">\n            <div id=\"system-message-container\">\n\t</div>\n<!-- Small boxes (Stat box) -->\n<div ng-app=\"providerApp\" class=\"ng-scope\">\n<!-- ngView: undefined --><div>\n      <!-- ngIf: loading==true -->\n\n\n<div class=\"row\">\n     <div class=\"col-xs-12 col-sm-9\">\n          <form class=\"form-horizontal ng-pristine ng-valid\">\n               <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                         <h4 class=\"panel-title\">User info</h4>\n                    </div>\n                    <div class=\"panel-body\">\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">Location</label>\n                              <div class=\"col-sm-10\">\n                                   <select class=\"form-control\">\n                                        <option value=\"Select country\">Select country</option>\n                                        <option selected=\"\" value=\"India\">India</option>\n                                        <option value=\"US\">US</option>\n                                        <option value=\"Canda\">Canda</option>\n                                        <option value=\"Australia\">Australia</option>\n                                   </select>\n                              </div>\n                         </div>\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">Name</label>\n                              <div class=\"col-sm-10\"> <input type=\"text\" class=\"form-control\" name=\"name\" value=\"{{user.name}}\"></div>\n                         </div>\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">Username</label>\n                              <div class=\"col-sm-10\">\n                                   <input type=\"text\" class=\"form-control\" name=\"username\" disabled=\"\" value=\"{{user.user_type}}\">\n                              </div>\n                         </div>\n                    </div>\n               </div>\n               <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\">\n                         <h4 class=\"panel-title\">Contact info</h4>\n                    </div>\n                    <div class=\"panel-body\">\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">Work number</label>\n                              <div class=\"col-sm-10\">\n                                   <input type=\"tel\" class=\"form-control\">\n                              </div>\n                         </div>\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">Mobile number</label>\n                              <div class=\"col-sm-10\">\n                                   <input type=\"tel\" class=\"form-control\">\n                              </div>\n                         </div>\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">E-mail address</label>\n                              <div class=\"col-sm-10\">\n                                   <input type=\"email\" class=\"form-control\" value=\"provider@abc.com\">\n                              </div>\n                         </div>\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">Work address</label>\n                              <div class=\"col-sm-10\">\n                                   <textarea rows=\"3\" class=\"form-control\"></textarea>\n                              </div>\n                         </div>\n                    </div>\n               </div>\n               <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\"><h4 class=\"panel-title\">Security</h4></div>\n                    <div class=\"panel-body\">\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">Current password</label>\n                              <div class=\"col-sm-10\">\n                                   <input type=\"password\" class=\"form-control\">\n                              </div>\n                         </div>\n                         <div class=\"form-group\">\n                              <label class=\"col-sm-2 control-label\">New password</label>\n                              <div class=\"col-sm-10\">\n                                   <input type=\"password\" class=\"form-control\">\n                              </div>\n                         </div>\n                         <div class=\"form-group\">\n                              <div class=\"col-sm-10 col-sm-offset-2\">\n                                   <div class=\"checkbox\">\n                                        <input type=\"checkbox\" id=\"checkbox_1\">\n                                        <label for=\"checkbox_1\">Make this account public</label>\n                                   </div>\n                              </div>\n                         </div>\n                         <div class=\"form-group\">\n                              <div class=\"col-sm-10 col-sm-offset-2\">\n                                   <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                                   <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\n                              </div>\n                         </div>\n                    </div>\n               </div>\n          </form>\n     </div>\n     <div class=\"col-xs-12 col-sm-3\">\n          <div class=\"profile__contact-info\">\n               <div class=\"profile__contact-info-item\">\n                    <div class=\"profile__contact-info-icon\"> <i class=\"fa fa-comment\"></i></div>\n                    <div class=\"profile__contact-info-body\"><h5 class=\"profile__contact-info-heading\"> Quick tip</h5> You can change your password and update your profile directly here.</div>\n               </div>\n          </div>\n     </div>\n</div>\n\n\n</div>\n\n    <div class=\"container ng-scope\">\n      <!-- Modal -->\n      <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n        <div class=\"modal-dialog modal-sm\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n              <h4 class=\"modal-title\" id=\"pop-title\">Modal Header</h4>\n            </div>\n            <div class=\"modal-body\">\n              <p id=\"pop-body\">This is a small modal.</p>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-primary\" id=\"pop-proceed\" value=\"yes\">PROCEED</button>\n              <button type=\"button\" class=\"btn btn-default\" id=\"pop-cancel\" value=\"no\">CANCEL</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n</div>\n\n    </section>\n    <!-- /.content -->\n  </div>\n"

/***/ }),

/***/ 414:
/***/ (function(module, exports) {

module.exports = "<div>\n    <!-- Main content -->\n    <section class=\"content\">\n            <div id=\"system-message-container\">\n\t</div>\n\n     <div>\n          <div>\n               <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-12\">\n\n<!-- start -->\n<div class=\"row\">\n     <!--<div class=\"col-md-5 panel panel-default\">\n          <div style=\"display: block\">\n          <h3 class=\"tac\">Heart Chart <br>({{start_date|date}} - {{end_date|date}})</h3>\n            <canvas baseChart\n                    [data]=\"pieChartData\"\n                    [labels]=\"pieChartLabels\"\n                    [colors]=\"pieChartColors\"\n                    [chartType]=\"pieChartType\"\n                    (chartHover)=\"chartHovered($event)\"\n                    (chartClick)=\"chartClicked($event)\"></canvas>\n          </div>\n     </div> -->\n     <div class=\"col-md-5 panel panel-default rdiv\">\n       <div class=\"panelHeader\">\n         <div class=\"panelHeader__title\">\n              <h3 class=\"tac\">{{title1}} <br>({{start_date|date}} - {{end_date|date}})</h3>\n         </div>\n       </div>\n\n       <div class=\"panelBody embed-responsive embed-responsive-4by3\" *ngIf=\"iframe1_url\">\n          <iframe id=\"abc\" [src]=\"iframe1_url\" height=\"600\" width=\"800\"></iframe>\n       </div>\n     </div>\n\n     <div class=\"col-md-1\"></div>\n     <div class=\"col-md-5 panel panel-default rdiv\">\n       <div class=\"panelHeader\">\n         <div class=\"panelHeader__title\">\n           <h3 class=\"tac\">{{title2}} <br>({{start_date|date}} - {{end_date|date}})</h3>\n         </div>\n       </div>\n\n       <div class=\"panelBody embed-responsive embed-responsive-4by3\">\n<iframe [src]=\"iframe2_url\" height=\"600\" width=\"800\"></iframe>\n       </div>\n     </div>\n\n<!--<div>\n     <div class=\"col-sm-offset-1 col-md-5 panel panel-default\">\n    <div style=\"display: block;\">\n    <h3 class=\"tac\">Blood Pressure Chart <br>({{start_date|date}} - {{end_date|date}})</h3>\n    <canvas baseChart width=\"400\" height=\"400\"\n                [datasets]=\"lineChartData\"\n                [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\"\n                [colors]=\"lineChartColors\"\n                [legend]=\"lineChartLegend\"\n                [chartType]=\"lineChartType\"\n                (chartHover)=\"chartHovered($event)\"\n                (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>\n  </div>\n</div>\n-->\n</div>\n<div class=\"row\">\n     <div class=\"col-md-5 panel panel-default rdiv\">\n            <div class=\"panelHeader\">\n              <div class=\"panelHeader__title\">\n                <h3 class=\"tac\">{{title3}} <br>({{start_date|date}} - {{end_date|date}})</h3>\n              </div>\n            </div>\n\n            <div class=\"panelBody embed-responsive embed-responsive-4by3\">\n\n<iframe [src]=\"iframe3_url\" height=\"600\" width=\"800\"></iframe>\n\n            </div>\n      </div>\n      <div class=\"col-md-1\"></div>\n\n      <div class=\"col-md-5 panel panel-default rdiv\">\n       <div class=\"panelHeader\">\n         <div class=\"panelHeader__title\">\n           <h3 class=\"tac\">{{title4}} <br>({{start_date|date}} - {{end_date|date}})</h3>\n         </div>\n       </div>\n\n       <div class=\"panelBody embed-responsive embed-responsive-4by3\">\n<iframe [src]=\"iframe4_url\" height=\"600\" width=\"800\"></iframe>\n       </div>\n     </div>\n\n</div>\n\n<div class=\"row\">\n     <div class=\"col-md-5 panel panel-default rdiv\">\n            <div class=\"panelHeader\">\n              <div class=\"panelHeader__title\">\n                <h3 class=\"tac\">{{title5}} <br>({{start_date|date}} - {{end_date|date}})</h3>\n              </div>\n            </div>\n\n            <div class=\"panelBody embed-responsive embed-responsive-4by3\">\n\n<iframe [src]=\"iframe5_url\" height=\"600\" width=\"800\"></iframe>\n\n            </div>\n      </div>\n      <div class=\"col-md-1\"></div>\n\n      <div class=\"col-md-5 panel panel-default rdiv\">\n       <div class=\"panelHeader\">\n         <div class=\"panelHeader__title\">\n           <h3 class=\"tac\">{{title6}} <br>({{start_date|date}} - {{end_date|date}})</h3>\n         </div>\n       </div>\n\n       <div class=\"panelBody embed-responsive embed-responsive-4by3\">\n<iframe [src]=\"iframe6_url\" height=\"600\" width=\"800\"></iframe>\n       </div>\n     </div>\n\n</div>\n\n<div class=\"row\">\n     <div class=\"col-md-5 panel panel-default rdiv\">\n            <div class=\"panelHeader\">\n              <div class=\"panelHeader__title\">\n                <h3 class=\"tac\">{{title7}} <br>({{start_date|date}} - {{end_date|date}})</h3>\n              </div>\n            </div>\n\n            <div class=\"panelBody embed-responsive embed-responsive-4by3\">\n\n<iframe [src]=\"iframe7_url\" height=\"600\" width=\"800\"></iframe>\n\n            </div>\n      </div>\n      <div class=\"col-md-1\"></div>\n\n      <div class=\"col-md-5 panel panel-default rdiv\">\n       <div class=\"panelHeader\">\n         <div class=\"panelHeader__title\">\n           <h3 class=\"tac\">{{title8}} <br>({{start_date|date}} - {{end_date|date}})</h3>\n         </div>\n       </div>\n\n       <div class=\"panelBody embed-responsive embed-responsive-4by3\">\n<iframe [src]=\"iframe8_url\" height=\"600\" width=\"800\"></iframe>\n       </div>\n     </div>\n\n</div>\n\n<!-- end -->\n\n\n\n                    </div>\n               </div>\n          </div>\n     </div>\n\n    </section>\n    <!-- /.content -->\n  </div>\n"

/***/ }),

/***/ 415:
/***/ (function(module, exports) {

module.exports = "<aside class=\"control-sidebar control-sidebar-dark\">\n  <!-- Create the tabs -->\n  <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n   <li><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n   <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\n  </ul>\n  <!-- Tab panes -->\n  <div class=\"tab-content\">\n   <!-- Home tab content -->\n   <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\n      <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n      <ul class=\"control-sidebar-menu\">\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\n            <div class=\"menu-info\">\n              <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\n              <p>Will be 23 on April 24th</p>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"menu-icon fa fa-user bg-yellow\"></i>\n\n            <div class=\"menu-info\">\n              <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\n\n              <p>New phone +1(800)555-1234</p>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\n\n            <div class=\"menu-info\">\n              <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\n\n              <p>nora@example.com</p>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\n\n            <div class=\"menu-info\">\n              <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\n\n              <p>Execution time 5 seconds</p>\n            </div>\n          </a>\n        </li>\n      </ul>\n      <!-- /.control-sidebar-menu -->\n\n      <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n      <ul class=\"control-sidebar-menu\">\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Custom Template Design\n              <span class=\"label label-danger pull-right\">70%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Update Resume\n              <span class=\"label label-success pull-right\">95%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Laravel Integration\n              <span class=\"label label-warning pull-right\">50%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\n            </div>\n          </a>\n        </li>\n        <li>\n          <a href=\"javascript:void(0)\">\n            <h4 class=\"control-sidebar-subheading\">\n              Back End Framework\n              <span class=\"label label-primary pull-right\">68%</span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\n            </div>\n          </a>\n        </li>\n      </ul>\n      <!-- /.control-sidebar-menu -->\n\n   </div>\n   <!-- /.tab-pane -->\n   <!-- Stats tab content -->\n   <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\n   <!-- /.tab-pane -->\n   <!-- Settings tab content -->\n   <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n      <form method=\"post\">\n        <h3 class=\"control-sidebar-heading\">General Settings</h3>\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Report panel usage\n            <input type=\"checkbox\" class=\"pull-right\" checked>\n          </label>\n\n          <p>\n            Some information about this general settings option\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Allow mail redirect\n            <input type=\"checkbox\" class=\"pull-right\" checked>\n          </label>\n\n          <p>\n            Other sets of options are available\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Expose author name in posts\n            <input type=\"checkbox\" class=\"pull-right\" checked>\n          </label>\n\n          <p>\n            Allow the user to show his name in blog posts\n          </p>\n        </div>\n        <!-- /.form-group -->\n\n        <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Show me as online\n            <input type=\"checkbox\" class=\"pull-right\" checked>\n          </label>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Turn off notifications\n            <input type=\"checkbox\" class=\"pull-right\">\n          </label>\n        </div>\n        <!-- /.form-group -->\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Delete chat history\n            <a href=\"javascript:void(0)\" class=\"text-red pull-right\"><i class=\"fa fa-trash-o\"></i></a>\n          </label>\n        </div>\n        <!-- /.form-group -->\n      </form>\n   </div>\n   <!-- /.tab-pane -->\n  </div>\n</aside>\n\n<div class=\"control-sidebar-bg\"></div>\n"

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

module.exports = "<section id=\"sidebar\">\n          <i class=\"icon-align-justify icon-large\" id=\"toggle\"></i>\n          <ul id=\"dock\">\n            <li class=\"launcher\" *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <i class=\"icon-dashboard\"></i>\n              <a [routerLink]=\"['/dashboard']\">Dashboard</a>\n            </li>\n            <li class=\"launcher\" *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <i class=\"icon-tablet\"></i>\n              <a [routerLink]=\"['/devices']\">Devices</a>\n            </li>\n            <li class=\"launcher\" *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <i class=\"icon-group\"></i>\n              <a [routerLink]=\"['/users']\">Users</a>\n            </li>\n            <li class=\"launcher\" *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <i class=\"icon-sitemap\"></i>\n              <a [routerLink]=\"['/facilities']\">Facilities</a>\n            </li>\n            <li class=\"launcher\" *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <i class=\"icon-bell\"></i>\n              <a [routerLink]=\"['/manage-alerts']\">Manage Alerts</a>\n            </li>\n            <li class=\"launcher\" *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <i class=\"icon-bar-chart\"></i>\n              <a [routerLink]=\"['/reports']\">Reports</a>\n            </li>\n            <li class=\"launcher\" *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <i class=\"icon-user\"></i>\n              <a [routerLink]=\"['/profile']\">Profile</a>\n            </li>\n            <li class=\"launcher\" *ngIf=\"authService.loggedIn()\"  [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\n              <i class=\"icon-signout\"></i>\n              <a (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n            </li>\n          </ul>\n</section>\n\n<!-- tools section. contains the breadcrumb -->\n<section id=\"tools\">\n          <ul class=\"breadcrumb\" id=\"breadcrumb\">\n            <li class=\"title\">{{globals.title}}</li>\n          </ul>\n</section>\n"

/***/ }),

/***/ 417:
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n    <!-- Main content -->\r\n    <section class=\"content\">\r\n            <div id=\"system-message-container\">\r\n\t</div>\r\n\r\n     <div>\r\n          <div>\r\n               <div class=\"row\">\r\n                    <div class=\"col-xs-12 col-sm-12\">\r\n\r\n<!-- start -->\r\n<div class=\"panel panel-default\">\r\n                    <div class=\"panel-heading\">\r\n                         <h4 class=\"panel-title\">Users List</h4>\r\n                    </div>\r\n                    <div class=\"panel-body\">\r\n                         <div class=\"form-group\">\r\n                              <table class=\"table table-striped table-bordered\">\r\n                                  <thead>\r\n                                     <tr>\r\n                                          <th>#</th>\r\n                                          <th>First Name</th>\r\n                                          <th>Middle Name</th>\r\n                                          <th>Last Name</th>\r\n                                          <th>Contact</th>\r\n                                          <th>Address</th>\r\n                                          <th>Email</th>\r\n                                          <th>Gender</th>\r\n                                     </tr>\r\n                                  </thead>\r\n                                  <tbody>\r\n                                     <tr *ngFor=\"let user of users; let i = index\" [attr.data-index]=\"i\">\r\n                                          <td>{{(i+1)}}</td>\r\n                                          <td>{{user.first_name}}</td>\r\n                                          <td>{{user.middle_name}}</td>\r\n                                          <td>{{user.last_name}}</td>\r\n                                          <td>{{\r\n                                               user.contact_numbers[0].primary.concat(((user.contact_numbers[0].secondary!=\"\")?(\", \"+user.contact_numbers[0].secondary):\"\"))\r\n                                          }}</td>\r\n                                          <td>{{\r\n                                               ((user.address[0].line1!=undefined && user.address[0].line1!=\"\")?(\r\n                                               user.address[0].line1.concat(((user.address[0].line2!=undefined && user.address[0].line2!=\"\")?(\", \"+user.address[0].line2):\"\"))\r\n                                               .concat((user.address[0].city!=\"\"?(\", \"+user.address[0].city):\"\"))\r\n                                               .concat((user.address[0].state!=\"\"?(\", \"+user.address[0].state):\"\"))\r\n                                               .concat(((user.address[0].zip!=undefined && user.address[0].zip!=\"\")?(\", \"+user.address[0].zip):\"\"))\r\n                                               ):\"\")\r\n                                          }}</td>\r\n                                          <td>{{user.email}}</td>\r\n                                          <td>{{(user.gender=='M'?'Male':'Female')}}</td>\r\n                                     </tr>\r\n                                  </tbody>\r\n                              </table>\r\n\r\n                         </div>\r\n                    </div>\r\n</div>\r\n\r\n<!-- end -->\r\n\r\n\r\n\r\n                    </div>\r\n               </div>\r\n          </div>\r\n     </div>\r\n\r\n    </section>\r\n    <!-- /.content -->\r\n  </div>\r\n"

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(220);


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppConfig = (function () {
    function AppConfig(http) {
        this.http = http;
        this.config = {
            "host": "192.168.146.54",
            "port": "80",
            "auth_token": "Basic c3VwZXJ1c2VyOnN1cGVydXNlcg=="
        };
        this.env = null;
    }
    /**
     * Use to get the data found in the second file (config file)
     */
    AppConfig.prototype.getConfig = function (key) {
        return this.config[key];
    };
    /**
     * Use to get the data found in the first file (env file)
     */
    AppConfig.prototype.getEnv = function (key) {
        return this.env[key];
    };
    /**
    * This method:
    *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
    *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
    */
    AppConfig.prototype.load = function () {
        return {
            "host": "192.168.146.51",
            "port": "8181"
        };
    };
    return AppConfig;
}());
AppConfig = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AppConfig);

var _a;
//# sourceMappingURL=app.config.js.map

/***/ })

},[457]);
//# sourceMappingURL=main.bundle.js.map