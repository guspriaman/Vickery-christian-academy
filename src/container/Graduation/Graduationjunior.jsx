import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Graduationjunior.scss';
import { urlFor, client } from '../../client';

const Graduationjunior = () => {
  const [graduationjuniors, setGraduationjuniors] = useState([]);

  useEffect(() => {
    const query = '*[_type == "graduationjuniors"]';

    client.fetch(query).then((data) => {
      setGraduationjuniors(data);
    });
  }, []);

  return (
    <div className="app__sd">
      <h2 className="head-text">
        GALERY GRADUATIONS <br /><span>JUNIOR HIGHT SCHOOL</span>
      </h2>
      <div className="app__profiles">
        {graduationjuniors.map((graduationjunior, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={graduationjunior.title + index}
          >
            <img src={urlFor(graduationjunior.imgUrl)} alt={graduationjunior.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{graduationjunior.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{graduationjunior.description}</p>
            <p className="p-text">Graduation Year: {graduationjunior.graduationYear}</p>
            <p className="p-text">NIM: {graduationjunior.nikNumber}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Graduationjunior, 'app__graduationjunior'),
  'graduationjunior',
  'app__whitebg',
);
