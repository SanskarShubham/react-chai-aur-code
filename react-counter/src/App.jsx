import './App.css';
import { useState } from 'react';


function App() {

  let [counter, setCounter] = useState(0);
  function increment() {
    if (counter < 20) {
      setCounter(++counter);
    }
  }
  function decrement() {
    if (counter > 0) {
      setCounter(--counter);
    }
  }
  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
