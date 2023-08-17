import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Peran.scss';
import { urlFor, client } from '../../client';
import { AppWrap } from '../../wrapper';

const Peran = () => {
  const [perans, setPerans] = useState([]);

  useEffect(() => {
    const query = '*[_type == "perans"]';

    client.fetch(query).then((data) => {
      setPerans(data);
    });
  }, []);

  return (
    <section className="app__peran">
      <div className="app__profiles-peran">
        {perans.map((peran, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item-peran"
            key={peran.title + index}
          >
            <img src={urlFor(peran.imgUrl)} alt={peran.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{peran.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{peran.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AppWrap(Peran, 'app__peran');

