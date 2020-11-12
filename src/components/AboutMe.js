import React from 'react'

import styled from 'styled-components'

const About = styled.div `
    width: 100%;
    height: 100%;
    // border: 1.25px solid white;
    border-radius: 5px;
    color: 	white;
    text-shadow: 1px 1px 2px black, 0 0 25px #00ffff, 0 0 8px #8533ff;
    font-size:  1.7rem;
   
    // box-shadow: 4px 4px 8px 4px rgb(0, 255, 255), 4px 6px 20px 4px rgba(0, 0, 0, 0.19);
    background-color:  transparent;
    
`
const Wrap = styled.div `
    display: flex;
    justify-content: center;
    margin-bottom: 5%;
    border-bottom: 1px solid white;
    
   
`

const AboutMe = () => {

    return (
        <>
        
            <Wrap>
            
            <About>
            
                <p>
                {/* I've been a fan of tech from an early age. I love 
                computers and what you can achieve by using them.
                If you are curious about me, I am definitely a person you should call, email or text. I'm good with in-person discussions at a coffee place, I'm buying. My background is in art and I've also had a couple construction type businesses. I love to build and make stuff. It could be a static by the book object or a creative, imaginative work that starts with the basics but spins up a wild one of a kind experience. This is me. I am looking for a developer position.
                <br/> */}
                
   
                </p>
            </About>
            </Wrap>
        </>
    )
}

export default AboutMe