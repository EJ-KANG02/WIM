import React, { useState } from 'react';

function Header(){
    return <header>
        <h1>WIM</h1>
        </header>
}

function Logo(){
    return  <article>
        <h1>Login</h1>
        </article>
}

function Create(Props){
	
	const [id, setId] = useState('');
    const [password, setPassword] = useState('');
        const [message, setMessage] = useState('');
    
    const handleSubmit = async (event) => {
    event.preventDefault();
        
        // 객체를 생성하여 아이디와 비밀번호 정보를 담음
        const loginData = {
            id: id,
            password: password
        };

        try {
            // 서버에 POST 요청 보내기
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginData)
            });

            // 서버 응답 처리
            if (response.ok) {
                const data = await response.json(); // JSON 형식으로 응답을 파싱
                setMessage(data.message); // 응답 데이터의 "message" 프로퍼티를 가져와 메시지 업데이트
            } else {
                setMessage('로그인 실패');
            }
        } catch (error) {
            console.error('서버 요청 오류:', error);
        }
    };
	
	
    return <article>
        <form onSubmit={handleSubmit}>
     		<p><input type="text" name="Id" placeholder="id" value={id} onChange={(e) => setId(e.target.value)} /></p>
            <p><input type="password" name="Password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} /></p>
            <p><input type="submit" value="Login" /></p>
    </form>
    </article>
}

function Help(){
    return <article>
        <p><a href= "/">Forget? Find your id</a></p>
        <p><a href= "/">Forget? Find your password</a></p>
    </article>
}

function Login() {
    return (
        <div>
<Header></Header>
<Logo></Logo>
<Create></Create>
<Help></Help>
        </div>
    )
}

export default Login;