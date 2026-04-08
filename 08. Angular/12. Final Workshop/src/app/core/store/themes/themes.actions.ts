import { createAction, props } from '@ngrx/store';
import { Theme } from '../../../shared/interfaces/theme';

export const loadThemes = createAction('[Themes] Load All');

export const loadThemesSuccess = createAction(
  '[Themes] Load All Success',
  props<{ themes: Theme[] }>(),
);

export const loadThemesFailure = createAction(
  '[Themes] Load All Failure',
  props<{ error: string }>(),
);
