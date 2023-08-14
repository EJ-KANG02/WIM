import React from 'react';

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
    return <article>
        <form onSubmit={(event)=>{
            event.preventDefault();
        }}>
    <p><input type= "text" 
    ｑ= "Id" placeholder="id" /></p>
    <p><input type= "text" name= "Password" placeholder="password" /></p>
    <p><input type = "submit" value= "Login" /></p>
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