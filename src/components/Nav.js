import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  cursor: pointer;
  li {
    padding: 18px 10px;
  }
  z-index: 8;
  margin-top: 0;
  flex-flow: column nowrap;
  background-color: #002a56;
  position: fixed;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(100%)")};
  top: 0;
  right: 100;
  height: 30vh;
  width: 165px;
  padding-top: 3.5rem;
  transition: transform 0.7s ease-in-out;
  li {
    color: #fff;
  }

  @media (min-width: 300px) {
    margin: 7% 0;

  }
  @media (min-width: 720px) {
    margin: 5% 0;
  }
  @media (min-width: 1020px) {
    margin: 4% 0;
  }
  @media (min-width: 1275px) {
    margin: 3% 0;
  }
`;

const Nav = ({ isOpen }) => {

  
  return (
    <div>
      <Ul isOpen={isOpen}>
        <li>
          <a href="#skill" >Skills</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </Ul>
    </div>
  );
};

export default Nav;
