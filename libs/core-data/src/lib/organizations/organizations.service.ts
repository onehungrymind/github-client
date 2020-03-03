import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { tap, map } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';
import { UserService } from '../user/user.service';
import { organizationQuery } from './organizations.graphql';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {

  constructor(
    private apollo: Apollo,
    private userService: UserService
  ) {}

  all() {
    const login = this.userService.getUsername();
    return this.apollo.mutate({
      mutation: organizationQuery,
      variables: {
        login
      }
    }).pipe(
      tap((response: any) => console.log(response))
    )
  }
}
