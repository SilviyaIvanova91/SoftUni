import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api';
import { Theme } from '../../../shared/interfaces/theme';
import { ThemeItemComponent } from '../../../shared/components/theme-item/theme-item';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  selectIsLoading,
  selectThemesSortedBySubscribers,
} from '../../../core/store/themes/themes.selectors';
import { loadThemes, loadThemesSuccess } from '../../../core/store/themes/themes.actions';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-themes-list',
  imports: [ThemeItemComponent, AsyncPipe],
  templateUrl: './themes-list.html',
  styleUrl: './themes-list.css',
})
export class ThemesListComponent implements OnInit {
  themes$: Observable<Theme[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private apiService: ApiService,
    private store: Store,
  ) {
    this.themes$ = this.store.select(selectThemesSortedBySubscribers);
    this.isLoading$ = this.store.select(selectIsLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(loadThemes());

    this.apiService.getThemes().subscribe((themes) => {
      this.store.dispatch(loadThemesSuccess({ themes }));
    });
  }
}
