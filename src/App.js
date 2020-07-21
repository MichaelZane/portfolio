import React from 'react';
import styled from 'styled-components'
import './App.css';
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'

const Title = styled.h1 `
  margin: 5%;
  color: white;
  font-family: 'Love Ya Like A Sister';
  font-size: 2.5rem;
  text-shadow: 1px 1px 2px black, 0 0 25px #00ffff, 0 0 8px #8533ff;
`
const SubTitle = styled.h3 `
  color: white;
  font-family: 'Love Ya Like A Sister';
  margin: 2%;
  font-size: 1.6rem;
  text-shadow: 1px 1px 2px black, 0 0 25px #00ffff, 0 0 8px #8533ff;
`

const Icons = styled.div `
  color: 	 #4dffff;
  padding: 2%;
`



function App() {
  return (
    <>
    <div className="App">
      <Title>Michael Stevens</Title>
      <SubTitle>Full Stack Engineer | Lover of tech | Lifetime Learner<br/>    
        <br/>
        Living in the Nashville, Tennessee area<br/>
        <br/>
        Email: Stevensmike36@yahoo.com<br/>
        <i class="fab fa-github-square fa-3x" ></i>Github: <a href = "https://github.com/mzstevens69">My Github</a><br/>
        <i class="fab fa-twitter-square fa-3x" ></i>Twitter: <a href = "https://twitter.com/Michaelzanemike">My Twitter</a>
        </SubTitle>
      {/* <Icons> */}
      {/* <i class="fab fa-facebook-square fa-3x" ></i> */}
      {/* <i class="fab fa-twitter-square fa-3x" ></i> */}
      {/* <i class="fas fa-envelope-square fa-3x"></i> */}
      {/* </Icons> */}
    
    <AboutMe/>
    <h1>Skills</h1>
    <Skills/>
    <h1>Projects</h1>
    <Projects />
    
  </div>
  </>
  );
}

export default App;
