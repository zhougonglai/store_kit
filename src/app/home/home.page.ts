import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartsKeyword, CartsActions } from '@store/carts';
import { GoodsService } from '@service/goods.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	slideOpts = {
		loop: true,
	};

	list = [
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

	banners = [];

	freshs = [];

	goods = [];

	constructor(
		private store: Store<{ [cartsKeyword]: [] }>,
		private goodsService: GoodsService,
	) {}

	theMin(i: number, s: number) {
		return Math.min(i, s);
	}

	theMax(i: number, s: number) {
		return Math.max(i, s);
	}

	getRate(rate) {
		return '★★★★★☆☆☆☆☆'.slice(5 - Math.round(rate), 10 - Math.round(rate));
	}

	pushCarts(good) {
		this.store.dispatch(CartsActions.Add(good));
	}

	ngOnInit() {
		this.goodsService.getBanner().subscribe(({ data }) => {
			this.banners = data;
		});

		this.goodsService.getGoodsList('fresh').subscribe(({ data: { goods } }) => {
			this.freshs = goods;
		});

		this.goodsService
			.getGoodsList('10,5,2')
			.subscribe(({ data: { goods } }) => {
				this.goods = goods;
			});
	}
}
