import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main'
import Signin from './components/Signin'
import Signup from './components/Signup'
import EmailCode from './components/EmailCode'
import Newportfolio from './Newportfolio';

 const App = () => {

  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if(sessionStorage.getItem('userId') === null){
      //sessionStorage에 userId라는 key 값으로 저장된 값이 없다면
      console.log('isLogin ?? :: ', isLogin)
    } else {
      //sessionStorage 에 userId라는 key 값으로 저장된 값이 있다면
      //로그인 상태 변경
      setIsLogin(true)
      console.log('isLogin ?? :: ', isLogin)
    }
  })

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/EmailCode" element={<EmailCode />} />
        <Route path="/Newportfolio" element={<Newportfolio />} />
        <Route exact path="/" element={isLogin ? <Main isLogin={isLogin}/> : <Main />} />
      </Routes>
    </Router>
  )
}

export default App 