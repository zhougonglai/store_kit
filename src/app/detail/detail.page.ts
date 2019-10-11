import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { goodsKeyword } from '@store';
import { GoodsDetails } from '@model/goods';
import { filter } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

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
	) {}

	theMin(i: number, s: number) {
		return Math.min(i, s);
	}

	theMax(i: number, s: number) {
		return Math.max(i, s);
	}

	ngOnInit() {
		this.store.pipe(select(goodsKeyword)).subscribe(goods => {
			this.good = goods.filter(
				good => good.id === this.route.snapshot.paramMap.get('id'),
			)[0];
			console.log(this.good);
		});
	}
}
