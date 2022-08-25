import './App.css';
import React from 'react'
import Navbar from './Components/Navbar'
import Homepage from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Cv from './Components/Cv'
import ToTop from './Components/ToTop'
import Skills from './Components/Skills';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
      <a className='anchor' href='#home' id='home'> </a>
        <Homepage/>
      </div>
      <div>
        <a className='anchor' href='aboutMe' id='aboutMe'> </a>
        <About/>
      </div>
      <div>
        <a className='anchor' href='#skills' id='skills'> </a>
        <Skills/>
      </div>
      <div>
        <a className='anchor' href='#projects' id='projects'> </a>
        <Projects/>
      </div>
      <div id='cv'>
        <a className='anchor' href='#cv' id='cv'> </a>
        <Cv/>
      </div>
      <Footer/>
      <ToTop/>
    </div>
  );
}

export default App;
