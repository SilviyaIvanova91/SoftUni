import { Component } from '@angular/core';
import { ThemesListComponent } from './themes-list/themes-list';
import { RecentPostsComponent } from './recent-posts/recent-posts';

@Component({
  selector: 'app-themes',
  imports: [ThemesListComponent, RecentPostsComponent],
  templateUrl: './themes.html',
  styleUrl: './themes.css',
})
export class ThemesComponents {}
