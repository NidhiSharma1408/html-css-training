import './App.css';
import Counter from "./Counter";
import { useState } from 'react';

function App() {
  let [hide, setHide] = useState(0);
  function toggle() {
    setHide(!hide);
  }
  return (
    <div className="App">
      {hide ? "" : (<h1>Assignment 1</h1>)}
      <Counter />
      <button onClick={toggle}>Toggle Title</button>
    </div>
  );
}

export default App;
