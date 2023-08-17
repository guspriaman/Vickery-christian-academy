import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Teacher.scss';
import { urlFor, client } from '../../client';

const Teacher = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const query = '*[_type == "teachers"]';

    client.fetch(query).then((data) => {
      setTeachers(data);
    });
  }, []);

  return (
    <div className="app__sd">
      <h2 className="head-text">
        GALERY <span> TEACHER</span>
      </h2>
      <div className="app__profiles">
        {teachers.map((teacher, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={teacher.title + index}
          >
            <img src={urlFor(teacher.imgUrl)} alt={teacher.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{teacher.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{teacher.description}</p>
            <p className="p-text">Umur Year: {teacher.graduationYear}</p>
            <p className="p-text">Contact: {teacher.nikNumber}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Teacher, 'app__teacher'),
  'teacher',
  'app__whitebg',
);
