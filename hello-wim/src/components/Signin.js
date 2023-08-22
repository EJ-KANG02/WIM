import React, { useState, useEffect } from 'react';
import './Signin.css';

const Signin = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [token, setToken] = useState('');  // 3번: 클라이언트에서 처리 - 토큰 상태 추가
  const [isLoggedIn, setIsLoggedIn] = useState(false);


   const handleSubmit = async (event) => {
    event.preventDefault();

        // 객체를 생성하여 아이디와 비밀번호 정보를 담음
        const loginData = {
            id: id,
            password: password
        };

        try { //로그인 표청 시작
            // 서버에 POST 요청 보내기
            const response = await fetch('http://localhost:3000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData) //사용자 입력갑 JSON 형식 문자열로 반환 후 본문에 포함시킴.
            });

            // 서버 응답 처리
            if (response.ok) {
              const data = await response.json();
        // 3번: 클라이언트에서의 처리 - 서버에서 반환된 토큰을 상태와 localStorage에 저장
        setToken(data.token);
        localStorage.setItem('authToken', data.token);
        setIsLoggedIn(true); // 로그인 성공시 로그인 상태 변경
        setErrorMsg('로그인 성공');
      } else {
                // 로그인 실패 처리
                console.error('로그인 실패');
                setErrorMsg('로그인 실패');
            }
        } catch (error) {
            console.error('서버 요청 오류:', error);
            setErrorMsg('서버 요청 오류');
        }
    };

     // 4번: 로그인 상태 유지 - 페이지 로딩 시 저장된 인증 토큰 확인
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken) {
      setToken(storedToken);
      setIsLoggedIn(true); // 저장된 토큰이 있을 경우 로그인 상태로 설정
    }
  }, []);


  // 로그아웃 핸들러
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false); // 로그아웃시 로그인 상태 변경
  };

  return (
    <main className="sign-container">
      <h1 style={{fontSize: '50px'}}>WIM</h1>

      {isLoggedIn ? (
        <div>
          <h1>Welcome Back!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
      <div className="sign-Box">
        <h1 style={{color: 'black', marginBottom: '8rem'}}>Signin</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <p>
              <label htmlFor="userId" />
              <input
                className="SignInform"
                id="userId"
                type="text"
                name="userId"
                placeholder="Id"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </p>
            <p>
              <label htmlFor="userPassword" />
              <input
                className="SignInform"
                id="userPassword"
                type="password"
                name="userPassword"
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
      )}
    </main>
  );
};

export default Signin;