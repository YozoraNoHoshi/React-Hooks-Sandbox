import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import CounterHooks from './CounterHooks';
import NumberFact from './NumberFact';
import NumberFactHooks from './NumberFactHooks';
import CounterForm from './CounterForm';
import Timer from './Timer';

const App: React.FC = () => {
  const [num] = useState(Math.floor(Math.random() * 100));
  const [activeTimer, setActiveTimer] = useState(false);
  return (
    <div className="App">
      {activeTimer && <Timer />}
      <button onClick={() => setActiveTimer(!activeTimer)}>
        Activate Timer
      </button>
      <CounterForm />
      <Counter />
      <CounterHooks />
      <NumberFact number={num} />
      <NumberFactHooks number={num} />
    </div>
  );
};

export default App;
