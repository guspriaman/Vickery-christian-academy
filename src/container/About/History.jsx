import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './History.scss';
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

const History = () => {
  const [historys, setHistorys] = useState([]);

  useEffect(() => {
    const query = '*[_type == "historys"]';

    client.fetch(query).then((data) => {
      setHistorys(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text"> HISTORY <span> VICKERY CHRISTIAN ACADEMY</span></h2>
      <section>
        <div className="app__profiles">
          <div className="app__aside">
            {historys.map((history, index) => (
              <AsideImage
                key={history.title + index}
                imgUrl={history.imgUrl}
                alt={history.title}
              />
            ))}
          </div>
          <div className="app__articles">
            {historys.map((history, index) => (
              <Article
                key={history.title + index}
                title={history.title}
                description={history.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AppWrap(
  MotionWrap(History, 'app__history'),
  'history',
  'app__whitebg',
);
