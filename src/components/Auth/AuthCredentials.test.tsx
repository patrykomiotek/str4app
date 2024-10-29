import { render, screen } from "@testing-library/react";
import { AuthCredentials } from "./AuthCredentials";
import { AuthProvider } from "./AuthContext";

describe("AuthCredentials component", () => {
  it("should display proper values", () => {
    const { debug } = render(
      <AuthProvider>
        <AuthCredentials />
      </AuthProvider>
    );

    // debug();

    // in older version of testing library this may fails
    // check it using debug function: const { debug } = render(<Component />);
    // expect(screen.getByText("Is user authenticated: NO")).toBeInTheDocument();

    expect(screen.getByText(/is user authenticated: NO/i)).toBeInTheDocument();
  });
});
