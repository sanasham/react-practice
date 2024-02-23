import { useState } from "react";

import "./App.css";

function App() {
  const [animals, setAnimals] = useState(["cow", "cat", "dog", "deer"]);

  const hanleAnimal = () => {
    setAnimals((prev) => {
      return [...prev, "sheep"];
    });
  };
  return (
    <>
      <h1>Animals</h1>
      {animals?.map((animal, index) => (
        <h4 key={index}>{animal}</h4>
      ))}
      <button onClick={hanleAnimal}>add animal</button>
    </>
  );
}

export default App;
