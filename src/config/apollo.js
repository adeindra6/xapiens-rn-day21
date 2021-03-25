import React from 'react';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://172.18.0.1:3301/api',
    cache: new InMemoryCache(),
});

const GraphQLProvider = ({children}) => (
    <ApolloProvider client={client}>{children}</ApolloProvider>
);

export {GraphQLProvider};
export default client;