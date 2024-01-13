import "./App.css";
import Button from "./components/Button";
import HelloWorld from "./components/classBased/HelloWorld";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold text-blue-600">test</h1>
      <Button name="First" />
      <Button name="Second" />
      <HelloWorld text="Hello World" /> */}

      <Posts />
    </>
  );
}

export default App;
