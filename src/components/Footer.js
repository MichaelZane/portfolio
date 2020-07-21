import React from 'react';
import styled from 'styled-components'

const Wrap = styled.div `
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 2%;
    margin-bottom: 2%;
   
`
const Footer = styled.div `
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

const footer = () => {
    return ( 
        <div>
            <Wrap>
                <Footer>
                    <a href=""><i class="fa fa-envelope fa-3x" aria-hidden="true"></i></a>
                    <a href = "https://www.linkedin.com/in/michael-stevens-dev/"><i class="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
                    <a href="https://github.com/mzstevens69"><i class="fab fa-github-square fa-3x" ></i></a>
                    <a href="https://twitter.com/Michaelzanemike"><i class="fab fa-twitter-square fa-3x" ></i></a>
                    <br/>
                    <span>Michael Stevens copyright 2020</span>
                </Footer>
            </Wrap>
        </div>
     );
}
 
export default footer;