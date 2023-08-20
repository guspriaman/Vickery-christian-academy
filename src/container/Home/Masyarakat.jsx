// masyarakat.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import Menu from './Menu';
import './Masyarakat.scss';
import { urlFor, client } from '../../client';

const Masyarakat = () => {
  const [masyarakats, setMasyarakats] = useState([]);

  useEffect(() => {
    const query = '*[_type == "masyarakats"]';

    client.fetch(query).then((data) => {
      setMasyarakats(data);
    });
  }, []);

  return (
    <div className="masyarakat-container">
      <h2 className="head-text">PENDIDIKAN MASYARAKAT </h2>
      <section>
        <div className="app__masyarakat">
          <div className="anside">
            <Menu />
          </div>
          <div className="artikel">
            {masyarakats.map((masyarakat, index) => (
              <motion.div
                whileInView={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, type: 'tween' }}
                className="app__masyarakat-item"
                key={masyarakat.title + index}
              >
                <img src={urlFor(masyarakat.imgUrl)} alt={masyarakat.title} />
                <p className="p-text">{masyarakat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Masyarakat, 'app__masyarakat'),
  'masyarakat',
  'app__whitebg',
);
