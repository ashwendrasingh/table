import React from "react";
import {  Route,  Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";

function App() {
  return (
    <> <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}/>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
