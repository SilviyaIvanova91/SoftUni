export interface User {
  id: number;
  username: string;
  emaiil: string;
  role: 'astronaut' | 'commander' | 'admin';
}
