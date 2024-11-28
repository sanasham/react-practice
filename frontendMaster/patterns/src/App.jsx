import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import Hoc from "./components/Hoc";

function counterValue({ count }) {
  return <span>{count}</span>;
}
function App() {
  const [count, setCount] = useState(0);
  const SpecialCounterValue = Hoc(counterValue);

  // function sum(a) {
  //   return function (b) {
  //     return function (c) {
  //       console.log("sum", a + b + c);
  //     };
  //   };
  // }
  // sum(1)(2)(3);

  function add(a) {
    return function (b) {
      return function (c) {
        return function (d) {
          console.log("sum", a + b + c + d);
        };
      };
    };
  }
  console.log("adding value", add(5)(2)(4)(5)());

  return (
    <>
      <Button
        name="Increment"
        value={count}
        click={() => setCount(count + 1)}
      />
      <p>{count}</p>
      <Button
        name="Decrement"
        value={count}
        click={() => setCount(count - 1)}
      />
      <br />
      <SpecialCounterValue count={count} />
    </>
  );
}

export default App;
