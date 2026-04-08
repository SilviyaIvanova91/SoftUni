import { Theme } from './theme';

export interface ThemesState {
  themes: Theme[];
  isLoading: boolean;
  error: string | null;
}
