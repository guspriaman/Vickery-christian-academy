import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menuanside } from './Menuanside';
import './Menu.scss';

function Menu() {
  const [click, setClick] = useState(false);

  return (
    <ul className={click ? 'm-menu' : 'm-menu'}>
      {Menuanside.map((item, index) => (
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

export default Menu;
