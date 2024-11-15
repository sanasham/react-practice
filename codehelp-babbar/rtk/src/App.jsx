import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./feature/Counter/counterSlice";

function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncrementByValue = () => {
    dispatch(incrementByAmount(amount));
  };

  const handleChange = (e) => {
    console.log("value", e.target.value);
    setAmount(e.target.value);
  };
  console.log("amount", amount);
  return (
    <>
      <input type="text" onChange={handleChange} />
      <div className="container">
        <button onClick={handleIncrement}>+</button>
        <p>Count Value: {count} </p>
        <button onClick={handleDecrement}>-</button>
      </div>
      <div className="btn">
        <button id="reset" onClick={handleReset}>
          reset
        </button>
        <br />
        <button id="reset" onClick={handleIncrementByValue}>
          Increment by value
        </button>
      </div>
    </>
  );
}

export default App;
