import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { format } from 'mathjs';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.page.html',
	styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
	carts = {
		selector: [1, 2, 3, 4, 5, 6],
		items: [
			{
				id: 1,
				title: 'Force Majeure',
				label: 'Unisex T-shirt',
				price: 12.1,
				original: 15.0,
				rate: 4,
				img: 'https://api.adorable.io/avatars/face/eyes1/nose2/mouth1/2196f3',
				count: 1,
			},
			{
				id: 2,
				title: 'Nike fashion shoes',
				label: 'Unisex shoes',
				price: 42.1,
				original: 15.0,
				rate: 3,
				img: 'https://api.adorable.io/avatars/face/eyes2/nose3/mouth10/8e8895',
				count: 2,
			},
			{
				id: 3,
				title: 'Force Majeure',
				label: 'Unisex T-shirt',
				price: 12.4,
				original: 15.0,
				rate: 5,
				img: 'https://api.adorable.io/avatars/face/eyes3/nose4/mouth11/ff4d4f',
				count: 1,
			},
			{
				id: 4,
				title: 'Nike fashion shoes',
				label: 'Unisex shoes',
				price: 42.1,
				original: 15.0,
				rate: 5,
				img: 'https://api.adorable.io/avatars/face/eyes4/nose5/mouth3/faad14',
				count: 1,
			},
			{
				id: 5,
				title: 'Force Majeure',
				label: 'Unisex T-shirt',
				price: 42.5,
				original: 15.0,
				rate: 3,
				img: 'https://api.adorable.io/avatars/face/eyes5/nose6/mouth5/52c41a',
				count: 1,
			},
			{
				id: 6,
				title: 'Nike fashion shoes',
				label: 'Unisex shoes',
				price: 52.6,
				original: 15.0,
				rate: 5,
				img: 'https://api.adorable.io/avatars/face/eyes1/nose2/mouth1/1890ff',
				count: 4,
			},
		],
	};

	constructor() {}

	ngOnInit() {}

	get selectorAll(): boolean {
		return !_.difference(
			this.carts.items.map(item => item.id),
			this.carts.selector,
		).length;
	}

	get count() {
		return format(
			this.carts.items.reduce(
				(total, { id, price, count }) =>
					total + (this.carts.selector.includes(id) ? price * count : 0),
				0,
			),
			{ notation: 'fixed', precision: 2 },
		);
	}

	statusChange({ id }, { detail }) {
		if (detail.checked) {
			this.carts.selector.push(id);
		} else {
			this.carts.selector.splice(this.carts.selector.indexOf(id), 1);
		}
	}
}
