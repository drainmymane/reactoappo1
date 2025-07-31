import { useEffect, useRef, useState } from "react";
import './styles/App.css'
import {Route,Routes,BrowserRouter,Link} from 'react-router'
import Items from "./pages/Items.jsx";
import About from "./pages/About.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
        <Navbar /> 
        <Routes>
            <Route path="/" element={<Items />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App