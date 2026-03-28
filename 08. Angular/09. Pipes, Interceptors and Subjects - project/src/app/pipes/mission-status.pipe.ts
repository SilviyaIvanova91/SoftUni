import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'missionStatus',
})
export class MissionStatusPipe implements PipeTransform {
  transform(status: any) {
    const statusMap: Record<string, string> = {
      planned: '🚀Планирана',
      active: '🛸 Активна',
      completed: '✅Завършена',
    };

    return statusMap[status] || status;
  }
}
