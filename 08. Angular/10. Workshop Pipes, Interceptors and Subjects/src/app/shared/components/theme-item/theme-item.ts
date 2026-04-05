import { Component, Input } from '@angular/core';
import { Theme } from '../../interfaces/theme';
import { RouterLink } from '@angular/router';
import { TitleSclicePipe } from '../../pipes/title-sclice-pipe';
import { DateFormatPipe } from '../../pipes/date-format-pipe';

@Component({
  selector: 'app-theme-item',
  imports: [RouterLink, TitleSclicePipe, DateFormatPipe],
  templateUrl: './theme-item.html',
  styleUrl: './theme-item.css',
})
export class ThemeItemComponent {
  @Input({ required: true }) theme!: Theme;
}
