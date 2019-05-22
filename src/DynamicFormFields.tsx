import React, {
  useState,
  memo,
  Dispatch,
  SetStateAction,
  useCallback
} from 'react';

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
  const [form, setForm]: [object, Dispatch<SetStateAction<object>>] = useState(
    {}
  );

  // TO DO - Add a debounce of some sort to onChange.
  // Feels super inefficient to replace the state object -
  // but without a selective merge like Class component setState there isn't really a better way
  // Memoizes the onChange callback so hypothetical input components do not re-render
  const onChange = useCallback((evt: any): void => {
    /*
    Modifies existing state (bad based on setState from Class Components, but constant time complexity)
    Will not trigger a re-render as React compares state by Object.is/Reference
    Always replace state
    setForm((frm: { [name: string]: string }): { [name: string]: string } => {
      frm[evt.target.name] = evt.target.value;
      return frm;
    });
    */

    /*
    Replaces state with new object. Linear time complexity, linear space complexity.
    */
    setForm(
      (frm: { [name: string]: string }): { [name: string]: string } => {
        return { ...frm, [evt.target.name]: evt.target.value };
      }
    );
  }, []);

  // const memoOnChange = useCallback((evt: any) => {
  //   onChange(evt);
  // }, []);

  // Only supports text inputs, no dropdowns/selects at the moment.
  const renderInputs = (inputs: Inputs[]): JSX.Element[] => {
    // Returns a hypothetical input component
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
