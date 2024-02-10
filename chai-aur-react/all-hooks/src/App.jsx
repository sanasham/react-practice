import "./App.css";
import UseReducerComponent from "./hooks/UseReducerComponent";
import UseReducer1 from "./hooks/UseReducer1";

function App() {
  return (
    <>
      <div>
        <UseReducerComponent />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <UseReducer1 />
    </>
  );
}

export default App;
