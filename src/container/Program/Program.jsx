import React from 'react';
import './Program.scss';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import images from '../../constants';

const Program = () => (
  <div className="program-container">
    <h2 className="head-text">  TATAP MUKA (Off-line)</h2>
    <motion.div
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5, type: 'tween' }}
      className="program-container"
    >
      <div className="img-daring">
        <img src={images.tatapmuka} alt="img-tatapmuka" />
      </div>
      <p>Vickery Christian Academy menyelenggarakan pendidikan Kindergarten mulai dari umur 2.5 tahun sampai dengan kelas 12 yang diselenggarakan 3 kali seminggu di sekolah dengan pendampingan langsung oleh guru-guru, dan 3 hari seminggu di rumah dengan pendampingan orang tua. Perencanaan edukasi anak mengikuti standar performa anak sesuai kurikulum yang ditentukan VCA.</p>
      <p>Khusus untuk murid kelas 9 sampai dengan kelas 12, murid tidak hanya harus memenuhi standar minimum kelulusan, tetapi dengan pendampingan guru pembimbing, orang tua dan murid juga harus membuat perencanaan tentang pelajaran dan kegiatan tambahan sesuai dengan tujuan pendidikan lanjutan setelah murid dinyatakan lulus dari VCA. Persiapan ini termasuk persiapan murid untuk mengikuti persiapan dan pelaksanaan ujian Paket C, SAT, IELTS dan IGCSE.</p>
      <p>Sesuai dengan penerapan standar Classical Christian Curriculum dengan kualitas yang harus dicapai oleh murid, yaitu motivasi dan kemampuan untuk belajar mandiri yang ditunjang oleh kemampuan membaca <strong>literasi</strong> , berpikir kritis dan menalar secara tajam <strong>numerasi</strong>, membangun karakter, perilaku dan budi pekerti yang baik.</p>
      <p>Murid-murid VCA akan dibagi menjadi kelompok Grammar yaitu Kindergarten dan kelas 1-3, kelompok Logic yaitu kelas 4-6 dan kelas 7-9, dan kelompok Rhetoric yaitu kelas 10-12. Masing-masing kelompok Grammar, Logic dan Rhetoric dibagi menjadi beberapa kelas dengan tujuan agar setiap murid dapat disiapkan untuk memiliki kualitas menjadi murid <strong>liberal arte</strong> atau merdeka – menjadi yang terbaik sesuai dengan bagaimana Tuhan menciptakan mereka atau <strong>the best version of themselves</strong>.</p>
      <p>Kelas-kelas yang dipersiapkan dalam pelatihan, penguatan, dan penajaman kualitas anak :</p>
      <p><strong>- Grade 1 dan Grade 2-3 Non-Reguler; </strong></p>
      <p><strong>- Grade 2-3 Reguler; </strong></p>
      <p><strong>- Grade 4 dan Grade 5-6 Non-Reguler;</strong></p>
      <p><strong>- Grade 5&6 Reguler; </strong></p>
      <p><strong>- Grade 7 dan Grade 8-9 Non-Reguler;</strong></p>
      <p><strong>- Grade 8-9 Reguler;</strong></p>
      <p><strong>- Grade 10 & Grade 11-12 Non-Reguler;</strong></p>
      <p><strong>- Grade 11-12 Reguler. </strong></p>
      <p>Evaluasi penempatan anak akan dilakukan setiap Semester berdasarkan pemantauan dan penilaian oleh setiap guru mata pelajaran, form teacher, dan guru pembimbing berdasarkan perilaku kedewasaan anak sesuai umur, karakter (penuh perhatian, ketaatan, kejujuran dan tanggung jawab), kemampuan literasi (membaca), kemampuan berpikir dan menalar dan kepemimpinan. </p>
      <h3><strong>ATURAN DAN KETERTIBAN KELAS OFF-LINE</strong></h3>
      <p> 1. Semua kelas Off-line akan diajarkan oleh guru yang berbeda sesuai dengan mata pelajaran yang diberikan. Setiap kelas akan diawasi oleh Form Teacher, atau guru kelas, yang akan membantu anak-anak untuk tetap fokus sehingga setiap anak dapat membangun kemampuan untuk menyerap pelajaran secara maksimal.</p>
      <p>2. Orangtua diharapkan untuk masuk kelas dan melihat bagaimana anak berinteraksi dengan guru dan teman-temannya, dan berkonsultasi dengan guru, sehingga setiap permasalahan anak dalam membangun kebiasaan untuk fokus di dalam kelas, kemandirian, dan kemampuan bersosialisai dengan teman bisa semakin ditingkatkan.</p>
      <p>3. Orangtua yang ada di dalam kelas tidak diperkenankan untuk mengganggu kelas, seperti menginterupsi guru yang sedang mengajar atau sedang mendisiplinkan murid-murid</p>
      <p>4. Orangtua yang ada di dalam kelas tidak diperkenankan untuk mengganggu kelas, seperti menginterupsi guru yang sedang mengajar atau sedang mendisiplinkan murid-murid</p>
      <p> 5. Orangtua harus bekerja sama dengan guru dalam kondisi-kondisi tertentu, demi membantu perkembangan fokus anak dalam belajar, atau memaksimalkan proses membangun karakter anak. Orangtua diharapkan bersedia berada di dalam kelas, atau untuk tidak berada di dalam kelas dalam waktu-waktu tertentu</p>
      <h3>TRAINING UNTUK ORANGTUA KINDERGARTEN SAMPAI KELAS 12</h3>
      <p>Untuk anak-anak yang mempunyai kebutuhan khusus dalam mengikuti pelajaran di kelas ataupun dalam membangun kemampuan akademis dan interaksi dengan teman dan guru, VCA akan memberikan pelatihan tambahan, dengan syarat setiap sesi kelas tambahan harus dihadiri oleh orangtua juga.</p>
      <h3>WATCHLIST UNTUK KELAS 4-12</h3>
      <p>Pemantauan perkembangan kemandirian murid dan kemampuan membangun motivasi (self-motivation) serta disiplin murid (self-discipline), mulai dari kelas 4 sampai kelas 12 akan dilihat melalui target mingguan yang harus dicapai dalam pelajaran Ignitia untuk pelajaran Matematika, Bahasa Inggris (Language Arts) dan Science.</p>
      <p>Anak2 yang tidak bisa mencapai target mingguan akan dipanggil dan bersama orangtuanya, dan harus menghadiri Watchlist Meeting. Kami berharap orangtua dan murid yang hadir dalam Watchlist Meeting akan terus membangun kebiasaan yang baik untuk memotivasi dan mendisiplin diri dalam memanfaatkan setiap waktu secara produktif. </p>
    </motion.div>
  </div>
);

export default AppWrap(
  MotionWrap(Program, 'app__program'),
  'program',
);
