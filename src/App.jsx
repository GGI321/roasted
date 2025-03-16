import Header from './components/Headcomponents/Header'
import Footer from './components/footercomponent/Footer'
import Home from './components/Homecomponents/Home'
import About from './components/aboutcomponents/About';
import Menu from './components/menuComponents/Menu';
import Book from './components/Book/Book';
import Pages from './components/Pages/Pages';
import Blog from './components/Blogs/Blog';
import Contact from './components/contactsComponent/Contact';
import react, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import React from 'react'

function App() {

  useEffect(() => {
    AOS.init({
        duration: 1000, // Animation duration in milliseconds
        easing: 'ease-in-out', // Animation easing
        once: true, // Whether animation should happen only once
    });
}, []);
  return (
   <BrowserRouter>
    <Header/>
    <Routes>
    
     <Route path="/" element={<Home />} />
     <Route path="/About" element={<About />} />
     <Route path="/Menu" element={<Menu />} />
     <Route path="/Book" element={<Book />} />
     <Route path="/Pages" element={<Pages />} />
     <Route path="/Blog" element={<Blog />} />
     <Route path="/Contact" element={<Contact />} />

    
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
