import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Graduationsenior.scss';
import { urlFor, client } from '../../client';

const Graduationsenior = () => {
  const [graduationseniors, setGraduationseniors] = useState([]);

  useEffect(() => {
    const query = '*[_type == "graduationseniors"]';

    client.fetch(query).then((data) => {
      setGraduationseniors(data);
    });
  }, []);

  return (
    <div className="app__sd">
      <h2 className="head-text">
        GALERY GRADUATIONS <br /><span>SENIOR HIGHT SCHOOL</span>
      </h2>
      <div className="app__profiles">
        {graduationseniors.map((graduationsenior, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={graduationsenior.title + index}
          >
            <img src={urlFor(graduationsenior.imgUrl)} alt={graduationsenior.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{graduationsenior.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{graduationsenior.description}</p>
            <p className="p-text">Graduation Year: {graduationsenior.graduationYear}</p>
            <p className="p-text">NIM: {graduationsenior.nikNumber}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Graduationsenior, 'app__graduationsenior'),
  'graduationsenior',
  'app__whitebg',
);
