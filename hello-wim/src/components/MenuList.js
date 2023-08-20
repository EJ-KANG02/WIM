import React from 'react'
import './MenuList.css'

const MenuList = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '4rem'}}>
        <div className="backbtn">
    <button className='menubtn'>
      새 포트폴리오
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
