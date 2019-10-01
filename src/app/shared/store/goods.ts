import { createAction } from '@ngrx/store';

const keyword = 'GOODS';

/* -- @actions -- */
export const Add = createAction([keyword, 'add'].join('.'));
