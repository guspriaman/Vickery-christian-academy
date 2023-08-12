import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Footer, About, Peran, Admission, Program, Contact, Academic, Graduation } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Peran />
    <Academic />
    <Graduation />
    <Admission />
    <Program />
    <Contact />
    <Footer />
  </div>
);
export default App;
