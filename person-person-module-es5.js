(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["person-person-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/person/person.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/person/person.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>person</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/person/person.module.ts":
/*!*****************************************!*\
  !*** ./src/app/person/person.module.ts ***!
  \*****************************************/
/*! exports provided: PersonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonPageModule", function() { return PersonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _person_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./person.page */ "./src/app/person/person.page.ts");







var routes = [
    {
        path: '',
        component: _person_page__WEBPACK_IMPORTED_MODULE_6__["PersonPage"]
    }
];
var PersonPageModule = /** @class */ (function () {
    function PersonPageModule() {
    }
    PersonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_person_page__WEBPACK_IMPORTED_MODULE_6__["PersonPage"]]
        })
    ], PersonPageModule);
    return PersonPageModule;
}());



/***/ }),

/***/ "./src/app/person/person.page.scss":
/*!*****************************************!*\
  !*** ./src/app/person/person.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi9wZXJzb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/person/person.page.ts":
/*!***************************************!*\
  !*** ./src/app/person/person.page.ts ***!
  \***************************************/
/*! exports provided: PersonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonPage", function() { return PersonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PersonPage = /** @class */ (function () {
    function PersonPage() {
    }
    PersonPage.prototype.ngOnInit = function () {
    };
    PersonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person',
            template: __webpack_require__(/*! raw-loader!./person.page.html */ "./node_modules/raw-loader/index.js!./src/app/person/person.page.html"),
            styles: [__webpack_require__(/*! ./person.page.scss */ "./src/app/person/person.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PersonPage);
    return PersonPage;
}());



/***/ })

}]);
//# sourceMappingURL=person-person-module-es5.js.map