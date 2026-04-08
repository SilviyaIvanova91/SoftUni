import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../../shared/interfaces/post';
import { CreateThemeData, Theme } from '../../shared/interfaces/theme';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api';

  getThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(`${this.apiUrl}/themes`);
  }

  getTheme(themeId: string): Observable<Theme> {
    return this.http.get<Theme>(`${this.apiUrl}/themes/${themeId}`);
  }

  createTheme(data: CreateThemeData): Observable<Theme> {
    return this.http.post<Theme>(`${this.apiUrl}/themes`, data, { withCredentials: true });
  }

  getLatestPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts?limit=5`);
  }

  subscribeToTheme(themeId: string): Observable<Theme> {
    return this.http.put<Theme>(`${this.apiUrl}/themes/${themeId}`, {}, { withCredentials: true });
  }
}
