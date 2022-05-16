import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Kitchen } from "./components/Kitchen";
import { Waiter } from "./components/waiter";
import { Home } from "./components/home";



const App = () => {
  return (


    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mesero" element={<Waiter />} />
      <Route path="/cocina" element={<Kitchen />} />
      
    
    </Routes>
      
    
  );
};

export default App;


