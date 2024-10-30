import { KeyboardEventHandler, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Input, Text } from '@ui';
import type { RootState } from '../../store';
import { increment, decrement, incrementByAmount } from './counterSlice';

export const CounterRedux = () => {
  const counterValue = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const filedRef = useRef<HTMLInputElement>(null);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key.toLowerCase() === 'enter') {
      const value = filedRef.current?.value || 0;
      dispatch(incrementByAmount(Number(value)));
    }
  };

  return (
    <div className="mt-6">
      <div className="flex">
        <Button className="mr-4" onClick={() => dispatch(decrement())}>
          -
        </Button>
        <Text className="mr-4">{counterValue.toString()}</Text>
        <Button className="mr-4" onClick={() => dispatch(increment())}>
          +
        </Button>
      </div>
      <Input
        label="Enter amount"
        ref={filedRef}
        type="number"
        className="w-[150px]"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
