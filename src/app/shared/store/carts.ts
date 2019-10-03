import { actionCreator } from '@utils';
import { createReducer, on, State, Action, props } from '@ngrx/store';
import { GoodsDetails } from '@model/goods';

export const cartsKeyword = '[Carts]';
const initialState = [];

/* -- @actions -- */
export const CartsActions = {
	Add: actionCreator(cartsKeyword, 'Add', props<GoodsDetails>()),
};

/* -- @reducer -- */
const reducerCreator = createReducer(
	initialState,
	on(CartsActions.Add, (state, payload) => state.concat([payload])),
);

export function cartsReducer(state, action: Action) {
	return reducerCreator(state, action);
}
