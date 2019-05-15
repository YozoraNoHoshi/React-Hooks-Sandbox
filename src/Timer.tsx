import React, { useState, useEffect } from 'react';

interface Props {}

export default function Timer(props: Props): JSX.Element {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(t => t + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return <div className="Timer">{time}</div>;
}
