import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Signup = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

        // 객체를 생성하여 아이디와 비밀번호 정보를 담음
        const handleSubmit = async (e) => {
          e.preventDefault();
          try {
            const response = await axios.post('http://localhost:8080/api/signin', null, {
              params: {
                'id': id,
                'Password': password,
                'name' : name,
              },
            });
              
            /* {백엔드 로직 입력} */
             } catch (error) {
                console.error('Login error:', error);
              }
            };
          }


  return (
    <main className="SignupContainer">

      <div className="SignupBox">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <div>
          <h4>Name</h4>
            <label htmlFor="name" />
            <input
            className="SignupInform"
              type="name"
              name="name"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <h4>Id</h4>
          <label htmlFor="Id" />
            <input
            className="SignupInform"
              type="text"
              name="Id"
              placeholder="Id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <h4>Password</h4>
            <label htmlFor="Password" />
            <input
            className="SignupInform"
              type="password"
              name="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {errorMsg && <p className="error-message">{errorMsg}</p>}

          <button type="submit" className="Signup-btn">
            Signup
          </button>
        </form>
      </div>
    </main>
  );
};

export default Signup;
