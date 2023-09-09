import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='navigation'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/cart'>Cart</NavLink>
    </div>
  )
}

export default Header;