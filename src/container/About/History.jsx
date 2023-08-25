import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import Vsc from '../Home/Vsc';
import './History.scss';

const AsideImage = ({ title, imgUrl, alt, description }) => (
  <motion.div
    whileInView={{ opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.5, type: 'tween' }}
    className="history__aside-img"
  >
    <h2 className="bold-text" style={{ marginBottom: 20 }}>{title}</h2>
    <img src={urlFor(imgUrl)} alt={alt} />
    <p className="p-text">{description}</p>
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
    <div className="history-container">
      <h2 className="head-text-history"> SEJARAH <span> VICKERY CHRISTIAN ACADEMY</span></h2>
      <section>
        <div className="app__history">
          <div className="anside">
            <Vsc />
          </div>
          <div className="artikel">
            {historys.map((history, index) => (
              <AsideImage
                key={history.title + index} // Use a unique identifier from your data
                title={history.title}
                imgUrl={history.imgUrl}
                alt={history.title}
                description={history.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppWrap(
  MotionWrap(History, 'app__history'),
  'history',
  'app__whitebg',
);
