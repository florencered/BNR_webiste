

import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Home from "./Pages/Home/Home"; 
import About from "./Pages/About/About";
import Wishlist from './Pages/Wishlist/Wishlist';


function App() {
  return ( 
    <BrowserRouter>   
    <Routes> 
        <Route exact path="/" element={<Home/>} /> 
        <Route exact path="/about" element={<About/>} />  
        <Route exact path="/waitlist" element={<Wishlist/>} />  
        
   </Routes> 
    </BrowserRouter>
     
  );
}

export default App;
