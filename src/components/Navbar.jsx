import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';
import Dropdown from './Dropdown';
import Graduationdrop from './Graduationdrop';
import Programdown from './Programdown';
import imagess from './imagess';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [graduationdrop, setGraduationdrop] = useState(false);
  const [programdown, setProgramdown] = useState(false);

  const closeMobileMenu = () => setClick(false);

  const onServicesMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onServicesMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onGraduationMouseEnter = () => {
    if (window.innerWidth < 960) {
      setGraduationdrop(false);
    } else {
      setGraduationdrop(true);
    }
  };

  const onGraduationMouseLeave = () => {
    if (window.innerWidth < 960) {
      setGraduationdrop(false);
    } else {
      setGraduationdrop(false);
    }
  };
  const onProgramMouseEnter = () => {
    if (window.innerWidth < 960) {
      setProgramdown(false);
    } else {
      setProgramdown(true);
    }
  };

  const onProgramMouseLeave = () => {
    if (window.innerWidth < 960) {
      setProgramdown(false);
    } else {
      setProgramdown(false);
    }
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={imagess.logo} alt="logo" />
      </div>
      <ul className={click ? 'app__navbar-links active' : 'app__navbar-links'}>
        <li className="nav-item">
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={onServicesMouseEnter}
          onMouseLeave={onServicesMouseLeave}
        >
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            About <i className="fas fa-caret-down" />
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link to="/admission" className="nav-links" onClick={closeMobileMenu}>
            Admission
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/academic" className="nav-links" onClick={closeMobileMenu}>
            Academic
          </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={onGraduationMouseEnter}
          onMouseLeave={onGraduationMouseLeave}
        >
          <Link to="/graduation" className="nav-links" onClick={closeMobileMenu}>
            Graduation <i className="fas fa-caret-down" />
          </Link>
          {graduationdrop && <Graduationdrop />}
        </li>
        <li
          className="nav-item"
          onMouseEnter={onProgramMouseEnter}
          onMouseLeave={onProgramMouseLeave}
        >
          <Link to="/program" className="nav-links" onClick={closeMobileMenu}>
            Program <i className="fas fa-caret-down" />
          </Link>
          {programdown && <Programdown />}
        </li>
        <li>
          <Link to="/contact" className="nav-links-mobile" onClick={closeMobileMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
      <div>
        <Button />
      </div>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['about', 'admission', 'academic', 'program', 'Graduation', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`/${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
