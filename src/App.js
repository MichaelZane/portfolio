import React from 'react';
import styled from 'styled-components'
import './App.css';
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'

const Title = styled.h1 `
  color: white;
  font-family: 'Love Ya Like A Sister';
  font-size: 2rem;
`
const SubTitle = styled.h3 `
  color: white;
  font-family: 'Love Ya Like A Sister';
  margin: 7%;
  font-size: 1.5rem;
  
`

const Icons = styled.div `
  color: 	 #4dffff;
  padding: 2%;
`



function App() {
  return (
    <div className="App">
      <Title>Michael Stevens</Title>
      <SubTitle>Full stack engineer | Lover of tech |</SubTitle>
      <Icons>
      {/* <i class="fab fa-facebook-square fa-3x" ></i> */}
      {/* <i class="fab fa-twitter-square fa-3x" ></i> */}
      <i class="fas fa-envelope-square fa-3x"></i>
      </Icons>
    
    <AboutMe/>
    <h1>Skills</h1>
    <Skills/>

    <Projects />
    
  </div>
  );
}

export default App;
