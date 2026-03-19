import { Injectable } from '@angular/core';
import { User, UserWithCredentials } from '../../shared/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: UserWithCredentials[] = [];

  register(user: UserWithCredentials): User {
    this.users.push(user);
    const { password, ...publicUser } = user;
    return publicUser;
  }

  validateCredentials(email: string, password: string): User | null {
    const user = this.users.find((u) => u.email === email && u.password === password);

    if (!user) return null;
    const { password: _, ...publicUser } = user; // _ is telling i know the pass is not used
    return publicUser;
  }
}
