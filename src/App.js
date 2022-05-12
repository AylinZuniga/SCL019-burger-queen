import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Waiter } from "./components/waiter";


const App = () => {
  return (


    
    <Routes>
    
      <Route path="/" element={<Waiter />} />
      
      
    
    </Routes>
      
    
  );
};

export default App;


