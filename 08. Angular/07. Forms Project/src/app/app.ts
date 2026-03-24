import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../layout/nav/nav';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
