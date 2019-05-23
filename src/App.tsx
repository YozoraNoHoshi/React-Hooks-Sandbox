import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import CounterHooks from './CounterHooks';
import NumberFact from './NumberFact';
import NumberFactHooks from './NumberFactHooks';
import CounterForm from './CounterForm';
import Timer from './Timer';
import DynamicFormHook from './DynamicFormFields';

function generateRandomFields(): any[] {
  let val = new Array(Math.floor(Math.random() * 10));

  return val.map((v, i) => {
    return { name: `field${i}`, text: `Field ${i}` };
  });
}
const num = Math.floor(Math.random() * 100);
const fields = generateRandomFields();

const App: React.FC = () => {
  const [activeTimer, setActiveTimer] = useState(false);
  return (
    <div className="App">
      {activeTimer && <Timer />}
      <button onClick={() => setActiveTimer(!activeTimer)}>
        {!activeTimer ? 'Activate Timer' : 'Deactivate Timer'}
      </button>
      <CounterForm />
      <Counter />
      <CounterHooks />
      <NumberFact number={num} />
      <NumberFactHooks number={num} />
      <DynamicFormHook submit={() => {}} fields={fields} />
    </div>
  );
};

export default App;
