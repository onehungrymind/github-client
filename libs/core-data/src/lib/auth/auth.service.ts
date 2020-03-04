import { githubConfig } from './../../../../../.env';
import { OrganizationsService } from './../organizations/organizations.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  handleRedirectCallback$(code: string) {
    const params = new HttpParams().set('code', code);
    return this.http.post('http://localhost:3333/api/auth/', {}, { params }).pipe(
      tap((res: any) => this.setToken(res.access_token)),
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
