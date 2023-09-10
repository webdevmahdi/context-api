import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <div className='navigation'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/product'>Details</NavLink>
    </div>
  )
}

export default Header;