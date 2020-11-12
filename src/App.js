import React, { useState } from 'react';

import { Spin as Hamburger } from 'hamburger-react'
import styled from 'styled-components'
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
          direction="right"
          color="white"

          />
          </div>
        {isOpen ? <Nav /> : null}
        
        
        
          {/* <a className="button" href="#project">Projects</a>
          <a className="button" href="#skill">Skills</a>
          <a className="button" href="#contact">Contact</a> */}
          
          <div className="logo" >  
          <img className="port-img" src='/fsdev.png' alt="logo" /> 
        </div>  
          
          {/* <SubTitle>   */}
            {/* <br/>
            Living in the Nashville, Tennessee area<br/>
            <br/>
            stevensmike36@yahoo.com
            <br/>
            <br/> */}
            {/* <a href="mailto:stevensmike36@yahoo.com" alt="mail link"><i className="icon far fa-envelope fa-3x"></i></a>
            <a href = "https://www.linkedin.com/in/michael-stevens-dev/" alt="linked in icon"><i className="fa fa-linkedin-square fa-3x"></i></a>
            <a href = "https://github.com/mzstevens69" alt="github icon"><i className="fab fa-github-square fa-3x" ></i></a>
            <a href = "https://twitter.com/Michaelzanemike" alt="twitter icon"><i className="fab fa-twitter-square fa-3x" ></i></a> */}
          {/* </SubTitle> */}
          {/* </div> */}
          <h1>Get to know me...</h1>
          <AboutMe />
          
          <Skills />
          
          <Projects  />
          <h1 id="contact" >Contact Me</h1>
          <Contact  />
          <Footer />
        
      </div>
    </>
  );
}

export default App;
