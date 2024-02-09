import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import io from "socket.io-client";
import { nanoid } from "nanoid";

const socket = io("http://localhost:5173/");

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("sendChat", { message });
    setMessage("");
  };

  return (
    <>
      <div>
        <h1>Chatty</h1>
      </div>
      <form onSubmit={sendChat}>
        <input
          type="text"
          name="chart"
          placeholder="send text"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default App;
