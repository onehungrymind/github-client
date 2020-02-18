  
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
=======
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
>>>>>>> f229dfa8b73a63967af4e56cd37758e6bac5a3d9

import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
<<<<<<< HEAD
=======

>>>>>>> f229dfa8b73a63967af4e56cd37758e6bac5a3d9
import { TokenInterceptor } from './auth/token-interceptor';

const uri = 'https://api.github.com/graphql';

export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache()
<<<<<<< HEAD
  }
}

@NgModule({
  imports: [HttpClientModule],
=======
  };
}

@NgModule({
  imports: [CommonModule, HttpClientModule],
>>>>>>> f229dfa8b73a63967af4e56cd37758e6bac5a3d9
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ],
  exports: [ApolloModule, HttpLinkModule]
})
export class CoreDataModule {}
