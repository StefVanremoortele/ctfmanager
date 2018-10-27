(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! . */ "./src/app/index.ts");
/* harmony import */ var _challenges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./challenges */ "./src/app/challenges/index.ts");
/* harmony import */ var _hackathon_hackathon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hackathon/hackathon.component */ "./src/app/hackathon/hackathon.component.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'home', component: _home__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'hackathons', component: _hackathon_hackathon_component__WEBPACK_IMPORTED_MODULE_4__["HackathonComponent"] },
    { path: 'challenges', component: _challenges__WEBPACK_IMPORTED_MODULE_3__["ChallengesComponent"] },
    { path: 'unauthorized', component: ___WEBPACK_IMPORTED_MODULE_2__["UnauthorizedComponent"] },
    { path: '**', component: ___WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

// export const routing = RouterModule.forRoot(routes);
// // import { NgModule } from '@angular/core';
// // import { RouterModule, Routes } from '@angular/router';
// // // import { AuthService AuthGuardService } from './shared';
// import { NgModule }             from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { NotFoundComponent, UnauthorizedComponent } from './core';
// // export const authProviders = [
// // //   AuthService,
// // //   AuthGuardService
// // ];
// @NgModule({
//   exports: [ RouterModule ],s
//   imports: [ RouterModule.forRoot(routes) ]
// })
// export class AppRoutingModule {}


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n  <!-- Logged out view -->\n  <div *ngIf=\"!_userService.token\">\n    <h2>Welcome to ctfman</h2>\n    <h3>Please log in</h3>\n    <div>\n      <div class=\"col-sm-4\">\n        <label>Username:</label><br />\n        <input type=\"text\" name=\"login-username\" [(ngModel)]=\"user.username\">\n        <span *ngFor=\"let error of _userService.errors.username\"><br />{{ error }}</span></div>\n      <div class=\"col-sm-4\">\n        <label>Password:</label><br />\n        <input type=\"password\" name=\"login-password\" [(ngModel)]=\"user.password\">\n        <span *ngFor=\"let error of _userService.errors.password\"><br />{{ error }}</span>\n      </div>\n      <div class=\"col-sm-4\">\n        <button (click)=\"login()\" class=\"btn btn-primary\">Log In</button>&nbsp;\n      </div>\n    </div>\n    <h2>or register</h2>\n    <div class=\"col-sm-4\">\n      <label>Username:</label><br />\n      <input type=\"text\" name=\"register-username\" [(ngModel)]=\"newUser.username\">\n    </div>\n    <div class=\"col-sm-4\">\n      <label>Email:</label><br />\n      <input type=\"text\" name=\"register-email\" [(ngModel)]=\"newUser.email\">\n    </div>\n    <div class=\"col-sm-4\">\n      <label>Password:</label><br />\n      <input type=\"password\" name=\"register-password\" [(ngModel)]=\"newUser.password\">\n    </div>\n    <div class=\"col-sm-4\">\n      <button (click)=\"register()\" class=\"btn btn-primary\">Register</button>&nbsp;\n    </div>\n  </div>\n\n  <!-- Logged in view -->\n  <div *ngIf=\"_userService.token\">\n    <div class=\"float-right\">Hi, {{ _userService.username }}.<br />\n\n      <button mat-button color=\"primary\" (click)=\"openAccount()\" matTooltip=\"\n          under construction\">\n        <mat-icon svgIcon=\"account\"></mat-icon>\n        Account\n      </button>\n      <!-- <button (click)=\"logout()\" class=\"btn btn-primary pull-right\">Log out</button>&nbsp; -->\n    </div>\n    <div class=\"col-sm-10\">\n      <nav class='navigation'>\n        <h3>Menu</h3>\n        <ul>\n          <li><a routerLink=\"home\">\n              <mat-icon>home</mat-icon>\n            </a></li>\n          <li><a routerLink=\"hackathons\">View hackathons</a></li>\n          <li><a routerLink=\"challenges\">View Challenges</a></li>\n        </ul>\n      </nav>\n      <hr>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n<!-- \n    \n    <div class=\"row\" *ngIf=\"!_userService.token\">\n      <div class=\"col-sm-4\">\n        <label>Username:</label><br />\n        <input type=\"text\" name=\"login-username\" [(ngModel)]=\"user.username\">\n        <span *ngFor=\"let error of _userService.errors.username\"><br />{{ error }}</span></div>\n        <div class=\"col-sm-4\">\n          <label>Password:</label><br />\n          <input type=\"password\" name=\"login-password\" [(ngModel)]=\"user.password\">\n          <span *ngFor=\"let error of _userService.errors.password\"><br />{{ error }}</span>\n        </div>\n        <div class=\"col-sm-4\">\n          <button (click)=\"login()\" class=\"btn btn-primary\">Log In</button>&nbsp;\n  </div>\n  <div class=\"col-sm-12\">\n    <span *ngFor=\"let error of _userService.errors.non_field_errors\">{{ error }}<br /></span>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"_userService.token\">\n  <div class=\"col-sm-12\">You are logged in as {{ _userService.username }}.<br />\n    Token Expires: {{ _userService.token_expires }}<br />\n    <button (click)=\"refreshToken()\" class=\"btn btn-primary\">Refresh Token</button>&nbsp;\n    <button (click)=\"logout()\" class=\"btn btn-primary\">Log Out</button>&nbsp;\n  </div>\n</div> -->\n<!-- \n<h2 class=\"mt-3\">Micro Blog Posts</h2>\n<div *ngFor=\"let post of posts\">\n  <div class=\"row mb-3\">\n    <label class=\"col-md-2\">By:</label>\n    <div class=\"col-md-2 mb-1\">{{ post.user }}</div>\n    <label class=\"col-md-2\">Date:</label>\n    <div class=\"col-md-6\">{{ post.date }}</div>\n    <div class=\"col-md-12\">{{ post.body }}</div>\n  </div>\n</div>\n\n<h3>Create a new post:</h3>\n\n<div class=\"row mb-1\">\n  <label class=\"col-md-3\">Enter your post:</label>\n  <div class=\"col-md-9 mb-1\"><input type=\"text\" name=\"body\" [(ngModel)]=\"new_post.body\"></div>\n  <div class=\"col-md-2 offset-3\">\n    <button (click)=\"createPost()\" class=\"btn btn-primary\">Save</button>\n  </div>\n</div> -->\n\n<!-- \n\n<h3>Register new user</h3>\n\n  <div>\n    <label for=\"user-name\">username</label>\n    <input type=\"text\" name=\"username\" [(ngModel)]=\"newUser.username\">\n\n    <label for=\"email\">email</label>\n    <input type=\"text\" name=\"email\" [(ngModel)]=\"newUser.email\">\n\n\n    <label for=\"password\">password</label>\n    <input type=\"text\" name=\"password\" [(ngModel)]=\"newUser.password\">\n\n    <div class=\"col-md-2 offset-3\">\n      <button (click)=\"register()\" class=\"btn btn-primary\">Register </button>\n    </div>\n\n  </div> -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation li {\n  display: inline;\n  padding: 10px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng6_toastr_ng2_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr/ng2-toastr */ "./node_modules/ng6-toastr/ng2-toastr.js");
/* harmony import */ var ng6_toastr_ng2_toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng6_toastr_ng2_toastr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_services_custom_icon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/custom-icon.service */ "./src/app/shared/services/custom-icon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


 // Angular 6/RxJS 6




var AppComponent = /** @class */ (function () {
    function AppComponent(_userService, toastr, vcr, matIconRegistry, domSanitizer, customIconService) {
        this._userService = _userService;
        this.toastr = toastr;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.customIconService = customIconService;
        this.toastr.setRootViewContainerRef(vcr);
        this.customIconService.init();
        // iconRegistry.addSvgIcon('account', sanitizer.bypassSecurityTrustResourceUrl('./static/front-end/assets/img/svg/account.svg'))
        // iconRegistry.addSvgIcon('add-circle', sanitizer.bypassSecurityTrustResourceUrl('./static/front-end/assets/img/svg/add-circle.svg'))
        // iconRegistry.addSvgIcon('code', sanitizer.bypassSecurityTrustResourceUrl('./static/front-end/assets/img/svg/code.svg'))
    }
    AppComponent.prototype.popToast = function () {
        this.toastr.error('success', 'Args Title');
    };
    AppComponent.prototype.ngOnInit = function () {
        // check if  user has token in localstorage
        // if he doess, make sure he doesn't need to log in
        this._userService.isLoggedIn();
        this.new_post = {};
        this.user = {
            username: '',
            password: ''
        };
        this.newUser = {
            username: '',
            email: '',
            password: '',
        };
    };
    AppComponent.prototype.openAccount = function () {
        console.log('action not yet implemented');
    };
    AppComponent.prototype.login = function () {
        this._userService.login({ 'username': this.user.username, 'password': this.user.password });
    };
    AppComponent.prototype.register = function () {
        console.log("registering...");
        // this._userService.register({'username': this.newUser.username, 'email': this.newUser.email, 'password': this.newUser.password}, this.user.token);
        this._userService.register({ 'username': this.newUser.username, 'email': this.newUser.email, 'password': this.newUser.password }).subscribe(function (data) {
            // refresh the list
            console.log("Sucessfully registered");
            return true;
        }, function (error) {
            console.error('Error saving!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        });
    };
    AppComponent.prototype.refreshToken = function () {
        this._userService.refreshToken();
    };
    AppComponent.prototype.logout = function () {
        this._userService.logout();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], ng6_toastr_ng2_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastsManager"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"], _shared_services_custom_icon_service__WEBPACK_IMPORTED_MODULE_6__["CustomIconService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng6_toastr_ng2_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr/ng2-toastr */ "./node_modules/ng6-toastr/ng2-toastr.js");
/* harmony import */ var ng6_toastr_ng2_toastr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng6_toastr_ng2_toastr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _blog_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog_post.service */ "./src/app/blog_post.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./challenges/challenges.component */ "./src/app/challenges/challenges.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _shared_models__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/models */ "./src/app/shared/models/index.ts");
/* harmony import */ var _hackathon_hackathon_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hackathon/hackathon.component */ "./src/app/hackathon/hackathon.component.ts");
/* harmony import */ var _hackathon_hackathon_edit_hackathon_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hackathon/hackathon-edit/hackathon-edit.component */ "./src/app/hackathon/hackathon-edit/hackathon-edit.component.ts");
/* harmony import */ var _hackathon_hackathon_create_hackathon_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./hackathon/hackathon-create/hackathon-create.component */ "./src/app/hackathon/hackathon-create/hackathon-create.component.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/esm5/ngx-logger.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_services_custom_icon_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/services/custom-icon.service */ "./src/app/shared/services/custom-icon.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { routing } from './app-routing.module';




















var AppModule = /** @class */ (function () {
    function AppModule(_appRef) {
        this._appRef = _appRef;
    }
    AppModule.prototype.ngDoBootstrap = function () {
        // document.addEventListener('WebComponentsReady', () => {
        this._appRef.bootstrap(_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]);
        // });
    };
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_13__["ChallengesComponent"],
                _shared_models__WEBPACK_IMPORTED_MODULE_15__["SizeSelectComponent"],
                _hackathon_hackathon_component__WEBPACK_IMPORTED_MODULE_16__["HackathonComponent"],
                _hackathon_hackathon_edit_hackathon_edit_component__WEBPACK_IMPORTED_MODULE_17__["HackathonEditComponent"],
                _hackathon_hackathon_create_hackathon_create_component__WEBPACK_IMPORTED_MODULE_18__["HackathonCreateComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_20__["HomeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_23__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _core__WEBPACK_IMPORTED_MODULE_9__["CoreModule"], _shared__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], _material_module__WEBPACK_IMPORTED_MODULE_21__["MaterialModule"], ngx_logger__WEBPACK_IMPORTED_MODULE_19__["LoggerModule"].forRoot({ serverLoggingUrl: '/api/logs', level: ngx_logger__WEBPACK_IMPORTED_MODULE_19__["NgxLoggerLevel"].DEBUG, serverLogLevel: ngx_logger__WEBPACK_IMPORTED_MODULE_19__["NgxLoggerLevel"].ERROR }), ng6_toastr_ng2_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastModule"].forRoot()
            ],
            exports: [_hackathon_hackathon_edit_hackathon_edit_component__WEBPACK_IMPORTED_MODULE_17__["HackathonEditComponent"]],
            providers: [_blog_post_service__WEBPACK_IMPORTED_MODULE_7__["BlogPostService"], _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _shared__WEBPACK_IMPORTED_MODULE_10__["ApiService"], _shared_services_custom_icon_service__WEBPACK_IMPORTED_MODULE_24__["CustomIconService"],
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatDialogRef"],
                    useValue: {
                        close: function (dialogResult) { }
                    }
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            entryComponents: [
                _hackathon_hackathon_edit_hackathon_edit_component__WEBPACK_IMPORTED_MODULE_17__["HackathonEditComponent"],
                _hackathon_hackathon_create_hackathon_create_component__WEBPACK_IMPORTED_MODULE_18__["HackathonCreateComponent"]
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ApplicationRef"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog_post.service.ts":
/*!**************************************!*\
  !*** ./src/app/blog_post.service.ts ***!
  \**************************************/
/*! exports provided: BlogPostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostService", function() { return BlogPostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogPostService = /** @class */ (function () {
    function BlogPostService(http, _userService) {
        this.http = http;
        this._userService = _userService;
    }
    // Uses http.get() to load data from a single API endpoint
    BlogPostService.prototype.list = function () {
        return this.http.get('/api/posts');
    };
    // send a POST request to the API to create a new data object
    BlogPostService.prototype.create = function (post, token) {
        return this.http.post('/api/posts', JSON.stringify(post), this.getHttpOptions());
    };
    // helper function to build the HTTP headers
    BlogPostService.prototype.getHttpOptions = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this._userService.token
            })
        };
    };
    BlogPostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], BlogPostService);
    return BlogPostService;
}());



/***/ }),

/***/ "./src/app/challenges/challenges.component.html":
/*!******************************************************!*\
  !*** ./src/app/challenges/challenges.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Challenges</h4>\n\n\n\n<div *ngIf=\"challenges_list; else noChallenges\">\n  <div class=\"col-sm-12\">\n    <div *ngFor=\"let challenge of challenges_list\">\n      <p>{{challenge.id}}</p>\n      <p>{{challenge.title}}</p>\n      <p>{{challenge.type}}</p>\n    </div>\n  </div>\n</div>\n\n\n<ng-template #noChallenges>\n  <div class=\"col-sm-12\">\n    <p>No Challenges found</p>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/challenges/challenges.component.scss":
/*!******************************************************!*\
  !*** ./src/app/challenges/challenges.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/challenges/challenges.component.ts":
/*!****************************************************!*\
  !*** ./src/app/challenges/challenges.component.ts ***!
  \****************************************************/
/*! exports provided: ChallengesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesComponent", function() { return ChallengesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChallengesComponent = /** @class */ (function () {
    function ChallengesComponent(_apiService) {
        this._apiService = _apiService;
    }
    ChallengesComponent.prototype.ngOnInit = function () {
        this.getChallenges();
    };
    ChallengesComponent.prototype.getChallenges = function () {
        var _this = this;
        this._apiService.getAllChallenges().subscribe(function (data) {
            _this.challenges_list = data;
        }, function (err) {
            console.error(err);
        });
    };
    ChallengesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-challenges',
            template: __webpack_require__(/*! ./challenges.component.html */ "./src/app/challenges/challenges.component.html"),
            styles: [__webpack_require__(/*! ./challenges.component.scss */ "./src/app/challenges/challenges.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], ChallengesComponent);
    return ChallengesComponent;
}());



/***/ }),

/***/ "./src/app/challenges/index.ts":
/*!*************************************!*\
  !*** ./src/app/challenges/index.ts ***!
  \*************************************/
/*! exports provided: ChallengesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _challenges_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./challenges.component */ "./src/app/challenges/challenges.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChallengesComponent", function() { return _challenges_component__WEBPACK_IMPORTED_MODULE_0__["ChallengesComponent"]; });




/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/core/not-found/not-found.component.ts");
/* harmony import */ var _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unauthorized/unauthorized.component */ "./src/app/core/unauthorized/unauthorized.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _write_out_json_intercepter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./write-out-json-intercepter */ "./src/app/core/write-out-json-intercepter.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        // throwIfAlreadyLoaded(parentModule, "CoreModule");
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([])
            ],
            declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"], _unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_3__["UnauthorizedComponent"]],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _write_out_json_intercepter__WEBPACK_IMPORTED_MODULE_5__["WriteOutJsonInterceptor"],
                    multi: true
                },
                {
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_1__["HashLocationStrategy"]
                },
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: NotFoundComponent, UnauthorizedComponent, ModuleImportGuard, throwIfAlreadyLoaded, LoggerService, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _not_found__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found */ "./src/app/core/not-found/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return _not_found__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"]; });

/* harmony import */ var _unauthorized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unauthorized */ "./src/app/core/unauthorized/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return _unauthorized__WEBPACK_IMPORTED_MODULE_1__["UnauthorizedComponent"]; });

/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-import.guard */ "./src/app/core/module-import.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModuleImportGuard", function() { return _module_import_guard__WEBPACK_IMPORTED_MODULE_2__["ModuleImportGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return _module_import_guard__WEBPACK_IMPORTED_MODULE_2__["throwIfAlreadyLoaded"]; });

/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger.service */ "./src/app/core/logger.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]; });

/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"]; });








/***/ }),

/***/ "./src/app/core/logger.service.ts":
/*!****************************************!*\
  !*** ./src/app/core/logger.service.ts ***!
  \****************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.log = function (msg) {
        console.log(msg);
    };
    LoggerService.error = function (msg, obj) {
        if (obj === void 0) { obj = {}; }
        console.error(msg, obj);
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/core/module-import.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import.guard.ts ***!
  \*********************************************/
/*! exports provided: ModuleImportGuard, throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleImportGuard", function() { return ModuleImportGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModuleImportGuard = /** @class */ (function () {
    function ModuleImportGuard() {
    }
    ModuleImportGuard.prototype.canActivate = function (next, state) {
        return true;
    };
    ModuleImportGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], ModuleImportGuard);
    return ModuleImportGuard;
}());

function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core modules in the AppModule only.");
    }
}


/***/ }),

/***/ "./src/app/core/not-found/index.ts":
/*!*****************************************!*\
  !*** ./src/app/core/not-found/index.ts ***!
  \*****************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found.component */ "./src/app/core/not-found/not-found.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return _not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"]; });




/***/ }),

/***/ "./src/app/core/not-found/not-found.component.html":
/*!*********************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- not-found works! -->\n <h2>This page was not found</h2>\n"

/***/ }),

/***/ "./src/app/core/not-found/not-found.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/not-found/not-found.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/not-found/not-found.component.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/core/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/core/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/unauthorized/index.ts":
/*!********************************************!*\
  !*** ./src/app/core/unauthorized/index.ts ***!
  \********************************************/
/*! exports provided: UnauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unauthorized_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unauthorized.component */ "./src/app/core/unauthorized/unauthorized.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return _unauthorized_component__WEBPACK_IMPORTED_MODULE_0__["UnauthorizedComponent"]; });




/***/ }),

/***/ "./src/app/core/unauthorized/unauthorized.component.html":
/*!***************************************************************!*\
  !*** ./src/app/core/unauthorized/unauthorized.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <h3>Unauthorized request</h3>\n"

/***/ }),

/***/ "./src/app/core/unauthorized/unauthorized.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/unauthorized/unauthorized.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/unauthorized/unauthorized.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/unauthorized/unauthorized.component.ts ***!
  \*************************************************************/
/*! exports provided: UnauthorizedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return UnauthorizedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UnauthorizedComponent = /** @class */ (function () {
    function UnauthorizedComponent() {
    }
    UnauthorizedComponent.prototype.ngOnInit = function () {
    };
    UnauthorizedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unauthorized',
            template: __webpack_require__(/*! ./unauthorized.component.html */ "./src/app/core/unauthorized/unauthorized.component.html"),
            styles: [__webpack_require__(/*! ./unauthorized.component.scss */ "./src/app/core/unauthorized/unauthorized.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UnauthorizedComponent);
    return UnauthorizedComponent;
}());



/***/ }),

/***/ "./src/app/core/write-out-json-intercepter.ts":
/*!****************************************************!*\
  !*** ./src/app/core/write-out-json-intercepter.ts ***!
  \****************************************************/
/*! exports provided: WriteOutJsonInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WriteOutJsonInterceptor", function() { return WriteOutJsonInterceptor; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

var WriteOutJsonInterceptor = /** @class */ (function () {
    function WriteOutJsonInterceptor() {
    }
    WriteOutJsonInterceptor.prototype.intercept = function (request, next) {
        return next
            .handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) { return console.log(JSON.stringify(data, null, "\t")); }));
    };
    ;
    return WriteOutJsonInterceptor;
}());



/***/ }),

/***/ "./src/app/hackathon/hackathon-create/hackathon-create.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/hackathon/hackathon-create/hackathon-create.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 matDialogTitle>Create hackathon</h1>\n\n<mat-dialog-content>\n  <form [formGroup]=\"hackathonCreationForm\" (ngSubmit)=\"createHackathon(hackathonCreationForm.value)\">\n\n    <div class=\"hackathon-creation-container\">\n      <mat-form-field class=\"form-element\">\n        <input matInput placeholder=\"Name\" formControlName=\"name\">\n        <mat-error *ngIf=\"!name.valid && name.touched\">\n          {{ titleAlert }}\n        </mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"form-element\">\n        <input matInput [matDatepicker]=\"startDate\" placeholder=\"Start date\" formControlName=\"startDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n        <mat-datepicker #startDate></mat-datepicker>\n      </mat-form-field>\n\n      <mat-form-field class=\"form-element\">\n        <input matInput [matDatepicker]=\"endDate\" placeholder=\"End date\" formControlName=\"endDate\">\n        <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n        <mat-datepicker #endDate></mat-datepicker>\n      </mat-form-field>\n\n\n      <!-- <mat-form-field class=\"form-element\">\n        <input matInput placeholder=\"Rating\" formControlName=\"rating\" type=\"number\">\n        <mat-hint>Select a rating between 1 and 5</mat-hint>\n        <mat-error *ngIf=\"!hackathonCreationForm.controls['rating'].valid && hackathonCreationForm.controls['rating'].touched\">\n          {{ getErrorRating() }}\n        </mat-error>\n      </mat-form-field> -->\n      \n      <!-- <mat-form-field>\n        <input matInput type=\"number\" min=1 max=5 placeholder=\"Rating\" formControlName=\"rating\">\n      </mat-form-field> -->\n    </div>\n  </form>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-button (click)=\"createHackathon()\" tabindex=\"1\">Create</button>\n  <button mat-button mat-dialog-close tabindex=\"-1\">Cancel</button>\n</mat-dialog-actions>\n\n<p>{{this.errorMsg | json }}</p>\n\n\n<!-- material Input select pseudocode -->\n\n<!-- <mat-form-field>\n      <mat-select placeholder=\"Type\" value=\"{{ this.hackathon.type }}\">\n        <mat-option value=\"crypto\">crypt</mat-option>\n        <mat-option value=\"misc\">misc</mat-option>\n        <mat-option value=\"rev\">rev</mat-option>\n        <mat-option value=\"web\">web</mat-option>\n      </mat-select>\n    </mat-form-field>\n -->"

/***/ }),

/***/ "./src/app/hackathon/hackathon-create/hackathon-create.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/hackathon/hackathon-create/hackathon-create.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hackathon/hackathon-create/hackathon-create.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/hackathon/hackathon-create/hackathon-create.component.ts ***!
  \**************************************************************************/
/*! exports provided: HackathonCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackathonCreateComponent", function() { return HackathonCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HackathonCreateComponent = /** @class */ (function () {
    function HackathonCreateComponent(_apiService, formBuilder, dialogRef) {
        this._apiService = _apiService;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.submitted = false;
        this.titleAlert = 'This field is required';
    }
    HackathonCreateComponent.prototype.ngOnInit = function () {
        this.hackathonCreationForm = this.formBuilder.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            startDate: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.setChangeValidate();
    };
    HackathonCreateComponent.prototype.setChangeValidate = function () {
        this.hackathonCreationForm.get('name').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]);
        this.titleAlert = "You need to specify at least 3 characters";
        // this.hackathonCreationForm.get('name').setValidators(Validators.required);
        this.hackathonCreationForm.get('name').updateValueAndValidity();
    };
    HackathonCreateComponent.prototype.getErrorRating = function () {
        return this.hackathonCreationForm.get('rating').hasError('required') ? 'Field is required' :
            this.hackathonCreationForm.get('rating').hasError('value') ? 'Not the right value' : 'Incorrect number';
    };
    Object.defineProperty(HackathonCreateComponent.prototype, "name", {
        get: function () {
            return this.hackathonCreationForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonCreateComponent.prototype, "f", {
        get: function () { return this.hackathonCreationForm.controls; },
        enumerable: true,
        configurable: true
    });
    HackathonCreateComponent.prototype.createHackathon = function () {
        var _this = this;
        console.log(this.hackathonCreationForm.value);
        this._apiService.createHackathon(this.hackathonCreationForm.value).subscribe(function (data) {
            console.log(data);
            _this.dialogRef.close(true);
        }, function (err) {
            _this.handleError(err);
        });
    };
    HackathonCreateComponent.prototype.handleError = function (error) {
        console.log("ERROR!!" + error.message);
        this.errorMsg = error;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.message || error);
    };
    HackathonCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hackathon-create',
            template: __webpack_require__(/*! ./hackathon-create.component.html */ "./src/app/hackathon/hackathon-create/hackathon-create.component.html"),
            styles: [__webpack_require__(/*! ./hackathon-create.component.scss */ "./src/app/hackathon/hackathon-create/hackathon-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], HackathonCreateComponent);
    return HackathonCreateComponent;
}());



/***/ }),

/***/ "./src/app/hackathon/hackathon-create/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/hackathon/hackathon-create/index.ts ***!
  \*****************************************************/
/*! exports provided: HackathonCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hackathon_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hackathon-create.component */ "./src/app/hackathon/hackathon-create/hackathon-create.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HackathonCreateComponent", function() { return _hackathon_create_component__WEBPACK_IMPORTED_MODULE_0__["HackathonCreateComponent"]; });




/***/ }),

/***/ "./src/app/hackathon/hackathon-edit/hackathon-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/hackathon/hackathon-edit/hackathon-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 matDialogTitle>Edit hackathon</h1>\n\n<div *ngIf=\"!loading; else loadingTemplate\">\n\n\n  <mat-dialog-content >\n    <form [formGroup]=\"hackathonEditForm\" (ngSubmit)=\"createHackathon(hackathonCreationForm.value)\">\n      <div class=\"hackathon-edit-container\">\n        <mat-form-field class=\"form-element\">\n          <input matInput placeholder=\"Name\" formControlName=\"name\">\n          <mat-error *ngIf=\"!name.valid && name.touched\">\n            {{ titleAlert }}\n          </mat-error>\n        </mat-form-field>\n\n        <!-- <mat-form-field>\n      <mat-select placeholder=\"Type\" value=\"{{ this.hackathon.type }}\">\n        <mat-option value=\"crypto\">crypt</mat-option>\n        <mat-option value=\"misc\">misc</mat-option>\n        <mat-option value=\"rev\">rev</mat-option>\n        <mat-option value=\"web\">web</mat-option>\n      </mat-select>\n    </mat-form-field>>\n -->\n        <mat-form-field class=\"form-element\">\n          <input matInput [matDatepicker]=\"startDate\" placeholder=\"Start date\" formControlName=\"startDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n          <mat-datepicker #startDate></mat-datepicker>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-element\">\n          <input matInput [matDatepicker]=\"endDate\" placeholder=\"End date\" formControlName=\"endDate\">\n          <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n          <mat-datepicker #endDate></mat-datepicker>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-element\">\n          <input matInput type=\"number\" min=1 max=5 placeholder=\"Rating\" formControlName=\"rating\">\n          <mat-hint>Select a rating between 1 and 5</mat-hint>\n          <mat-error *ngIf=\"!hackathonEditForm.controls['rating'].valid && hackathonEditForm.controls['rating'].touched\">\n            {{ getErrorRating() }}\n          </mat-error>\n        </mat-form-field>\n      </div>\n    </form>\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n    <div class=\"form-element\">\n      <button mat-raised-button color=\"accent\" type=\"submit\" class=\"button\" [disabled]=\"!hackathonEditForm.valid\"\n        (click)=\"saveChanges()\">Save changes</button>\n    </div>\n    <!-- <button mat-button (click)=\"saveChanges()\" tabindex=\"1\">Save</button> -->\n    <button mat-button mat-dialog-close tabindex=\"-1\">Cancel</button>\n  </mat-dialog-actions>\n</div>\n\n\n\n<ng-template #loadingTemplate>\n  <div class=\"loading-spinner\">\n    <mat-progress-spinner class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\">\n    </mat-progress-spinner>\n    <p>Saving changes ...</p>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/hackathon/hackathon-edit/hackathon-edit.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/hackathon/hackathon-edit/hackathon-edit.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.container {\n  padding: 10px; }\n\n.form {\n  min-width: 50px;\n  max-width: 100px;\n  width: 100%; }\n\n.form-element {\n  padding: 5px 0px 25px 2px;\n  width: 100%; }\n\n.button {\n  width: 100%; }\n\n.loading-spinner {\n  align-items: center; }\n\n.loading-spinner mat-progress-spinner {\n    padding: 100px; }\n"

/***/ }),

/***/ "./src/app/hackathon/hackathon-edit/hackathon-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/hackathon/hackathon-edit/hackathon-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: HackathonEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackathonEditComponent", function() { return HackathonEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/ */ "./src/app/shared/services/index.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/esm5/ngx-logger.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/observable/throwError */ "./node_modules/rxjs/internal/observable/throwError.js");
/* harmony import */ var rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var HackathonEditComponent = /** @class */ (function () {
    function HackathonEditComponent(data, dialog, snackBar, _apiService, logger, formBuilder, dialogRef) {
        this.data = data;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this._apiService = _apiService;
        this.logger = logger;
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.titleAlert = 'This field is required';
    }
    HackathonEditComponent.prototype.ngOnInit = function () {
        this.loading = false;
        this.hackathon = this.data.hackathon;
        this.createForm();
        this.setChangeValidate();
    };
    HackathonEditComponent.prototype.createForm = function () {
        this.hackathonEditForm = this.formBuilder.group({
            name: [this.hackathon.name, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            startDate: [this.hackathon.startDate, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            endDate: [this.hackathon.endDate, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            rating: [this.hackathon.rating, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(5)]],
            'validate': ''
        });
    };
    HackathonEditComponent.prototype.setChangeValidate = function () {
        this.hackathonEditForm.get('name').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]);
        this.titleAlert = "You need to specify at least 3 characters";
        // this.hackathonEditForm.get('name').setValidators(Validators.required);
        this.hackathonEditForm.get('name').updateValueAndValidity();
    };
    HackathonEditComponent.prototype.getErrorRating = function () {
        return this.hackathonEditForm.get('rating').hasError('required') ? 'Field is required' :
            this.hackathonEditForm.get('rating').hasError('value') ? 'Not the right value' : 'Incorrect number';
    };
    Object.defineProperty(HackathonEditComponent.prototype, "name", {
        get: function () {
            return this.hackathonEditForm.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HackathonEditComponent.prototype, "f", {
        get: function () { return this.hackathonEditForm.controls; },
        enumerable: true,
        configurable: true
    });
    HackathonEditComponent.prototype.saveChanges = function () {
        var _this = this;
        this.loading = true;
        this._apiService.updateHackathon(this.hackathon.id, this.hackathonEditForm.value).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
            // TODO: Raise error
            // prompt input validation
        }, function () {
            _this.logger.log("Saved changes for hackathon #" + _this.hackathon.id);
            _this.dialogRef.close(true);
        });
    };
    HackathonEditComponent.prototype.handleError = function (error) {
        console.log("ERROR!!" + error.message);
        this.errorMsg = error;
        Object(rxjs_internal_observable_throwError__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error.message || error);
    };
    HackathonEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hackathon-edit',
            template: __webpack_require__(/*! ./hackathon-edit.component.html */ "./src/app/hackathon/hackathon-edit/hackathon-edit.component.html"),
            styles: [__webpack_require__(/*! ./hackathon-edit.component.scss */ "./src/app/hackathon/hackathon-edit/hackathon-edit.component.scss")],
            providers: [ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"]],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _shared_services___WEBPACK_IMPORTED_MODULE_1__["ApiService"], ngx_logger__WEBPACK_IMPORTED_MODULE_2__["NGXLogger"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], HackathonEditComponent);
    return HackathonEditComponent;
}());



/***/ }),

/***/ "./src/app/hackathon/hackathon-edit/index.ts":
/*!***************************************************!*\
  !*** ./src/app/hackathon/hackathon-edit/index.ts ***!
  \***************************************************/
/*! exports provided: HackathonEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hackathon_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hackathon-edit.component */ "./src/app/hackathon/hackathon-edit/hackathon-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HackathonEditComponent", function() { return _hackathon_edit_component__WEBPACK_IMPORTED_MODULE_0__["HackathonEditComponent"]; });




/***/ }),

/***/ "./src/app/hackathon/hackathon.component.html":
/*!****************************************************!*\
  !*** ./src/app/hackathon/hackathon.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"this.hackathon_list.length > 0; else noHackathons\">\n  <div class=\"col-sm-12\">\n    <div class=\"row mb-3\">\n      <div class=\"col-md-2 mb-1\"><strong>Name</strong></div>\n      <div class=\"col-md-2 mb-1\"><strong>Start</strong></div>\n      <div class=\"col-md-2 mb-1\"><strong>End</strong></div>\n      <div class=\"col-md-2 mb-1\"><strong>Rating</strong></div>\n      <!-- <mat-icon class=\"mat-icon-rtl-mirror\" svgIcon=\"thumb-up\"></mat-icon> -->\n      <button mat-button  color=\"primary\" (click)=\"openCreateDialog()\">\n        <mat-icon svgIcon=\"add-circle\"></mat-icon>\n        <!-- Add New -->\n      </button>\n    </div>\n    <div *ngFor=\"let hackathon of hackathon_list\" [@fadeInOut]>\n      <div class=\"row mb-3\">\n        <div class=\"col-md-2 mb-1\">{{ hackathon.name }}</div>\n        <div class=\"col-md-2 mb-1\">{{ hackathon.startDate | date:'d LLLL hh:mm' }}</div>\n        <div class=\"col-md-2 mb-1\">{{ hackathon.endDate | date:'d LLLL hh:mm' }}</div>\n        <div class=\"col-md-2 mb-1\">{{ hackathon.rating }}</div>\n        <p>\n          <button mat-button color=\"primary\" (click)=\"openEditDialog(hackathon)\">\n            <mat-icon svgIcon=\"edit\"></mat-icon>\n            <!-- Edit -->\n          </button>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #noHackathons>\n  <div class=\"col-sm-12\">\n    <div>\n      <h3>No CTFs found</h3>\n      <button mat-flat-button color=\"primary\" (click)=\"openCreateDialog()\">Create New</button>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/hackathon/hackathon.component.scss":
/*!****************************************************!*\
  !*** ./src/app/hackathon/hackathon.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hackathon/hackathon.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hackathon/hackathon.component.ts ***!
  \**************************************************/
/*! exports provided: HackathonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HackathonComponent", function() { return HackathonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services */ "./src/app/shared/services/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _hackathon_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hackathon-edit */ "./src/app/hackathon/hackathon-edit/index.ts");
/* harmony import */ var _hackathon_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hackathon-create */ "./src/app/hackathon/hackathon-create/index.ts");
/* harmony import */ var _shared_services_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/animations */ "./src/app/shared/services/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HackathonComponent = /** @class */ (function () {
    function HackathonComponent(_apiService, dialog, snackBar) {
        this._apiService = _apiService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.hackathon_list = [];
    }
    HackathonComponent.prototype.ngOnInit = function () {
        this.loadHackathons();
    };
    HackathonComponent.prototype.openCreateDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_hackathon_create__WEBPACK_IMPORTED_MODULE_4__["HackathonCreateComponent"]);
        var snack = this.snackBar.open('Opening create dialog');
        snack.closeWithAction();
        dialogRef.afterClosed().subscribe(function (showSnackBar) {
            if (showSnackBar) {
                snack.dismiss();
                var a = document.createElement('a');
                a.click();
                a.remove();
                snack.dismiss();
                _this.snackBar.open('Successfully created new hackathon', 'Created', {
                    duration: 2000,
                });
                _this.loadHackathons();
            }
        });
    };
    HackathonComponent.prototype.openEditDialog = function (hackathon_data) {
        var _this = this;
        console.log(hackathon_data);
        var dialogRef = this.dialog.open(_hackathon_edit__WEBPACK_IMPORTED_MODULE_3__["HackathonEditComponent"], {
            minWidth: 300,
            maxWidth: 400,
            data: { hackathon: hackathon_data }
        });
        var snack = this.snackBar.open('Opening edit dialog');
        snack.closeWithAction();
        dialogRef.afterClosed().subscribe(function (showSnackBar) {
            if (showSnackBar) {
                snack.dismiss();
                var a = document.createElement('a');
                a.click();
                a.remove();
                snack.dismiss();
                _this.snackBar.open('Successfully written changes', 'Saved', {
                    duration: 2000,
                });
                _this.loadHackathons();
            }
        });
    };
    HackathonComponent.prototype.loadHackathons = function () {
        var _this = this;
        this._apiService.getAllHackathons().subscribe(function (data) {
            _this.hackathon_list = data;
        }, function (err) { return console.error(err); }, function () { return console.log('done loading hackathons'); });
    };
    HackathonComponent.prototype.modal_saved_action = function (save) {
        if (save)
            this.loadHackathons();
    };
    HackathonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hackathon',
            template: __webpack_require__(/*! ./hackathon.component.html */ "./src/app/hackathon/hackathon.component.html"),
            styles: [__webpack_require__(/*! ./hackathon.component.scss */ "./src/app/hackathon/hackathon.component.scss")],
            animations: [
                _shared_services_animations__WEBPACK_IMPORTED_MODULE_5__["fadeInOut"]
            ]
        }),
        __metadata("design:paramtypes", [_shared_services__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], HackathonComponent);
    return HackathonComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Welcome to the ctfmanage.\n  Collaborate in hackathons with your friends and start documenting your games right now!\n</p>\n\n<img src=\"./static/front-end/assets/img/hackathon.jpg\" alt=\"hackathon\" height=\"350\" width=\"550\">\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/*! exports provided: fadeInOut, enterLeave, flyInOut, ChallengesComponent, SharedModule, ApiService, NotFoundComponent, UnauthorizedComponent, ModuleImportGuard, throwIfAlreadyLoaded, LoggerService, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInOut", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["fadeInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterLeave", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["enterLeave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["flyInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony import */ var _challenges__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./challenges */ "./src/app/challenges/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChallengesComponent", function() { return _challenges__WEBPACK_IMPORTED_MODULE_1__["ChallengesComponent"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["UnauthorizedComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModuleImportGuard", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["ModuleImportGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["throwIfAlreadyLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]; });






/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: fadeInOut, enterLeave, flyInOut, SharedModule, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/app/shared/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInOut", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["fadeInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterLeave", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["enterLeave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["flyInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["ApiService"]; });





/***/ }),

/***/ "./src/app/shared/models/challenge.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/challenge.ts ***!
  \********************************************/
/*! exports provided: Challenge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Challenge", function() { return Challenge; });
var Challenge = /** @class */ (function () {
    function Challenge(title, type, remarks, solvers) {
        this.title = title;
        this.type = type;
        this.remarks = remarks;
        this.solvers = solvers;
    }
    return Challenge;
}());



/***/ }),

/***/ "./src/app/shared/models/challenge_type.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/challenge_type.ts ***!
  \*************************************************/
/*! exports provided: Size, SizeSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return Size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeSelectComponent", function() { return SizeSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Size = {
    XLarge: 'xl',
    Large: 'l',
    Medium: 'm',
    Small: 's'
};

var SizeSelectComponent = /** @class */ (function () {
    function SizeSelectComponent() {
        // Bonus - see how the constants define 
        // the values in the markup above
        this.size = Size;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SizeSelectComponent.prototype, "selectedSize", void 0);
    SizeSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            // moduleId: module.id,
            selector: 'app-size-select',
            template: "\n        <select [ngModel]=\"selectedSize\">\n            <option value=\"{{size.XLarge}}\">Extra Large</option>\n            <option value=\"{{size.Large}}\">Large</option>\n            <option value=\"{{size.Medium}}\">Medium</option>\n            <option value=\"{{size.Small}}\">Small</option>\n        </select>    \n    "
        })
    ], SizeSelectComponent);
    return SizeSelectComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/hackathon.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/hackathon.ts ***!
  \********************************************/
/*! exports provided: Hackathon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hackathon", function() { return Hackathon; });
var Hackathon = /** @class */ (function () {
    function Hackathon(name, startDate, endDate, challenges) {
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
        this.challenges = challenges;
    }
    return Hackathon;
}());



/***/ }),

/***/ "./src/app/shared/models/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/index.ts ***!
  \****************************************/
/*! exports provided: Size, SizeSelectComponent, Challenge, Hackathon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _challenge_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./challenge_type */ "./src/app/shared/models/challenge_type.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return _challenge_type__WEBPACK_IMPORTED_MODULE_0__["Size"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SizeSelectComponent", function() { return _challenge_type__WEBPACK_IMPORTED_MODULE_0__["SizeSelectComponent"]; });

/* harmony import */ var _challenge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./challenge */ "./src/app/shared/models/challenge.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Challenge", function() { return _challenge__WEBPACK_IMPORTED_MODULE_1__["Challenge"]; });

/* harmony import */ var _hackathon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hackathon */ "./src/app/shared/models/hackathon.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Hackathon", function() { return _hackathon__WEBPACK_IMPORTED_MODULE_2__["Hackathon"]; });






/***/ }),

/***/ "./src/app/shared/services/animations.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/services/animations.ts ***!
  \***********************************************/
/*! exports provided: fadeInOut, enterLeave, flyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInOut", function() { return fadeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enterLeave", function() { return enterLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return flyInOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s 10ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))])
]);
var enterLeave = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('enterLeave', [
    // :ENTER TRANSITION
    // Transition Styles
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        // 'From' styles
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0.5,
            transform: 'scale(0.8)'
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('550ms ease-out', 
        // 'To' styles
        // 1 - Comment this to remove the item's grow...
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale(1)'
        }))
    ])
]);
function flyInOut(duration) {
    if (duration === void 0) { duration = 0.2; }
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateX(0)' })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(-100%)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(duration + "s ease-in")
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(duration + "s 10ms ease-out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translateX(100%)' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/shared/services/api.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/api.service.ts ***!
  \************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = /** @class */ (function () {
    function ApiService(http, _userService) {
        this.http = http;
        this._userService = _userService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    ApiService.prototype.getAllHackathons = function () {
        return this.http.get('/api/hackathons');
    };
    ApiService.prototype.getHackathon = function (id) {
        return this.http.get('/api/hackathons/' + String(id));
    };
    ApiService.prototype.createHackathon = function (data) {
        return this.http.post('/api/hackathons', JSON.stringify(data), this.getHttpOptions(false));
    };
    ApiService.prototype.updateHackathon = function (id, data) {
        return this.http.put('/api/hackathons/' + id, JSON.stringify(data), this.getHttpOptions(false));
    };
    ApiService.prototype.getAllChallenges = function () {
        return this.http.get('/api/challenges');
    };
    ApiService.prototype.getHttpOptions = function (anonymous) {
        if (anonymous === void 0) { anonymous = true; }
        if (anonymous) {
            return {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                })
            };
        }
        else {
            return {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'JWT ' + this._userService.token
                })
            };
        }
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/shared/services/custom-icon.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/custom-icon.service.ts ***!
  \********************************************************/
/*! exports provided: CustomIconService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomIconService", function() { return CustomIconService; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomIconService = /** @class */ (function () {
    function CustomIconService(matIconRegistry, domSanitizer) {
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
    }
    CustomIconService.prototype.init = function () {
        // this.matIconRegistry.addSvgIcon(
        //   "cool_face",
        //   this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/cool2.svg")
        // );
        this.matIconRegistry.addSvgIcon('account', this.domSanitizer.bypassSecurityTrustResourceUrl('./static/front-end/assets/img/svg/account.svg'));
        this.matIconRegistry.addSvgIcon('add-circle', this.domSanitizer.bypassSecurityTrustResourceUrl('./static/front-end/assets/img/svg/add-circle.svg'));
        this.matIconRegistry.addSvgIcon('code', this.domSanitizer.bypassSecurityTrustResourceUrl('./static/front-end/assets/img/svg/code.svg'));
        this.matIconRegistry.addSvgIcon('edit', this.domSanitizer.bypassSecurityTrustResourceUrl('./static/front-end/assets/img/svg/edit.svg'));
        this.matIconRegistry.registerFontClassAlias('fa');
    };
    CustomIconService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"]])
    ], CustomIconService);
    return CustomIconService;
}());



/***/ }),

/***/ "./src/app/shared/services/index.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/*! exports provided: fadeInOut, enterLeave, flyInOut, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "./src/app/shared/services/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "./src/app/shared/services/animations.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fadeInOut", function() { return _animations__WEBPACK_IMPORTED_MODULE_1__["fadeInOut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enterLeave", function() { return _animations__WEBPACK_IMPORTED_MODULE_1__["enterLeave"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return _animations__WEBPACK_IMPORTED_MODULE_1__["flyInOut"]; });





/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        // error messages received from the login attempt
        this.errors = [];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    UserService.prototype.getHttpOptions = function (anonymous) {
        if (anonymous === void 0) { anonymous = true; }
        if (anonymous) {
            return {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                })
            };
        }
        else {
            return {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'JWT ' + this.token
                })
            };
        }
    };
    UserService.prototype.isLoggedIn = function () {
        var _this = this;
        // check if user has token in session storage
        var token = localStorage.getItem('token');
        if (token) {
            // verify token to api
            this.http.post('/api-token-verify/', { "token": token }, this.httpOptions).subscribe(function (data) {
                _this.updateData(data['token']);
            }, function (err) {
                console.error('token verification error', err);
            });
        }
    };
    // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
    UserService.prototype.login = function (user) {
        var _this = this;
        this.http.post('/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(function (data) {
            console.log('login success', data);
            _this.updateData(data['token']);
        }, function (err) {
            console.error('login error', err);
            _this.errors = err['error'];
        });
    };
    // Registers a new user
    UserService.prototype.register = function (userData) {
        return this.http.post('/api/users', JSON.stringify(userData), this.getHttpOptions());
    };
    /**
     * Refreshes the JWT token, to extend the time the user is logged in
     */
    UserService.prototype.refreshToken = function () {
        var _this = this;
        this.http.post('/api-token-refresh/', JSON.stringify({ token: this.token }), this.httpOptions).subscribe(function (data) {
            console.log('refresh success', data);
            _this.updateData(data['token']);
        }, function (err) {
            console.error('refresh error', err);
            _this.errors = err['error'];
        });
    };
    UserService.prototype.logout = function () {
        this.token = null;
        this.token_expires = null;
        this.username = null;
    };
    UserService.prototype.updateData = function (token) {
        this.token = token;
        this.errors = [];
        // decode the token to read the username and expiration timestamp
        var token_parts = this.token.split(/\./);
        var token_decoded = JSON.parse(window.atob(token_parts[1]));
        this.token_expires = new Date(token_decoded.exp * 1000);
        this.username = token_decoded.username;
        // save token in the browser session
        localStorage.setItem('token', token);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/johnvon/ctfmanager/ctfman/front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map