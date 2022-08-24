import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects'
import ContactInfo from './components/Contact-Info';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Work />
      <Projects />
      <ContactInfo />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
