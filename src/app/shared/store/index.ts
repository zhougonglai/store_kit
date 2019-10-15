import { cartsReducer } from './carts';
import { goodsReducer } from './goods';
import { MetaReducer } from '@ngrx/store';
import { environment } from '@env/environment';
export * from './carts';
export * from './goods';

export const reducers = {
	CARTS: cartsReducer,
	GOODS: goodsReducer,
};

export const metaReducers: MetaReducer<any>[] = environment.production
	? []
	: [];
