import { createContext, useState } from "react";

import "./App.css";
import Products from "./components/Products";
import ClassCompo from "./components/ClassCompo";
import About from "./components/navigation/About";
import Services from "./components/navigation/Services";
import Items from "./components/navigation/Items";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/navigation/Home";
import Header from "./components/navigation/Header";
import Image from "./components/navigation/about/Image";
import Prices from "./components/navigation/about/Prices";
import Location from "./components/navigation/about/Location";
import RefDemo from "./components/RefDemo";

export const userContext = createContext();

function App() {
  const [userDetails, setUserDetails] = useState({
    name: "Sayyed",
    email: "test@example.com",
  });
  return (
    <>
      <RefDemo />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="image" element={<Image />}></Route>
            <Route path="prices" element={<Prices />}></Route>
            <Route path="location" element={<Location />}></Route>
          </Route>
          <Route path="/items" element={<Items />} />

          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
      {/* <userContext.Provider value={{ userDetails, setUserDetails }}>
        <Products />
        <ClassCompo name="vali" />
      </userContext.Provider> */}
      {/* <About />
      <Items />
      <Services /> */}
    </>
  );
}

export default App;
