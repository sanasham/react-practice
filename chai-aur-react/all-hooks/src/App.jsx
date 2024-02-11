import "./App.css";
import UseReducerComponent from "./hooks/UseReducerComponent";
import UseReducer1 from "./hooks/UseReducer1";
import UseMemoComponet from "./hooks/UseMemoComponet";

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

      <p className="read-the-docs">below use Memo</p>
      <UseMemoComponet />
    </>
  );
}

export default App;
