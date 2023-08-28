import React from 'react'
import { Link } from 'react-router-dom';

const MenuList = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '24rem'}}>
        <div className="backbtn">
    <button className='menubtn'>
      <Link to="/Newportfolio">새 포트폴리오</Link>
    </button>
    </div>
    <div className="backbtn">
    <button className='menubtn'>
      기존 포트폴리오
    </button>
    </div>
    <div className="backbtn">
    <button className='menubtn'>
      예시 포트폴리오
    </button>
    </div>
    <div className="backbtn">
    <button className='menubtn'>
      도움말
    </button>
    </div>
     
    </div>
  )
}

export default MenuList
