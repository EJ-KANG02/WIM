import React, { useState, useEffect } from 'react';
import './Signin.css';

const Signin = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    // 로그인 상태 확인 (예: 로컬 스토리지, 쿠키 등)
    if (localStorage.getItem('loggedIn') === 'true') {
      setLoggedIn(true);
    }
  }, []);

  const handleSignin = (e) => {
    e.preventDefault(); // 폼 제출을 막아 페이지 새로고침을 방지합니다.

    if (id === 'admin' && password === 'password') {
      setLoggedIn(true);
      localStorage.setItem('loggedIn', 'true'); // 로컬 스토리지에 로그인 상태 저장
      setErrorMsg('');
    } else {
      setErrorMsg('Invalid ID or password.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('loggedIn'); // 로그인 상태를 로컬 스토리지에서 제거
};

  if (loggedIn) {
    return (
      <div className="logout-container">
          Welcome, {id}!
          <button onClick={handleLogout} className="btn logout-btn">Logout</button>
      </div>
  );
  }

  return (
    <main className="sign-container">
      <h1 style={{fontSize: '50px'}}>WIM</h1>

      <div className="sign-Box">
        <h1 style={{color: 'black', marginBottom: '8rem'}}>Signin</h1>
        <form onSubmit={handleSignin}>
          <div>
            <p>
              <label htmlFor="Id" />
              <input
                className="SignInform"
                type="text"
                name="Id"
                placeholder="Id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="Password" />
              <input
                className="SignInform"
                type="password"
                name="Password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </p>
          </div>

          {errorMsg && <p className="error-message">{errorMsg}</p>}

          <button type="submit" className="sign-btn">
            Signin
          </button>
        </form>
      </div>
    </main>
  );
};

export default Signin;