import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Error appeared';

      switch (error.status) {
        case 401:
          localStorage.removeItem('authToken');
          router.navigate(['login']);
          errorMessage = 'Your session expired';
          break;

        case 403:
          errorMessage = 'Your dont have acces fot this';
          break;

        case 404:
          errorMessage = 'Resource not found';
          break;

        case 0:
          errorMessage = 'No connection with the server';
          break;

        default:
          if (error.status >= 500) {
            errorMessage = 'Server error! Try later';
          }
      }

      return throwError(() => ({
        status: error.status,
        message: errorMessage,
      }));
    }),
  );
};
