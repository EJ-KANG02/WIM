import React from 'react';

const Button = ({type, text, onClick}) => {
  return (
    <button className= 'btn' type={type} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button;
