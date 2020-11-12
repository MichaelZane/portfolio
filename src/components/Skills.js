import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div `
    display: flex;
    justify-content: center;
    
`
const Skill = styled.div `

    margin: 5% 0;
    width: 100%;
    height: 100%;
    color: white;

`


const Skills = () => {
    return (
        <div className="skills" > 
        <h1>Skills</h1>
        
            
            <Skill>
                
                <i className="fab fa-html5 fa-7x"></i>
                <i className="fab fa-react fa-7x"></i>
                <i className="fab fa-js-square fa-7x"></i>
                <i className="fab fa-python fa-7x"></i>
                <i className="fab fa-sass fa-7x"></i>
                <i className="fab fa-css3-alt fa-7x"></i>
                <i className="fab fa-node-js fa-7x"></i>
                <i className="fab fa-git fa-7x"></i>
                <i className="fab fa-github fa-7x"></i>
                <i className="fas fa-database fa-7x"></i>
                <i className="fab fa-aws fa-7x"></i>
                <i className="fab fa-less fa-7x"></i>
            </Skill>
        
        </div>
    )
}
export default Skills;