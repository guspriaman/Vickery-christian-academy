// Keluarga.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Keluarga.scss';
import Menu from './Menu';
import { urlFor, client } from '../../client';

const Keluarga = () => {
  const [keluargas, setKeluargas] = useState([]);

  useEffect(() => {
    const query = '*[_type == "keluargas"]';

    client.fetch(query).then((data) => {
      setKeluargas(data);
    });
  }, []);

  return (
    <div className="keluarga-container">
      <h2 className="head-text">PENDIDIKAN KELUARGA</h2>
      <section>
        <div className="app__keluarga">
          <div className="anside">
            <Menu />
          </div>
          <div className="articel">
            {keluargas.map((keluarga, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__keluarga-item"
                key={keluarga.title + index}
              >
                <img src={urlFor(keluarga.imgUrl)} alt={keluarga.title} />
                <p className="p-text">{keluarga.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Keluarga, 'app__keluarga'),
  'keluarga',
  'app__whitebg',
);
