import React from 'react'
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';

const MenuList = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '24rem'}}>
    <MenuButton type= 'button' text= '새 포트폴리오' link="/Newportfolio" />
    <MenuButton type= 'button' text= '기존 포트폴리오' />
    <MenuButton type= 'button' text= '예시 포트폴리오' />
    <MenuButton type= 'button' text= '도움말' />
     
    </div>
  )
}

export default MenuList
