import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api';
import { Post } from '../../../shared/interfaces/post';
import { PostItemComponent } from '../../../shared/components/post-item/post-item';

@Component({
  selector: 'app-recent-posts',
  imports: [PostItemComponent],
  templateUrl: './recent-posts.html',
  styleUrl: './recent-posts.css',
})
export class RecentPostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLatestPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
