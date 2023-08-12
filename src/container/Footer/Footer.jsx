import React from 'react';
import { FaMailBulk, FaPhone, FaWhatsapp } from 'react-icons/fa';
import images from '../../constants';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <address className="footer__logo">
      <img src={images.logo} alt="Company Logo" />
    </address>
    <section className="footer__address">
      <p>Park Royale, Tower 3 Lobby Ground Jl. Jendral Gatot Subroto Kav. 35-39 Jakarta 10210</p>
    </section>
    <section className="footer__contact">
      <a href="mailto:VICKERY@VCA.SCH.ID" aria-label="email"><p><FaMailBulk /> VICKERY@VCA.SCH.ID</p></a>
      <a href="tel:+62215724677" aria-label="contact"><p><FaPhone /> +62 215724677</p></a>
      <a href="tel:+628121186777" aria-label="contact"><p><FaWhatsapp /> +62 8121186777</p></a>
    </section>
  </footer>
);

export default Footer;
