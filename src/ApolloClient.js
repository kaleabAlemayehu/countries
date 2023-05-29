import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";

const httplink = createHttpLink({
  uri: "https://countries.trevorblades.com/",
});

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httplink,
  cache,
});

export { apolloClient };
