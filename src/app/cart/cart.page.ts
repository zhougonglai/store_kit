import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { format } from 'mathjs';
import { Store, select } from '@ngrx/store';
import { CartsActions, cartsKeyword } from '@store/carts';
import { Observable } from 'rxjs';
import { GoodsDetails } from '@model/goods';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.page.html',
	styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
	goods$: Observable<GoodsDetails[]>;
	// 全选
	selectorAll$: Observable<boolean>;
	// 计算购物车商品总价
	count$: Observable<string>;

	constructor(private store: Store<{ [cartsKeyword]: GoodsDetails[] }>) {}

	ngOnInit() {
		this.goods$ = this.store.pipe(select(({ CARTS }) => Object.values(CARTS)));
		this.selectorAll$ = this.store.pipe(
			select(({ CARTS }) => Object.values(CARTS).every(good => good.select)),
		);
		this.count$ = this.store.pipe(
			select(({ CARTS }) =>
				format(
					Object.values(CARTS).reduce(
						(total, { count, price, select }: GoodsDetails) =>
							(select ? count * price.ultimately : 0) + total,
						0,
					),
					{ notation: 'fixed', precision: 2 },
				),
			),
		);
	}

	/**
	 * 增加商品
	 * @param good 商品
	 */
	pushCarts(good) {
		this.store.dispatch(CartsActions.Add({ good }));
	}

	/**
	 * 削减商品
	 * @param good 商品
	 */
	decrementGoods(good) {
		this.store.dispatch(CartsActions.Decrement({ good }));
	}

	/**
	 * 单个商品选择
	 * @param goods 商品
	 * @param event 事件
	 */
	statusChange(good) {
		this.store.dispatch(CartsActions.Select({ good }));
	}

	/**
	 * 全选操作
	 * @param event 事件
	 */
	selectorChange({ detail: { checked } }) {
		this.store.dispatch(CartsActions.SelectAll());
	}
}
