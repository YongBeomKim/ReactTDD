import React from 'react';
import logo from './style/logo.svg';
import AppStyles, { InputContainer, Label } from './style/App-style'
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ToDoItem } from './components/TodoItem';


const { Container, Content } = AppStyles
const hi = process.env.JS;
console.log(hi);

function App() {
  return (
    <Container>
      <Content>
        <ToDoItem 
          label="추가된 할 일"
          onDelete={() => alert('삭제')}
        />
        <InputContainer>
          <Input
            placeholder="할 일을 입력해주세요"
            onChange={(text) => {console.log(text)}}
          />
          <Button
            label="Adding"
            onClick={() => alert('추가')}
          />
        </InputContainer>
      </Content>
    </Container>
  );
}

export default App;