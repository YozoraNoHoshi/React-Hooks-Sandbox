import React from 'react';
import useInput from './FormHook';

interface Props {}

export default function CounterForm(props: Props): JSX.Element {
  const { value, setValue, bind } = useInput('');
  const { value: value2, setValue: setValue2, bind: bind2 } = useInput('');
  const { value: value3, setValue: setValue3, bind: bind3 } = useInput('');
  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    setValue('');
    setValue2('');
    setValue3('');
  };

  return (
    <div className="CounterForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="counterStart">Enter some text here</label>
        <input name="counterStart" type="text" {...bind} />
        <label htmlFor="counterStart2">Enter some more text here</label>
        <input name="counterStart2" type="text" {...bind2} />
        <label htmlFor="counterStart3">Enter even more text here</label>
        <input name="counterStart3" type="text" {...bind3} />
        <button type="submit">Reset Input</button>
      </form>
      <div>Entered Text: {value}</div>
      <div>Entered Second Text: {value2}</div>
      <div>Entered Third Text: {value3}</div>
    </div>
  );
}
