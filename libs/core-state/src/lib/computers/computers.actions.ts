import { createAction, props } from '@ngrx/store';

import { Computer } from '@mdv15/core-data';

export const computerSelected = createAction(
  '[COMPUTER][SELECTED]',
  props<{ selectedComputerId: string }>()
);
export const loadComputers = createAction('[COMPUTER][LOAD]');
export const computersLoaded = createAction(
  '[COMPUTER][LOADED]',
  props<{ computers: Computer[] }>()
);
export const createComputer = createAction(
  '[COMPUTER][CREATE]',
  props<{ computer: Computer }>()
);
export const computerCreated = createAction(
  '[COMPUTER][CREATED]',
  props<{ computer: Computer }>()
);
export const updateComputer = createAction(
  '[COMPUTER][UPDATE]',
  props<{ computer: Computer }>()
);
export const computerUpdated = createAction(
  '[COMPUTER][UPDATED]',
  props<{ computer: Computer }>()
);
export const deleteComputer = createAction(
  '[COMPUTER][DELETE]',
  props<{ computer: Computer }>()
);
export const computerDeleted = createAction(
  '[COMPUTER][DELETED]',
  props<{ computer: Computer }>()
);
