(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header translucent>\n\t<ion-toolbar>\n\t\t<ion-title>购物车</ion-title>\n\t\t<!-- <ion-buttons slot=\"end\">\n\t\t\t<ion-button>管理</ion-button>\n\t\t</ion-buttons> -->\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"ion-padding-vertical\">\n\t<div class=\"scroll-view-container vertical\">\n\t\t<div class=\"cell-list vertical\">\n\t\t\t<div class=\"cell-item\" *ngFor=\"let cart of carts\">\n\t\t\t\t<ion-checkbox color=\"danger\" class=\"ion-margin-start\"></ion-checkbox>\n\t\t\t\t<div class=\"box\">\n\t\t\t\t\t<img [src]=\"cart.img\" class=\"box-img\" [alt]=\"cart.label\" />\n\t\t\t\t\t<div class=\"box-content\">\n\t\t\t\t\t\t<div class=\"box-title large\">{{ cart.title }}</div>\n\t\t\t\t\t\t<div class=\"box-subtitle\">{{ cart.label }}</div>\n\t\t\t\t\t\t<div class=\"fill\"></div>\n\t\t\t\t\t\t<div class=\"box-price larger\">\n\t\t\t\t\t\t\t¥{{ cart.price }} <sub>{{ cart.original }}</sub>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ion-buttons class=\"box-action\">\n\t\t\t\t\t\t\t<ion-button color=\"danger\">\n\t\t\t\t\t\t\t\t<ion-icon\n\t\t\t\t\t\t\t\t\tslot=\"icon-only\"\n\t\t\t\t\t\t\t\t\tname=\"remove-circle-outline\"\n\t\t\t\t\t\t\t\t></ion-icon>\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t\t<ion-button color=\"danger\">\n\t\t\t\t\t\t\t\t<ion-icon slot=\"icon-only\" name=\"add-circle-outline\"></ion-icon>\n\t\t\t\t\t\t\t</ion-button>\n\t\t\t\t\t\t</ion-buttons>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n\n<ion-footer translucent>\n\t<ion-toolbar>\n\t\t<div class=\"flex ion-align-items-center\" slot=\"start\">\n\t\t\t<ion-checkbox color=\"danger\" class=\"ion-margin-start\"></ion-checkbox>\n\t\t\t<small class=\"ion-margin-start\">全选</small>\n\t\t</div>\n\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button color=\"danger\" fill=\"solid\">结算</ion-button>\n\t\t</ion-buttons>\n\t</ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/cart/cart.module.ts":
/*!*************************************!*\
  !*** ./src/app/cart/cart.module.ts ***!
  \*************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/cart/cart.page.ts");







var routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }
];
var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
        })
    ], CartPageModule);
    return CartPageModule;
}());



/***/ }),

/***/ "./src/app/cart/cart.page.scss":
/*!*************************************!*\
  !*** ./src/app/cart/cart.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .fill {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .scroll-view-container.horizontal {\n  overflow-x: auto;\n  overscroll-behavior-y: none;\n  overscroll-behavior-x: contain;\n}\n:host .scroll-view-container.horizontal::-webkit-scrollbar {\n  display: none;\n}\n:host .scroll-view-container .cell-list.vertical .cell-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .scroll-view-container .cell-list.vertical .cell-item + .cell-item {\n  margin-top: 16px;\n}\n:host .scroll-view-container .cell-list.vertical .cell-item .box {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  margin: 8px;\n  box-shadow: 0 0 4px 2px rgba(var(--ion-color-medium-rgb), 0.2);\n  border-radius: 8px;\n  overflow: hidden;\n}\n:host .scroll-view-container .cell-list.vertical .cell-item .box .box-img {\n  height: 125px;\n}\n:host .scroll-view-container .cell-list.vertical .cell-item .box .box-content {\n  padding: 8px;\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .scroll-view-container .cell-list.vertical .cell-item .box .box-content .box-title {\n  color: var(--ion-color-dark-shade);\n}\n:host .scroll-view-container .cell-list.vertical .cell-item .box .box-content .box-subtitle {\n  color: var(--ion-color-dark-tint);\n}\n:host .scroll-view-container .cell-list.vertical .cell-item .box .box-content .box-rate {\n  color: var(--ion-color-warning);\n}\n:host .scroll-view-container .cell-list.vertical .cell-item .box .box-content .box-price {\n  color: var(--ion-color-danger);\n}\n:host .scroll-view-container .cell-list.vertical .cell-item .box .box-content .box-price sub {\n  color: var(--ion-color-medium);\n  text-decoration: line-through;\n}\n:host .scroll-view-container .cell-list.vertical .cell-item .box .box-content .box-action {\n  position: absolute;\n  bottom: 8px;\n  right: 8px;\n}\n:host .flex {\n  display: -webkit-box;\n  display: flex;\n}\n:host ion-footer small {\n  color: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9naXRodWIvd29ya3NwYWNlL3NyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLG1CQUFBO1VBQUEsT0FBQTtBQ0FGO0FER0U7RUFDQyxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNESDtBREVHO0VBQ0MsYUFBQTtBQ0FKO0FETUk7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSkw7QURLSztFQUNDLGdCQUFBO0FDSE47QURLSztFQUNDLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSw4REFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNITjtBRElNO0VBQ0MsYUFBQTtBQ0ZQO0FES007RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNIUDtBREtPO0VBQ0Msa0NBQUE7QUNIUjtBREtPO0VBQ0MsaUNBQUE7QUNIUjtBREtPO0VBQ0MsK0JBQUE7QUNIUjtBRE1PO0VBQ0MsOEJBQUE7QUNKUjtBREtRO0VBQ0MsOEJBQUE7RUFDQSw2QkFBQTtBQ0hUO0FET087RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDTFI7QURjQztFQUNDLG9CQUFBO0VBQUEsYUFBQTtBQ1pGO0FEZ0JFO0VBQ0MsOEJBQUE7QUNkSCIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cdC5maWxsIHtcblx0XHRmbGV4OiAxO1xuXHR9XG5cdC5zY3JvbGwtdmlldy1jb250YWluZXIge1xuXHRcdCYuaG9yaXpvbnRhbCB7XG5cdFx0XHRvdmVyZmxvdy14OiBhdXRvO1xuXHRcdFx0b3ZlcnNjcm9sbC1iZWhhdmlvci15OiBub25lO1xuXHRcdFx0b3ZlcnNjcm9sbC1iZWhhdmlvci14OiBjb250YWluO1xuXHRcdFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuXHRcdFx0XHRkaXNwbGF5OiBub25lO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5jZWxsLWxpc3Qge1xuXHRcdFx0Ji52ZXJ0aWNhbCB7XG5cdFx0XHRcdC5jZWxsLWl0ZW0ge1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHQmICsgLmNlbGwtaXRlbSB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiAxNnB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuYm94IHtcblx0XHRcdFx0XHRcdGZsZXg6IDE7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0bWFyZ2luOiA4cHg7XG5cdFx0XHRcdFx0XHRib3gtc2hhZG93OiAwIDAgNHB4IDJweCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4yKTtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcblx0XHRcdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdFx0XHQuYm94LWltZyB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMTI1cHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5ib3gtY29udGVudCB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0XHRmbGV4OiAxO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdFx0XHRcdFx0XHRcdC5ib3gtdGl0bGUge1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0LmJveC1zdWJ0aXRsZSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC5ib3gtcmF0ZSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC5ib3gtcHJpY2Uge1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcblx0XHRcdFx0XHRcdFx0XHRzdWIge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LmJveC1hY3Rpb24ge1xuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0XHRib3R0b206IDhweDtcblx0XHRcdFx0XHRcdFx0XHRyaWdodDogOHB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LmZsZXgge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdH1cblxuXHRpb24tZm9vdGVyIHtcblx0XHRzbWFsbCB7XG5cdFx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG5cdFx0fVxuXHR9XG59XG4iLCI6aG9zdCAuZmlsbCB7XG4gIGZsZXg6IDE7XG59XG46aG9zdCAuc2Nyb2xsLXZpZXctY29udGFpbmVyLmhvcml6b250YWwge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6IG5vbmU7XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3IteDogY29udGFpbjtcbn1cbjpob3N0IC5zY3JvbGwtdmlldy1jb250YWluZXIuaG9yaXpvbnRhbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLnNjcm9sbC12aWV3LWNvbnRhaW5lciAuY2VsbC1saXN0LnZlcnRpY2FsIC5jZWxsLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLnNjcm9sbC12aWV3LWNvbnRhaW5lciAuY2VsbC1saXN0LnZlcnRpY2FsIC5jZWxsLWl0ZW0gKyAuY2VsbC1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbjpob3N0IC5zY3JvbGwtdmlldy1jb250YWluZXIgLmNlbGwtbGlzdC52ZXJ0aWNhbCAuY2VsbC1pdGVtIC5ib3gge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDhweDtcbiAgYm94LXNoYWRvdzogMCAwIDRweCAycHggcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IC5zY3JvbGwtdmlldy1jb250YWluZXIgLmNlbGwtbGlzdC52ZXJ0aWNhbCAuY2VsbC1pdGVtIC5ib3ggLmJveC1pbWcge1xuICBoZWlnaHQ6IDEyNXB4O1xufVxuOmhvc3QgLnNjcm9sbC12aWV3LWNvbnRhaW5lciAuY2VsbC1saXN0LnZlcnRpY2FsIC5jZWxsLWl0ZW0gLmJveCAuYm94LWNvbnRlbnQge1xuICBwYWRkaW5nOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5zY3JvbGwtdmlldy1jb250YWluZXIgLmNlbGwtbGlzdC52ZXJ0aWNhbCAuY2VsbC1pdGVtIC5ib3ggLmJveC1jb250ZW50IC5ib3gtdGl0bGUge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xufVxuOmhvc3QgLnNjcm9sbC12aWV3LWNvbnRhaW5lciAuY2VsbC1saXN0LnZlcnRpY2FsIC5jZWxsLWl0ZW0gLmJveCAuYm94LWNvbnRlbnQgLmJveC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbn1cbjpob3N0IC5zY3JvbGwtdmlldy1jb250YWluZXIgLmNlbGwtbGlzdC52ZXJ0aWNhbCAuY2VsbC1pdGVtIC5ib3ggLmJveC1jb250ZW50IC5ib3gtcmF0ZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG59XG46aG9zdCAuc2Nyb2xsLXZpZXctY29udGFpbmVyIC5jZWxsLWxpc3QudmVydGljYWwgLmNlbGwtaXRlbSAuYm94IC5ib3gtY29udGVudCAuYm94LXByaWNlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLnNjcm9sbC12aWV3LWNvbnRhaW5lciAuY2VsbC1saXN0LnZlcnRpY2FsIC5jZWxsLWl0ZW0gLmJveCAuYm94LWNvbnRlbnQgLmJveC1wcmljZSBzdWIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuOmhvc3QgLnNjcm9sbC12aWV3LWNvbnRhaW5lciAuY2VsbC1saXN0LnZlcnRpY2FsIC5jZWxsLWl0ZW0gLmJveCAuYm94LWNvbnRlbnQgLmJveC1hY3Rpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOHB4O1xuICByaWdodDogOHB4O1xufVxuOmhvc3QgLmZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgaW9uLWZvb3RlciBzbWFsbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cart/cart.page.ts":
/*!***********************************!*\
  !*** ./src/app/cart/cart.page.ts ***!
  \***********************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartPage = /** @class */ (function () {
    function CartPage() {
        this.carts = [
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
    CartPage.prototype.ngOnInit = function () { };
    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.page.html"),
            styles: [__webpack_require__(/*! ./cart.page.scss */ "./src/app/cart/cart.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartPage);
    return CartPage;
}());



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es5.js.map