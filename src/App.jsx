import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RoutesComponent from "./components/Routes";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <Navbar cartOpen={cartOpen} setCartOpen={setCartOpen} />
      <ScrollToTop>
        <RoutesComponent setCartOpen={setCartOpen} />
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
