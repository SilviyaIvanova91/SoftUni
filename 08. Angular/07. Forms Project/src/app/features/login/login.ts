import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  constructor(
    private router: Router,
    private authService: AuthService,
  ) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  onLogin(): void {
    this.authService.login();
  }

  onLogout(): void {
    this.authService.logout();
  }
}
