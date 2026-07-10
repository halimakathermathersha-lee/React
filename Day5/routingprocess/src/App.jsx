import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Navbar from "./Components/Navbar";
const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      
      <Route path="/Home" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Project" element={<Project/>} />
    </Routes>
    </>
    
  );
};

export default App;