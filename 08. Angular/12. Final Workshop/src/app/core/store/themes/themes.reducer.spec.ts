import { Theme } from '../../../shared/interfaces/theme';
import { ThemesState } from '../../../shared/interfaces/themes-state';
import { loadThemes, loadThemesFailure, loadThemesSuccess } from './themes.actions';
import { themesReducer } from './themes.reducer';
import { initialThemeState } from './themes.state';

describe('Themes Reducer', () => {
  describe('loadThemes', () => {
    it('should set isLoading to true', () => {
      const action = loadThemes();

      const result = themesReducer(initialThemeState, action);

      expect(result.isLoading).toBe(true);
      expect(result.error).toBeNull();
    });
  });

  describe('loadThemesSuccess', () => {
    it('should load themes and set isLoading to false', () => {
      const mockThemes: Theme[] = [
        {
          _id: '1',
          themeName: 'Angular Basics',
          created_at: '2024-01-01',
          userId: { username: 'testuser' },
          subscribers: ['user1', 'user2'],
        },
      ];

      const action = loadThemesSuccess({ themes: mockThemes });

      const state: ThemesState = { ...initialThemeState, isLoading: true };

      const result = themesReducer(state, action);

      expect(result.themes).toEqual(mockThemes);
      expect(result.isLoading).toBe(false);
    });
  });

  describe('loadThemesFailure', () => {
    it('should set error and isLoading to false', () => {
      const action = loadThemesFailure({ error: 'Failed to load' });

      const state: ThemesState = { ...initialThemeState, isLoading: true };

      const result = themesReducer(state, action);

      expect(result.error).toBe('Failed to load');
      expect(result.isLoading).toBe(false);
    });
  });
});
