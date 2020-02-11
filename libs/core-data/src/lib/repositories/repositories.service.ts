import { vulQuery } from './repositories.graphql';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { RepositoriesType } from './repositories.graphql';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { ApolloQueryResult } from 'apollo-client';

@Injectable({
  providedIn: 'root'
})
export class RepositoriesService {
  public vulnerabilities: RepositoriesType[];

  constructor(
    private apollo: Apollo
  ) { }

  all(): Observable<any> {
    return this.apollo.query({
      query: vulQuery,
      fetchPolicy: 'network-only'
    })
      .pipe(
        map(
          (res: ApolloQueryResult<any>) =>
            res.data.organization.repositories.nodes
        )
      )
  }
}
