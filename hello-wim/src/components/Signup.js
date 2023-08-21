import React, { useState } from 'react';
import './Signin.css'; 

const Signup = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [callnumber, setCallnumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const fakeAPIRequest = () => {
    // 간단한 시뮬레이션: ID가 'admin'이면 실패로 간주하고, 그렇지 않으면 성공으로 간주
    if (id === 'admin') {
      return false;
    }
    return true;
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // 이 값을 사용하여 서버에 회원가입 요청을 보낼 수 있음
    console.log({
      id,
      email,
      password,
      callnumber
    });

//회원가입 성공 실패 여부
    if (fakeAPIRequest()) {
        setErrorMsg('Successfully registered!');
        // 여기에 추가적인 로직(로그인 페이지로 리디렉션 등)을 추가할 수 있음
      } else {
        setErrorMsg('Registration failed. Please try again.');
      }
  };

  return (
    <main className="sign-container">
      <h1 style={{fontSize: '50px'}}>WIM</h1>

      <div className="sign-Box">
        <h2 style={{color: 'black', marginBottom: '4rem'}}>Signup</h2>
        <form onSubmit={handleSignup}>
          <div>
          <label htmlFor="Id" />
            <input
            className="SignInform"
              type="text"
              name="Id"
              placeholder="Id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <label htmlFor="Id" />
            <input
            className="SignInform"
              type="email"
              name="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="Id" />
            <input
            className="SignInform"
              type="password"
              name="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="Id" />
            <input
            className="SignInform"
              type="tel"
              name="Callnumber"
              placeholder="Call Number"
              value={callnumber}
              onChange={(e) => setCallnumber(e.target.value)}
            />
          </div>

          {errorMsg && <p className="error-message">{errorMsg}</p>}

          <button type="submit" className="sign-btn">
            Signup
          </button>
        </form>
      </div>
    </main>
  );
};

export default Signup;
