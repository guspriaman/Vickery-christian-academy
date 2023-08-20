import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Faqs.scss';
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

const Faqs = () => {
  const [faqss, setFaqss] = useState([]);

  useEffect(() => {
    const query = '*[_type == "faqss"]';

    client.fetch(query).then((data) => {
      setFaqss(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">VICKERY CHRISTIAN ACADEMY </h2>
      <section>
        <div className="app__profiles">
          <div className="app__aside">
            {faqss.map((faqs, index) => (
              <AsideImage
                key={faqs.title + index}
                imgUrl={faqs.imgUrl}
                alt={faqs.title}
              />
            ))}
          </div>
          <div className="app__articles">
            {faqss.map((faqs, index) => (
              <Article
                key={faqs.title + index}
                title={faqs.title}
                description={faqs.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AppWrap(
  MotionWrap(Faqs, 'app__faqs'),
  'faqs',
  'app__whitebg',
);
