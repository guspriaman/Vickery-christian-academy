import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Ccs.scss';
import { client } from '../../client';
import images from '../../constants';

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

const Ccs = () => {
  const [ccss, setCcss] = useState([]);

  useEffect(() => {
    const query = '*[_type == "ccss"]';

    client.fetch(query).then((data) => {
      setCcss(data);
    });
  }, []);

  return (
    <div className="ccs">
      <div className="classical">
        <h2 className="head-text">CLASSICAL CHRISTIAN EDUCATION </h2>
        <p>VCA memilih pendidikan dengan Classical Christian Curriculum atau Kurikulum Klasikal Kristen.</p>
        <p>Sistem pendidikan klasik adalah sistem pendidikan yang telah teruji selama lebih dari 2000 tahun dan masih diterapkan sampai sekarang.</p>
        <p>Mulai dari kurikulum ἐγκύκλιος παιδεία (enkyklios paideia) dari pendidikan Yunani klasik, yang dimulai oleh Socrates, Plato, Aristotle dan Hippocrates, kemudian menjadi liberal artes dari pendidikan Romawi, dan terus diadaptasi di dalam pendidikan Kristen di jaman Romawi; dan dikembangkan kembali di zaman Medieval Renaissance menjadi Trivium dan Quadrivium, lalu terus diadaptasi menjadi pendidikan klasikal Kristen di jaman Reformasi Gereja.</p>
        <p>Namun sayangnya, pendidikan klasik telah dianggap kuno dan tersingkirkan oleh pendidikan modern yang lebih menekankan keuntungan ekonomis atau kepentingan politik.</p><br /><br />
        <p>Tujuan pendidikan klasik ini juga ditekankan oleh Desiderius Erasmus (1466–1536), seorang humanis Kristen di zaman Renaissance yang menjadi sumber inspirasi bagi Luther dan Calvin.</p>
        <p>Ia berkata, “Adalah satu hal yang tidak terbantahkan bahwa seorang manusia yang tidak terdidik akal budinya melalui filsafat dan pembelajaran yang sehat akan menjadi makhluk yang lebih rendah daripada binatang, karena tidak ada binatang yang lebih liar atau berbahaya dibandingkan dengan seorang manusia yang diombang-ambingkan ke sana ke mari oleh ambisi, nafsu, kemarahan, iri hati, atau watak yang liar” (“On the Education of Children”- 1529).</p>
        <p>Erasmus juga menemukan nilai-nilai yang memiliki pengajaran budi pekerti dan kemanusiaan (humanity) di dalam literatur klasik dan buku-buku yang ditulis sebelum buku-buku Kristen ditulis. Berdasarkan nilai yang berharga dalam buku-buku klasik, Erasmus menentang pendapat yang mengatakan semua yang ditulis sebelum buku-buku Kristen ditulis adalah “pagan” dan pasti bertentangan dengan Alkitab.</p><br />
      </div>
      <div className="img-classical">
        <img src={images.about2} alt="img-classical" />
      </div>
      <section>
        <div className="app__profiles">
          <div className="app__articles">
            {ccss.map((ccs, index) => (
              <Article
                key={ccs.title + index}
                title={ccs.title}
                description={ccs.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Ccs, 'app__ccs'),
  'ccs',
  'app__whitebg',
);
