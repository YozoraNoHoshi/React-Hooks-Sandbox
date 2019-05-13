import React, { useState, Dispatch, SetStateAction } from 'react';

interface Props {}

export default function CounterHooks(props: Props) {
  const [counter, setCounter]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(0);

  function handleClick() {
    setCounter((c: number) => c + 1);
  }

  return (
    <div>
      {counter}
      <button onClick={handleClick}>Click me for hooks!</button>
    </div>
  );
}
