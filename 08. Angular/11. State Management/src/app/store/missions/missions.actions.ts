import { createAction, props } from '@ngrx/store';
import { Mission } from '../../interfaces/mission.interface';

export const loadMissions = createAction('[Missions] Load All');

export const loadMissionsSuccess = createAction(
  '[Missions] Load All Success',
  props<{ missions: Mission[] }>(),
);

export const addMission = createAction('[Missions] Add Mission', props<{ mission: Mission }>());

export const deleteMission = createAction('[Missions] Delete Mission', props<{ id: number }>());

export const updateMissionStatus = createAction(
  '[Missions] Update Status',
  props<{ id: number; status: 'planned' | 'active' | 'completed' }>(),
);
