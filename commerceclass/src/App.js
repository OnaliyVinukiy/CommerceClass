import React from "react";
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
     
      <Header />
      <Home />
 
     
    </div>
  );
}

export default App;
