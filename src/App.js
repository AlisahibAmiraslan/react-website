import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
