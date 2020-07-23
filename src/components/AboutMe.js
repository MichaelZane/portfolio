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
                I've been a fan of tech since an early age . I love computers 
                and what you can achieve by using them.  The tech world is moving fast
                and can be a challenge to keep up.  I have adapted by remaining in a constant
                learning environment. 
                I am on a journey of enlightenment for web developing. You gotta 
                love what you do and my passion for 
                web development is strong. I have been a problem solver for 
                much of my life. It's what I love to do.  
                My current skills are:
                JavaScript, React, Nodejs, Express, Knex, PostgreSQL, Python, HTML5, 
                CSS3, Sass, Styled Components, Jest   
                </p>
            </About>
            </Wrap>
        </>
    )
}

export default AboutMe