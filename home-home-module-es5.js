(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t\t<ion-searchbar placeholder=\"找到你的最爱\"></ion-searchbar>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button>\n\t\t\t\t<ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n\t<ion-slides pager=\"true\" [options]=\"slideOpts\">\n\t\t<ion-slide *ngFor=\"let banner of banners; let i\">\n\t\t\t<img [src]=\"banner\" [alt]=\"i\" />\n\t\t</ion-slide>\n\t</ion-slides>\n\n\t<ion-grid>\n\t\t<ion-row class=\"ion-align-items-center ion-justify-content-center\">\n\t\t\t<ion-col *ngFor=\"let item of list\" size=\"3\">\n\t\t\t\t<div class=\"category\">\n\t\t\t\t\t<svg class=\"icon\" aria-hidden=\"true\">\n\t\t\t\t\t\t<use [attr.xlink:href]=\"item.icon\"></use>\n\t\t\t\t\t</svg>\n\t\t\t\t\t<small class=\"category__label\">{{ item.label }}</small>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\n\t<ion-toolbar>\n\t\t<div class=\"title\">新品推荐</div>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button>查看更多></ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n\n\t<div class=\"scroll-view-container horizontal\">\n\t\t<div class=\"cell-list horizontal\">\n\t\t\t<div class=\"cell-item\" *ngFor=\"let fresh of freshs\">\n\t\t\t\t<div class=\"box\">\n\t\t\t\t\t<img [src]=\"fresh.img\" class=\"box-img\" [alt]=\"fresh.label\" />\n\t\t\t\t\t<div class=\"box-content\">\n\t\t\t\t\t\t<div class=\"box-title smaller\">{{ fresh.title }}</div>\n\t\t\t\t\t\t<div class=\"box-subtitle small\">{{ fresh.label }}</div>\n\t\t\t\t\t\t<div class=\"box-rate small\">\n\t\t\t\t\t\t\t{{ getRate(fresh.rate) }} <i>{{ fresh.rate }}分</i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"box-price\">\n\t\t\t\t\t\t\t¥{{ fresh.price }}\n\t\t\t\t\t\t\t<sub>{{ fresh.original }}</sub>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ion-buttons class=\"box-action\">\n\t\t\t\t\t\t\t<ion-button color=\"danger\" fill=\"clear\" size=\"small\">\n\t\t\t\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"add-circle\"></ion-icon>\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<ion-toolbar>\n\t\t<div class=\"title\">聚划算</div>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button>查看更多></ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n\n\t<div class=\"scroll-view-container vertical\">\n\t\t<div class=\"cell-list vertical\">\n\t\t\t<div class=\"cell-item\" *ngFor=\"let fresh of freshs\">\n\t\t\t\t<div class=\"box\">\n\t\t\t\t\t<img [src]=\"fresh.img\" class=\"box-img\" [alt]=\"fresh.label\" />\n\t\t\t\t\t<div class=\"box-content\">\n\t\t\t\t\t\t<div class=\"box-title large\">{{ fresh.title }}</div>\n\t\t\t\t\t\t<div class=\"box-subtitle\">{{ fresh.label }}</div>\n\t\t\t\t\t\t<div class=\"fill\"></div>\n\t\t\t\t\t\t<div class=\"box-price larger\">\n\t\t\t\t\t\t\t¥{{ fresh.price }} <sub>{{ fresh.original }}</sub>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ion-buttons class=\"box-action\">\n\t\t\t\t\t\t\t<ion-button color=\"danger\" fill=\"solid\">\n\t\t\t\t\t\t\t\t马上抢\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<ion-toolbar>\n\t\t<div class=\"block\">\n\t\t\t到底了!\n\t\t</div>\n\t</ion-toolbar>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"],
    },
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .category {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n:host .category svg.icon {\n  width: 48px;\n  height: 48px;\n}\n.fill {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.title {\n  margin-left: 8px;\n  padding-left: 8px;\n  border-left: 3px solid #2196f3;\n}\n.block {\n  width: 100%;\n  text-align: center;\n  color: var(--ion-color-medium);\n}\n/* @component {app-scroll} */\n.scroll-view-container.horizontal {\n  overflow-x: auto;\n  overscroll-behavior-y: none;\n  overscroll-behavior-x: contain;\n}\n.scroll-view-container.horizontal::-webkit-scrollbar {\n  display: none;\n}\n.scroll-view-container.vertical {\n  overflow-y: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.scroll-view-container .cell-list.horizontal {\n  overflow-y: hidden;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: -webkit-box;\n  display: flex;\n}\n.scroll-view-container .cell-list.horizontal .cell-item {\n  width: 35vw;\n}\n.scroll-view-container .cell-list.horizontal .cell-item + .cell-item {\n  margin-left: 16px;\n}\n.scroll-view-container .cell-list.horizontal .cell-item .box {\n  width: inherit;\n}\n.scroll-view-container .cell-list.horizontal .cell-item .box .box-img {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 5px;\n}\n.scroll-view-container .cell-list.horizontal .cell-item .box .box-content {\n  position: relative;\n}\n.scroll-view-container .cell-list.horizontal .cell-item .box .box-content .box-title {\n  color: var(--ion-color-dark-shade);\n}\n.scroll-view-container .cell-list.horizontal .cell-item .box .box-content .box-subtitle {\n  color: var(--ion-color-dark-tint);\n}\n.scroll-view-container .cell-list.horizontal .cell-item .box .box-content .box-rate {\n  color: var(--ion-color-warning);\n}\n.scroll-view-container .cell-list.horizontal .cell-item .box .box-content .box-price {\n  color: var(--ion-color-danger);\n}\n.scroll-view-container .cell-list.horizontal .cell-item .box .box-content .box-price sub {\n  color: var(--ion-color-medium);\n  text-decoration: line-through;\n}\n.scroll-view-container .cell-list.horizontal .cell-item .box .box-content .box-action {\n  position: absolute;\n  bottom: -1px;\n  right: -6px;\n}\n.scroll-view-container .cell-list.vertical .cell-item + .cell-item {\n  margin-top: 16px;\n}\n.scroll-view-container .cell-list.vertical .cell-item .box {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  margin: 8px;\n  box-shadow: 0 0 4px 2px rgba(var(--ion-color-medium-rgb), 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n.scroll-view-container .cell-list.vertical .cell-item .box .box-img {\n  height: 125px;\n}\n.scroll-view-container .cell-list.vertical .cell-item .box .box-content {\n  padding: 8px;\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.scroll-view-container .cell-list.vertical .cell-item .box .box-content .box-title {\n  color: var(--ion-color-dark-shade);\n}\n.scroll-view-container .cell-list.vertical .cell-item .box .box-content .box-subtitle {\n  color: var(--ion-color-dark-tint);\n}\n.scroll-view-container .cell-list.vertical .cell-item .box .box-content .box-rate {\n  color: var(--ion-color-warning);\n}\n.scroll-view-container .cell-list.vertical .cell-item .box .box-content .box-price {\n  color: var(--ion-color-danger);\n}\n.scroll-view-container .cell-list.vertical .cell-item .box .box-content .box-price sub {\n  color: var(--ion-color-medium);\n  text-decoration: line-through;\n}\n.scroll-view-container .cell-list.vertical .cell-item .box .box-content .box-action {\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQUY7QURDRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDQ0g7QURJQTtFQUNDLG1CQUFBO1VBQUEsT0FBQTtBQ0REO0FESUE7RUFDQyxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNERDtBRElBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNERDtBRElBLDRCQUFBO0FBRUM7RUFDQyxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNGRjtBREdFO0VBQ0MsYUFBQTtBQ0RIO0FES0M7RUFDQyxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0hGO0FET0U7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNMSDtBRE1HO0VBQ0MsV0FBQTtBQ0pKO0FETUk7RUFDQyxpQkFBQTtBQ0pMO0FETUk7RUFDQyxjQUFBO0FDSkw7QURLSztFQUNDLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0FDSE47QURNSztFQUNDLGtCQUFBO0FDSk47QURLTTtFQUNDLGtDQUFBO0FDSFA7QURLTTtFQUNDLGlDQUFBO0FDSFA7QURLTTtFQUNDLCtCQUFBO0FDSFA7QURNTTtFQUNDLDhCQUFBO0FDSlA7QURLTztFQUNDLDhCQUFBO0VBQ0EsNkJBQUE7QUNIUjtBRE1NO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0pQO0FEYUk7RUFDQyxnQkFBQTtBQ1hMO0FEYUk7RUFDQyxtQkFBQTtVQUFBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOERBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDWEw7QURZSztFQUNDLGFBQUE7QUNWTjtBRGFLO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDWE47QURhTTtFQUNDLGtDQUFBO0FDWFA7QURhTTtFQUNDLGlDQUFBO0FDWFA7QURhTTtFQUNDLCtCQUFBO0FDWFA7QURjTTtFQUNDLDhCQUFBO0FDWlA7QURhTztFQUNDLDhCQUFBO0VBQ0EsNkJBQUE7QUNYUjtBRGVNO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ2JQIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblx0LmNhdGVnb3J5IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXg6IDE7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdHN2Zy5pY29uIHtcblx0XHRcdHdpZHRoOiA0OHB4O1xuXHRcdFx0aGVpZ2h0OiA0OHB4O1xuXHRcdH1cblx0fVxufVxuXG4uZmlsbCB7XG5cdGZsZXg6IDE7XG59XG5cbi50aXRsZSB7XG5cdG1hcmdpbi1sZWZ0OiA4cHg7XG5cdHBhZGRpbmctbGVmdDogOHB4O1xuXHRib3JkZXItbGVmdDogM3B4IHNvbGlkICMyMTk2ZjM7XG59XG5cbi5ibG9jayB7XG5cdHdpZHRoOiAxMDAlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cblxuLyogQGNvbXBvbmVudCB7YXBwLXNjcm9sbH0gKi9cbi5zY3JvbGwtdmlldy1jb250YWluZXIge1xuXHQmLmhvcml6b250YWwge1xuXHRcdG92ZXJmbG93LXg6IGF1dG87XG5cdFx0b3ZlcnNjcm9sbC1iZWhhdmlvci15OiBub25lO1xuXHRcdG92ZXJzY3JvbGwtYmVoYXZpb3IteDogY29udGFpbjtcblx0XHQmOjotd2Via2l0LXNjcm9sbGJhciB7XG5cdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdH1cblx0fVxuXG5cdCYudmVydGljYWwge1xuXHRcdG92ZXJmbG93LXk6IGF1dG87XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHR9XG5cblx0LmNlbGwtbGlzdCB7XG5cdFx0Ji5ob3Jpem9udGFsIHtcblx0XHRcdG92ZXJmbG93LXk6IGhpZGRlbjtcblx0XHRcdHBhZGRpbmctbGVmdDogMTZweDtcblx0XHRcdHBhZGRpbmctcmlnaHQ6IDE2cHg7XG5cdFx0XHR3aWR0aDogZml0LWNvbnRlbnQ7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0LmNlbGwtaXRlbSB7XG5cdFx0XHRcdHdpZHRoOiAzNXZ3O1xuXG5cdFx0XHRcdCYgKyAuY2VsbC1pdGVtIHtcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTZweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuYm94IHtcblx0XHRcdFx0XHR3aWR0aDogaW5oZXJpdDtcblx0XHRcdFx0XHQuYm94LWltZyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogZml0LWNvbnRlbnQ7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LmJveC1jb250ZW50IHtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0XHRcdC5ib3gtdGl0bGUge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0LmJveC1zdWJ0aXRsZSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5ib3gtcmF0ZSB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5ib3gtcHJpY2Uge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG5cdFx0XHRcdFx0XHRcdHN1YiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuXHRcdFx0XHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuYm94LWFjdGlvbiB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiAtMXB4O1xuXHRcdFx0XHRcdFx0XHRyaWdodDogLTZweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQmLnZlcnRpY2FsIHtcblx0XHRcdC5jZWxsLWl0ZW0ge1xuXHRcdFx0XHQmICsgLmNlbGwtaXRlbSB7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMTZweDtcblx0XHRcdFx0fVxuXHRcdFx0XHQuYm94IHtcblx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0bWFyZ2luOiA4cHg7XG5cdFx0XHRcdFx0Ym94LXNoYWRvdzogMCAwIDRweCAycHggcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMik7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0LmJveC1pbWcge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiAxMjVweDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQuYm94LWNvbnRlbnQge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogOHB4O1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdFx0XHRcdFx0XHQuYm94LXRpdGxlIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5ib3gtc3VidGl0bGUge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHQuYm94LXJhdGUge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuYm94LXByaWNlIHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuXHRcdFx0XHRcdFx0XHRzdWIge1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuYm94LWFjdGlvbiB7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0Ym90dG9tOiA4cHg7XG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiA4cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCI6aG9zdCAuY2F0ZWdvcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IC5jYXRlZ29yeSBzdmcuaWNvbiB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5maWxsIHtcbiAgZmxleDogMTtcbn1cblxuLnRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzIxOTZmMztcbn1cblxuLmJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4vKiBAY29tcG9uZW50IHthcHAtc2Nyb2xsfSAqL1xuLnNjcm9sbC12aWV3LWNvbnRhaW5lci5ob3Jpem9udGFsIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvci15OiBub25lO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLXg6IGNvbnRhaW47XG59XG4uc2Nyb2xsLXZpZXctY29udGFpbmVyLmhvcml6b250YWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zY3JvbGwtdmlldy1jb250YWluZXIudmVydGljYWwge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnNjcm9sbC12aWV3LWNvbnRhaW5lciAuY2VsbC1saXN0Lmhvcml6b250YWwge1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNjcm9sbC12aWV3LWNvbnRhaW5lciAuY2VsbC1saXN0Lmhvcml6b250YWwgLmNlbGwtaXRlbSB7XG4gIHdpZHRoOiAzNXZ3O1xufVxuLnNjcm9sbC12aWV3LWNvbnRhaW5lciAuY2VsbC1saXN0Lmhvcml6b250YWwgLmNlbGwtaXRlbSArIC5jZWxsLWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5zY3JvbGwtdmlldy1jb250YWluZXIgLmNlbGwtbGlzdC5ob3Jpem9udGFsIC5jZWxsLWl0ZW0gLmJveCB7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuLnNjcm9sbC12aWV3LWNvbnRhaW5lciAuY2VsbC1saXN0Lmhvcml6b250YWwgLmNlbGwtaXRlbSAuYm94IC5ib3gtaW1nIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uc2Nyb2xsLXZpZXctY29udGFpbmVyIC5jZWxsLWxpc3QuaG9yaXpvbnRhbCAuY2VsbC1pdGVtIC5ib3ggLmJveC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNjcm9sbC12aWV3LWNvbnRhaW5lciAuY2VsbC1saXN0Lmhvcml6b250YWwgLmNlbGwtaXRlbSAuYm94IC5ib3gtY29udGVudCAuYm94LXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbn1cbi5zY3JvbGwtdmlldy1jb250YWluZXIgLmNlbGwtbGlzdC5ob3Jpem9udGFsIC5jZWxsLWl0ZW0gLmJveCAuYm94LWNvbnRlbnQgLmJveC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbn1cbi5zY3JvbGwtdmlldy1jb250YWluZXIgLmNlbGwtbGlzdC5ob3Jpem9udGFsIC5jZWxsLWl0ZW0gLmJveCAuYm94LWNvbnRlbnQgLmJveC1yYXRlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbn1cbi5zY3JvbGwtdmlldy1jb250YWluZXIgLmNlbGwtbGlzdC5ob3Jpem9udGFsIC5jZWxsLWl0ZW0gLmJveCAuYm94LWNvbnRlbnQgLmJveC1wcmljZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbi5zY3JvbGwtdmlldy1jb250YWluZXIgLmNlbGwtbGlzdC5ob3Jpem9udGFsIC5jZWxsLWl0ZW0gLmJveCAuYm94LWNvbnRlbnQgLmJveC1wcmljZSBzdWIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLnNjcm9sbC12aWV3LWNvbnRhaW5lciAuY2VsbC1saXN0Lmhvcml6b250YWwgLmNlbGwtaXRlbSAuYm94IC5ib3gtY29udGVudCAuYm94LWFjdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMXB4O1xuICByaWdodDogLTZweDtcbn1cbi5zY3JvbGwtdmlldy1jb250YWluZXIgLmNlbGwtbGlzdC52ZXJ0aWNhbCAuY2VsbC1pdGVtICsgLmNlbGwtaXRlbSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uc2Nyb2xsLXZpZXctY29udGFpbmVyIC5jZWxsLWxpc3QudmVydGljYWwgLmNlbGwtaXRlbSAuYm94IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggMnB4IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uc2Nyb2xsLXZpZXctY29udGFpbmVyIC5jZWxsLWxpc3QudmVydGljYWwgLmNlbGwtaXRlbSAuYm94IC5ib3gtaW1nIHtcbiAgaGVpZ2h0OiAxMjVweDtcbn1cbi5zY3JvbGwtdmlldy1jb250YWluZXIgLmNlbGwtbGlzdC52ZXJ0aWNhbCAuY2VsbC1pdGVtIC5ib3ggLmJveC1jb250ZW50IHtcbiAgcGFkZGluZzogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2Nyb2xsLXZpZXctY29udGFpbmVyIC5jZWxsLWxpc3QudmVydGljYWwgLmNlbGwtaXRlbSAuYm94IC5ib3gtY29udGVudCAuYm94LXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlKTtcbn1cbi5zY3JvbGwtdmlldy1jb250YWluZXIgLmNlbGwtbGlzdC52ZXJ0aWNhbCAuY2VsbC1pdGVtIC5ib3ggLmJveC1jb250ZW50IC5ib3gtc3VidGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG59XG4uc2Nyb2xsLXZpZXctY29udGFpbmVyIC5jZWxsLWxpc3QudmVydGljYWwgLmNlbGwtaXRlbSAuYm94IC5ib3gtY29udGVudCAuYm94LXJhdGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuLnNjcm9sbC12aWV3LWNvbnRhaW5lciAuY2VsbC1saXN0LnZlcnRpY2FsIC5jZWxsLWl0ZW0gLmJveCAuYm94LWNvbnRlbnQgLmJveC1wcmljZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbi5zY3JvbGwtdmlldy1jb250YWluZXIgLmNlbGwtbGlzdC52ZXJ0aWNhbCAuY2VsbC1pdGVtIC5ib3ggLmJveC1jb250ZW50IC5ib3gtcHJpY2Ugc3ViIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cbi5zY3JvbGwtdmlldy1jb250YWluZXIgLmNlbGwtbGlzdC52ZXJ0aWNhbCAuY2VsbC1pdGVtIC5ib3ggLmJveC1jb250ZW50IC5ib3gtYWN0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDhweDtcbiAgcmlnaHQ6IDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
        this.slideOpts = {
            loop: true,
        };
        this.list = [
            {
                id: 1,
                icon: '#icon-pintuan',
                label: '立即拼团',
            },
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
        this.banners = [
            'http://dummyimage.com/822x250/79d9f2/FFF.白&text=sdf',
            'http://dummyimage.com/822x250/f2e779/FFF.属&text=sdvsdv',
            'http://dummyimage.com/822x250/c479f2/FFF.声&text=svdvs',
            'http://dummyimage.com/822x250/79f2a0/FFF.见&text=sdvs',
            'http://dummyimage.com/822x250/f27d79/FFF.值&text=sdv',
            'http://dummyimage.com/822x250/7998f2/FFF.打&text=sdvsdv',
        ];
        this.freshs = [
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
    }
    HomePage.prototype.getRate = function (rate) {
        return '★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate);
    };
    HomePage.prototype.ngOnInit = function () { };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map