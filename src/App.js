import React, { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import Nav from "./components/Nav";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./Contact";
import { pulse, flip } from 'react-animations';
import styled, { keyframes } from "styled-components";
import TypeWriterEffect from 'react-typewriter-effect';

function App() {
  const [isOpen, setOpen] = useState(false);
  // const [showZane, setShowZane] = useState(true)
  const pulseAnimation = keyframes`${pulse}`;
  const flipAnimation = keyframes`${flip}`;


  const Text = styled.h1`
    animation: 1s ${flipAnimation};
    margin-top: 2%;
    margin-bottom: 3%;
    color: azure;
    font-family: 'Oswald', sans-serif;;
    text-decoration: underline;
    text-shadow: 1px 1px 2px black, 0 0 25px #00ffff, 0 0 8px #002A56;
    @media screen and (max-width: 700px) {
      text-align: center;
    }
    &:hover {
    animation: 2s ${pulseAnimation};
    }
  `;

  return (

    <div className="App" id="top">
      <div className="nav-wrap">
        <Hamburger
          label="Show menu"
          toggled={isOpen}
          toggle={setOpen}
          direction="left"
          color="white"
        />
        <div className="icon-wrap">
          <a
            className="icons"
            href="mailto:stevensmike36@yahoo.com"
            alt="mail link"
          >
            <i className="icon far fa-envelope fa-2x"></i>
          </a>
          <a
            className="icons"
            href="https://www.linkedin.com/in/zanedev/"
            alt="linked in icon"
          >
            <i className="fa fa-linkedin-square fa-2x"></i>
          </a>
          <a
            className="icons"
            href="https://github.com/MichaelZane"
            alt="github icon"
          >
            <i className="fab fa-github-square fa-2x"></i>
          </a>
          <a
            className="icons"
            href="https://twitter.com/Michaelzanemike"
            alt="twitter icon"
          >
            <i className="fab fa-twitter-square fa-2x"></i>
          </a>
        </div>
      </div>

      {isOpen ? <Nav isOpen={isOpen} setOpen={setOpen} /> : null}

          <div className="logo" >
          <TypeWriterEffect
            textStyle={{ fontFamily: 'VIDEOPHREAK', textAlign: 'center', marginTop: '33%', fontSize: '3em' }}
            multiTextDelay={1500}
            hideCursorAfterText={true}
            cursorColor="white"
            multiText={["Full Stack Software Developer", "Zane Stevens", "Scroll Down To See More"]}
            typeSpeed={75}
            eraseSpeed={100}
          />
          
          </div>
    
      <Text>About Me</Text>

      <AboutMe  />

      <Skills />

      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
