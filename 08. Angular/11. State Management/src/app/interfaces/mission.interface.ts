export interface Mission {
  id: number;
  name: string;
  destination: string;
  status: 'planned' | 'active' | 'completed';
  launchDate: string;
  crew: number;
}
