import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Track from "./components/Track";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("nutrify"))
  );
  console.log("logged in user", loggedUser);
  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/track' element={<PrivateRoute Component={Track}/>}/>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
