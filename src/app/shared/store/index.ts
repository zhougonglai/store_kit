import { cartsKeyword, cartsReducer } from './carts';
import { goodsKeyword, goodsReducer } from './goods';
export * from './carts';
export * from './goods';

export default {
	[cartsKeyword]: cartsReducer,
	[goodsKeyword]: goodsReducer,
};
