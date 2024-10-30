import { useState, useRef } from 'react';

import { Button } from '@ui';

export const KeepValue = () => {
  const [myNumber, setMyNumber] = useState(2);
  const mySet = ['pies', 'kot', 'kaczka'];
  const animalRef = useRef(mySet);
  let value = 1;
  const array = [1, 2, 3];
  // const mySet = new Set<string>();

  const handleClick = () => {
    value++;
    array.push(4);
    mySet.push('kapibara');
    console.log('Value: ', value);
    setMyNumber(myNumber + 1);
    animalRef.current.push('motyl');
  };

  return (
    <div>
      <p>Value from let: {value}</p>
      <p>Values from array: {JSON.stringify(array, null, 2)}</p>
      <p>Values from animals: {JSON.stringify(animalRef.current, null, 2)}</p>
      <p>Value from state: {myNumber}</p>
      <Button onClick={handleClick}>Refresh</Button>
    </div>
  );
};
