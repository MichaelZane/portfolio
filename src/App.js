import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react'
import Nav from "./components/Nav"
import './App.css';
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer';
import Contact from './Contact';





function App() {

  const [isOpen, setOpen] = useState(false)
  

  return (
    <>
      <div className="App">
      <div className="nav-wrap" > 
        <Hamburger 
          
          label="Show menu" 
          toggled={isOpen} 
          toggle={setOpen}
          direction="left"
          color="white"
          />
          <div className="icon-wrap" >
            <a className="icons" href="mailto:stevensmike36@yahoo.com" alt="mail link"><i className="icon far fa-envelope fa-2x"></i></a>
              <a className="icons" href = "https://www.linkedin.com/in/michael-stevens-dev/" alt="linked in icon"><i className="fa fa-linkedin-square fa-2x"></i></a>
              <a className="icons" href = "https://github.com/mzstevens69" alt="github icon"><i className="fab fa-github-square fa-2x" ></i></a>
              <a className="icons" href = "https://twitter.com/Michaelzanemike" alt="twitter icon"><i className="fab fa-twitter-square fa-2x" ></i></a>
          </div>
        </div>

        {isOpen ? <Nav isOpen={isOpen}/> : null}

          
          <div className="logo" >  
            <img className="port-img" src='/fsdev.png' alt="logo" /> 
          </div>  
          
          <h1>About Me</h1>
          <AboutMe />
          
          <Skills />
          
          <Projects  />
          
          <Contact  />
          <Footer />
        
      </div>
    </>
  );
}

export default App;
