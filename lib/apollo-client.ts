import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const createApolloClient = () => {
  console.log(process.env.NEXT_PUBLIC_HY_GRAPH_END_PENITENT);
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_HY_GRAPH_END_PENITENT, // يجب أن يكون URL كامل
      fetch, // node-fetch إذا على Server
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
