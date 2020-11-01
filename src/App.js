import React from 'react';
import styled from 'styled-components'
import './App.css';
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer';
import Contact from './Contact';


const Title = styled.h1 `
  margin: 5%;
  color: white;
  font-family: 'Oswald';
  font-size: 2.5rem;
  text-shadow: 1px 1px 2px black, 0 0 25px #00ffff, 0 0 8px #8533ff;
`
const SubTitle = styled.h3 `
  color: white;

  margin: 2%;
  font-size: 1.6rem;
  text-shadow: 1px 1px 2px black, 0 0 25px #00ffff, 0 0 8px #8533ff;
`

function App() {

  return (
    <>
    <div className="App">
      <div className="btn-wrap" >
      <a class="button" href="#project">Projects</a>
      <a class="button" href="#skill">Skills</a>
      <a class="button" href="#contact">Contact</a>
      </div>
      <Title>Michael Stevens</Title>
      <div>
      <img className="selfie" src='/mikecircle.png' alt="selfie" />
      </div>
      <SubTitle>Full Stack Engineer | Lover of tech | Never Stop Learning<br/>    
        <br/>
        Living in the Nashville, Tennessee area<br/>
        <br/>
        stevensmike36@yahoo.com
        <br/>
        <br/>
        <a href="mailto:stevensmike36@yahoo.com" alt="mail link"><i className="icon far fa-envelope fa-3x"></i></a>
        <a href = "https://www.linkedin.com/in/michael-stevens-dev/" alt="linked in icon"><i class="fa fa-linkedin-square fa-3x"></i></a>
        <a href = "https://github.com/mzstevens69" alt="github icon"><i class="fab fa-github-square fa-3x" ></i></a>
        <a href = "https://twitter.com/Michaelzanemike" alt="twitter icon"><i class="fab fa-twitter-square fa-3x" ></i></a>
      </SubTitle>
      
      
      <AboutMe />
      <h1 id="skill" >Skills</h1>
      <Skills />
      <h1 id="project" >Projects</h1>
      <Projects  />
      <h1 id="contact" >Contact Me</h1>
      <Contact  />
      <Footer />
      
    </div>
    </>
  );
}

export default App;
