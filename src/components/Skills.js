import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div `
    display: flex;
    justify-content: center;
`
const Skill = styled.div `
    border: 1px solid white;
    margin-top: 5%;
    width: 80%;
    height: 100%;
    color: white;
    background-color:  #00004d;
    box-shadow: 4px 4px 8px 4px rgb(0, 255, 255), 4px 6px 20px 4px rgba(0, 0, 0, 0.19);
`


const Skills = () => {
    return (
        <Wrap>
            
            <Skill>
                
                <i class="fab fa-html5 fa-7x"></i>
                
               
                <i class="fab fa-react fa-7x"></i>
                <i class="fab fa-js-square fa-7x"></i>
                <i class="fab fa-python fa-7x"></i>
                <i class="fab fa-sass fa-7x"></i>
                <i class="fab fa-css3-alt fa-7x"></i>
                <i class="fab fa-node-js fa-7x"></i>
                <i class="fab fa-git fa-7x"></i>
                <i class="fas fa-database fa-7x"></i>
            </Skill>
        </Wrap>
    )
}
export default Skills;