/* eslint-disable react/jsx-no-undef */
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Map from "./components/pages/Map";
import Products from "./components/pages/Products";
import Navbar from "./components/inc/Navbar";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/map" element={<Map/>} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
