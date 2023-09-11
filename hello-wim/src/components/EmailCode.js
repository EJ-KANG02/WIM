import axios from 'axios';
import React, { useState, useEffect } from 'react';

const EmailCode = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [iscCorrect, setIsCorrect] = useState(false);


 
  const handleEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/signin', null, {
        params: {
          'email' : {email}
        },
      });
        
        /* {백엔드 로직} */

       } catch (error) {
          console.error('email error:', error);
        }
      };

      const handleCode = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8080/api/signin', null, {
            params: {
              'code' : {code}
            },
          });
            
            /* {백엔드 로직} */
    
           } catch (error) {
              console.error('code error:', error);
            }
          };

  return (
    <main className="SigninContainer">

      <div className="SigninBox">
      <h1>Email Code</h1>
        <form onSubmit={handleEmail}>
          <div>
          <h5>Input Email Code</h5>
              <label htmlFor="email" />
              <input
                className="SigninInform"
                id="email"
                type="text"
                name="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button type="submit">
            get code
          </button> 

          <h4>code: </h4>
              <label htmlFor="code" />
              <input
                className="SigninInform"
                id="code"
                type="text"
                name="code"
                placeholder="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
          </div>

          {errorMsg && <p className="error-message">{errorMsg}</p>}

          <button type="submit">
            Check
          </button>   
        </form>
      </div>
    </main>
  );
};

export default EmailCode;