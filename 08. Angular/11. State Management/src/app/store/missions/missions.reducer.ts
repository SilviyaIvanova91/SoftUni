import { createReducer, on } from '@ngrx/store';
import { initialMissionsState } from './missions.state';
import { MissionState } from '../../interfaces/mission-state.interface';
import {
  addMission,
  deleteMission,
  loadMissions,
  loadMissionsSuccess,
  updateMissionStatus,
} from './missions.actions';

export const missionsReducer = createReducer(
  initialMissionsState,

  on(
    loadMissions,
    (state): MissionState => ({
      ...state,
      isLoading: true,
      error: null,
    }),
  ),

  on(
    loadMissionsSuccess,
    (state, { missions }): MissionState => ({
      ...state,
      missions,
      isLoading: false,
    }),
  ),

  on(
    addMission,
    (state, { mission }): MissionState => ({
      ...state,
      missions: [...state.missions, mission],
    }),
  ),

  on(
    deleteMission,
    (state, { id }): MissionState => ({
      ...state,
      missions: state.missions.filter((m) => m.id !== id),
    }),
  ),

  on(
    updateMissionStatus,
    (state, { id, status }): MissionState => ({
      ...state,
      missions: state.missions.map((m) => (m.id === id ? { ...m, status } : m)),
    }),
  ),
);
