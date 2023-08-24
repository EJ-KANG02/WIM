import React, { useState, useEffect } from 'react';
import './signup.css'; 

const Signup = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [callnumber, setCallnumber] = useState('');
  const [emailCode, setEmailCode] = useState('');
  const [token, setToken] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  //간단한 유효성 검사 함수
  const isValid = () => {
    if(id.length < 5) {
      setErrorMsg('ID는 5글자 이상이어야 합니다.');
      return false;
    }
    if (!email.includes('@')) {
      setErrorMsg('허용되는 이메일 양식이 아닙니다.');
      return false;
    }
    if (password.length < 8){
      setErrorMsg('비밀번호는 9글자 이상이어야 합니다.');
      return false;
    }
    if(callnumber.length !== 10) {
      setErrorMsg('올바른 전화번호를 입력해주십시오.');
      return false;
    }
    return true;
  }

  const fakeAPIRequest = () => {
    // 간단한 시뮬레이션: ID가 'admin'이면 실패로 간주하고, 그렇지 않으면 성공으로 간주
    if (id === 'admin') {
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

        // 객체를 생성하여 아이디와 비밀번호 정보를 담음
        const SignupData = {
            id: id,
            password: password,
            email: email,
            callnumber: callnumber
        };

        try { //로그인 표청 시작
            // 서버에 POST 요청 보내기
            const response = await fetch('http://localhost:3000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(SignupData) //사용자 입력갑 JSON 형식 문자열로 반환 후 본문에 포함시킴.
            });

            // 서버 응답 처리
            if (response.ok) {
              const data = await response.json();
        // 3번: 클라이언트에서의 처리 - 서버에서 반환된 토큰을 상태와 localStorage에 저장
        setToken(data.token);
        localStorage.setItem('authToken', data.token);
        //유효성 검사
    if(!isValid()) return;

    //회원가입 성공 실패 여부
        if (fakeAPIRequest()) {
            setErrorMsg('성공하였습니다.');
            // 여기에 추가적인 로직(로그인 페이지로 리디렉션 등)을 추가할 수 있음
          } 
      } else {
                // 로그인 실패 처리
                console.error('로그인 실패');
                setErrorMsg('실패하였습니다. 다시 시도래주세요. ');
            }
        } catch (error) {
            console.error('서버 요청 오류:', error);
            setErrorMsg('서버 요청 오류');
        }
    };


  return (
    <main className="sign-container">
      <h1 style={{fontSize: '50px'}}>WIM</h1>

      <div className="sign-Box">
        <h2 style={{color: 'black', marginBottom: '3rem'}}>Signup</h2>
        <form onSubmit={handleSubmit}>
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
             <label htmlFor="EmailCode"></label>
            <input
              className="SignEmailCode"
              type="text"
              id="EmailCode"
              name="EmailCode"
              placeholder="Enter verification code sent to your email"
              value={emailCode}
              onChange={(e) => setEmailCode(e.target.value)}
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
