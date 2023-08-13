import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Footer, About, Peran, Admission, Program, Daring, Contact, Academic, Graduation } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Peran />
    <Academic />
    <Admission />
    <Program />
    <Daring />
    <Graduation />
    <Contact />
    <Footer />
  </div>
);
export default App;
