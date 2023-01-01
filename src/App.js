import { useState } from 'react';
import Button from './components/Button';
import './styles.css';

export default function App() {
  let [count, setCount] = useState(0);
  let [inc, setInc] = useState(0);
  let [dec, setDec] = useState(0);

  function handleIncrement() {
    setCount(inc === 0 ? count + 1 : count + inc);
  }

  function handleDecrement() {
    // if (dec < 0) return;
    setCount(dec === 0 ? count - 1 : count - dec);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <form action="#">
        <label htmlFor="inc">Choose a increment value : </label>
        <select
          id="inc"
          name="increment"
          onChange={(e) => {
            // if (dec < 0) return;
            setInc(parseInt(e.target.value));
          }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="50">50</option>
        </select>
        <label htmlFor="dec">Choose a decrement value : </label>

        {/* Maybe there is a litle problem with the Decrement Button  */}
        <select
          id="dec"
          name="decrement"
          onChange={(e) => {
            setDec(parseInt(e.target.value));
          }}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="50">50</option>
        </select>
      </form>
      <br />
      <br />

      <h2>Count: {count}</h2>

      {/* <button onClick={handleIncreament}>increament</button>
      <button onClick={handleDncreament}>Decreament</button> */}

      <Button
        increment={handleIncrement}
        decrement={handleDecrement}
        reset={reset}
      />
    </div>
  );
}
