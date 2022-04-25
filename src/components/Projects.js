import React from "react";
import styled from "styled-components";
import { pulse } from 'react-animations';

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 2%;
  margin-bottom: 2%;
`;
const Image = styled.img`
  margin: 2%;
  margin-bottom: 6%;
  @media screen and (max-width: 700px) {
    height: 100%;
    width: 94%;
  }
  @media screen and (max-width: 1300px) {
    height: 100%;
    width: 94%;
  }
`;

const Text = styled.h1`
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
    animation: 2s ${pulse};
    }
`;

const Pject = styled.div`
  display: flex;
  margin-top: 5%;
  width: 100%;
  height: 100%;
  color: white;
  background-color: #002a56;
  flex-direction: column;
`;
const Pject2 = styled.div`
  display: flex;
  margin-top: 0;
  width: 100%;
  height: 100%;
  color: white;

  // box-shadow: 4px 4px 8px 4px rgb(0, 255, 255), 4px 6px 20px 4px rgba(0, 0, 0, 0.19);
  flex-direction: column;
`;

const Projects = () => {
  return (
    <div className="projects">
      <Text>Projects</Text>
      <Wrap>
        <Pject2>
          <div className="description2">
            <h4>Menu Order App</h4>
            A react-redux app that uses firebase functions and is hosted there
            as well. It allows users to sign up with firebase Auth and then sign
            In. You can order from the menu and then checkout using stripe.
            <br />
            <a href="https://commerce-app-ec693.firebaseapp.com/">
              <h4 id="two" >See deployed app</h4>
            </a>
          </div>
          <Image
            loading="lazy"
            className="image2"
            src="/menu-app.gif"
            alt="menu-order-app"
          />
        </Pject2>
      </Wrap>

      <Wrap>
        <Pject>
          <div className="description">
            <h4>Users Poll</h4>
            This app is a feedback form created with that has users provide
            feedback for The Social Game Poker Club. The form data is then
            dropped in a PostgreSQL database and fires an email.
            <br />
            It was created using python, flask, HTML5, and CSS and Mailtrap
            <br />
            <br />
            <a href="https://social-game-poker.herokuapp.com">
            <h4>See deployed app</h4>
            </a>
          </div>
          <Image loading="lazy" src="/social.png" alt="project game of life" />
        </Pject>
      </Wrap>
      <Wrap>
        <Pject2>
          <div className="description2">
            <h4>Geoseek</h4>
            Geoseek was a 8 week project that I worked on with a group of 3 IOS
            developers, and a team of 5 web developers. We worked closely with a
            stakeholder, having weekly meetings and talking through her
            expectations for the app. Our team then came up with a strategy to
            meet the stakeholder's expectations. We used ReactJs for the client
            side of the app and used NodeJS for the backend server. The app was
            a way to provide a pure digital Geocache experience.
            <br />
            <a href="https://geoseek-fe.herokuapp.com">
            <h4 id="two" >See deployed app</h4>
            </a>
          </div>
          <Image loading="lazy" className="image3" src="/Geoseek.gif" alt="" />
        </Pject2>
      </Wrap>
      <Wrap>
        <Pject>
          <div className="description">
            <h4>Order Ready</h4>
            This app was designed to for a fast food restaurant that only has a order window and no drive thru. The order ticket # ties it to the customer's order and when the order is complete you can hit the button to send a text message telling them it's ready for pick up.
            <br />
            It was created using JavaScript, ReactJS, NodeJS, Express, PostgreSQL, Twillio.
            <br />
            <br />
            <a href="https://order-ready.netlify.app">
            <h4>See deployed app</h4>
            </a>
          </div>
          <Image loading="lazy" src="/social.png" alt="project game of life" />
        </Pject>
      </Wrap>
    </div>
  );
};

export default Projects;
