import { computed, inject, Injectable, signal } from '@angular/core';
import {
  User,
  LoginCredentials,
  UserForAuth,
  ProfileUpdateData,
} from '../../shared/interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api';

  private user = signal<User | null>(null);

  isLoggedIn = computed(() => this.user() !== null);
  currentUser = computed(() => this.user());

  login(credentials: LoginCredentials): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, credentials, { withCredentials: true });
  }

  register(userData: UserForAuth): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, userData, { withCredentials: true });
  }

  logout(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/logout`, {}, { withCredentials: true });
  }

  getProfile(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/profile`, { withCredentials: true });
  }

  updateProfile(data: ProfileUpdateData): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/users/profile`, data, { withCredentials: true });
  }

  setSession(user: User): void {
    this.user.set(user);
  }

  clearSession(): void {
    this.user.set(null);
  }
}
