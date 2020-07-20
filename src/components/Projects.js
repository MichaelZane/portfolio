import React from 'react';
import styled from 'styled-components'

const Wrap = styled.div `
    display: flex;
    justify-content: center;
`

const Pject = styled.div `
    border: 1px solid white;
    margin-top: 5%;
    width: 80%;
    height: 100%;
    color: white;
    background-color:  #00004d;
    box-shadow: 4px 4px 8px 4px rgb(0, 255, 255), 4px 6px 20px 4px rgba(0, 0, 0, 0.19);
`

const Projects = () => {
    return ( 
        <Wrap>
            <Pject>
                <img src="/pro1.gif" alt="project game of life" />
            </Pject>
        </Wrap>
     );
}
 
export default Projects;