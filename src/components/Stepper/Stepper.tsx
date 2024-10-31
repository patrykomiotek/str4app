import { KeyboardEventHandler, useReducer } from "react";
import { Button, Input } from "../../ui";

export enum ActionType {
  INCREMENT, // 0
  DECREMENT, // 1
  SET, // 2
}

type State = {
  count: number;
};

type Action = {
  type: ActionType;
  payload?: string;
};

const initialState: State = { count: 0 };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ActionType.INCREMENT:
      return { count: state.count + 1 };
    case ActionType.SET:
      return { count: parseInt(action.payload || "", 10) };
    default:
      return state;
  }
};
// action creators
const increment = () => ({ type: ActionType.INCREMENT });
const decrement = () => ({ type: ActionType.DECREMENT });

export const Stepper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect -> loadData -> dispatch({ type: 'sth', payload: oneTrunk })

  const handleChangeCount: KeyboardEventHandler<HTMLInputElement> = (event) => {
    // console.log(event.target);
    if (event.key.toLowerCase() === "enter") {
      dispatch({ type: ActionType.SET, payload: event.currentTarget.value });
    }
  };

  return (
    <div>
      <Button onClick={() => dispatch(decrement())}>-</Button>
      <span className="mx-4">{state.count}</span>
      <Button onClick={() => dispatch(increment())}>+</Button>

      <Input label="Your value" type="number" onKeyDown={handleChangeCount} />
    </div>
  );
};
