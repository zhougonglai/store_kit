import { GoodsDetails } from '@model/goods';
import { props, createReducer, on, createAction } from '@ngrx/store';

export const goodsKeyword = 'GOODS';
const initialState: GoodsDetails[] = [];

interface GoodsAction {
	type: string;
	goods: GoodsDetails[];
}

/* -- @actions -- */
export const GoodsActions = {
	Add: createAction(
		[goodsKeyword, 'Add'].join('.'),
		props<{ goods: GoodsDetails[] }>(),
	),
};

const reducerCreator = createReducer(
	initialState,
	on(GoodsActions.Add, (state, { goods }: GoodsAction) => state.concat(goods)),
);

export function goodsReducer(state, action: GoodsAction) {
	return reducerCreator(state, action);
}
