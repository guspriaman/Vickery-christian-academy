import React from 'react';
import { Link } from 'react-router-dom';
import { FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './Footer.scss'; // Import your Footer.scss file

const Footer = () => (
  <footer className="footer">
    <div className="footer__logo">
      <img src="logo.png" alt="Company Logo" />
    </div>
    <div className="footer__address">
      <p>Park Royale,</p>
      <p>Tower 3 Lobby Ground Jl. Jendral Gatot Subroto</p>
      <p>Kav. 35-39 Jakarta 10210</p>
    </div>
    <div className="footer__services">
      <ul>
        <li>
          <Link to="/about" className="nav-links">
            About vca
          </Link>
        </li>
        <li>
          <Link to="/admission" className="nav-links">
            Admission vca
          </Link>
        </li>
        <li>
          <Link to="/graduation" className="nav-links">
            Graduation vca
          </Link>
        </li>
        <li>
          <Link to="/program" className="nav-links">
            Program vca
          </Link>
        </li>
      </ul>
    </div>
    <div className="footer__social">
      <ul>
        <li>
          <a href="mailto:VICKERY@VCA.SCH.ID" aria-label="email">
            <span className="footer__icon-circle"><FaMailBulk /></span>
            <span>VICKERY@VCA.SCH.ID</span>
          </a>
        </li>
        <li>
          <a href="tel:+62215724677" aria-label="contact">
            <span className="footer__icon-circle"><FaPhone /></span>
            <span>+62 215724677</span>
          </a>
        </li>
        <li>
          <a href="tel:+628121186777" aria-label="contact">
            <span className="footer__icon-circle"><FaWhatsapp /></span>
            <span>+62 8121186777</span>
          </a>
        </li>
      </ul>
    </div>
    <div className="footer__credit">
      <p>&copy; {new Date().getFullYear()} Copyright by @ Vickery Academy</p>
    </div>
  </footer>
);

export default Footer;
