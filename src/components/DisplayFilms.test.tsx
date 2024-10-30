import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import { DisplayFilms } from "./DisplayFilms";
import { getFilms } from "../__mocks__/getFilms.mock";

const renderDisplayFilmsComponent = () =>
  render(
    <MockedProvider mocks={getFilms} addTypename={false}>
      <DisplayFilms />
    </MockedProvider>
  );

describe("DisplayFilms component", () => {
  it("should display indicator", () => {
    renderDisplayFilmsComponent();

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("should display mocked data", async () => {
    renderDisplayFilmsComponent();

    expect(await screen.findByText(/first movie/i)).toBeInTheDocument();
  });
});
