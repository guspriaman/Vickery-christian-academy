import React from 'react';
import './Academic.scss';
import { AppWrap, MotionWrap } from '../../wrapper';

const Academic = () => (
  <div className="academic-container">
    <h2 className="head-text">KURIKULUM</h2>
    <div className="academic-contect">
      <p>Vickery Christian Academy menanamkan kurikulum klasikal. Mata pelajaran disusun untuk dapat mengembangkan para siswa dalam membangun cara pikir mereka, dalam kepatuhan terhadap otoritas mereka, dan juga untuk memiliki karakter Kristus di dalam diri mereka. Karena itu, dalam mencapai minat masa depan mereka, para siswa dapat percaya bahwa pendidikan yang terbaik yang dapat mereka terima adalah berdasar pada Firman Tuhan sebagai fondasinya.</p>
      <p>Adalah suatu hal yang sangat penting untuk para siswa dapat melakukan ibadah di pagi hari untuk mencari Tuhan setiap harinya.</p><br /><br />
      <h2><span>A. Character Traits</span></h2><br />
      <p>Pengembangan karakter setiap siswa dipantau oleh kepala sekolah, para guru, staf, dan sesama siswa. Melalui aktivitas para siswa di sekolah, nilai karakter mewakili 30% dari keseluruhan nilai siswa. Lima karakter utama yang dinilai adalah: Penuh Perhatian (Attentiveness), Ketaatan (Obedience), Kejujuran (Truthfulness), Tanggung Jawab (Responsibility), dan Pengucapan Syukur (Gratefulness).</p>
      <h2><span>B. Academic Courses Grade 1-12</span></h2><br />
      <p>Mata pelajaran akademis mewakili 70% dari keseluruhan nilai siswa. Berikut adalah pelajaran-pelajaran yang ada :</p>
      <p><strong> Mathematics :</strong> Concepts are developed through grade levels to ensure mastery. The curriculum targets this goal by focusing on six major themes: Number Skills, Geometry, Algebra, Data Analysis, and Pre-Calculus.  Students are drilled on SAT preparation.</p><br />
      <p><strong>Science :</strong> Focus on specific areas of science—Biology, Chemistry, and Physics. The four major strands are as follows: Life Science (Plants and Animals, Human Anatomy and Personal Care, Biology), Space and Earth Science (Geology, Weather, Space), Physical Science (Chemistry, Physics), Nature of Science (Scientific Method, Experimentation, Technology). Laboratory experiments being conducted regularly.</p><br />
      <p><strong>Bible :  </strong> Bible curriculum covers a variety of biblical material to assist in the development of practical Christian living. The Bible curriculum covers seven major themes: Theology, Attributes of God, Biblical literature, Biblical geography, Christian growth, Christian evidence, and a special emphasis for each grade level. </p><br />
      <p><strong>Accounting :</strong> The basic principles of accounting which include learning about the accounting cycle from analyzing transactions, journalizing into general journal, posting to general ledger, preparing trial balance, preparing financial statements (Balance Sheet, Income Statements), recording, posting adjusting and closing entries, preparing general taxation.</p><br />
      <p><strong>Economics :</strong> Micro and macroeconomics in general. Students learn the art and science of economics. Scarcity and the best utilization of available resources, subjective value, consumer demand and supply prices, how market functions, time value of money, government roles and general taxation.</p><br />
      <p><strong>Business Computer Information Systems :</strong>Explores the use of technology applications in both business and personal situations. Students are provided with the key knowledge and skills in communication skills, business technology, word processing applications, spreadsheet applications, database applications</p><br />
      <p><strong>English Grammar :</strong> proper and formal English reading, writing, and communicating are heavily drilled on the students with emphasis on IELTS and SAT reading comprehension</p><br />
      <p><strong>Literature :</strong> reading and discussion of classical literature books including paper writings and presentation.</p><br />
      <p><strong>Indonesian Heritage :</strong> the study of Indonesian history in the perspective of what makes Indonesia a great country with its strategic geographical location, diverse cultures, and ability to stand the pressures of times.</p><br />
      <p><strong>Logic </strong> students learn the proses of reasoning through argumentative discussion; differentiating depraved versus virtuous reasoning. Philosophers such as Socrates, Plato, and Aristotle are studied, particularly their way of logical thinking that produced challenging statements.</p><br />
      <p><strong>Rhetoric/Public Speaking :</strong> the art of persuasive speech delivery and presentation technique. Students have several debate sessions on particular subjects on past classical dialectical discussion and up-to-date current events.</p><br />
      <p><strong>Humanities :</strong> the study of human culture with the emphasis on Christian history of progress throughout the centuries of the world from antiquity, Christendom, Renaissance, and modernity.</p><br />
      <p><strong>Worldview :</strong> students learn the Christian perspective of how their beliefs and presuppositions cause their thoughts producing actions. It covers ideology, philosophy, theology, movement or religion that provides an overarching or prime approach to understanding God, the world and man s relations to God and the world.</p><br />
      <p><strong>Performing Arts :</strong>students will have to participate in annual performance especially on the year end (December) dramatic performance (play) in front of public audience.</p><br />
      <p><strong>Physical Education :</strong>students are required to participate in weekly fitness, skills, and team sports.</p>
    </div>
  </div>
);

export default AppWrap(
  MotionWrap(Academic, 'app__academic'),
  'academic',
);
