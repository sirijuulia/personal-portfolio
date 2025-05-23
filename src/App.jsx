import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import PhotoPortfolio from "./pages/PhotoPortfolio"
import SoftwarePortfolio from "./pages/SoftwarePortfolio"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ContentWrapper from './components/ContentWrapper'
import { Routes, Route } from 'react-router'


function App() {
  const pathname = window.location.pathname;
  return (
    <>
    <Navbar />
    <ContentWrapper>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/photo-portfolio" element={<PhotoPortfolio />} />
      <Route path="/software-portfolio" element={<SoftwarePortfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </ContentWrapper>
    </>
  )
}

export default App
