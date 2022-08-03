import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.HYGRAPH_URL,
    headers: {
        Authorization: `Bearer ${process.env.HYGRAPH_PERMANENT_AUTH_TOKEN}`,
    },
    cache: new InMemoryCache()
});

export default client;