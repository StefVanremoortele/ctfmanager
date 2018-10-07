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
/* harmony import */ var _capture_the_flag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./capture-the-flag */ "./src/app/capture-the-flag/index.ts");
/* harmony import */ var _challenges__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./challenges */ "./src/app/challenges/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'CTF', component: _capture_the_flag__WEBPACK_IMPORTED_MODULE_3__["CaptureTheFlagComponent"] },
    { path: 'challenges', component: _challenges__WEBPACK_IMPORTED_MODULE_4__["ChallengesComponent"] },
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

module.exports = "<div class=\"container-fluid\">\n\n  <!-- Logged out view -->\n  <div *ngIf=\"!_userService.token\">\n    <h2>Welcome to CTFMAN</h2>\n    <h3>Please log in</h3>\n    <div>\n      <div class=\"col-sm-4\">\n        <label>Username:</label><br />\n        <input type=\"text\" name=\"login-username\" [(ngModel)]=\"user.username\">\n        <span *ngFor=\"let error of _userService.errors.username\"><br />{{ error }}</span></div>\n      <div class=\"col-sm-4\">\n        <label>Password:</label><br />\n        <input type=\"password\" name=\"login-password\" [(ngModel)]=\"user.password\">\n        <span *ngFor=\"let error of _userService.errors.password\"><br />{{ error }}</span>\n      </div>\n      <div class=\"col-sm-4\">\n        <button (click)=\"login()\" class=\"btn btn-primary\">Log In</button>&nbsp;\n      </div>\n    </div>\n    <h2>or register</h2>\n    <div class=\"col-sm-4\">\n      <label>Username:</label><br />\n      <input type=\"text\" name=\"register-username\" [(ngModel)]=\"newUser.username\">\n    </div>\n    <div class=\"col-sm-4\">\n      <label>Email:</label><br />\n      <input type=\"text\" name=\"register-email\" [(ngModel)]=\"newUser.email\">\n    </div>\n    <div class=\"col-sm-4\">\n      <label>Password:</label><br />\n      <input type=\"password\" name=\"register-password\" [(ngModel)]=\"newUser.password\">\n    </div>\n    <div class=\"col-sm-4\">\n      <button (click)=\"register()\" class=\"btn btn-primary\">Register</button>&nbsp;\n    </div>\n  </div>\n\n\n  <!-- Logged in view -->\n  <div *ngIf=\"_userService.token\">\n        <div class=\"float-right\">Hi, {{ _userService.username }}.<br />\n          <button (click)=\"logout()\" class=\"btn btn-primary pull-right\">Log out</button>&nbsp;\n        </div>\n      <div class=\"col-sm-10\">\n        <nav>\n          <h3>Menu</h3>\n          <ul>\n            <li><a routerLink=\"CTF\">View CTFs</a></li>\n            <li><a routerLink=\"challenges\">View Challenges</a></li>\n            <li><a routerLink=\"abc123Jibberish\">Go to a page that doesn't work</a></li>\n          </ul>\n        </nav>\n        <hr>\n        <router-outlet></router-outlet>\n      </div>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n<!-- \n    \n    <div class=\"row\" *ngIf=\"!_userService.token\">\n      <div class=\"col-sm-4\">\n        <label>Username:</label><br />\n        <input type=\"text\" name=\"login-username\" [(ngModel)]=\"user.username\">\n        <span *ngFor=\"let error of _userService.errors.username\"><br />{{ error }}</span></div>\n        <div class=\"col-sm-4\">\n          <label>Password:</label><br />\n          <input type=\"password\" name=\"login-password\" [(ngModel)]=\"user.password\">\n          <span *ngFor=\"let error of _userService.errors.password\"><br />{{ error }}</span>\n        </div>\n        <div class=\"col-sm-4\">\n          <button (click)=\"login()\" class=\"btn btn-primary\">Log In</button>&nbsp;\n  </div>\n  <div class=\"col-sm-12\">\n    <span *ngFor=\"let error of _userService.errors.non_field_errors\">{{ error }}<br /></span>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"_userService.token\">\n  <div class=\"col-sm-12\">You are logged in as {{ _userService.username }}.<br />\n    Token Expires: {{ _userService.token_expires }}<br />\n    <button (click)=\"refreshToken()\" class=\"btn btn-primary\">Refresh Token</button>&nbsp;\n    <button (click)=\"logout()\" class=\"btn btn-primary\">Log Out</button>&nbsp;\n  </div>\n</div> -->\n<!-- \n<h2 class=\"mt-3\">Micro Blog Posts</h2>\n<div *ngFor=\"let post of posts\">\n  <div class=\"row mb-3\">\n    <label class=\"col-md-2\">By:</label>\n    <div class=\"col-md-2 mb-1\">{{ post.user }}</div>\n    <label class=\"col-md-2\">Date:</label>\n    <div class=\"col-md-6\">{{ post.date }}</div>\n    <div class=\"col-md-12\">{{ post.body }}</div>\n  </div>\n</div>\n\n<h3>Create a new post:</h3>\n\n<div class=\"row mb-1\">\n  <label class=\"col-md-3\">Enter your post:</label>\n  <div class=\"col-md-9 mb-1\"><input type=\"text\" name=\"body\" [(ngModel)]=\"new_post.body\"></div>\n  <div class=\"col-md-2 offset-3\">\n    <button (click)=\"createPost()\" class=\"btn btn-primary\">Save</button>\n  </div>\n</div> -->\n\n<!-- \n\n<h3>Register new user</h3>\n\n  <div>\n    <label for=\"user-name\">username</label>\n    <input type=\"text\" name=\"username\" [(ngModel)]=\"newUser.username\">\n\n    <label for=\"email\">email</label>\n    <input type=\"text\" name=\"email\" [(ngModel)]=\"newUser.email\">\n\n\n    <label for=\"password\">password</label>\n    <input type=\"text\" name=\"password\" [(ngModel)]=\"newUser.password\">\n\n    <div class=\"col-md-2 offset-3\">\n      <button (click)=\"register()\" class=\"btn btn-primary\">Register </button>\n    </div>\n\n  </div> -->"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _blog_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog_post.service */ "./src/app/blog_post.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
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
    function AppComponent(_blogPostService, _userService) {
        this._blogPostService = _blogPostService;
        this._userService = _userService;
    }
    AppComponent.prototype.ngOnInit = function () {
        // check if  user has token in localstorage
        // if he doess, make sure he doesn't need to log in
        this._userService.isLoggedIn();
        this.getPosts();
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        });
    };
    AppComponent.prototype.refreshToken = function () {
        this._userService.refreshToken();
    };
    AppComponent.prototype.logout = function () {
        this._userService.logout();
    };
    AppComponent.prototype.getPosts = function () {
        var _this = this;
        this._blogPostService.list().subscribe(
        // the first argument is a function which runs on success
        function (data) {
            _this.posts = data;
            // convert the dates to a nice format
            for (var _i = 0, _a = _this.posts; _i < _a.length; _i++) {
                var post = _a[_i];
                post.date = new Date(post.date);
            }
        }, 
        // the second argument is a function which runs on error
        function (err) { return console.error(err); }, 
        // the third argument is a function which runs on completion
        function () { return console.log('done loading posts'); });
    };
    AppComponent.prototype.createPost = function () {
        var _this = this;
        this._blogPostService.create(this.new_post, this.user.token).subscribe(function (data) {
            // refresh the list
            _this.getPosts();
            return true;
        }, function (error) {
            console.error('Error saving!');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_blog_post_service__WEBPACK_IMPORTED_MODULE_1__["BlogPostService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _blog_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog_post.service */ "./src/app/blog_post.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _capture_the_flag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./capture-the-flag */ "./src/app/capture-the-flag/index.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _capture_the_flag_ctf_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./capture-the-flag/ctf.service */ "./src/app/capture-the-flag/ctf.service.ts");
/* harmony import */ var _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./challenges/challenges.component */ "./src/app/challenges/challenges.component.ts");
/* harmony import */ var _capture_the_flag_create_ctf_create_ctf_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./capture-the-flag/create-ctf/create-ctf.component */ "./src/app/capture-the-flag/create-ctf/create-ctf.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _capture_the_flag_edit_ctf_edit_ctf_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./capture-the-flag/edit-ctf/edit-ctf.component */ "./src/app/capture-the-flag/edit-ctf/edit-ctf.component.ts");
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
        this._appRef.bootstrap(_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]);
        // });
    };
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _challenges_challenges_component__WEBPACK_IMPORTED_MODULE_13__["ChallengesComponent"],
                _capture_the_flag__WEBPACK_IMPORTED_MODULE_7__["CaptureTheFlagComponent"],
                _capture_the_flag_create_ctf_create_ctf_component__WEBPACK_IMPORTED_MODULE_14__["CreateCtfComponent"],
                _capture_the_flag_edit_ctf_edit_ctf_component__WEBPACK_IMPORTED_MODULE_16__["EditCtfComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _core__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], _shared__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]
            ],
            providers: [_blog_post_service__WEBPACK_IMPORTED_MODULE_5__["BlogPostService"], _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _capture_the_flag_ctf_service__WEBPACK_IMPORTED_MODULE_12__["CtfService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
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

/***/ "./src/app/capture-the-flag/capture-the-flag.component.html":
/*!******************************************************************!*\
  !*** ./src/app/capture-the-flag/capture-the-flag.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>CTF's</h4>\n\n\n\n\n<div *ngIf=\"_ctfService.ctf_list; else emptyCtfList\">\n  <div class=\"col-sm-12\">\n    <div *ngFor=\"let ctf of ctf_list\">\n      <div class=\"row mb-3\">\n        <p>test</p>\n        <div class=\"col-md-2 mb-1\">{{ ctf.id }}</div>\n        <div class=\"col-md-2 mb-1\">{{ ctf.title }}</div>\n        <div class=\"col-md-2 mb-1\">Start: {{ ctf.startDate }}</div>\n        <app-edit-ctf></app-edit-ctf>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #emptyCtfList>\n  <div class=\"col-sm-12\">\n    <div>\n      <p>No CTFs found</p>\n    </div>\n  </div>\n</ng-template>\n\n<app-create-ctf></app-create-ctf>"

/***/ }),

/***/ "./src/app/capture-the-flag/capture-the-flag.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/capture-the-flag/capture-the-flag.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/capture-the-flag/capture-the-flag.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/capture-the-flag/capture-the-flag.component.ts ***!
  \****************************************************************/
/*! exports provided: CaptureTheFlagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptureTheFlagComponent", function() { return CaptureTheFlagComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ctf_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ctf.service */ "./src/app/capture-the-flag/ctf.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaptureTheFlagComponent = /** @class */ (function () {
    function CaptureTheFlagComponent(_ctfService) {
        this._ctfService = _ctfService;
        this.ctf_list = [];
    }
    CaptureTheFlagComponent.prototype.ngOnInit = function () {
        this.getCtfs();
    };
    CaptureTheFlagComponent.prototype.getCtfs = function () {
        var _this = this;
        this._ctfService.list().subscribe(function (data) {
            _this.ctf_list = data;
        }, function (err) { return console.error(err); }, function () { return console.log('done loading CTFs'); });
    };
    CaptureTheFlagComponent.prototype.createCtf = function () {
        // route to create ctf  page  ||  popup model for creation
    };
    CaptureTheFlagComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-capture-the-flag',
            template: __webpack_require__(/*! ./capture-the-flag.component.html */ "./src/app/capture-the-flag/capture-the-flag.component.html"),
            styles: [__webpack_require__(/*! ./capture-the-flag.component.scss */ "./src/app/capture-the-flag/capture-the-flag.component.scss")]
        }),
        __metadata("design:paramtypes", [_ctf_service__WEBPACK_IMPORTED_MODULE_1__["CtfService"]])
    ], CaptureTheFlagComponent);
    return CaptureTheFlagComponent;
}());



/***/ }),

/***/ "./src/app/capture-the-flag/create-ctf/create-ctf.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/capture-the-flag/create-ctf/create-ctf.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Create new ctf</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form>\n      <div class=\"form-group\">\n\n        <label for=\"ctf-name\">CTF name</label>\n        <div>\n          <input id=\"ctf-name\" type=\"text\">\n        </div>\n        <label for=\"ctf-type\">type</label>\n        <div>\n          <input id=\"ctf-type\" type=\"text\">\n        </div>\n        <label for=\"startDate\">Start date</label>\n        <div class=\"input-group\">\n          <input id=\"startDate\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"sdp\" ngbDatepicker #sdp=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary calendar\" (click)=\"sdp.toggle()\" type=\"button\"></button>\n          </div>\n        </div>\n        <label for=\"endDate\">End date</label>\n        <div class=\"input-group\">\n          <input id=\"endDate\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"edp\" ngbDatepicker #edp=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary calendar\" (click)=\"edp.toggle()\" type=\"button\"></button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\n  </div>\n</ng-template>\n \n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Create new CTF</button>\n\n\n<pre>{{closeResult}}</pre>"

/***/ }),

/***/ "./src/app/capture-the-flag/create-ctf/create-ctf.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/capture-the-flag/create-ctf/create-ctf.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/capture-the-flag/create-ctf/create-ctf.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/capture-the-flag/create-ctf/create-ctf.component.ts ***!
  \*********************************************************************/
/*! exports provided: CreateCtfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCtfComponent", function() { return CreateCtfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateCtfComponent = /** @class */ (function () {
    function CreateCtfComponent(modalService) {
        this.modalService = modalService;
    }
    CreateCtfComponent.prototype.ngOnInit = function () {
    };
    CreateCtfComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    CreateCtfComponent.prototype.close = function (reason) {
        this.modalService.dismissAll(reason);
    };
    CreateCtfComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    CreateCtfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-ctf',
            template: __webpack_require__(/*! ./create-ctf.component.html */ "./src/app/capture-the-flag/create-ctf/create-ctf.component.html"),
            styles: [__webpack_require__(/*! ./create-ctf.component.scss */ "./src/app/capture-the-flag/create-ctf/create-ctf.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], CreateCtfComponent);
    return CreateCtfComponent;
}());



/***/ }),

/***/ "./src/app/capture-the-flag/ctf.service.ts":
/*!*************************************************!*\
  !*** ./src/app/capture-the-flag/ctf.service.ts ***!
  \*************************************************/
/*! exports provided: CtfService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtfService", function() { return CtfService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CtfService = /** @class */ (function () {
    function CtfService(http, _userService) {
        this.http = http;
        this._userService = _userService;
        this.ctf_list = [];
        // error messages received from the login attempt
        this.errors = [];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.ctf_list = this.list();
    }
    // Uses http.get() to load data from a single API endpoint
    CtfService.prototype.list = function () {
        return this.http.get('/api/hackathons', this.httpOptions);
    };
    // send a POST request to the API to create a new data object
    CtfService.prototype.create = function (post, token) {
        return this.http.post('/api/ctfs', JSON.stringify(post), this.getHttpOptions());
    };
    // helper function to build the HTTP headers
    CtfService.prototype.getHttpOptions = function () {
        return {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this._userService.token
            })
        };
    };
    CtfService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], CtfService);
    return CtfService;
}());



/***/ }),

/***/ "./src/app/capture-the-flag/edit-ctf/edit-ctf.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/capture-the-flag/edit-ctf/edit-ctf.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit ctf</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <form>\n      <div class=\"form-group\">\n\n        <label for=\"ctf-name\">CTF name</label>\n        <div>\n          <input id=\"ctf-name\" type=\"text\">\n        </div>\n        <label for=\"ctf-type\">type</label>\n        <div>\n          <input id=\"ctf-type\" type=\"text\">\n        </div>\n        <label for=\"startDate\">Start date</label>\n        <div class=\"input-group\">\n          <input id=\"startDate\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"sdp\" ngbDatepicker #sdp=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary calendar\" (click)=\"sdp.toggle()\" type=\"button\"></button>\n          </div>\n        </div>\n        <label for=\"endDate\">End date</label>\n        <div class=\"input-group\">\n          <input id=\"endDate\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"edp\" ngbDatepicker #edp=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary calendar\" (click)=\"edp.toggle()\" type=\"button\"></button>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\n  </div>\n</ng-template>\n \n<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Edit</button>\n\n\n<pre>{{closeResult}}</pre>"

/***/ }),

/***/ "./src/app/capture-the-flag/edit-ctf/edit-ctf.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/capture-the-flag/edit-ctf/edit-ctf.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/capture-the-flag/edit-ctf/edit-ctf.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/capture-the-flag/edit-ctf/edit-ctf.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditCtfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCtfComponent", function() { return EditCtfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditCtfComponent = /** @class */ (function () {
    function EditCtfComponent(modalService) {
        this.modalService = modalService;
    }
    EditCtfComponent.prototype.ngOnInit = function () {
    };
    EditCtfComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    EditCtfComponent.prototype.close = function (reason) {
        this.modalService.dismissAll(reason);
    };
    EditCtfComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    EditCtfComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-ctf',
            template: __webpack_require__(/*! ./edit-ctf.component.html */ "./src/app/capture-the-flag/edit-ctf/edit-ctf.component.html"),
            styles: [__webpack_require__(/*! ./edit-ctf.component.scss */ "./src/app/capture-the-flag/edit-ctf/edit-ctf.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], EditCtfComponent);
    return EditCtfComponent;
}());



/***/ }),

/***/ "./src/app/capture-the-flag/index.ts":
/*!*******************************************!*\
  !*** ./src/app/capture-the-flag/index.ts ***!
  \*******************************************/
/*! exports provided: CaptureTheFlagComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _capture_the_flag_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capture-the-flag.component */ "./src/app/capture-the-flag/capture-the-flag.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CaptureTheFlagComponent", function() { return _capture_the_flag_component__WEBPACK_IMPORTED_MODULE_0__["CaptureTheFlagComponent"]; });




/***/ }),

/***/ "./src/app/challenges/challenges.component.html":
/*!******************************************************!*\
  !*** ./src/app/challenges/challenges.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  challenges works!\n</p>\n"

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
    function ChallengesComponent() {
    }
    ChallengesComponent.prototype.ngOnInit = function () {
    };
    ChallengesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-challenges',
            template: __webpack_require__(/*! ./challenges.component.html */ "./src/app/challenges/challenges.component.html"),
            styles: [__webpack_require__(/*! ./challenges.component.scss */ "./src/app/challenges/challenges.component.scss")]
        }),
        __metadata("design:paramtypes", [])
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

/***/ "./src/app/index.ts":
/*!**************************!*\
  !*** ./src/app/index.ts ***!
  \**************************/
/*! exports provided: ChallengesComponent, SharedModule, CaptureTheFlagComponent, NotFoundComponent, UnauthorizedComponent, ModuleImportGuard, throwIfAlreadyLoaded, LoggerService, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });

/* harmony import */ var _capture_the_flag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capture-the-flag */ "./src/app/capture-the-flag/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CaptureTheFlagComponent", function() { return _capture_the_flag__WEBPACK_IMPORTED_MODULE_1__["CaptureTheFlagComponent"]; });

/* harmony import */ var _challenges__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./challenges */ "./src/app/challenges/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChallengesComponent", function() { return _challenges__WEBPACK_IMPORTED_MODULE_2__["ChallengesComponent"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return _core__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnauthorizedComponent", function() { return _core__WEBPACK_IMPORTED_MODULE_3__["UnauthorizedComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModuleImportGuard", function() { return _core__WEBPACK_IMPORTED_MODULE_3__["ModuleImportGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return _core__WEBPACK_IMPORTED_MODULE_3__["throwIfAlreadyLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return _core__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]; });







/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });




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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/johnvon/angular-django-example/ctfman/front-end/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map