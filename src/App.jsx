import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RoutesComponent from "./components/Routes";
import "./App.css";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <RoutesComponent setCartOpen={setCartOpen} />
      <Footer />
    </>
  );
}

export default App;
