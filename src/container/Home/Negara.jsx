import React from 'react';
import { AppWrap } from '../../wrapper';
import './Negara.scss';
import Menu from './Menu';
import images from '../../constants';

const Negara = () => (
  <div className="negara-container">
    <h2 className="head-text">PENDIDIKAN OLEH NEGARA </h2>
    <section>
      <div className="app__negara">
        <div className="anside">
          <Menu />
        </div>
        <div className="artikel">
          <img src={images.negara} alt="pendidikan oleh negara" />
          <p>Ketika negara mulai menyusun kekuatan untuk membangun negara, maka industri menjadi tulang punggung kemakmuran bangsa. Ketika negara mencanangkan sebagai negara industri, maka industri rumahan atau industri masyarakat mulai digantikan dengan industri pabrik. Industri pabrik yang memerlukan tenaga kerja mulai membuka lapangan kerja yang kemudian mulai “menarik” ayah-ayah dari rumahnya, bahkan termasuk “ibu-ibu”.</p>
          <p>Sebagai wujud tanggung jawab negara, maka anak-anak ini akhirnya dikumpulkan dalam sebuah program yang akan mempersiapkan anak-anak untuk menjadi pekerja-pekerja yang diharapkan lebih baik kualitasnya dari orangtua mereka.</p>
          <p>Mulailah pendidikan “link and match” dimana keberhasilan anak-anak diukur dari seberapa cocok “cetakan” yang ada dengan kebutuhan industri. Mulailah anak-anak menjadi aset yang berharga bagi negara dimana investasi yang dikeluarkan oleh pemerintah harus menghasilkan “output” yang sesuai dengan industri yang dibangun. </p>
          <p>Sekolah-sekolah yang dibangun oleh negara mulai memberikan syarat-syarat yang memaksa anak untuk mencetak diri mereka sesuai dengan apa yang dianggap sempurna. Di negara-negara industri yang maju, anak-anak menghabiskan waktunya di sekolah dan di tempat les, hanya untuk bisa lulus dan masuk ke sekolah negeri yang terbaik, dan penyeleksian ini harus dibayar dengan kenyataan banyaknya pelajar yang bunuh diri karena murid harus percaya bahwa tidak ada masa depan bagi murid yang gagal seleksi.</p>
          <p>Robert B. Reich dalam bukunya tentang pendidikan di abad 21 memberikan peringatan bahwa negara-negara harus menangani pendidikan dengan lebih baik, sehingga bukan hanya menghasilkan anak-anak yang sesuai dengan standar “link and match” dengan program pemerintah, tetapi juga harus melindungi keunikan dan jati diri anak, yang pastinya berbeda satu dengan yang lainnya.</p>
        </div>
      </div>
    </section>
  </div>
);

export default AppWrap(Negara, 'app__negara', 'negara', 'app__whitebg');
