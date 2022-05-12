/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
} from "@apollo/client";
import AppWrapper from "./config/Route";

// import * as dotenv from 'dotenv';
// dotenv.config();

export default function App() {
  const authMiddleware = new (ApolloLink as any).from([
    (operation: any, forward: any) => {
      // add the authorization to the headers
      const token = localStorage.getItem("accessToken");
      // const language = localStorage.getItem('language') || DEFAULT_LANGUAGE;

      operation.setContext({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return forward(operation);
    },
  ]);

  const _httpLink = new HttpLink({ uri: "http://localhost:3001/graphql" });
  const httpLink = ApolloLink.from([authMiddleware, _httpLink]);

  const client = new ApolloClient({
    // uri: process.env.REACT_APP_API_URL,

    cache: new InMemoryCache(),
    link: httpLink,
  });
  return (
    <ApolloProvider client={client}>
      <AppWrapper />
    </ApolloProvider>
  );
}
