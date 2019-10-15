import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { goodsKeyword } from '@store';
import { GoodsDetails } from '@model/goods';
import { filter } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.page.html',
	styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
	good: GoodsDetails;

	constructor(
		private store: Store<{ [goodsKeyword]: Array<GoodsDetails> }>,
		private route: ActivatedRoute,
		private router: Router,
	) {}

	theMin(i: number, s: number) {
		return Math.min(i, s);
	}

	theMax(i: number, s: number) {
		return Math.max(i, s);
	}

	ngOnInit() {
		this.store.pipe(select(goodsKeyword)).subscribe(goods => {
			if (goods.length) {
				this.good = goods.filter(
					good => good.id === this.route.snapshot.paramMap.get('id'),
				)[0];
			} else {
				this.router.navigate(['tabs', 'home']);
			}
		});
	}
}
