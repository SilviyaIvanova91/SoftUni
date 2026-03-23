import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comand-center',
  imports: [],
  templateUrl: './comand-center.html',
  styleUrl: './comand-center.css',
})
export class CommandCenterComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
