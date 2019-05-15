import React, { useState } from 'react';
import useInput from './FormHook';

interface Props {}

export default function CounterForm(props: Props): JSX.Element {
  const { value, setValue, bind, reset } = useInput('');
  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    reset();
  };

  return (
    <div className="CounterForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="counterStart">Enter some text here</label>
        <input name="counterStart" type="text" {...bind} />
        <button type="submit">Reset Input</button>
      </form>
      <div>Entered Text: {value}</div>
    </div>
  );
}
