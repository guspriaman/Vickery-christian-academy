import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationItems } from './GraduationItems';
import './Dropdown.scss';

function Graduationdrop() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <ul className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
      {GraduationItems.map((item, index) => (
        <li
          key={index}
          onClick={() => setClick(false)} // Pindahkan event handler ke elemen <li>
        >
          <Link className={item.cName} to={item.path}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Graduationdrop;
