import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Signin.css';

const Signin = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [token, setToken] = useState('');  // 3번: 클라이언트에서 처리 - 토큰 상태 추가
  const [isLoggedIn, setIsLoggedIn] = useState(false);


 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/signin', null, {
        params: {
          'userId': id,
          'userPw': password,
        },
      });
        
        // 서버에서 받는 응답에 따라 로직을 처리합니다.
        if (response.data.msg === '로그인 성공') {
          sessionStorage.setItem("userId", response.data.id);
          sessionStorage.setItem("name", response.data.name);
          document.location.href = "/";
          setIsLoggedIn(true);
        } else {
          alert(response.data.msg);
        }
       } catch (error) {
          console.error('Login error:', error);
        }
      };
  /* useEffect(() => {
    axios
    .get("http://localhost:8080/api/signin")
    .then(res => console.log(res))
    .catch()
  }, []) */


  // 로그아웃 핸들러
  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    setIsLoggedIn(false); // 로그아웃시 로그인 상태 변경
  };

  return (
    <main className="Signin-container">
      <h1 style={{fontSize: '50px'}}>WIM</h1>

      {isLoggedIn ? (
        <div>
          <h1>Welcome Back!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
      <div className="Signin-Box">
        <h1 style={{color: 'black', marginBottom: '6rem'}}>Signin</h1>
        <form onSubmit={handleSubmit}>
          <div>
          <h4>Id</h4>
              <label htmlFor="userId" />
              <input
                className="SigninInform"
                id="userId"
                type="text"
                name="userId"
                placeholder="Id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />

<h4>Password</h4>
              <label htmlFor="userPassword" />
              <input
                className="SigninInform"
                id="userPassword"
                type="password"
                name="userPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>

          {errorMsg && <p className="error-message">{errorMsg}</p>}

          <button type="submit" className="Signin-btn">
            Signin
          </button>   
        </form>
      </div>
      )}
    </main>
  );
};

export default Signin;