import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../app/services/auth.service';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class NavComponent {
  private authService = inject(AuthService);

  isLoggedIn$ = this.authService.isLoggedIn$;
  user$ = this.authService.user$;
}
