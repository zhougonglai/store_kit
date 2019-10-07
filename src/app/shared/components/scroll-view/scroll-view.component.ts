import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-scroll-view',
	templateUrl: './scroll-view.component.html',
	styleUrls: ['./scroll-view.component.scss'],
})
export class ScrollViewComponent implements OnInit {
	// enum { horizontal , vertical }
	@Input() direction = 'vertical';
	@Input() items: [];

	constructor() {}

	ngOnInit() {}
}
