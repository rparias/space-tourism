import React from 'react'
import GlobalStyle from './globalStyles'
import DesignSystem from './DesignSystem'
import Home from './pages/Home'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <GlobalStyle />
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/design" element={<DesignSystem />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
