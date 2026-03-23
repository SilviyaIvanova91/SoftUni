import { inject } from '@angular/core';
import { MissionsService } from '../services/missions';
import { ResolveFn } from '@angular/router';
import { Mission } from '../interfaces/mission.interface';

export const missionResolver: ResolveFn<Mission | undefined> = (route, state) => {
  const missionsService = inject(MissionsService);

  const idParam = route.paramMap.get('id');
  const missionId = idParam ? parseInt(idParam, 10) : 0;

  return missionsService.getMissionById(missionId);
};
