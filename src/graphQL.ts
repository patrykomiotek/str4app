import { ApolloClient, InMemoryCache, HttpLink, from } from "@apollo/client";
// import { onError } from "@apollo/client/link/error";

// const errorLink = onError(({ graphqlErrors, networkError }) => {
//   if (graphqlErrors) {
//     // eslint-disable-next-line array-callback-return
//     graphqlErrors.map(({ message, location, path }) => {
//       console.error(`GraphQL error: ${path}, ${location}, ${message}`);
//     });
//   }
//   if (networkError) {
//     console.log("Network error");
//   }
// });

const link = from([
  // errorLink,
  new HttpLink({
    // uri: "https://flyby-router-demo.herokuapp.com/",
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  }),
]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  devtools: {
    enabled: true,
  },
});
