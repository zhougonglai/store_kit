import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-person',
	templateUrl: './person.page.html',
	styleUrls: ['./person.page.scss'],
})
export class PersonPage implements OnInit {
	user = {
		avatar: 'https://api.adorable.io/avatars/400/zhougonglai@dingtalk.com',
		nickname: 'John Zhou',
		email: 'zhougonglai@dingtalk.com',
	};

	wallet = {
		balance: 52.12,
	};

	constructor() {}

	ngOnInit() {}
}
