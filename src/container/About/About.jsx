import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
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

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">VICKERY CHRISTIAN ACADEMY </h2>
      <section>
        <div className="app__profiles">
          <div className="app__aside">
            {abouts.map((about, index) => (
              <AsideImage
                key={about.title + index}
                imgUrl={about.imgUrl}
                alt={about.title}
              />
            ))}
          </div>
          <div className="app__articles">
            {abouts.map((about, index) => (
              <Article
                key={about.title + index}
                title={about.title}
                description={about.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="app__profiles">
          <div className="app__aside">
            <History />
            <Visi />
            <Misi />
            <Kegiatan />
          </div>
        </div>
      </section>
    </>
  );
};

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
      <h2 className="head-text">HISTORY VICKERY CHRISTIAN ACADEMY </h2>
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
      <h2 className="head-text">VISI VICKERY CHRISTIAN ACADEMY </h2>
      <p>Membangun keluarga yang berpusatkan pada Kristus, berkomitmen untuk mendidik anak-anak mulai dari rumah dengan mengajar dan melatih mereka sehingga memiliki karakter Kristus, untuk dipersiapkan menjadi pemimpin bangsa yang akan memimpin dalam takut akan Tuhan, berdasarkan kebenaran Firman Tuhan dan kesetiaan kepada Pancasila dan Undang-Undang Dasar 1945.</p>
      <h3>Ulangan 6:5-7</h3>
      <p>Kasihilah TUHAN, Allahmu dengan segenap hatimu dan dengan segenap jiwamu dan dengan segenap kekuatanmu. Apa yang kuperintahkan kepadamu pada hari ini haruslah engkau perhatikan haruslah engkau mengajarkannya berulang-ulang kepada anak-anakmu dan membicarakannya apabila engkau duduk di rumahmu, apabila engkau sedang dalam perjalanan, apabila engkau berbaring dan apabila engkau bangun</p>
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
      <h2 className="head-text">MISI VICKERY CHRISTIAN ACADEMY </h2>
      <section>
        <div className="app__profiles">
          <div className="app__articles">
            {misis.map((misi, index) => (
              <Article
                key={misi.title + index}
                title={misi.title}
                description={misi.description}
              />
            ))}
            <h3>Roma 12:1-2</h3>
            <p>Karena itu, saudara-saudara, demi kemurahan Allah aku menasihatkan kamu, supaya kamu mempersembahkan tubuhmu sebagai persembahan yang hidup, yang kudus dan yang berkenan kepada Allah: itu adalah ibadahmu yang sejati. Janganlah kamu menjadi serupa dengan dunia ini, tetapi berubahlah oleh pembaharuan budimu, sehingga kamu dapat membedakan manakah kehendak Allah: apa yang baik, yang berkenan kepada Allah dan yang sempurna</p>
          </div>
          <div className="app__aside">
            {misis.map((misi, index) => (
              <AsideImage
                key={misi.title + index}
                imgUrl={misi.imgUrl}
                alt={misi.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

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
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);
