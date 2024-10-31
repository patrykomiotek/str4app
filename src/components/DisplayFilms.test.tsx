import { render, screen } from "@testing-library/react";
import { DisplayFilms } from "./DisplayFilms";
import { getFilms } from "../__mocks__/getFilms.mock";

const renderDisplayFilmsComponent = () =>
  render(<DisplayFilms data={getFilms[0].result.data} />);

describe("DisplayFilms component", () => {
  it("should display mocked data", async () => {
    renderDisplayFilmsComponent();

    expect(await screen.findByText(/first movie/i)).toBeInTheDocument();
  });
});
