import React from 'react';
import './Uuandpp.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import images from '../../constants';

const Uuandpp = () => (
  <div className="uuandpp-container">
    <h2 className="head-text">UNDANG-UNDANG & PERATURAN PEMERINTAH</h2>
    <div className="uuandpp-content">
      <div className="img-uuandpp">
        <img src={images.hukum} alt="img-uuandpp" />
      </div>
      <h3>Legalitas Sekolah Rumah dan Ujian Kesetaraan</h3>
      <p>Walaupun saat in pemerintah Republik Indonesia sedang menyusun Rancangan Undang-Undang Sistem Pendidikan Nasional yang baru yang menggantikan Undang-Undang No. 20 Tahun 2003 (UU No. 20 Tahun 2003), tetapi sebagai bangsa Indonesia, kita harus bersyukur karena sejak tahun 2003, pemerintah Indonesia sudah memberikan fasilitas seluas-luasnya untuk pesekolah rumah yang di dalam UU No. </p>
      <p>20 Tahun 2003 dikelompokkan menjadi pendidikan informal. Pemerintah berjanji bahwa UU Sisdiknas yang baru bukan hanya tetap mengakui keberadaan sekolah rumah (homeschooling) tetapi mempermudah proses penyetaraan dengan pendidikan formal.</p>
      <h4>Pasal 27 Undang Undang No. 20 tahun 2003 menjelaskan tentang pendidikan informal sebagai berikut : </h4>
      <p>1. Kegiatan pendidikan informal yang dilakukan oleh keluarga dan lingkungan berbentuk kegiatan belajar secara mandiri</p>
      <p>2. Hasil pendidikan sebagaimana dimaksud pada ayat (1) diakui sama dengan pendidikan formal dan nonformal setelah peserta didik lulus ujian sesuai dengan standar nasional</p>
      <p>3. Ketentuan mengenai pengakuan hasil pendidikan informal sebagaimana dimaksud pada ayat (2) diatur lebih lanjut dengan peraturan pemerintah.</p>
      <p>Dalam Peraturan Menteri Pendidikan dan Kebudayaan Republik Indonesia No. 129 Tahun 2014 tentang Sekolah Rumah (Permendikbud No. 129/2014) dinyatakan bahwa ijazah murid sekolah rumah setara dengan sekolah formal. Melalui prosedur penyetaraan maka pemerintah memberikan jaminan bahwa siswa homeschooling bisa pindah ke jalur pendidikan formal atau non-formal, dan sebaliknya. Di dalam Pasal 12 Permendikbud No. 129/2014 juga dinyatakan bahwa siswa homeschooling dapat mengikuti UN/UNPK pada satuan pendidikan formal atau non-formal.</p>
      <p>Berdasarkan Pasal 116 Peraturan Pemerintah Republik Indonesia Nomor 17 Tahun 2010 tentang Pengelolaan Dan Penyelenggaraan Pendidikan (PP No. 17/2010) pendidikan informal dilakukan oleh keluarga dan lingkungan yang berbentuk kegiatan belajar secara mandiri</p>
      <p>Pasal 117 PP No. 17/2010 poin 1 dinyatakan bahwa hasil pendidikan informal dapat dihargai setara dengan hasil pendidikan non-formal dan formal, setelah melalui uji kesetaraan yang memenuhi Standar Nasional Pendidikan, yaitu Paket A, yang setara dengan Ijazah Sekolah Dasar (SD), Paket B, yang setara dengan Ijazah Sekolah Menengah Pertama (SMP), dan Paket C, yang setara dengan Ijazah Sekolah Menengah Atas (SMA).</p>
      <h4>Pendidikan Jarak Jauh</h4>
      <p>Pasal 125 PP No. 17/2010 disebutkan tentang pendidikan jarak jauh pada jalur informal yang bisa dilakukan melalui penyiaran televisi, radio, penayangan film dan video, pemasangan situs internet, publikasi media cetak, pengiriman informasi melalui telefon seluler, dan bentuk-bentuk lain dari penyebar-luasan informasi kepada masyarakat.</p>
    </div>
  </div>
);

export default AppWrap(
  MotionWrap(Uuandpp, 'app__uuandpp'),
  'uuandpp',
);
