import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
      <Route  exact path="/" element={<Home/>}>
      </Route>
      
      </Routes>
        
      
    </div>
  );
}

export default App;
