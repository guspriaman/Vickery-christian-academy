import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import Vsc from '../Home/Vsc';
import './Peran.scss';

const AsideImage = ({ title, imgUrl, alt, description }) => (
  <motion.div
    whileInView={{ opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.5, type: 'tween' }}
    className="peran__aside-img"
  >
    <h2 className="bold-text" style={{ marginBottom: 20 }}>{title}</h2>
    <img src={urlFor(imgUrl)} alt={alt} />
    <p className="p-text">{description}</p>
  </motion.div>
);

const Peran = () => {
  const [perans, setPerans] = useState([]);

  useEffect(() => {
    const query = '*[_type == "perans"]';

    client.fetch(query).then((data) => {
      setPerans(data);
    });
  }, []);

  return (
    <div className="peran-container">
      <h2 className="head-text-peran"> SEJARAH <span> VICKERY CHRISTIAN ACADEMY</span></h2>
      <section>
        <div className="app__peran">
          <div className="anside">
            <Vsc />
          </div>
          <div className="artikel">
            {perans.map((peran, index) => (
              <AsideImage
                key={peran.title + index} // Use a unique identifier from your data
                title={peran.title}
                imgUrl={peran.imgUrl}
                alt={peran.title}
                description={peran.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Peran, 'app__peran'),
  'peran',
  'app__whitebg',
);
