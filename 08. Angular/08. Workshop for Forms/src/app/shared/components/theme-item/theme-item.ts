import { Component, Input } from '@angular/core';
import { Theme } from '../../interfaces/theme';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-theme-item',
  imports: [RouterLink],
  templateUrl: './theme-item.html',
  styleUrl: './theme-item.css',
})
export class ThemeItemComponent {
  @Input({ required: true }) theme!: Theme;
}
