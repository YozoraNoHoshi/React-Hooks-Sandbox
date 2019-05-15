import React, { useState } from 'react';
import useInput from './FormHook';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

interface Props {}

export default function CounterForm(props: Props): JSX.Element {
  const { value, setValue, bind } = useInput('');
  const [counter, setCounter] = useState(0);
  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    setCounter(+value);
  };

  return (
    <div className="CounterForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="counterStart">Enter a start for the counter</label>
        <input name="counterStart" type="text" {...bind} />
        <button type="submit">Change Counter</button>
      </form>
      <Counter counter={counter} />
      <CounterHooks counter={counter} />
    </div>
  );
}
