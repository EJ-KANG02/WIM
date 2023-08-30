import React from 'react';
import { Link } from 'react-router-dom';

const MenuButton = ({type, text, link, onClick}) => {
  return (
    <div className="backbtn">
    <button className= 'menubtn' type={type} onClick={onClick}>
    <Link to={link}>{text}</Link>
    </button>
    </div>
  )
}

export default MenuButton;
