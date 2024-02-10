import { useState, useReducer } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
function UseReducerComponent() {
  // const [count, setCount] = useState(0);
  // const handleDecrement = (e) => {
  //   e.preventDefault();
  //   setCount((prev) => prev - 1);
  // };

  // const handleIncrement = (e) => {
  //   e.preventDefault();
  //   setCount((prev) => prev + 1);
  // };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => dispatch({ type: ACTIONS.INCREMENT });
  const handleDecrement = () => dispatch({ type: ACTIONS.DECREMENT });

  return (
    <div>
      <h1>use Reducer</h1>
      <button
        style={{ backgroundColor: "#000", color: "#ffff" }}
        onClick={handleDecrement}
      >
        -
      </button>
      <span>{state.count}</span>
      <button
        style={{ backgroundColor: "#000", color: "#ffff" }}
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
}

export default UseReducerComponent;
