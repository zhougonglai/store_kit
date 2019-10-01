import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class GoodsService {
	bannerUrl = 'banner';
	constructor(private http: HttpClient) {}

	getBanner() {
		return this.http.get(this.bannerUrl);
	}
}
