import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Newportfolio from './Newportfolio';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/Newportfolio" element={<Newportfolio />} />
      <Route exact path="/" element={<Main />} />

    </Routes>
  </Router>
  )
}

export default App
