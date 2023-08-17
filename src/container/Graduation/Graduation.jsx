import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Graduation.scss';
import { urlFor, client } from '../../client';

const Graduation = () => {
  const [graduations, setGraduations] = useState([]);

  useEffect(() => {
    const query = '*[_type == "graduations"]';

    client.fetch(query).then((data) => {
      setGraduations(data);
    });
  }, []);

  return (
    <div className="app__graduation">
      <h2 className="head-text">
        GALERY GRADUATIONS <br /><span>TK</span>
      </h2>
      <div className="app__profiles">
        {graduations.map((graduation, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={graduation.title + index}
          >
            <img src={urlFor(graduation.imgUrl)} alt={graduation.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{graduation.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{graduation.description}</p>
            <p className="p-text">Graduation Year: {graduation.graduationYear}</p>
            <p className="p-text">NIM: {graduation.nikNumber}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Graduation, 'app__graduation'),
  'graduation',
  'app__whitebg',
);
