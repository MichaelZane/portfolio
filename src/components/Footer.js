import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 2%;
  margin-bottom: 2%;
`;
const Footer = styled.div`
  width: 80%;
  height: 100%;
  // border: 1.25px solid white;
  border-radius: 5px;
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px #00ffff, 0 0 8px #8533ff;
  // box-shadow: 4px 4px 8px 4px rgb(0, 255, 255), 4px 6px 20px 4px rgba(0, 0, 0, 0.19);
`;

const footer = () => {
  return (
    <div>
      <Wrap>
        <a href="#top" className="back-to-top" >back to top</a>
        <Footer>
          <a href="mailto:stevensmike36@yahoo.com" alt="mail link">
            <i className="icon far fa-envelope fa-3x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/zanedev/"
            alt="linked in icon"
          >
            <i className="fa fa-linkedin-square fa-3x"></i>
          </a>
          <a href="https://github.com/MichaelZane" alt="github icon">
            <i className="fab fa-github-square fa-3x"></i>
          </a>
          <a href="https://twitter.com/Michaelzanemike" alt="twitter icon">
            <i className="fab fa-twitter-square fa-3x"></i>
          </a>
          <br />
          <span>Zane Stevens copyright 2020</span>
        </Footer>
      </Wrap>
    </div>
  );
};

export default footer;
