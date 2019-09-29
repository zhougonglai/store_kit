import { Component, OnInit } from '@angular/core';

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

	banners = [
		'http://dummyimage.com/822x250/79d9f2/FFF.白&text=sdf',
		'http://dummyimage.com/822x250/f2e779/FFF.属&text=sdvsdv',
		'http://dummyimage.com/822x250/c479f2/FFF.声&text=svdvs',
		'http://dummyimage.com/822x250/79f2a0/FFF.见&text=sdvs',
		'http://dummyimage.com/822x250/f27d79/FFF.值&text=sdv',
		'http://dummyimage.com/822x250/7998f2/FFF.打&text=sdvsdv',
	];

	freshs = [
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

	constructor() {}

	getRate(rate) {
		return '★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate);
	}

	ngOnInit() {}
}
