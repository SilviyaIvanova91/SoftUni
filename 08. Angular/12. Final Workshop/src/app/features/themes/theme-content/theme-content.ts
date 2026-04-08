import { Component, inject, computed, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../core/services/api';
import { AuthService } from '../../../core/services/auth';
import { Theme } from '../../../shared/interfaces/theme';
import { Post } from '../../../shared/interfaces/post';

@Component({
  selector: 'app-theme-content',
  imports: [FormsModule],
  templateUrl: './theme-content.html',
  styleUrl: './theme-content.css',
})
export class ThemeContentComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private apiService = inject(ApiService);
  private authService = inject(AuthService);

  theme: Theme | null = null;
  posts: Post[] = [];
  commentText = '';
  themeId = '';

  currentUsername = computed(() => this.authService.currentUser()?.username ?? 'Anonymous');

  ngOnInit(): void {
    this.themeId = this.route.snapshot.params['themeId'];
    this.loadThemeData();
  }

  loadThemeData(): void {
    this.apiService.getThemes().subscribe((themes) => {
      this.theme = themes.find((t) => t._id == this.themeId) || null;
    });

    this.apiService.getLatestPosts().subscribe((posts) => {
      this.posts = posts.filter((p: any) => p.themeId?._id === this.themeId);
    });
  }

  onPostComment(): void {
    console.log('Posting comment', this.commentText);
    this.commentText = '';
  }
}
