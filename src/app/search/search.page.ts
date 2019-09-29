import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
	selector: 'app-search',
	templateUrl: './search.page.html',
	styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
	goods = [
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

	constructor(private menu: MenuController) {}

	ngOnInit() {}

	segmentChanged({ detail: { value } }) {
		this.segmentActive = value;
	}
}
