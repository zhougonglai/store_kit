import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@env/environment';
import { Responser } from '@model/responser';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Banner, Goods } from '@model/goods';

@Injectable({
	providedIn: 'root',
})
export class GoodsService {
	bannerUrl = 'banner';

	goodsUrl = 'goods';

	constructor(private http: HttpClient) {}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.error('An error occurred:', error.error.message);
		} else {
			console.error(
				`Backend returned code ${error.status}, ` + `body was: ${error.error}`,
			);
		}
		return throwError('Something bad happened; please try again later.');
	}

	// banner 图配置
	getBanner(): Observable<Responser<Array<Banner>>> {
		return this.http
			.get<Responser<Array<Banner>>>(environment.mockUrl + this.bannerUrl)
			.pipe(
				retry(3),
				catchError(this.handleError),
			);
	}

	/**
	 * @description 团购列表
	 * @param type @enum {10:十人, 5:五人, 2:两人, fresh:新品}
	 */
	getGoodsList(type): Observable<Responser<Goods>> {
		return this.http
			.get<Responser<Goods>>(environment.mockUrl + this.goodsUrl, {
				params: { type },
			})
			.pipe(
				retry(3),
				catchError(this.handleError),
			);
	}
}
