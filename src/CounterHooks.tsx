import React, { useState, Dispatch, SetStateAction, memo } from 'react';

interface Props {
  counter: number;
}

export default memo(function CounterHooks(props: Props) {
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
});
