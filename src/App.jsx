import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import CaseStudies from './pages/CaseStudies'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case" element={<CaseStudies />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App