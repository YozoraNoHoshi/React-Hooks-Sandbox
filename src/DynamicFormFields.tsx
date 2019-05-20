import React, { useState, memo } from 'react';

interface Props {
  fields: Inputs[];
  submit: (evt: any) => void;
}

interface Inputs {
  name: string;
  text: string;
  type?: string;
}

function DynamicFormHook(props: Props): JSX.Element {
  // State most likely has to be an object to adhere to React Hook + support a variable number of fields
  const [form, setForm] = useState({});

  // TO DO - Add a debounce of some sort to onChange.
  // Feels super inefficient to replace the state object -
  // but without a selective merge like Class component setState there isn't really a better way
  const onChange = (evt: any): void => {
    setForm(frm => {
      return { ...frm, [evt.target.name]: evt.target.value };
    });
  };

  // Only supports text inputs, no dropdowns/selects at the moment.
  const renderInputs = (inputs: Inputs[]): JSX.Element[] => {
    return inputs.map(i => (
      <>
        <label htmlFor={i.name}>{i.text}</label>
        <input
          name={i.name}
          type={i.type || 'text'}
          value={form[name] || ''}
          onChange={onChange}
        />
      </>
    ));
  };

  return (
    <form onSubmit={props.submit}>
      {renderInputs(props.fields)}
      <button>Submit</button>
    </form>
  );
}

DynamicFormHook.defaultProps = {};

export default memo(DynamicFormHook);
