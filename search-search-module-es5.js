(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.page.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ion-page\" main>\n\t<ion-header translucent>\n\t\t<ion-toolbar>\n\t\t\t<ion-segment slot=\"secondary\" (ionChange)=\"segmentChanged($event)\">\n\t\t\t\t<ion-segment-button value=\"10\" checked>\n\t\t\t\t\t<ion-label>十人团</ion-label>\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"5\">\n\t\t\t\t\t<ion-label>五人团</ion-label>\n\t\t\t\t</ion-segment-button>\n\t\t\t\t<ion-segment-button value=\"2\">\n\t\t\t\t\t<ion-label>两人团</ion-label>\n\t\t\t\t</ion-segment-button>\n\t\t\t</ion-segment>\n\t\t\t<ion-buttons slot=\"primary\">\n\t\t\t\t<ion-menu-button></ion-menu-button>\n\t\t\t</ion-buttons>\n\t\t</ion-toolbar>\n\t</ion-header>\n\t<ion-content fullscreen>\n\t\t<ion-grid>\n\t\t\t<ion-row class=\"ion-align-items-center ion-justify-content-center\">\n\t\t\t\t<ion-col *ngFor=\"let item of goods\" size=\"6\">\n\t\t\t\t\t<div class=\"box\">\n\t\t\t\t\t\t<div class=\"box-thumbnail\">\n\t\t\t\t\t\t\t<img [src]=\"item.img\" />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-content\">\n\t\t\t\t\t\t\t<div class=\"box-title bold\">{{ item.title }}</div>\n\t\t\t\t\t\t\t<div class=\"box-subtitle small\">{{ item.label }}</div>\n\t\t\t\t\t\t\t<div class=\"box-price\">\n\t\t\t\t\t\t\t\t¥{{ item.price }}<sub>{{ item.original }}</sub>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ion-buttons class=\"box-action\">\n\t\t\t\t\t\t\t\t<ion-button color=\"danger\" fill=\"clear\" size=\"small\">\n\t\t\t\t\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"add-circle\"></ion-icon>\n\t\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</ion-content>\n</div>\n\n<ion-menu side=\"end\" class=\"custom-menu\">\n\t<ion-header>\n\t\t<ion-toolbar>\n\t\t\t<ion-title>分类</ion-title>\n\t\t</ion-toolbar>\n\t</ion-header>\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col *ngFor=\"let item of list\" size=\"4\">\n\t\t\t\t<div class=\"category\">\n\t\t\t\t\t<svg class=\"icon\" aria-hidden=\"true\">\n\t\t\t\t\t\t<use [attr.xlink:href]=\"item.icon\"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t\t<small class=\"category__label\">{{ item.label }}</small>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</ion-menu>\n"

/***/ }),

/***/ "./src/app/search/search.module.ts":
/*!*****************************************!*\
  !*** ./src/app/search/search.module.ts ***!
  \*****************************************/
/*! exports provided: SearchPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.page */ "./src/app/search/search.page.ts");







var routes = [
    {
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]
    }
];
var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());



/***/ }),

/***/ "./src/app/search/search.page.scss":
/*!*****************************************!*\
  !*** ./src/app/search/search.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .box {\n  border-radius: 8px;\n  box-shadow: 0 0 4px 2px rgba(var(--ion-color-medium-rgb), 0.2);\n  overflow: hidden;\n}\n:host .box .box-content {\n  padding: 8px;\n  position: relative;\n}\n:host .box .box-content .box-price {\n  margin-top: 8px;\n  color: var(--ion-color-danger);\n}\n:host .box .box-content .box-price sub {\n  color: var(--ion-color-medium);\n  text-decoration: line-through;\n}\n:host .box .box-content .box-action {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n}\n:host .category {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n:host .category svg.icon {\n  width: 48px;\n  height: 48px;\n}\n:host .custom-menu {\n  --width: 65vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0Msa0JBQUE7RUFDQSw4REFBQTtFQUNBLGdCQUFBO0FDQUY7QURFRTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtBQ0FIO0FERUc7RUFDQyxlQUFBO0VBQ0EsOEJBQUE7QUNBSjtBRENJO0VBQ0MsOEJBQUE7RUFDQSw2QkFBQTtBQ0NMO0FER0c7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDREo7QURNQztFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDSkY7QURLRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDSEg7QURPQztFQUNDLGFBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXHQuYm94IHtcblx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0Ym94LXNoYWRvdzogMCAwIDRweCAycHggcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMik7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblxuXHRcdC5ib3gtY29udGVudCB7XG5cdFx0XHRwYWRkaW5nOiA4cHg7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHRcdC5ib3gtcHJpY2Uge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiA4cHg7XG5cdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcblx0XHRcdFx0c3ViIHtcblx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0LmJveC1hY3Rpb24ge1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LmNhdGVnb3J5IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXg6IDE7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdHN2Zy5pY29uIHtcblx0XHRcdHdpZHRoOiA0OHB4O1xuXHRcdFx0aGVpZ2h0OiA0OHB4O1xuXHRcdH1cblx0fVxuXG5cdC5jdXN0b20tbWVudSB7XG5cdFx0LS13aWR0aDogNjV2dztcblx0fVxufVxuIiwiOmhvc3QgLmJveCB7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAycHggcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCAuYm94IC5ib3gtY29udGVudCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLmJveCAuYm94LWNvbnRlbnQgLmJveC1wcmljZSB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmJveCAuYm94LWNvbnRlbnQgLmJveC1wcmljZSBzdWIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuOmhvc3QgLmJveCAuYm94LWNvbnRlbnQgLmJveC1hY3Rpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG46aG9zdCAuY2F0ZWdvcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IC5jYXRlZ29yeSBzdmcuaWNvbiB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG46aG9zdCAuY3VzdG9tLW1lbnUge1xuICAtLXdpZHRoOiA2NXZ3O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/search/search.page.ts":
/*!***************************************!*\
  !*** ./src/app/search/search.page.ts ***!
  \***************************************/
/*! exports provided: SearchPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPage", function() { return SearchPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SearchPage = /** @class */ (function () {
    function SearchPage(menu) {
        this.menu = menu;
        this.goods = [
            {
                id: 1,
                title: 'Force Majeure',
                label: 'Unisex T-shirt',
                price: 12.1,
                original: 15.0,
                rate: 4,
                img: 'https://api.adorable.io/avatars/face/eyes1/nose2/mouth1/2196f3',
            },
            {
                id: 2,
                title: 'Nike fashion shoes',
                label: 'Unisex shoes',
                price: 42.1,
                original: 15.0,
                rate: 3,
                img: 'https://api.adorable.io/avatars/face/eyes2/nose3/mouth10/8e8895',
            },
            {
                id: 3,
                title: 'Force Majeure',
                label: 'Unisex T-shirt',
                price: 12.4,
                original: 15.0,
                rate: 5,
                img: 'https://api.adorable.io/avatars/face/eyes3/nose4/mouth11/ff4d4f',
            },
            {
                id: 4,
                title: 'Nike fashion shoes',
                label: 'Unisex shoes',
                price: 42.1,
                original: 15.0,
                rate: 5,
                img: 'https://api.adorable.io/avatars/face/eyes4/nose5/mouth3/faad14',
            },
            {
                id: 5,
                title: 'Force Majeure',
                label: 'Unisex T-shirt',
                price: 42.5,
                original: 15.0,
                rate: 3,
                img: 'https://api.adorable.io/avatars/face/eyes5/nose6/mouth5/52c41a',
            },
            {
                id: 6,
                title: 'Nike fashion shoes',
                label: 'Unisex shoes',
                price: 52.6,
                original: 15.0,
                rate: 5,
                img: 'https://api.adorable.io/avatars/face/eyes1/nose2/mouth1/1890ff',
            },
        ];
        this.list = [
            {
                id: 2,
                icon: '#icon-fushilei',
                label: '潮流服饰',
            },
            {
                id: 3,
                icon: '#icon-baihuo',
                label: '日用百货',
            },
            {
                id: 4,
                icon: '#icon-lingshi',
                label: '吃货专区',
            },
            {
                id: 5,
                icon: '#icon-jiafanglei',
                label: '家纺专区',
            },
            {
                id: 6,
                icon: '#icon-TEACEREMONY',
                label: '茶道茶具',
            },
            {
                id: 7,
                icon: '#icon-iconfonttubiaozhizuo-',
                label: '品质红酒',
            },
            {
                id: 8,
                icon: '#icon-xie',
                label: '鞋类专区',
            },
        ];
        this.segmentActive = '10';
    }
    SearchPage.prototype.ngOnInit = function () { };
    SearchPage.prototype.segmentChanged = function (_a) {
        var value = _a.detail.value;
        this.segmentActive = value;
    };
    SearchPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
    ]; };
    SearchPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.page.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.page.html"),
            styles: [__webpack_require__(/*! ./search.page.scss */ "./src/app/search/search.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], SearchPage);
    return SearchPage;
}());



/***/ })

}]);
//# sourceMappingURL=search-search-module-es5.js.map