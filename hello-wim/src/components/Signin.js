import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Signin = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
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

  return (
    <main className="SigninContainer">

      <div className="SigninBox">
        <h1>Signin</h1>
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

          <button type="submit">
            Signin
          </button>   
        </form>
      </div>
    </main>
  );
};

export default Signin;