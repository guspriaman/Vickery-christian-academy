import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button'; // Memindahkan impor ini ke atas impor './Dropdown'
import Dropdown from './Dropdown';
import './Navbar.scss';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        EPIC
        <i className='fab fa-firstdraft' />
      </Link>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li
          className='nav-item'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            to='/about'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            About <i className='fas fa-caret-down' />
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className='nav-item'>
          <Link
            to='/graduation'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Graduation
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            to='/contact'
            className='nav-links'
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to='/sign-up'
            className='nav-links-mobile'
            onClick={closeMobileMenu}
          >
            Sign Up
          </Link>
        </li>
      </ul>
      <Button />
    </nav>
  );
}

export default Navbar;
