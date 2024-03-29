import React from "react";
import { pulse, slideInLeft, slideInRight } from 'react-animations';
import styled, { keyframes } from 'styled-components';


const pulseAnimation = keyframes`${pulse}`;
const slideRight = keyframes`${slideInRight}`;
const slideLeft = keyframes`${slideInLeft}`

const Image = styled.img`
  width: 300px;
  height: 300px;
  &:hover {
    animation: 1s ${pulseAnimation};
    
`;

const Lwrap = styled.div`
padding: 10%;
height: 250px;
width: 250px;
display: flex;
flex-direction: column;
align-items: center;
animation: 1s ${slideLeft};
&onScroll {
  animation: 1s ${pulseAnimation};
}
`
const Rwrap = styled.div`
padding: 10%;
height: 250px;
width: 250px;
display: flex;
flex-direction: column;
align-items: center;
animation: 1s ${slideRight};
&onScroll {
  animation: 1s ${pulseAnimation};
}

`

const Icon = styled.div`

&:hover {
  animation: 1s ${pulseAnimation};
}
`;

const Wrap = styled.div`
  display: flex;
  margin-bottom: 5%;
`;

const About = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px #00ffff, 0 0 8px #8533ff;
  font-size: 1.7rem;
  
`;

const Text = styled.p`
  margin: 0;
  text-align: center;
  font-size: ;
  &:hover {
    animation: 3s ${pulseAnimation};
  }
`;

const AboutMe = () => {
  return (
    <Wrap>
      <About>
        <Lwrap>
          <Icon>
          <i id="ikon" className="fas fa-power-off fa-3x"></i>
          </Icon>
          <Text>Reliable</Text>
          <p id="bio">
            Consistently Showing Up On Time, Doing What I Say, Delivering On Deadlines.{" "}
          </p>
        </Lwrap>   
        <Rwrap>
          <Icon>
          <i id="ikon" className="fas fa-upload fa-3x"></i>
          </Icon>
          <Text>Self-Starter</Text>
          <p id="bio">
            Taking Initiative, Hugely Motivated, Passion To Succeed.{" "}
          </p>
        </Rwrap>
        <Lwrap>
          <Icon>
          <i id="ikon" className="far fa-save fa-3x"></i>
          </Icon>
          <Text>Results Driven</Text>
          <p id="bio">
            Meeting Challenges Head-On, Taking Accountability, Passion For
            Excellence.{" "}
          </p>
        </Lwrap>
        <Rwrap>
          <Icon>
          <i id="ikon" className="fas fa-at fa-3x"></i>
          </Icon>
          <Text>Persistent</Text>
          <p id="bio">Goal Driven, Deeply Focused, Confidence To Fail. </p>
        </Rwrap>
        <div id="image-wrap">         
          <Image src="/mikecircle.png" alt="profile-pic" />
          <h3 id="img-h3">Me</h3>
          <p id="bio">
            Solution-driven full stack developer adept at contributing to a
            highly collaborative work environment, finding solutions, and
            determining customer satisfaction. Experience developing
            consumer-focused websites using HTML, CSS, JavaScript, React, and
            Redux. Nashville, Tn area.
          </p>
        </div>
      </About>
    </Wrap>
  );
};

export default AboutMe;
