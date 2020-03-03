import { githubConfig } from './../../../../../.env';
import { OrganizationsService } from './../organizations/organizations.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute,
    private http: HttpClient,
    private orgService: OrganizationsService
  ) {
    this.setToken(this.getToken());
  }

  getAccessToken(code: string) {
    console.log('hey');
    // const accessURL = `https://github.com/login/oauth/access_token?code=aa4c49be9fc9e4c82e88&client_secret=d69b43757cfbbf05db995eb4a540c654a91d9a79&client_id=462d5714bbdb3c9ace6c&redirect_uri=https://localhost:4200/callback`
    const accessURL = `https://github.com/login/oauth/access_token?code=${code}&client_secret=${githubConfig.client_secret}&client_id=${githubConfig.client_id}&redirect_uri=https://localhost:4200/callback`;
    return this.http.get(accessURL).pipe(
      tap((res) => console.log(res, 'Im inside the function')),
      // tap(() => access_token = this.route.snapshot.queryParams.access_token)
    ).subscribe();
  }

  handleRedirectCallback(code: string) {
    const loginURL = `https://github-client-no-cors.herokuapp.com/authenticate/${code}`;
    return this.http.get(loginURL).pipe(
      tap((res) => console.log(res)),
      tap((res: { token: string }) => this.setToken(res.token)),
      tap(() => this.router.navigate(['']))
    ).subscribe()
  }

  setToken(token) {
    localStorage.setItem(TOKEN_NAME, token);
    this.isAuthenticated$.next(token !== '' || token !== null || token !== undefined);
  }


  getToken() {
    return localStorage.getItem(TOKEN_NAME);
  }
}
