import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Kitchen } from "./components/Kitchen";
import { Waiter } from "./components/waiter";


const App = () => {
  return (


    
    <Routes>
    
      <Route path="/" element={<Waiter />} />
      <Route path="/cocina" element={<Kitchen />} />
      
    
    </Routes>
      
    
  );
};

export default App;


