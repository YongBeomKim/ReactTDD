import React from 'react';
import Styled from 'styled-components';

const test = process.env.HELLO
const Container = Styled.div`
  /* Enviorment */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Positon Values */
  min-height: 100vh;
  /* Style */
  background-color: #EEEEEE;
`;

const Contents = Styled.div`
  display: flex;
  background-color: #FFFFFF;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;


const InputContainer = Styled.div`
  display: flex;
`

import { Button, Input } from './Components';

export default function App() {
  console.log(test);
  return (
    <>
      <Container>
        <Contents>
          <InputContainer>
            <Input
              placeholder="할 일을 입력해 주세요"
            />

            <Button 
              label="리액트"
              onClick={()=>alert('Django')}
            />
          </InputContainer>
        </Contents>
      </Container>
    </>
  )
}