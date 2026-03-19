import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-theme',
  imports: [FormsModule],
  templateUrl: './new-theme.html',
  styleUrl: './new-theme.css',
})
export class NewThemeComponent {
  themeName = '';
  postText = '';

  private router = inject(Router);

  onSubmit(): void {
    console.log('Creating theme', this.themeName, this.postText);
    this.router.navigate(['/themes']);
  }

  onCancel(): void {
    this.router.navigate(['/home']);
  }
}
