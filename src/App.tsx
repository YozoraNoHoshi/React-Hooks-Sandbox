import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { CounterHooks } from './CounterHooks';

const App: React.FC = () => {
  return (
    <div className="App">
      Class
      <Counter />
      Hooks
      <CounterHooks />
    </div>
  );
};

export default App;
