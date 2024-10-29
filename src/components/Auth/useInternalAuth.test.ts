import { act, renderHook } from "@testing-library/react";
import { useInternalAuth } from "./AuthContext";

describe("useInternalAuth hook", () => {
  // test() / it()
  it("should change internal values", () => {
    const { result } = renderHook(() => useInternalAuth());

    // default value
    expect(result.current.isLoggedIn).toBe(false);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.isLoggedIn).toBe(true);

    act(() => {
      result.current.logOut();
    });
    expect(result.current.isLoggedIn).toBe(false);

    act(() => {
      result.current.logIn();
    });
    expect(result.current.isLoggedIn).toBe(true);
  });
});
