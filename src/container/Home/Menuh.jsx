// Menu.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menuh.scss';

function Menuh() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className={`menuh ${click ? 'active' : ''}`}>
      <div className="container">
        <div className="card">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            HOME SCHOOLING
            <i className="fab fa-firstdraft" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className="nav-items">
            <Link to="/keluarga" className="nav-link" onClick={closeMobileMenu}>
              PENDIDIKAN OLEH KELUARGA
            </Link>
            <Link to="/masyarakat" className="nav-link" onClick={closeMobileMenu}>
              PENDIDIKAN OLEH MASYARAKAT
            </Link>
            <Link to="/negara" className="nav-link" onClick={closeMobileMenu}>
              PENDIDIKAN OLEH NEGARA
            </Link>
            <Link to="/psr" className="nav-link" onClick={closeMobileMenu}>
              PERKEMBANGAN SEKOLAH RUMAH
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menuh;
