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
<<<<<<< HEAD
    const loginURL = `https://gh-auth-server.herokuapp.com/authenticate/${code}`;
=======
    const loginURL = `https://github-no-cors-client.herokuapp.com/authenticate/${code}`;
>>>>>>> f229dfa8b73a63967af4e56cd37758e6bac5a3d9
    return this.http.get(loginURL).pipe(
      tap((res: {token: string}) => this.setToken(res.token)),
      tap(() => this.router.navigate(['']))
    );
  }

  setToken(token) {
    localStorage.setItem(TOKEN_NAME, token);
    this.isAuthenticated$.next(token !== '' || token !== null || token !== undefined);
  }

  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  }
}
