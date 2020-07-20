import React from 'react';
import styled from 'styled-components'

const Wrap = styled.div `
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 2%;
   
`

const Pject = styled.div `
    border: 1px solid white;
    display: flex;
    margin-top: 5%;
    width: 80%;
    height: 70%;
    color: white;
    background-color:  #00004d;
    box-shadow: 4px 4px 8px 4px rgb(0, 255, 255), 4px 6px 20px 4px rgba(0, 0, 0, 0.19);
`
const Pject2 = styled.div `
    border: 1px solid white;
    display: flex;
    margin-top: 0;
    width: 80%;
    height: 70%;
    color: white;
    background-color:  #00004d;
    box-shadow: 4px 4px 8px 4px rgb(0, 255, 255), 4px 6px 20px 4px rgba(0, 0, 0, 0.19);
`

const Projects = () => {
    return ( 
        <>
        
        <Wrap>
            <Pject>
                <img src="/pro1a.gif" alt="project game of life" />
                
                <div className = "description" >
                <h4>Game of Life</h4>
                The game of life, also known as life, is a zero player 
                game, which means it is determined by it's state, needing 
                no further input.  You initiate the game by using the 
                randomly generated pattern or by creating your own on the 
                blank grid then observing it's evolution of generations.  
                It is an example of Turing complete thus allowing to 
                simulate a universal constructor and any Turing machine.<br/>
            It follows these simple rules at each step:<br/>
            <br/>
            1. Any live cell with two or three live neighbours survives.<br/>
            2. Any dead cell with three live neighbours becomes a live cell.<br/>
            3. All other live cells die in the next generation. Similarly, 
               all other dead cells stay dead.
               <br/>
               <br/>
               These rules apply simultaneously to all cells, causing birth 
               and death and this occurs during a generation. The preceding 
               generation is derived from the previous as the rules continue 
               to be applied repeatedly for each generation.
               <br/>
               <a
               href = "https://game-of-life-m.herokuapp.com">See deployed app
               </a>
                </div>
            </Pject>
        </Wrap>
        
        <Wrap>
            <Pject2>
            <img src="/RickMorty1.gif" alt="project Rick and Morty Api" />

            <div className = "description" >
                <h4>Rick and Morty Page</h4>
                
               {/* <a
               href = "https://game-of-life-m.herokuapp.com">See deployed app
               </a> */}
                </div>
            </Pject2>
        </Wrap>

        <Wrap>
            <Pject2>
            <img src="/Geoseek.gif" alt="" />

            <div className = "description" >
                <h4>Geoseek</h4>
                
               {/* <a
               href = "https://game-of-life-m.herokuapp.com">See deployed app
               </a> */}
                </div>
            </Pject2>
        </Wrap>
        </>
     );
}
 
export default Projects;