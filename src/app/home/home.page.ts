import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { goodsKeyword, GoodsActions, CartsActions } from '@store';
import { GoodsService } from '@service/goods.service';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import { GoodsDetails } from '@model/goods';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	slideOpts = {
		loop: true,
	};

	appversion = environment.version;

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

	freshs$: Observable<GoodsDetails[]>;

	goods$: Observable<GoodsDetails[]>;

	constructor(
		private store: Store<{ [goodsKeyword]: GoodsDetails[] }>,
		private goodsService: GoodsService,
		private router: Router,
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
		this.store.dispatch(CartsActions.Add({ good }));
	}

	goodDetails({ id }) {
		this.router.navigate(['/detail', id]);
	}

	ngOnInit() {
		this.freshs$ = this.store.pipe(
			select(state => state[goodsKeyword].filter(good => good.fresh)),
		);
		this.goods$ = this.store.pipe(
			select(state => state[goodsKeyword].filter(good => !good.fresh)),
		);

		this.goodsService.getBanner().subscribe(({ data }) => {
			this.banners = data;
		});

		this.goodsService.getGoodsList('fresh').subscribe(({ data: { goods } }) => {
			this.store.dispatch(GoodsActions.Add({ goods }));
		});

		this.goodsService
			.getGoodsList('10,5,2')
			.subscribe(({ data: { goods } }) => {
				this.store.dispatch(GoodsActions.Add({ goods }));
			});
	}
}
