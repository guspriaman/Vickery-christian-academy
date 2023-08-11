import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Academic.scss';
import { client } from '../../client';

const Academic = () => {
  const [academics, setAcademics] = useState([]);

  useEffect(() => {
    const query = '*[_type == "academics"]';

    client.fetch(query).then((data) => {
      setAcademics(data);
    });
  }, []);

  return (
    <div className="app__academic">
      <h2 className="head-text">
        Galery Academic <br /><span>TK</span>
      </h2>
      <div className="app__academics">
        {academics.map((academic, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__academic-item"
            key={academic.title + index}
          >
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {academic.title}
            </h2>
            <div>
              <p className="p-text" style={{ marginTop: 10 }}>
                {academic.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Academic, 'app__academic'),
  'academic',
  'app__whitebg',
);
