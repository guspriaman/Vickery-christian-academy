// psr.jsx
import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Psr.scss';
import Menu from './Menu';
import images from '../../constants';

const Psr = () => {
  const italianStyle = {
    fontStyle: 'italic',
  };

  return (
    <div className="psr-container">
      <h2 className="head-text">PERKEMBANGAN SEKOLAH RUMAH </h2>
      <section>
        <div className="app__psr">
          <div className="anside">
            <Menu />
          </div>
          <div className="artikel">
            <p>
              Dunia masih mengakui Amerika sebagai <span style={italianStyle}>psr</span> di mana homeschool atau dalam
              istilahnya yang dipakai oleh aturan tentang homeschool yaitu sekolah rumah mulai berkembang dan mendunia.
              Pergerakan sekolah rumah dimulai di tahun 1970an ketika John Holt, seorang peneliti pendidikan dan pendukung
              reformasi pendidikan, mulai menulis majalah <span style={italianStyle}>Growing Without Schooling</span> yang
              dikeluarkan secara berkala sejak tahun 1977.
            </p>
            <img src={images.psr} alt="" />
            <p>Pendapatnya adalah sekolah formal yang didirikan oleh pemerintah hanya mencetak anak-anak untuk menjadi pekerja yang baik di kemudian hari tidak memberikan kebebasan anak untuk memunculkan keunikan masing-masing anak. John Holt ingin menyadarkan orangtua untuk memerdekakan anak-anak dari batasan-batasan lembaga sekolah yang dikenal dengan gerakan “unschooling”.</p>
            <p>Gerakan inilah yang melahirkan generasi pertama pesekolah rumah di Amerika, dan bahkan didukung penuh oleh peneliti pendidikan lainnya, Raymond Moore, yang mendengungkan bahwa sekolah akan menghambat potensi anak dan menekankan pentingnya pendidikan lima tahun pertama (golden years) anak bahkan mendidik anak-anak di rumah oleh orangtua sampai anak berumur 9 tahun akan memperkuat fondasi anak, bukan hanya kemampuan akademis, tetapi secara psikologis, moral, dan kedewasaan berpikir.</p>
            <p>Tentu saja gerakan ini mendapat tantangan yang berbeda dari setiap psr bagian, bahkan sampai tahun 1990an ada beberapa psr bagian yang melarang, bahkan mengambil paksa anak-anak yang orangtunya tidak mendaftarkan anak-anak mereka di sekolah dan memenjarakan orangtuanya. </p>
            <p>Tetapi sejak tahun 1993 setiap psr bagian di Amerika sudah memberikan kebebasan bagi orangtua yang memutuskan mendidikan anak-anak mereka di rumah. Sejak saat itu, homeschool mulai merambah ke beberapa psr di dunia, termasuk di Indonesia.</p>
            <p>Beberapa alasan yang dikemukakan orangtua terutama ketika perbandingan jumlah guru dan murid tidak ideal dengan beban belajar yang mulai dirasakan sebagai hambatan untuk melihat kemampuan khusus anak, terutama dalam hal non-akademis.</p>
            <p>Masalah bullying dan pengaruh pergaulan dan yang tidak sehat karena peer-pressure merupakan alasan mengapa orangtua memilih mendidik anak di rumah.</p> <br />
            <p>Ketika masih banyak psr yang melarang dan orangtua yang tidak pernah berpikir untuk mengajar sendiri anak-anak mereka di rumah, di tahun 2021 saat dunia mengalami Covid 19, secara serentak 100 psr menutup sekolah-sekolah dari Taman Kanak-Kanak sampai Universitas, untuk mencegah merebaknya virus Corona, maka kata homeschool atau sekolah rumah menjadi satu-satunya pilihan pendidikan anak-anak.</p>
            <p>World Economy Forum menulis artikel dengan headline bahwa Organisation for Economic Co-operation and Development (OECD) mengakui bahwa homeschooling atau kegiatan sekolah rumah selama pandemi virus Corona di tahun 2021 telah merubah cara pandang pendidik dan pemerintah tentang pendidikan jarak jauh dan pendidikan yang berbasis teknologi secara global, termasuk pendidikan sekolah rumah.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Psr, 'app__psr'),
  'psr',
  'app__whitebg',
);

