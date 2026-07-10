import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      
      <Route path="/Home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Project" element={<Project />} />
    </Routes>
    </>
    
  );
};

export default App;