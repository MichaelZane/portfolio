import React from 'react';
import styled from 'styled-components'

const Wrap = styled.div `
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 2%;
    margin-bottom: 2%;         
`
const Image = styled.img `
    margin: 2%;
    margin-bottom: 2%;
    @media screen and (max-width: 700px) {    
        height: 100%;
        width: 94%;   
      }
      @media screen and (max-width: 1300px) {    
        height: 100%;
        width: 94%;   
      }

`

const Pject = styled.div `
    // border: 1px solid white;
    // border-bottom: 1px solid white;
    display: flex;
    margin-top: 5%;
    width: 100%;
    height: 100%;
    color: white;
    // background-color:  #00004d;
    // box-shadow: 4px 4px 8px 4px rgb(0, 255, 255), 4px 6px 20px 4px rgba(0, 0, 0, 0.19);
    flex-direction: column;
`
const Pject2 = styled.div `
    // border-bottom: 1px solid white;
    display: flex;
    margin-top: 0;
    width: 100%;
    height: 100%;
    color: white;
    // background-color:  #00004d;
    // box-shadow: 4px 4px 8px 4px rgb(0, 255, 255), 4px 6px 20px 4px rgba(0, 0, 0, 0.19);
    flex-direction: column;
    
`

const Projects = () => {
    return ( 
        <>
        <Wrap>
            <Pject2>
            <Image loading='lazy' className="image2" src="/menu-app.gif" alt="project Rick and Morty Api" />

            <div className = "description" >
                <h4>Menu Order App</h4>
                A react-redux app that uses firebase functions and is hosted there as well. It allows users to sign up with firebase Auth and then sign In. You can order from the menu and then checkout using stripe. 
                <br/>
               <a
               href = "https://commerce-app-ec693.firebaseapp.com/">See deployed app
               </a>
                </div>
            </Pject2>
        </Wrap>
        
        <Wrap>
            <Pject>
                <Image loading='lazy' src="/pro1a.gif" alt="project game of life" />
                
                <div className = "description" >
                <h4>Game of Life</h4>
                The game of life, also known as life, is a zero player 
                game, which means it is determined by it's state, needing 
                no further input.  You initiate the game by using the 
                randomly generated pattern or by creating your own on the 
                blank grid then observing it's evolution of generations.  
                It is an example of Turing complete thus allowing to 
                simulate a universal constructor and any Turing machine.<br/>
                It was created using JavaScript, CSS, and HTML<br/>
                <br/>
               <a
               href = "https://game-of-life-m.herokuapp.com">See deployed app
               </a>
                </div>
            </Pject>
        </Wrap>
        <Wrap>
            <Pject2>
            <Image loading='lazy' className="image3" src="/Geoseek.gif" alt="" />

            <div className = "description" >
                <h4>Geoseek</h4>
                Geoseek was a 8 week project that I worked on with a group of 3 IOS developers,
                and a team of 5 web developers.  We worked closely with a stakeholder, 
                having weekly meetings and talking through her expectations for the app.  Our team 
                then came up with a strategy to meet the stakeholder's expectations. 
                We used ReactJs for the client side of the app and used NodeJS for the 
                backend server.  The app was a way to provide a pure digital Geocache experience.
                <br/>
               <a
               href = "https://github.com/mzstevens69/geoseek-fe2">See deployed app
               </a>
                </div>
            </Pject2>
        </Wrap>
        </>
     );
}
 
export default Projects;