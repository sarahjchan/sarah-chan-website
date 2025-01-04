import React from 'react';
import '../../App.css';
import Projects from '../Projects';
import Welcome from '../Welcome';
import Footer from '../Footer'

function Home() {
  return (
    <>
      <Welcome />
      <Projects />
      <Footer />
    </>
  );
}

export default Home;
