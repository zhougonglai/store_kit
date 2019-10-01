import { createAction } from '@ngrx/store';

export const actionCreator = (keyword, extend, props?) =>
	createAction([keyword, extend].join('.'), props);
