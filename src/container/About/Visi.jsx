import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import Vsc from '../Home/Vsc';
import './Visi.scss';

const AsideImage = ({ title, imgUrl, alt, description }) => (
  <motion.div
    whileInView={{ opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.5, type: 'tween' }}
    className="visi__aside-img"
  >
    <h2 className="bold-text" style={{ marginBottom: 20 }}>{title}</h2>
    <img src={urlFor(imgUrl)} alt={alt} />
    <p className="p-text">{description}</p>
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
    <div className="visi-container">
      <h2 className="head-text-visi"> VISI <span> VICKERY CHRISTIAN ACADEMY</span></h2>
      <section>
        <div className="app__visi">
          <div className="anside">
            <Vsc />
          </div>
          <div className="artikel">
            {visis.map((visi, index) => (
              <AsideImage
                key={visi.title + index} // Use a unique identifier from your data
                title={visi.title}
                imgUrl={visi.imgUrl}
                alt={visi.title}
                description={visi.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Visi, 'app__visi'),
  'visi',
  'app__whitebg',
);
