import React from 'react'

import styled from 'styled-components'

const About = styled.div `
    width: 80%;
    height: 100%;
    border: 1.25px solid white;
    border-radius: 5px;
    color: 	white;
    text-shadow: 1px 1px 2px black, 0 0 25px #00ffff, 0 0 8px #8533ff;
    font-size:  1.7rem;
    font-family: 'Love Ya Like A Sister';
    box-shadow: 4px 4px 8px 4px rgb(0, 255, 255), 4px 6px 20px 4px rgba(0, 0, 0, 0.19);
    background-color:  #00004d;
    
`
const Wrap = styled.div `
    display: flex;
    justify-content: center;
`

const AboutMe = () => {

    return (
        <>
        
            <Wrap>
            
            <About>
            
                <p>
                I've been a fan of tech from an early age. I love 
                computers and what you can achieve by using them. 
                The tech world is moving fast and can be a challenge 
                to keep up. I am adapting by remaining in a constant 
                learning environment. It is truly rewarding, learning 
                different ways to solve problems that web developers 
                face in their daily work lives. I am on a journey of 
                enlightenment and I love what I'm doing. My passion 
                for web development is strong. My background experiences 
                intertwine with how new technologies are developing. 
                Art and Business development are what's feeding many 
                technological advancements, from Web Development to 
                Augmented realities the core fundamentals are helping 
                to push it forward into the future.
                My current skills are:
                    JavaScript, React, Nodejs, Express, Knex, 
                    PostgreSQL, Python, HTML5, CSS3, Sass, 
                    Styled Components, Jest.
                I am also learning React Native in my free time. 
                I am fascinated with Augmented reality and how it 
                will be used in web development.   
                </p>
            </About>
            </Wrap>
        </>
    )
}

export default AboutMe