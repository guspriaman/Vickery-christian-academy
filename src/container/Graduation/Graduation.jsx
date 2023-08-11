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

  const [graduationelementarys, setGraduationelementarys] = useState([]);

  useEffect(() => {
    const query = '*[_type == "graduationelementarys"]';

    client.fetch(query).then((data) => {
      setGraduationelementarys(data);
    });
  }, []);

  const [graduationjuniors, setGraduationjuniors] = useState([]);

  useEffect(() => {
    const query = '*[_type == "graduationjuniors"]';

    client.fetch(query).then((data) => {
      setGraduationjuniors(data);
    });
  }, []);

  const [graduationseniors, setGraduationseniors] = useState([]);

  useEffect(() => {
    const query = '*[_type == "graduationseniors"]';

    client.fetch(query).then((data) => {
      setGraduationseniors(data);
    });
  }, []);
  return (
    <div className="app__graduation"> {/* Add a wrapping div with app__graduation class */}
      <h2 className="head-text">
        Galery Graduation <br /><span>TK</span>
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
      {/* code untuk sd */}
      <h2 className="head-text">
        Galery Graduation <br /><span>Elementary school</span>
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
      {/* code junior */}
      <h2 className="head-text">
        Galery Graduation <br /><span>Junior High School</span>
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
      {/* code untuk senior */}
      <h2 className="head-text">
        Galery Graduations <br /><span>Senior High School</span>
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
  MotionWrap(Graduation, 'app__graduation'),
  'graduation',
  'app__whitebg',
);
