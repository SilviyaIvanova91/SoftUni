import { Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { FormsModule, NgForm } from '@angular/forms';
import { InputError } from '../../shared/directives/input-error';
import { EmailValidatorDirective } from '../../shared/directives/email-validator';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-profile',
  imports: [FormsModule, InputError, EmailValidatorDirective],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class ProfileComponent implements OnInit {
  @ViewChild('profileForm') profileForm!: NgForm;

  private authService = inject(AuthService);

  user = this.authService.currentUser;
  isEditMode = signal(false);
  isLoading = signal(false);
  errorMessage = signal('');

  editUsername = '';
  editEmail = '';
  editTel = '';

  ngOnInit(): void {
    if (!this.user()) {
      this.authService.getProfile().subscribe({
        next: (user) => this.authService.setSession(user),
        error: () => {},
      });
    }
  }

  toggleEditMode(): void {
    const currentUser = this.user();
    if (currentUser) {
      this.editUsername = currentUser.username;
      this.editEmail = currentUser.email;
      this.editTel = currentUser.tel?.replace('+359', '') || '';
    }
    this.errorMessage.set('');
    this.isEditMode.set(true);
  }

  onCancel(): void {
    this.errorMessage.set('');
    this.isEditMode.set(false);
  }

  onSave(): void {
    if (this.profileForm.invalid) {
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set('');

    const updateData = {
      username: this.editUsername,
      email: this.editEmail,
      tel: this.editTel ? '+359' + this.editTel : undefined,
    };

    this.authService.updateProfile(updateData).subscribe({
      next: (user) => {
        this.authService.setSession(user);
        this.isLoading.set(false);
        this.isEditMode.set(false);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(err.error?.message || 'Failed to update profile');
      },
    });
  }
}
