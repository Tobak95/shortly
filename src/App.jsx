import React from "react";

// Importing components
import "./App.css";
import Nav from "./component/Layout/Nav";
import Footer from "./component/Layout/Footer";
import HeroSection from "./component/HeroSection";
import Statistics from "./component/Statistics";
import Boost from "./component/Boost";


function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Statistics />
      <Boost />
      <Footer />
      
    </>
  );
}

export default App;
