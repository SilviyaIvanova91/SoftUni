import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleSclice',
})
export class TitleSclicePipe implements PipeTransform {
  transform(title: string, maxLength = 25): string {
    if (!title) return '';

    if (title.length <= maxLength) return title;

    return title.slice(0, maxLength) + '...';
  }
}
