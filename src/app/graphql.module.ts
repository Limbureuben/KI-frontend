import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { inject, NgModule } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { environment } from '../environments/environment';

// 1. Updated factory function using inject()
export function createApollo(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink); // Modern injection
  const uri = environment.graphqlUrl;

  return {
    link: httpLink.create({ 
      uri,
      method: 'POST',
      includeExtensions: true,
      withCredentials: true 
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: { fetchPolicy: 'no-cache' },
      query: { fetchPolicy: 'no-cache' },
    },
  };
}

@NgModule({
  // 2. Pass the function directly. provideApollo calls it with 0 arguments.
  providers: [
    provideApollo(createApollo)
  ],
})
export class GraphQLModule {}











// import { provideApollo } from 'apollo-angular';
// import { HttpLink } from 'apollo-angular/http';
// import { inject, NgModule } from '@angular/core';
// import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
// import { environment } from '../environments/environment';

// export function createApollo(): ApolloClientOptions<any> {
//   const uri = environment.graphqlUrl;
//   const httpLink = inject(HttpLink);

//   return {
//     link: httpLink.create({ uri,method: 'POST',
//       includeExtensions: true
//     }),
//     cache: new InMemoryCache(),
//     defaultOptions: {
//       watchQuery: {
//         fetchPolicy: 'no-cache',
//       },
//       query: {
//         fetchPolicy: 'no-cache',
//       },
//     },
//   };
// }

// @NgModule({
//   providers: [provideApollo(createApollo)],
// })
// export class GraphQLModule {}
