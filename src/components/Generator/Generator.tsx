import { v4 as uuidv4 } from 'uuid';
import { MouseEventHandler, useState } from 'react';

import { Button, Text } from '@ui';

export const Generator = () => {
  // let id = uuidv4();
  const [id, setId] = useState(uuidv4());
  // const state = useState(uuidv4());

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    // id = uuidv4();
    // console.log('id: ', id);
    setId(uuidv4());
    // state[1](uuidv4());
  };

  return (
    // <div onClick={handleClick}>
    <div>
      <Text>{id}</Text>
      <Text>Statyczny tekst</Text>

      <Button onClick={handleClick}>Refresh</Button>
    </div>
  );
};
