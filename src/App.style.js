import styled from 'styled-components'

export const Box=styled.div`
width: 400px;
height: 400px;

background: aliceblue;

border: 2px solid red;
border-radius: 10px;

p {
  font-size: 50px;
  font-width: bold;

  color: blueviolet;
  
}
  button{
    padding: 15px;

    border: 0;
    border-radius: 8px;

    background: #123456;

    cursor: pointer;

    color: white;

    &:hover{
      background: white;
      color: black;
    }

    &:focus{
      border: 3px solid red;
    }

    button:hover{
      
    }
    
}

  
`;