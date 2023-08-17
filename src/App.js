import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import './App.scss';
import { Header, About, Footer, Graduation } from './container';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/about" element={<About />} />
      <Route path="/graduation" element={<Graduation />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
