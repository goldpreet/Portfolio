import React from 'react';
// components
import Banner from './components/Banner';

import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';

import Contact from './components/Contact';
import bg from "./assets/site-bg.jpg"
import Projects from './components/Projects';

const containerStyle = {
  // minHeight: '100vh',
  
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${bg})`,
 
};

const App = () => {
  return (
    <div className=' bg-no-repeat bg-cover overflow-hidden' style={containerStyle}>
      {/* <Header /> */}
      <Banner />
      <Nav />
      <About />
      <Services />
      <Projects/>
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
