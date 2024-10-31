import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import { FilmsPage } from "./FilmsPage";
import { getFilms } from "../__mocks__/getFilms.mock";

const renderDisplayFilmsPageComponent = () =>
  render(
    <MockedProvider mocks={getFilms} addTypename={false}>
      <FilmsPage />
    </MockedProvider>
  );

describe("FilmsPage component", () => {
  it("should display indicator", () => {
    renderDisplayFilmsPageComponent();

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("should display mocked data", async () => {
    renderDisplayFilmsPageComponent();

    expect(await screen.findByText(/first movie/i)).toBeInTheDocument();
  });
});
