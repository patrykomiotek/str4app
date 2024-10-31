import { reducer, ActionType } from "./Stepper";

describe("Stepper reducer", () => {
  it("should change state", () => {
    const initialState = { count: 0 };

    let state = reducer(initialState, {
      type: ActionType.SET,
      payload: "10",
    });
    expect(state).toStrictEqual({ count: 10 });

    state = reducer(state, {
      type: ActionType.DECREMENT,
    });
    expect(state).toStrictEqual({ count: 9 });
  });
});
