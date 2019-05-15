import React, { useState, Dispatch, SetStateAction, memo } from 'react';

interface Props {
  counter: number;
}

function CounterHooks(props: Props): JSX.Element {
  const [counter, setCounter]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(props.counter);

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

CounterHooks.defaultProps = { counter: 0 };

export default memo(CounterHooks);
