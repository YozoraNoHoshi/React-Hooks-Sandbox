import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';
import axios from 'axios';

interface Props {
  number: number;
}

export default function NumberFactHooks(props: Props): JSX.Element {
  const [fact, setFact]: [string, Dispatch<SetStateAction<string>>] = useState(
    ''
  );

  useEffect(() => {
    (async function request() {
      const request = await axios.get(`http://numbersapi.com/${props.number}`);
      setFact(request.data);
    })();
  }, [props.number]);

  return <div className="NumberFactHooks">Hooks fact: {fact}</div>;
}
