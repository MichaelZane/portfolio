import React from 'react';
import styled from 'styled-components'

const Wrap = styled.div `
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 2%;
    margin-bottom: 2%;         
`

const Form = styled.form `
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin-top: 3%;
  margin-bottom: 2%;
  border: 1px solid white;
  
  
  width: 80%;
  height: 100%;
  color: white;
  background-color:  #00004d;
  box-shadow: 4px 4px 8px 4px rgb(0, 255, 255), 4px 6px 20px 4px rgba(0, 0, 0, 0.19);
`


const contactMe = () => {
    return ( 
      
      <Wrap> 
        
        <Form
            action="https://formspree.io/xknqkpgo"
            method="POST"
            >
            <label>
                <input className="nme" name="name" type="text" placeholder="Name" />
            </label>
            <label>
                <input type="text" name="_replyto" placeholder="Email"/>
            </label>
            <label>
                <input type="numeric" placeholder="Phone" name="phone"/>
            </label>
            <label>
                <textarea name="message" placeholder="Message" />         
            </label>
          <label>
          <button className = "btn" type="submit">Send</button>
          </label>
          
        </Form>
      </Wrap>
     );
}
 
export default contactMe;