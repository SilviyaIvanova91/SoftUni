import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../layout/nav/nav';
import { NotificationComponent } from './components/notification/notification';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, NotificationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
