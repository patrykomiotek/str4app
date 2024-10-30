import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MockedProvider } from "@apollo/client/testing";
import { DisplayFilms } from "./DisplayFilms";
import { GET_FILMS } from "../gql/Queries";

const mocks = [
  {
    request: {
      query: GET_FILMS,
    },
    result: {
      data: {
        allFilms: {
          films: [
            {
              id: 1,
              title: "A New Hope",
              director: "George Lucas",
              releaseDate: "1977-05-25",
            },
          ],
        },
      },
    },
  },
];

describe("DisplayFilms", () => {
  it("renders loading state", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <DisplayFilms />
      </MockedProvider>
    );

    expect(screen.getByText("Loading...")).toBeDefined();
  });

  it("renders error state", async () => {
    const errorMock = [
      {
        request: {
          query: GET_FILMS,
        },
        error: new Error("An error occurred"),
      },
    ];

    render(
      <MockedProvider mocks={errorMock} addTypename={false}>
        <DisplayFilms />
      </MockedProvider>
    );

    const errorMessage = await screen.findByText(/Error : An error occurred/i);
    expect(errorMessage).toBeDefined();
  });

  it("renders films data", async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <DisplayFilms />
      </MockedProvider>
    );

    const title = await screen.findByText("A New Hope");
    expect(title).toBeDefined();
    expect(screen.getByText("George Lucas")).toBeDefined();
    expect(screen.getByText("Release: 1977-05-25")).toBeDefined();
  });
});
