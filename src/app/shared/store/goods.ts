import { actionCreator } from '@utils';
import { GoodsDetails } from '@model/goods';
import { props, createReducer, Action, on } from '@ngrx/store';

export const goodsKeyword = 'GOODS';
const initialState: GoodsDetails[] = [];

interface GoodsAction {
	type: string;
	goods: GoodsDetails[];
}

/* -- @actions -- */
export const GoodsActions = {
	Add: actionCreator(goodsKeyword, 'Add', props<{ goods: GoodsDetails[] }>()),
};

const reducerCreator = createReducer(
	initialState,
	on(GoodsActions.Add, (state, { goods }: GoodsAction) => state.concat(goods)),
);

export function goodsReducer(state, action: GoodsAction) {
	return reducerCreator(state, action);
}
