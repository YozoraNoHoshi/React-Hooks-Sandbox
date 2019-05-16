import { useState, Dispatch, SetStateAction } from 'react';

export default function useInput(initialValue: any) {
  const [value, setValue]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState(initialValue);

  return {
    value,
    setValue,
    // reset: () => setValue(initialValue),
    bind: {
      value,
      onChange: (event: any) => {
        setValue(event.target.value);
      }
    }
  };
}
