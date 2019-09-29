import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.page.html',
	styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
	carts = [
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

	ngOnInit() {}
}
