import React from 'react';

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

const Footer = () => {
    return ( 
        <div>
            <Wrap>
                <Footer>
                    
                </Footer>
            </Wrap>
        </div>
     );
}
 
export default Footer;