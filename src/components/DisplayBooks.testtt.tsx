import React from "react";
import { render, screen } from "@testing-library/react";
import { DisplayBooks } from "./DisplayBooks";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

describe("DisplayBooks component", () => {
  it("should display mocked data", async () => {
    const cache = new InMemoryCache();

    const link = new HttpLink({
      uri: "http://localhost:4000",

      // Use explicit `window.fetch` so that outgoing requests
      // are captured and deferred until the Service Worker is ready.
      fetch: (...args) => fetch(...args),
    });

    // Isolate Apollo client so it could be reused
    // in both application runtime and tests.
    const client = new ApolloClient({
      cache,
      link,
    });

    const { debug } = render(
      <ApolloProvider client={client}>
        <DisplayBooks />
      </ApolloProvider>
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    expect(await screen.findByText(/again/i)).toBeInTheDocument();
  });
});
