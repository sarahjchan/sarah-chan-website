import React from 'react';
import '../../App.css';
import Projects from '../Projects';
import Welcome from '../Welcome';
import Contact from '../Contact'
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Welcome />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
