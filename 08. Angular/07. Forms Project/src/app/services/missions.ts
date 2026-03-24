import { Injectable } from '@angular/core';
import { Mission } from '../interfaces/mission.interface';

@Injectable({
  providedIn: 'root',
})
export class MissionsService {
  private missions: Mission[] = [
    {
      id: 1,
      name: 'Apollo',
      destination: 'Moon',
      status: 'completed',
      launchDate: '2024-03-15',
      crew: 3,
    },
    {
      id: 2,
      name: 'Artemis',
      destination: 'Moon Base',
      status: 'active',
      launchDate: '2025-06-20',
      crew: 4,
    },
    {
      id: 3,
      name: 'Mars Pioneer',
      destination: 'Mars',
      status: 'planned',
      launchDate: '2026-09-01',
      crew: 6,
    },
  ];

  getAllMissions(): Mission[] {
    return this.missions;
  }

  getMissionById(id: number): Mission | undefined {
    return this.missions.find((m) => m.id === id);
  }
}
