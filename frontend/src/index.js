import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-backend-1-geng.onrender.com/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
