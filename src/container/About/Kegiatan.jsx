import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Kegiatan.scss';
import { client } from '../../client';

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

const Kegiatan = () => {
  const [kegiatans, setKegiatans] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = '*[_type == "kegiatans"]';
        const data = await client.fetch(query);
        setKegiatans(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2 className="head-text">MISI VICKERY CHRISTIAN ACADEMY</h2>
      <section>
        <div className="app__profiles">
          <div className="app__articles">
            {kegiatans.map((kegiatan, index) => (
              <Article
                key={kegiatan.title + index}
                title={kegiatan.title}
                description={kegiatan.description}
              />
            ))}
          </div>
          <div className="app__video">
            {kegiatans.map((kegiatan, index) => (
              <iframe
                key={kegiatan.title + index}
                width="560"
                height="315"
                src={kegiatan.url}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AppWrap(
  MotionWrap(Kegiatan, 'app__kegiatan'),
  'kegiatan',
  'app__whitebg',
);
