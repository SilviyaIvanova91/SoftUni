import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api';
import { Theme } from '../../../shared/interfaces/theme';
import { ThemeItemComponent } from '../../../shared/components/theme-item/theme-item';

@Component({
  selector: 'app-themes-list',
  imports: [ThemeItemComponent],
  templateUrl: './themes-list.html',
  styleUrl: './themes-list.css',
})
export class ThemesListComponent implements OnInit {
  themes: Theme[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getThemes().subscribe((themes) => {
      this.themes = themes.sort((a, b) => b.subscribers.length - a.subscribers.length);
    });
  }
}
