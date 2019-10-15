import { actionCreator } from '@utils';
import { createReducer, on, props, createAction } from '@ngrx/store';
import { GoodsDetails, GoodsInCarts } from '@model/goods';
import { set, unset, mapValues } from 'lodash';

export const cartsKeyword = 'CARTS';
const initialState: GoodsInCarts = {};

interface CartsAction {
	type: string;
	good: GoodsDetails;
}

/* -- @actions -- */
export const CartsActions = {
	Add: createAction(
		[cartsKeyword, 'Add'].join('.'),
		props<{ good: GoodsDetails }>(),
	),
	Decrement: createAction(
		[cartsKeyword, 'Decrement'].join('.'),
		props<{ good: GoodsDetails }>(),
	),
	Select: createAction(
		[cartsKeyword, 'Select'].join('.'),
		props<{ good: GoodsDetails }>(),
	),
	SelectAll: createAction([cartsKeyword, 'SelectAll'].join('.'), props),
};

/**
 * @reducer
 * @method Add 添加
 * @method Decrement 削减
 * @method Select 选中/反选
 * @method SelectAll 全选
 */
const reducerCreator = createReducer(
	initialState,
	on(CartsActions.Add, (state, { good }: CartsAction) => {
		return {
			...state,
			[good.id]: {
				...good,
				count: good.id in state ? state[good.id].count + 1 : 1,
			},
		};
	}),
	on(CartsActions.Decrement, (state, { good }: CartsAction) => {
		if (state[good.id].count > 1) {
			return {
				...state,
				[good.id]: {
					...good,
					count: state[good.id].count - 1,
				},
			};
		} else {
			unset(state, good.id);
			return state;
		}
	}),
	on(CartsActions.Select, (state, { good }: CartsAction) =>
		set(state, [good.id, 'select'], !state[good.id].select),
	),
	on(CartsActions.SelectAll, (state: GoodsInCarts) =>
		Object.values(state).every(good => good.select)
			? mapValues(state, good => ({ ...good, select: false }))
			: mapValues(state, good => ({ ...good, select: true })),
	),
);

export function cartsReducer(state, action: CartsAction) {
	return reducerCreator(state, action);
}
