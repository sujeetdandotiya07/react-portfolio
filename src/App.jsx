import React from "react";
import Header from "./Component/Header";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Skill from "./pages/Skill";
import Project from "./pages/Project";
import Services from "./pages/Service";
import Footer from "./Component/Footer";
import FloatingButtons from "./Component/FloatingButtons";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/service" element={<Services />} />
      </Routes>

      <FloatingButtons />
      <Footer />
    </>
  );
}

export default App;
