import React, { useState } from 'react';
import Styled from 'styled-components';
import { Button, Input, TodoItem } from './Components';


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


const ToDoContainer = Styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #BDBDBD;
  margin-bottom: 20px;
`


export default function App() {
  const [toDo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState<string[]>([]);

  const addToDo = (): void => {
    if (toDo) {
      setToDoList([...toDoList, toDo]);
      setToDo('');
    }
  }

  const deleteToDo = (index:number): void => {
    let list = [...toDoList];
    list.splice(index, 1);
    setToDoList(list);
  }

  console.log(test);
  return (
    <>
      <Container>
        <Contents>
          <ToDoContainer>
            {toDoList.map( (item, index) =>
              <TodoItem 
                key={item} 
                label={item} 
                onDelete={ () => deleteToDo(index) }
              />
            )}
          </ToDoContainer>
          <InputContainer>
            <Input
              placeholder="할 일을 입력해 주세요"
              value={toDo}
              onChange={(text) => setToDo(text)}
            />
            <Button 
              label="리액트"
              onClick={addToDo}
            />
          </InputContainer>
        </Contents>
      </Container>
    </>
  )
}