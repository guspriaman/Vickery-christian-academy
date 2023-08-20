import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Programitems } from './Programitems';
import './Dropdown.scss';

function Programdown() {
  const [click, setClick] = useState(false);

  return (
    <ul className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
      {Programitems.map((item, index) => (
        <li key={index}>
          <Link
            className={item.cName}
            to={item.path}
            onClick={() => setClick(false)} // Pindahkan event handler ke elemen <Link>
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Programdown;
