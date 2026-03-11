import { Component, Input } from '@angular/core';
import { Theme } from '../../interfaces/theme';

@Component({
  selector: 'app-theme-item',
  imports: [],
  templateUrl: './theme-item.html',
  styleUrl: './theme-item.css',
})
export class ThemeItemComponent {
  @Input({ required: true }) theme!: Theme;
}
