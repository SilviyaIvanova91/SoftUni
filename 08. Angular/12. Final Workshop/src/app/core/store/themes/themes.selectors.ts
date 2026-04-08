import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ThemesState } from '../../../shared/interfaces/themes-state';

export const selectThemesState = createFeatureSelector<ThemesState>('themes');

export const selectAllThemes = createSelector(selectThemesState, (state) => state.themes);

export const selectIsLoading = createSelector(selectThemesState, (state) => state.isLoading);

export const selectThemesError = createSelector(selectThemesState, (state) => state.error);

export const selectThemesSortedBySubscribers = createSelector(selectAllThemes, (themes) =>
  [...themes].sort((a, b) => b.subscribers.length - a.subscribers.length),
);
