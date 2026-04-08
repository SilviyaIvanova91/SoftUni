import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NotificationService } from '../../core/services/notification';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  private authService = inject(AuthService);
  private notifService = inject(NotificationService);
  private router = inject(Router);

  isLoggedIn = this.authService.isLoggedIn;
  username = computed(() => this.authService.currentUser()?.username ?? '');
  notification = this.notifService.notification;

  onLogout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.authService.clearSession();
        this.notifService.showSuccess('Logout successful');
        this.router.navigate(['/home']);
      },
      error: () => {
        this.authService.clearSession();
        this.router.navigate(['/home']);
      },
    });
  }
}
