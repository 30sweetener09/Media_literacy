import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Pages/Homepage';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
