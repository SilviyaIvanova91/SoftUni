import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticlesComponent } from './articles/articles';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArticlesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = 'Article Site';
}
