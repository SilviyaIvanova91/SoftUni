import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AsyncPipe } from '@angular/common';
import { NotificationService } from '../../services/notification';

@Component({
  selector: 'app-login',
  imports: [AsyncPipe],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  private router = inject(Router);
  private authService = inject(AuthService);
  private notifService = inject(NotificationService);

  isLoggedIn$ = this.authService.isLoggedIn$;
  user$ = this.authService.user$;

  // constructor(
  //   private router: Router,
  //   private authService: AuthService,
  // ) {}

  // isLoggedIn(): boolean {
  //   return this.authService.isLoggedIn();
  // }

  onLogin(): void {
    // this.authService.login();
    this.authService.login('cosmonaut');
    this.notifService.success('Welcome a bord! 🚀');
    this.router.navigate(['/missions']);
  }

  onLogout(): void {
    this.authService.logout();
    this.notifService.info('You logged out');
  }
}
