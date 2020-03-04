
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, tap } from 'rxjs/operators';
import { ApolloQueryResult } from 'apollo-client';
import { UserService } from '../user/user.service';
import { repositoriesQuery } from './repositories.graphql';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {

  constructor(
    private apollo: Apollo,
    private userService: UserService
  ) { }

  all() {
    const login = this.userService.getUsername();
    return this.apollo.mutate({
      mutation: repositoriesQuery,
      variables: {
        login
      }
    }).pipe(
      map((response: ApolloQueryResult<any>) => response.data.user.repositories.nodes),
      map((repositories: any[]) => repositories.map((repo) => ({ ...repo, languages: repo.languages.nodes[0] })))
    )
  }
}
