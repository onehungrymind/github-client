import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `bearer ${this.authService.getToken()}`
      }
    });

    return next.handle(request).pipe(
      tap(() => {}, (error: HttpErrorResponse) => this.handleUnAuth(error))
    );
  }

  handleUnAuth(error: HttpErrorResponse) {
    if (error.status === 401) {
      this.router.navigate(['login']);
    }
  }

}
