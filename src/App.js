import React from "react";
import "./App.css";
import Home from "./Components/Pages/Home";

import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import Navbar from "./Components/Includes/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
       
        <Routes>
          <Route path="/" element = {<Home/>} > </Route>

          <Route path="/Home" element = {<Home/>} > </Route>
          <Route path="/About" element = {<About/>} > </Route>
          <Route path="/Contact" element = {<Contact/>} > </Route>
          {/* <Route path="/Skills" element = {<Skills/>} > </Route> */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
