import { Mission } from './mission.interface';

export interface MissionState {
  missions: Mission[];
  isLoading: boolean;
  error: string | null;
}
