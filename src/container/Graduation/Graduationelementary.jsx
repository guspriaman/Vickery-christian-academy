import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Graduationelementary.scss';
import { urlFor, client } from '../../client';

const Graduationelementary = () => {
  const [graduationelementarys, setGraduationelementarys] = useState([]);

  useEffect(() => {
    const query = '*[_type == "graduationelementarys"]';

    client.fetch(query).then((data) => {
      setGraduationelementarys(data);
    });
  }, []);

  return (
    <div className="app__sd">
      <h2 className="head-text">
        GALERY GRADUATIONS <br /><span>PRIMARY SCHOOL</span>
      </h2>
      <div className="app__profiles">
        {graduationelementarys.map((graduationelementary, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={graduationelementary.title + index}
          >
            <img src={urlFor(graduationelementary.imgUrl)} alt={graduationelementary.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{graduationelementary.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{graduationelementary.description}</p>
            <p className="p-text">Graduation Year: {graduationelementary.graduationYear}</p>
            <p className="p-text">NIM: {graduationelementary.nikNumber}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Graduationelementary, 'app__graduationelementary'),
  'graduationelementary',
  'app__whitebg',
);
