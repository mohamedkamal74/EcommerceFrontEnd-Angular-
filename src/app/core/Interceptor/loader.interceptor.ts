import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, finalize, Observable } from 'rxjs';
import { LoadingService } from '../Services/loading.service';

@Injectable()
export class loaderInterceptor implements HttpInterceptor {
  constructor(private service: LoadingService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.service.loading();
    return next.handle(req).pipe(
      delay(1000),
      finalize(() => {
        this.service.hideLoader();
      })
    );
  }
}
// export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };
