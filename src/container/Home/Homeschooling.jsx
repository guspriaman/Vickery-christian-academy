import React from 'react';
import { AppWrap } from '../../wrapper';
import './Homeschooling.scss';
import Menu from './Menu';
import images from '../../constants';

const Hc = () => (
  <div className="hc">
    <h2 className="head-text">SEKOLAH RUMAH (HOMESCHOOLING) DALAM PERKEMBANGAN PENDIDIKAN </h2>
    <section>
      <div className="app__hc">
        <div className="anside">
          <Menu />
        </div>
        <div className="artikel">
          <img src={images.abouthomeschooling} alt="pendidikan oleh hc" />
          <p>Menurut Kamus Besar Bahasa Indonesia (KBBI) arti “sekolah” bukan hanya berarti bangunan atau lembaga untuk belajar dan mengajar, serta tempat menerima pelajaran yang merujuk kepada tingkatan, jurusan atau batasan tertentu termasuk jam pelajaran; akan tetapi juga usaha menuntut kepandaian atau ilmu pengetahuan, pelajaran atau pengajaran.</p>
          <p>Itulah sebabnya di tahun 1977, John Holt mulai mempublikasikan majalah “Growing Without Schooling” dan gerakan “unschooling” dan menekankan bahwa pendidikan tidak seharusnya dibatasi oleh lembaga, gedung, ruang, waktu, tingkatan dan jurusan; tetapi membiarkan anak secara merdeka menemukan dirinya sendiri.</p>
          <p>Itulah sebabnya di tahun 1977, John Holt mulai mempublikasikan majalah “Growing Without Schooling” dan gerakan “unschooling” dan menekankan bahwa pendidikan tidak seharusnya dibatasi oleh lembaga, gedung, ruang, waktu, tingkatan dan jurusan; tetapi membiarkan anak secara merdeka menemukan dirinya sendiri.</p>
          <p>“Sebab Engkaulah yang membentuk buah pinggangku, menenun aku dalam kandungan ibuku. Aku bersyukur kepada-Mu oleh karena kejadianku dahsyat dan ajaib; ajaib apa yang Kaubuat, dan jiwaku benar-benar menyadarinya.</p>
          <p>Tulang-tulangku tidak terlindung bagi-Mu, ketika aku dijadikan di tempat yang tersembunyi, dan aku direkam di bagian-bagian bumi yang paling bawah; mata-Mu melihat selagi aku bakal anak, dan dalam kitab-Mu semuanya tertulis hari-hari yang akan dibentuk, sebelum ada satupun dari padanya”. – Mazmur 139:13-16</p>
          <p>Pertanyaannya, apapun istilah atau konsep yang kita pakai, apakah sekolah atau non-sekolah, sekolah rumah atau pendidikan rumah; tujuan dari apa yang ingin dicapai oleh setiap individu adalah untuk bisa menemukan jawaban dari pertanyaan, siapa saya, kemana arah tujuan hidup saya, dan bagaimana saya bisa memberi arti dalam kehidupan ini. </p>
        </div>
      </div>
    </section>
  </div>
);

export default AppWrap(Hc, 'app__hc', 'hc', 'app__whitebg');
