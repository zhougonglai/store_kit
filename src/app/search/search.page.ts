import { Component, OnInit } from '@angular/core';
import { GoodsService } from '@service/goods.service';
import { cartsKeyword } from '@store/carts';
import { Store } from '@ngrx/store';

@Component({
	selector: 'app-search',
	templateUrl: './search.page.html',
	styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
	goods = [];

	list = [
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

	segmentActive = '10';

	constructor(
		private store: Store<{ [cartsKeyword]: [] }>,
		private goodsService: GoodsService,
	) {}

	ngOnInit() {
		this.getGoodsList();
	}

	theMin(i: number, s: number) {
		return Math.min(i, s);
	}

	theMax(i: number, s: number) {
		return Math.max(i, s);
	}

	getGoodsList() {
		this.goodsService
			.getGoodsList(this.segmentActive)
			.subscribe(({ data: { goods } }) => {
				this.goods = goods;
			});
	}

	segmentChanged({ detail: { value } }) {
		this.segmentActive = value;
		this.getGoodsList();
	}
}
