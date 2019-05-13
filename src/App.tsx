import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import CounterHooks from './CounterHooks';
import NumberFact from './NumberFact';
import NumberFactHooks from './NumberFactHooks';

const App: React.FC = () => {
  const num = Math.floor(Math.random() * 100);
  return (
    <div className="App">
      Class
      <Counter />
      Hooks
      <CounterHooks />
      <NumberFact number={num} />
      <NumberFactHooks number={num} />
    </div>
  );
};

export default App;
