import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Vscanside } from './Vscanside';
import './Vsc.scss';

function Vsc() {
  const [click, setClick] = useState(false);

  return (
    <ul className={click ? 'm-vsc' : 'm-vsc'}>
      {Vscanside.map((item, index) => (
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

export default Vsc;
