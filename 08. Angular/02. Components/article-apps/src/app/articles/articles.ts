import { Component, OnInit } from '@angular/core';
import { ArticleData } from '../data/data';
import { Article } from '../model/article-model';
import { ArticleComponent } from '../article/article';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = [];

  constructor() {}

  ngOnInit(): void {
    this.articles = new ArticleData().getData();
  }
}
