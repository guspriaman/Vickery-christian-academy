import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Sejarah.scss';
import { urlFor, client } from '../../client';

const Article = ({ title, description }) => (
  <motion.div
    whileInView={{ opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.5, type: 'tween' }}
    className="app__article-item"
  >
    <h2 className="bold-text" style={{ marginBottom: 20 }}>{title}</h2>
    <p className="p-text">{description}</p>
  </motion.div>
);

const AsideImage = ({ imgUrl, alt }) => (
  <motion.div
    whileInView={{ opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.5, type: 'tween' }}
    className="app__aside-img"
  >
    <img src={urlFor(imgUrl)} alt={alt} />
  </motion.div>
);

const Sejarah = () => {
  const [historys, setHistorys] = useState([]);

  useEffect(() => {
    const query = '*[_type == "Historys"]';

    client.fetch(query).then((data) => {
      setHistorys(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        <div className="app__articles">
          {historys.map((sejarah, index) => (
            <Article
              key={sejarah.title + index}
              title={sejarah.title}
              description={sejarah.description}
            />
          ))}
        </div>
        <div className="app__aside">
          {historys.map((sejarah, index) => (
            <AsideImage
              key={sejarah.title + index}
              imgUrl={sejarah.imgUrl}
              alt={sejarah.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Sejarah, 'app__sejarah'),
  'sejarah',
  'app__whitebg',
);
