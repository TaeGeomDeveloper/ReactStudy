import React from "react";
import styled from"styled-components";

const Wrapper = styled.div`
  padding: 1em;
  background : grey;
`;

const Title = styled.h1`
  font-size: 1.5em;
  color: white;
  text-align: center;
`;

// const Button = styled.button`
//   color: ${props=>props => props.dark ? "white" : "black"};
//   background: ${props=> props.dark ? "black" : "white"};
//   border: 1px solid black;
// `;

const Button = styled.button`
  color: grey;
  border: 2px solid palevioletred;
`;

const RoundedButton = styled(Button)`
  border-radius: 16px;
`;


function MainPage(props) {

  return (
      <Wrapper>
        <Title>
          안녕, 리액트!
        </Title>
        <div>
        <Button>Normal</Button>
        <RoundedButton>Rounded</RoundedButton>
      </div>
      </Wrapper>
      
  );
}

export default MainPage;