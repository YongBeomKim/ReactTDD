import React, { useState } from 'react';
import Styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { InputContainer, ToDoList } from './Components';
import { ToDoListProvider } from './Contexts';


const Container = Styled.div`
  min-height: 100vh;
  background-color: #EEEEEE;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Contents = Styled.div`
  display: flex;
  background-color: #FFFFFF;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;


// State : useState 활용 변수들 정의b 
interface Props {}
interface State {
  readonly toDo: string;
  readonly toDoList: string[]; 
}

export default function App() {

  // toDo : Events 변수
  // toDoList : Event History 저장 객체
  const [toDo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState<string[]>([]);

  const addToDo = (): void => {
    if (toDo) {
      setToDoList([...toDoList, toDo]);
      setToDo('');
    }
  };

  const deleteToDo = (index: number): void => {
    let list = [...toDoList];
    list.splice(index, 1);
    setToDoList(list);
  };
  
  return(
    <ToDoListProvider>
      <Container>
        <Contents>
          <ToDoList />
          <InputContainer />
        </Contents>
      </Container>
    </ToDoListProvider>
  )
}


