import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main'
import Signin from './components/Signin'

const App = () => {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  </Router>
  )
}

export default App
