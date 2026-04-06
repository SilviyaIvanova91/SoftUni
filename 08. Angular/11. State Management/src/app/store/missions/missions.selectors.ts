import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MissionState } from '../../interfaces/mission-state.interface';

export const selectMissionsState = createFeatureSelector<MissionState>('missions');

export const selectAllMissions = createSelector(selectMissionsState, (state) => state.missions);

export const selectIsLoading = createSelector(selectMissionsState, (state) => state.isLoading);

export const selectActiveMissions = createSelector(selectAllMissions, (missions) =>
  missions.filter((m) => m.status === 'active'),
);

export const selectPlannedMissions = createSelector(selectAllMissions, (missions) =>
  missions.filter((m) => m.status === 'planned'),
);

export const selectCompletedMissions = createSelector(selectAllMissions, (missions) =>
  missions.filter((m) => m.status === 'completed'),
);

export const selectMissionsCount = createSelector(selectAllMissions, (missions) => missions.length);

export const selectMissionById = (id: number) =>
  createSelector(selectAllMissions, (missions) => missions.find((m) => m.id === id));
