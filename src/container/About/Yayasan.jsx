// Yayasan.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Yayasan.scss';
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

const Yayasan = () => {
  const [yayasans, setYayasans] = useState([]);

  useEffect(() => {
    const query = '*[_type == "yayasans"]';

    client.fetch(query).then((data) => {
      setYayasans(data);
    });
  }, []);

  return (
    <div className="yayasan">
      <h2 className="head-text">YAYASAN VICKERY CHRISTIAN ACADEMY </h2>
      <section>
        <div className="app__profiles">
          <div className="app__articles">
            {yayasans.map((yayasan, index) => (
              <Article
                key={yayasan.title + index}
                title={yayasan.title}
                description={yayasan.description}
              />
            ))}
          </div>
          <div className="app__aside">
            {yayasans.map((yayasan, index) => (
              <AsideImage
                key={yayasan.title + index}
                imgUrl={yayasan.imgUrl}
                alt={yayasan.title}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Yayasan, 'app__yayasan'),
  'yayasan',
  'app__whitebg',
);
