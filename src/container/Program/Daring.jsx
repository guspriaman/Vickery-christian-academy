import React from 'react';
import './Daring.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import images from '../../constants';

const Daring = () => (
  <div className="daring-container">
    <h2 className="head-text">PERTEMUAN DARING (On-line)</h2>
    <div className="daring-content">
      <h3>KATEGORI MURID</h3>
      <div className="img-daring">
        <img src={images.daring} alt="img-daring" />
      </div>
      <p>Murid yang mendaftarkan diri untuk Pendidikan Jarak Jauh (on-line) termasuk dalam 2 kategori :</p>
      <h3>1.    Anak dari keluarga yang mendaftar sebagai anggota komunitas VCA :</h3>
      <h4>a.    Full On-Line VCA Student</h4>
      <p>-    Mengikuti dan menaati semua program dan kegiatan yang ditetapkan oleh VCA untukem <em> Full On-Line VCA Student, termasuk Orientation Camp, Care Group </em> untuk murid, dan untuk orang tua diwajibkan hadir dalam semua Pertemuan Orang tua.</p>
      <p>-    Mengikuti seluruh kurikulum dan standar penilaian yang ditetapkan oleh VCA.</p>
      <p>-    Mengikuti pelajaran secara <em>hybrid (real-time)</em> atau melalui rekaman atau masuk ke dalam kelas off-line sesuai dengan aturan yang ditetapkan untuk <em>Full On-Line VCA Student </em> .</p>
      <p>-    Mendapatkan Report Card dan Certificate of Completion Kindergarten, Kelas 6, dan Kelas 12.</p>
      <p>-    Di tahun pertama dapat mengganti program dari On-Line menjadi Off-Line pada permulaan setiap <em>Quarter.</em></p>
      <h4>b.    Semi On-Line VCA Student</h4>
      <p>-    Mengikuti dan menaati semua program dan kegiatan yang ditetapkan oleh VCA untuk <em>Semi On-Line VCA Student</em> termasuk <em>Orientation Camp dan Care Group</em> untuk murid, serta orang tua diwajibkan hadir dalam semua Pertemuan Orang tua.</p>
      <p>-    Hanya mengikuti pelajaran yang diwajibkan (Bible, History, 1-day Devotion/week) dan pelajaran lain yang dipilih oleh orang tua dan murid.</p>
      <p>-    Mengikuti pelajaran secara hybrid (real-time), atau melalui rekaman, atau masuk dalam kelas off-line khusus pelajaran yang dipilih, sesuai dengan aturan yang ditetapkan untuk <em>Full On-Line VCA Student</em>.</p>
      <p>-    Mendapatkan Report Card sesuai dengan pelajaran wajib dan pelajaran yang dipilih.</p>
      <p>-    Tidak mendapatkan <em>Certificate of Completion Kindergarten</em>, Kelas 6 dan Kelas 12.</p>
      <p>-    Pada tahun pertama dapat mengganti program dari On-Line menjadi <em>Off-Line</em> pada permulaan setiap <em>Quarter</em> setelah mengikuti Test untuk penempatan kelas.</p>
      <h3>2.    Murid dari sekolah lain yang sudah bekerja sama dengan VCA <em>(Non-VCA Student)</em></h3>
      <p> -   Mengikuti dan menaati semua program dan kegiatan yang ditetapkan oleh VCA bagi <em>Non-VCA Student.</em></p>
      <p>  -  Hanya mengikuti pelajaran yang dipilih oleh sekolah yang bekerja sama dengan VCA.</p>
      <p>        -  Mendapatkan Report Card sesuai dengan pelajaran yang dipilih oleh sekolah.</p>
      <h3>ADMINISTRATOR/PENGAWAS, SUBJECT TEACHER, GURU PEMBIMBING</h3>
      <div className="img-daring">
        <img src={images.daring2} alt="img-daring2" />
      </div>
      <h3>1.    Administrator/Pengawas</h3>
      <p>-  Administrator akan mengurus pendaftaran kelas dan mengawasi murid on-line dan orang tua serta     sekolah yang bekerjasama dengan VCA.</p>
      <p>-    Murid <em>Full-Time</em> atau Semi <em>On-Line</em> VCA yang ingin mengikuti kelas off-line harus memberitahukan  kepada Administrator minimal seminggu sebelum mengikuti kelas off-line.</p>
      <p>-    Murid <em>Full-Time</em> atau Semi <em>On-Line</em> VCA yang ingin mengganti program on-line ke off-line harus memberitahukan kepada Administrator selambat-lambatnya 1 bulan sebelum berakhirnya <em>Quarter</em> terkait.</p>
      <p>-    Pengawas akan mengawasi absensi murid dalam mengikuti Devotion dan pelajaran sesuai kelas-kelas yang harus diikuti serta pelaksanaan setiap kewajiban yang harus dipenuhi oleh murid dan orang tua.</p>
      <p>-    Pengawas akan membantu <em>Subject Teacher</em> untuk mengawasi murid-murid yang melaksanakan <em>Quiz, Test dan Exam secara on-line</em> melalui Zoom.</p>
      <h3>2.    <em>Subject Teacher</em></h3>
      <p>-    <em>Subject Teacher</em> akan bertemu dengan murid-murid on-line sesuai dengan jadwal yang ditetapkan di setiap permulaan <em>Quarter</em>.</p>
      <p>-    <em>Subject Teacher</em> akan membuat jadwal Quiz, Test dan Exam secara <em>on-line</em> melalui Zoom.</p>
      <p>-    <em>Subject Teacher</em> hanya akan memberikan tambahan pelajaran kepada murid-murid yang memerlukan bantuan ekstra apabila minimal ada 7 murid yang bersedia bertemu dalam waktu yang bersamaan sesuai dengan jadwal yang ditetapkan oleh <em>Subject Teacher.</em></p>
      <p>-    Pertanyaan dan komunikasi dengan Subject Teacher hanya dapat dilakukan melalui WhatsApp dan e-mail dalam waktu yang sudah ditetapkan</p>
      <h3>3.    Guru Pembimbing (Form Teacher)</h3>
      <p>-    Guru Pembimbing adalah guru yang membimbing murid-murid yang ada dalam kelompok kelas atau beberapa kelas dalam <em>grade</em> yang sama.</p>
      <p>-    Guru Pembimbing akan bertemu dengan orang tua dan murid seminggu sekali untuk memberi pengumuman tentang kegiatan mingguan dan bulanan.</p>
      <p>-    Guru Pembimbing akan memberikan evaluasi mingguan yang disampaikan dalam pertemuan mingguan.</p>

    </div>
  </div>
);

export default AppWrap(
  MotionWrap(Daring, 'app__daring'),
  'daring',
);
