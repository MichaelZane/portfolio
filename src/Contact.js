import React from 'react';
import styled from 'styled-components'

const Wrap = styled.div `
    display: flex;
    justify-content: center;
    height: 100%;
    margin-top: 2%;
    margin-bottom: 2%; 
    background-color: #002A56;        
`

const Form = styled.form `
  
  flex-direction: column;
  
  height: 100%;
  margin-top: 5%;
  margin-bottom: 2%;
  width: 80%;
  height: 100%;
  color: white;
  background-color:  #002A56;

`


const contactMe = () => {
    return ( 
      <div id="form">
        <h1 id="contact" >Contact Me</h1>
        <Wrap> 
          <Form
              action="https://formspree.io/xknqkpgo"
              method="POST"
              >

              
                  <input className="nme" name="name" type="text" placeholder="Name" />
              
              
                  <input type="text" name="_replyto" placeholder="Email"/>
              
              
                  <input type="numeric" placeholder="Phone" name="phone"/>
              
              
                  <textarea name="message" placeholder="Message" />         
              
            
            <button className = "btn" type="submit">Send</button>
            
          </Form>
        </Wrap>
      </div>
     );
}
 
export default contactMe;