import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import Vsc from '../Home/Vsc';
import './Yayasan.scss';

const AsideImage = ({ title, imgUrl, alt, description }) => (
  <motion.div
    whileInView={{ opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.5, type: 'tween' }}
    className="yayasan__aside-img"
  >
    <h2 className="bold-text" style={{ marginBottom: 20 }}>{title}</h2>
    <img src={urlFor(imgUrl)} alt={alt} />
    <p className="p-text">{description}</p>
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
    <div className="yayasan-container">
      <h2 className="head-text-yayasan"> yayasan <span> VICKERY CHRISTIAN ACADEMY</span></h2>
      <section>
        <div className="app__yayasan">
          <div className="anside">
            <Vsc />
          </div>
          <div className="artikel">
            {yayasans.map((yayasan, index) => (
              <AsideImage
                key={yayasan.title + index} // Use a unique identifier from your data
                title={yayasan.title}
                imgUrl={yayasan.imgUrl}
                alt={yayasan.title}
                description={yayasan.description}
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
