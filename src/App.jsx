import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import PhotoPortfolio from "./pages/PhotoPortfolio"
import SoftwarePortfolio from "./pages/SoftwarePortfolio"
import WorkWithMe from "./pages/WorkWithMe"
import { Routes, Route } from 'react-router'


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/photo-portfolio" element={<PhotoPortfolio />} />
      <Route path="/software-portfolio" element={<SoftwarePortfolio />} />
      <Route path="/work-with-me" element={<WorkWithMe />} />
    </Routes>
    </>
  )
}

export default App
