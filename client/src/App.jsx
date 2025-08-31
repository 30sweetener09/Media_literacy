import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Pages/Homepage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  )
}

export default App
