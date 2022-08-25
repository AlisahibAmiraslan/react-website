import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Question from "./Faqs/Question";
import { useLocation } from "react-router-dom";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css/bundle";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="question" element={<Question />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
