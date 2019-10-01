import { actionCreator } from '@utils';
import { createReducer, on, State, Action, props } from '@ngrx/store';

export const cartsKeyword = 'Carts';
const initialState = [];

/* -- @actions -- */
export const CartsActions = {
	Set: actionCreator(cartsKeyword, 'Set', props()),
	Add: actionCreator(cartsKeyword, 'Add', props()),
};

/* -- @reducer -- */
const reducerCreator = createReducer(
	initialState,
	on(CartsActions.Add, (state, payload) => state.concat([payload])),
);

export function cartsReducer(state, action: Action) {
	return reducerCreator(state, action);
}
