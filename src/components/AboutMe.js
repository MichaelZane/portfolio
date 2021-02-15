import React from "react";

import styled from "styled-components";

const Image = styled.img`
  width: 300px;
  height: 300px;
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
`;

const AboutMe = () => {
  return (
    <>
      <Wrap>
        <About>
          <div id="bWrap">
            <i id="ikon" className="fas fa-power-off fa-3x"></i>
            <Text>Reliable</Text>
            <p id="bio">
              Showing Up On Time, Doing What I Say, Delivering On Deadlines.{" "}
            </p>
          </div>
          <div id="bWrap">
            <i id="ikon" className="fas fa-upload fa-3x"></i>
            <Text>Self-Starter</Text>
            <p id="bio">
              Taking Initiative, Hugely Motivated, Passion To Succeed.{" "}
            </p>
          </div>
          <div id="bWrap">
            <i id="ikon" className="far fa-save fa-3x"></i>
            <Text>Results Driven</Text>
            <p id="bio">
              Meeting Challenges Head-On, Taking Accountability, Passion For
              Excellence.{" "}
            </p>
          </div>
          <div id="bWrap">
            <i id="ikon" className="fas fa-at fa-3x"></i>
            <Text>Persistent</Text>
            <p id="bio">Goal Driven, Deeply Focused, Confidence To Fail. </p>
          </div>

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
    </>
  );
};

export default AboutMe;
