import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import './App.scss';
import {
  About,
  History,
  Visi,
  Misi,
  Kegiatan,
  Faqs,
  Homeschooling,
  Uuandpp,
  Yayasan,
  Ccs,
  Admission,
  Academic,
  Contact,
  Keluarga,
  Masyarakat,
  Negara,
  Psr,
  Menuh,
  Graduation,
  Graduationelementary,
  Graduationjunior,
  Graduationsenior,
  Teacher,
  Header,
  Program,
  Daring,
  Peran,
} from './container';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/history" element={<History />} />
      <Route path="/visi" element={<Visi />} />
      <Route path="/Misi" element={<Misi />} />
      <Route path="/kegiatan" element={<Kegiatan />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/homeschooling" element={<Homeschooling />} />
      <Route path="/uuandpp" element={<Uuandpp />} />
      <Route path="/ccs" element={<Ccs />} />
      <Route path="/yayasan" element={<Yayasan />} />
      <Route path="/Academic" element={<Academic />} />
      <Route path="/Admission" element={<Admission />} />
      <Route path="/graduation" element={<Graduation />} />
      <Route path="/graduationelementary" element={<Graduationelementary />} />
      <Route path="/graduationjunior" element={<Graduationjunior />} />
      <Route path="/graduationsenior" element={<Graduationsenior />} />
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/program" element={<Program />} />
      <Route path="/daring" element={<Daring />} />
      <Route path="/peran" element={<Peran />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/keluarga" element={<Keluarga />} />
      <Route path="/masyarakat" element={<Masyarakat />} />
      <Route path="/negara" element={<Negara />} />
      <Route path="/psr" element={<Psr />} />
      <Route path="/menuh" element={<Menuh />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
