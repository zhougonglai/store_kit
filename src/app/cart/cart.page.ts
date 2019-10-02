import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { format } from 'mathjs';
import { Store, select } from '@ngrx/store';
import { cartsKeyword, CartsActions } from '@store/carts';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.page.html',
	styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
	carts = {
		selector: [],
		items: [],
	};

	goods$: Observable<[]>;

	constructor(private store: Store<{ [cartsKeyword]: [] }>) {
		this.goods$ = store.pipe(select(cartsKeyword));
	}

	ngOnInit() {}

	// 是否全选
	get selectorAll(): boolean {
		return false;
		// return this.carts.items.length
		// 	? !_.difference(
		// 			this.carts.items.map(item => item.id),
		// 			this.carts.selector,
		// 	  ).length
		// 	: false;
	}

	// 计算购物车商品总价
	get count() {
		return 1;
		// return format(
		// 	this.carts.items.reduce(
		// 		(total, { id, price, count }) =>
		// 			total + (this.carts.selector.includes(id) ? price * count : 0),
		// 		0,
		// 	),
		// 	{ notation: 'fixed', precision: 2 },
		// );
	}

	pushCarts(good) {
		this.store.dispatch(CartsActions.Add(good));
	}

	/**
	 * 单个商品选择
	 * @param goods 商品
	 * @param event 事件
	 */
	statusChange({ id }, { detail }) {
		console.log('statusChange', id, detail.checked);
		if (detail.checked) {
			this.carts.selector.push(id);
		} else {
			this.carts.selector.splice(this.carts.selector.indexOf(id), 1);
		}
	}

	/**
	 * 全选操作
	 * @param event 事件
	 */
	selectorChange({ detail: { checked } }) {
		console.log('selectorChange', checked);
		if (checked) {
			this.carts.selector = this.carts.items.map(item => item.id);
		} else {
			this.carts.selector = [];
		}
	}
}
