import { Component } from '@angular/core';
import { ThemesListComponent } from './themes-list/themes-list';
import { RecentPostsComponent } from './recent-posts/recent-posts';

@Component({
  selector: 'app-home',
  imports: [ThemesListComponent, RecentPostsComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
