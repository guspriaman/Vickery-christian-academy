import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
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
        <p>Jadi akhirnya, saudara-saudara, semua yang benar, semua yang mulia, semua yang adil, semua yang suci, </p>
        <p>semua yang manis, semua yang sedap didengar, semua yang disebut kebajikan dan patut dipuji, pikirkanlah semuanya itu.</p>
        <p>Filipi 4:8-9</p>
      </motion.div>
    </div>
  </header>
);

export default AppWrap(
  MotionWrap(Header),
  'header',
);

