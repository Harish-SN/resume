import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Experience from './components/Experience.jsx';
import Certificates from './components/Certificates.jsx';
import Milestones from './components/Milestones.jsx';
import ChatWidget from './components/ChatWidget.jsx';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Certificates />
      <Projects />
      <Milestones />
      <Contact />
      <Footer />
      <ChatWidget
        apiUrl="https://o8azjr0mca.execute-api.ap-south-1.amazonaws.com/chat"
      />
    </div>
  );
}