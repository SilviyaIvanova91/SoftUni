import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgoPosted',
})
export class TimeAgoPostedPipe implements PipeTransform {
  transform(value: string | Date): string {
    if (!value) return '';

    const date = new Date(value);
    const now = new Date();

    if (isNaN(date.getTime())) {
      return value.toString();
    }

    const diffInMs = now.getTime() - date.getTime();
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMin = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMin / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInMonths / 12);

    if (diffInSeconds < 60) return 'just now';
    if (diffInMin < 60) return diffInMin === 1 ? '1 minute ago' : `${diffInMin} minutes ago`;
    if (diffInHours < 24) return diffInHours === 1 ? '1 hour ago' : `${diffInHours} hours ago`;
    if (diffInDays < 7) return diffInDays === 1 ? '1 day ago' : `${diffInDays} days ago`;
    if (diffInWeeks < 4) return diffInWeeks === 1 ? '1 week ago' : `${diffInWeeks} days ago`;
    if (diffInMonths < 12) return diffInMonths === 1 ? '1 month ago' : `${diffInMonths} weeks ago`;

    return diffInYears === 1 ? '1 year ago' : `${diffInYears} years ago`;
  }
}
