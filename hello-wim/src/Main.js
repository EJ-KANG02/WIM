import React from 'react';

function Header() {
  return <header>
  <h1>WIM</h1>
  </header>
}

function Nav() {
  return <nav>
  <ol>
    <li>새 포트폴리오</li>
    <li>기존 포트홀리오</li>
    <li>예시 포트폴리오</li>
    <li>도움말</li>
  </ol>
</nav>
}

function Article(){
  return <article>
  <p>정은지</p>
  <p>컴퓨터공학과 재학</p>
</article>
}


function Main() {
  return (
    <div>
      <Header></Header>
        <article>
          <p>나만의 포트폴리오 만들기 !</p>
        </article>
        <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default Main;
