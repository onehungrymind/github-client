import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { ApolloQueryResult } from 'apollo-client';
import { Observable } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';

import { User } from './user.model';
import { getUsernameQuery, usersQuery } from './user.graphql';

const USERNAME = 'gh:username';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor (private apollo: Apollo) { }

  user(): Observable<User> {
    return this.apollo.query({
      query: getUsernameQuery,
      fetchPolicy: 'network-only'
    }).pipe(
      map((res: ApolloQueryResult<any>) => res.data.viewer.login),
      tap((login: string) => localStorage.setItem(USERNAME, login)),
      switchMap((login: string) => this.apollo.query({
        query: usersQuery,
        fetchPolicy: 'network-only',
        variables: {
          login
        }
      }).pipe(map((res: ApolloQueryResult<any>) => res.data.user))
      )
    );
  }

  getUsername() {
    return localStorage.getItem(USERNAME);
  }
}
