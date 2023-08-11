import React from 'react';
import { motion } from 'framer-motion';
import './Header.scss';
import backgroundImage from '../../assets/gambar-2.jpg';

const Header = () => (
  <header className="header" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="header__content">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="header__text"
      >
        <h1>Welcome to Our Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </motion.div>
    </div>
  </header>
);

export default Header;
