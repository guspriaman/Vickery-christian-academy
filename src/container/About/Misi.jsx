import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Misi.scss';
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

const Misi = () => {
  const [misis, setMisis] = useState([]);

  useEffect(() => {
    const query = '*[_type == "misis"]';

    client.fetch(query).then((data) => {
      setMisis(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text"> MISI <span> VICKERY CHRISTIAN ACADEMY</span></h2>
      <section>
        <div className="app__profiles">
          <div className="app__aside">
            {misis.map((misi, index) => (
              <AsideImage
                key={misi.title + index}
                imgUrl={misi.imgUrl}
                alt={misi.title}
              />
            ))}
          </div>
          <div className="app__articles">
            {misis.map((misi, index) => (
              <Article
                key={misi.title + index}
                title={misi.title}
                description={misi.description}
              />
            ))}
          </div>
        </div>
        <h3>Roma 12:1-2</h3>
        <p>Karena itu, saudara-saudara, demi kemurahan Allah aku menasihatkan kamu, supaya kamu mempersembahkan tubuhmu sebagai persembahan yang hidup, yang kudus dan yang berkenan kepada Allah: itu adalah ibadahmu yang sejati. Janganlah kamu menjadi serupa dengan dunia ini, tetapi berubahlah oleh pembaharuan budimu, sehingga kamu dapat membedakan manakah kehendak Allah: apa yang baik, yang berkenan kepada Allah dan yang sempurna</p>
      </section>
    </>
  );
};

export default AppWrap(
  MotionWrap(Misi, 'app__misi'),
  'misi',
  'app__whitebg',
);
