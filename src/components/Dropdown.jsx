import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './Dropdown.scss';

function Dropdown() {
  const [click, setClick] = useState(false);

  return (
    <ul className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
      {MenuItems.map((item, index) => (
        <li key={index}>
          <Link
            className={item.cName}
            to={item.path}
            onClick={() => setClick(false)} // Pindahkan event handler ke elemen <li>
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Dropdown;
