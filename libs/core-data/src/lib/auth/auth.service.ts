import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

export const TOKEN_NAME = 'gh:auth:token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated$ = new BehaviorSubject(false);

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.setToken(this.getToken());
  }

  handleRedirectCallback(code: string) {
    const loginURL = `https://gh-auth-server.herokuapp.com/authenticate/${code}`;
    return this.http.get(loginURL).pipe(
      tap((res: {token: string}) => this.setToken(res.token)),
      tap(() => this.router.navigate(['']))
    );
  }

  // TOKEN
  setToken(token) {
    localStorage.setItem(TOKEN_NAME, token);
    this.isAuthenticated$.next(token !== '' || token !== null || token !== undefined); // Could be more Robust
  }

  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  }
}
