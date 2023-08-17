import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Visi.scss';
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

const Visi = () => {
  const [visis, setVisis] = useState([]);

  useEffect(() => {
    const query = '*[_type == "visis"]';

    client.fetch(query).then((data) => {
      setVisis(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text"> VISI <span> VICKERY CHRISTIAN ACADEMY</span></h2>
      <section>
        <div className="app__profiles">
          <div className="app__aside">
            {visis.map((visi, index) => (
              <AsideImage
                key={visi.title + index}
                imgUrl={visi.imgUrl}
                alt={visi.title}
              />
            ))}
          </div>
          <div className="app__articles">
            {visis.map((visi, index) => (
              <Article
                key={visi.title + index}
                title={visi.title}
                description={visi.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AppWrap(
  MotionWrap(Visi, 'app__visi'),
  'visi',
  'app__whitebg',
);
