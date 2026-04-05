import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth';
import { InputError } from '../../../shared/directives/input-error';
import { emailValidator } from '../../../shared/validators/email.validator';
import { NotificationService } from '../../../core/services/notification';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, RouterLink, InputError],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private notifService = inject(NotificationService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, emailValidator()]],
    password: ['', [Validators.required, Validators.minLength(5)]],
  });

  isLoading = false;

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;

    const { email, password } = this.loginForm.value;

    this.authService.login({ email, password }).subscribe({
      next: (user) => {
        this.authService.setSession(user);
        this.isLoading = false;
        this.notifService.showSuccess('Login successful');
        this.router.navigate(['/themes']);
      },
      error: (err) => {
        this.isLoading = false;
        this.notifService.showError('Login Unsuccessful');
      },
    });
  }
}
