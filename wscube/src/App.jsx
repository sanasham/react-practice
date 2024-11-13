import { useState } from "react";
import Sample from "./functionalComponents/sample";
import SampleClass from "./classComponents/class-sample";
import StateComponent from "./functionalComponents/StateComponent";
import Counter from "./functionalComponents/Counter";
import ParentLevelCount from "./functionalComponents/ParentLevelCount";
import Game from "./functionalComponents/tic-tok-toy/Game";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ParentLevelCount /> */}
      {/* <Sample /> */}
      {/* <Counter name="Counter-1" />
      <Counter name="Counter-2" /> */}
      {/* <StateComponent /> */}
      {/* <SampleClass />
    <h1>sample</h1>
      <p>{count}</p> */}
      <Game />
    </>
  );
}

export default App;
