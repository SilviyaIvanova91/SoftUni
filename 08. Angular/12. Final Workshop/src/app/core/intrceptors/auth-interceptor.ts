import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const secureReq = req.clone({ withCredentials: true });
  return next(secureReq);
};
