import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NotificationService } from '../services/notification';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

const AUTH_ENDPOINTS = ['/api/login', '/api/register'];

function isAuthEndPoint(url: string): boolean {
  return AUTH_ENDPOINTS.some((endpoint) => url.includes(endpoint));
}

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const notificationService = inject(NotificationService);
  const authService = inject(AuthService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'An unexpected error';

      if (error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        switch (error.status) {
          case 400:
            errorMessage = error.error?.message || 'Bad request';
            break;
          case 401:
            if (isAuthEndPoint(req.url)) {
              errorMessage = error.error?.message || 'Wrong email or password';
            } else {
              errorMessage = 'Session expired';
              authService.clearSession();
              router.navigate(['/login']);
            }
            break;
          case 403:
            errorMessage = 'You dont have permission for this action';
            break;
          case 404:
            errorMessage = error.error?.message || 'Resource not found';
            break;
          case 409:
            errorMessage = error.error?.message || 'This account already exist';
            break;
          case 500:
            errorMessage = 'Server error';
            break;
          default:
            errorMessage = error.error?.message || `Error: ${error.status}`;
        }
      }

      notificationService.showError(errorMessage);
      return throwError(() => error);
    }),
  );
};
