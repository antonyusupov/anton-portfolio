import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className='navbar__active-menu'>
      {
        toggleMenu 
        ? <RiCloseLine size={25} color='var(--color-pink)' onClick={()=>setToggleMenu(false)}/>
        : <RiMenu3Line size= {25} color='var(--color-pink)' onClick={()=>setToggleMenu(true)}/>
      }
      <p>Menu</p>
      { toggleMenu && (
            <div className='navbar__links'>
              <p><a href='#home'>Home</a></p>
              <p><a href='#about'>About</a></p>
              <p><a href='#resume'>Resume</a></p>
              <p><a href='#portfolio'>Portfolio</a></p>
              <p><a href='#services'>Services</a></p>
              <p><a href='#contact'>Contact</a></p>
            </div>
      )}
      </div>
      <div className='navbar__logo'>
        <p>Menu</p>
      </div>
    </div>
  )
}

export default Navbar;