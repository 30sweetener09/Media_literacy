import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Pages/Homepage';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import SectionPage from './components/Pages/SectionPage';
import LessonPage1 from './components/Pages/Lessons/LessonPage1';
import LessonPage2 from './components/Pages/Lessons/LessonPage2';
import LessonPage3 from './components/Pages/Lessons/LessonPage3';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/section/:id" element={<SectionPage />} />
          <Route path="/lesson/1" element={<LessonPage1 />} />
          <Route path="/lesson/2" element={<LessonPage2 />} />
          <Route path="/lesson/3" element={<LessonPage3 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
