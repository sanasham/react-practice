import { useState } from "react";
import Card from "./components/Card.jsx";
import NewButton from "./components/NewButton.jsx";
import MYParent from "./stateLifting/MYParent.jsx";
import Logout from "./ConditionalRendering/Logout.jsx";
import Login from "./ConditionalRendering/Login.jsx";
import Test from "./eventHandlers/Test.jsx";
import CustomUseEffect from "./eventHandlers/customUseEffect/CustomUseEffect.jsx";
import TodosList from "./ApiCalls/TodosList.jsx";
import ChildA from "./context/ChildA.jsx";
import NewContext from "./context/NewContext.js";
import ThemeContext from "./context/ThemeContext.js";
import "../src/App.css";
function App() {
  const [user, setUser] = useState({ name: "Diya", age: 5 });
  const [theme, setTheme] = useState("light");

  return (
    <>
      {/* <Test /> */}
      {/* <CustomUseEffect /> */}
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <NewContext.Provider value={{ user, setUser }}>
          <div
            style={{
              backgroundColor: theme === "light" ? "#ff5733" : "#6dff33",
              color: theme === "light" ? "#000" : "#fff",
            }}
          >
            <ChildA />
          </div>
        </NewContext.Provider>
      </ThemeContext.Provider>

      {/* <TodosList /> */}
    </>
  );
  // if (isLoggedIn) {
  //   return <Logout click={() => setIsLoggedIn(!isLoggedIn)} />;
  // } else {
  //   return <Login click={() => setIsLoggedIn(!isLoggedIn)} />;
  // }

  // return isLoggedIn ? (
  //   <Logout click={() => setIsLoggedIn(!isLoggedIn)} />
  // ) : (
  //   <Login click={() => setIsLoggedIn(!isLoggedIn)} />
  // );

  // return (
  //   <div>
  //     <h1>welcome everyone to codehelp </h1>
  //     <div>
  //       {isLoggedIn && <Logout click={() => setIsLoggedIn(!isLoggedIn)} />}
  //     </div>
  //   </div>
  // );
  // const [count, setCount] = useState(0);

  // //console.log(`count ${count}`);
  // const handleClick1 = () => {
  //   setCount((prev) => prev + 1);
  //   console.log("test", count); // Logs the old count, not the updated one.
  // };
  //const handleClick = () => setCount(count + 1);
  //return (

  {
    /* <MYParent /> */
  }
  {
    /* <h1> parent count {count}</h1>
      <NewButton name="New Button" incrementCount={handleClick}>
        <h1>child Count {count}</h1>
      </NewButton> */
  }

  {
    /* <Card>
        <h1>Best web developer</h1>
        <p>This is paragraph</p>
        <a href="www.google.co.in">google</a>
      </Card> */
  }
  {
    /* <h1>{`count value  ${count}`}</h1>
      <br />
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={handleClick1}> new button</button> */
  }

  // );

  // object update

  // const [user, setUser] = useState({ name: "John", age: 30 });
  // const handleAge = () => {
  //   setUser((prev) => {
  //     return { ...prev, age: user.age + 1 };
  //   });
  // };
  // return (
  //   <div>
  //     <span>Age: {user.age}</span>
  //     <br />
  //     <button onClick={handleAge}>update age</button>
  //   </div>
  // );

  // array udpate

  // const [items, setItems] = useState([1, 2, 3]);
  // console.log(items.join(""));
  // const handleAddItems = () => {
  //   const value = Math.max(...items);
  //   setItems([...items, value + 1]);
  // };
  // return (
  //   <>
  //     <div>
  //       {items.map((item) => (
  //         <li key={item}>{item}</li>
  //       ))}
  //     </div>
  //     <button onClick={handleAddItems}>add items</button>
  //   </>
  // );
}

export default App;
