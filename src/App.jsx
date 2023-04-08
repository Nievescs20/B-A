import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RoutesComponent from "./components/Routes";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <RoutesComponent />
      <Footer />
    </>
  );
}

export default App;
