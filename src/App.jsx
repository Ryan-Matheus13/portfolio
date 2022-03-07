import React from 'react';

import './App.css'
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Header from './sections/Header'
import Projects from './sections/Projects';
import Skills from './sections/Skills';

const App = () => {
  return ( 
    <div className='mask'>
      <div className='container' >
        <Header/>
        <Skills/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </div>
   );
}
 
export default App;