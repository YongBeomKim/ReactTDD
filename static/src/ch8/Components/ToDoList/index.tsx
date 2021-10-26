import React from "react";
import Styled from "styled-components";
import { ToDoItem } from "../ToDoItem";


// void :: undefined 객체로 return() 없는 함수를 정의
interface Props {
  readonly toDoList: string[];
  readonly deleteToDo: (index:number) => void;
}

const Container = Styled.div`
  height: 400px;
  min-width: 350px;
  margin-bottom: 20px;
  overflow-y: scroll;
  border: 1px solid #BDBDBD;
`

export const ToDoList = ({toDoList, deleteToDo}: Props) => {
  return(
    <Container data-testid="toDoList">
      {toDoList.map((item, index) => (
        <ToDoItem
          key={item}
          label={item}
          onDelete={() => deleteToDo(index)}
        />
      ))}
    </Container>
  )
}
