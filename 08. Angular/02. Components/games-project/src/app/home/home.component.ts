import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  welcomeMessage = 'Welcome to our game store!';
  description = 'We are the best selling store';

  features = ['well established', 'good sells', 'big smile'];
}
