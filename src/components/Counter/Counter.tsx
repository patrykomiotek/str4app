import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      // setCount(count + 1); //  5 // typeof arg === 'number || typeof arg === 'string'
      setCount((prevValue) => prevValue + 1); // calculations and bigger state objects,  1+1, 2+1, 3+1 // typeof arg 'function' ||
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <p>Count {count}</p>
    </div>
  );
};
