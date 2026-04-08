import { createReducer, on } from '@ngrx/store';
import { initialThemeState } from './themes.state';
import { loadThemes, loadThemesFailure, loadThemesSuccess } from './themes.actions';
import { ThemesState } from '../../../shared/interfaces/themes-state';

export const themesReducer = createReducer(
  initialThemeState,

  on(
    loadThemes,
    (state): ThemesState => ({
      ...state,
      isLoading: true,
      error: null,
    }),
  ),

  on(
    loadThemesSuccess,
    (state, { themes }): ThemesState => ({
      ...state,
      themes,
      isLoading: false,
    }),
  ),

  on(
    loadThemesFailure,
    (state, { error }): ThemesState => ({
      ...state,
      isLoading: false,
      error,
    }),
  ),
);
