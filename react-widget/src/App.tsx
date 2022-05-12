/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import AppWrapper from './config/Route';

// import * as dotenv from 'dotenv';
// dotenv.config();

export default function App() {
  const client = new ApolloClient({
    // uri: process.env.REACT_APP_API_URL,
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <AppWrapper />
    </ApolloProvider>
  );
}
