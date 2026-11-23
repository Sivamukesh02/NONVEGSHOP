import React,  { useEffect, useState } from 'react';
import AOS from 'aos';
import Home from './Pages/Home';
import About from './Pages/About';
import Items from './Pages/Items';
import Contact from './Pages/Contact';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import { HashRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App(){
        useEffect(() => {
        // Initializing AOS components animation parameters controls parameters dynamically to prevent layer hides overrides triggers limits setups rules
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);

    return(
        <HashRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="Contact" element={<Contact/>}/>
                <Route path="Items" element={<Items/>}/>
                <Route path="About" element={<About/>}/>
            </Routes>
        <Footer/>
        </HashRouter>
    );
}
export default App;