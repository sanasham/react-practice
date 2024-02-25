import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Track from "./components/Track";

function App() {
  return (
    <>
      {/* <h1>Welcome to nutrition</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/track" element={<Track />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
