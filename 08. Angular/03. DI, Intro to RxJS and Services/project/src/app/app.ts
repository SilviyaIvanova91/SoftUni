import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './components/counter/counter';
import { RxjsDemo } from './components/rxjs-demo/rxjs-demo';
import { Posts } from './components/posts/posts';

@Component({
  selector: 'app-root',
  imports: [Counter, RxjsDemo, Posts],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  currentView = '';

  changeView(view: string) {
    this.currentView = view;
  }
}
