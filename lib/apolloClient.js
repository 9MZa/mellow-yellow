import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.GRAHPCMS_TOKEN,
    cache: new InMemoryCache()
});

export default client;