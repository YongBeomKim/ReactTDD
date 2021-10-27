import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import Styled from "styled-components";
import { ToDoListContext } from "../../Contexts";
import { Button } from "../../Components/Button";

const Container = Styled.div`
  display: flex;
  background-color: #FFF;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0,0,0,.2);
  align-items: center;
  flex-direction: column;
`
const ToDo = Styled.div`
  min-width: 350px;
  height: 350px;
  overflow-y: auto;
  border: 1px solid #BDBDBD;
  margin-bottom: 20px;
  padding: 10px;
`

export const Detail = () => {

  const { goBack } = useHistory();
  const { toDoList, deleteToDo } = useContext(ToDoListContext);

  // `/detail/${id}` : id 숫자변환 및 객체 인덱싱
  //  useParams() : URL 의 동적 매개변수를 할당 (String)
  const params: { id: string } = useParams();
  const id = Number.parseInt(params.id);
  const toDo = toDoList[id];

  return (
    <Container>
      <ToDo>{toDo}</ToDo>
      <Button
        label = "삭제"
        backgroundColor="#FF1744"
        hoverColor="#8d112a"
        onClick={()=>{
          deleteToDo(id);
          goBack();
        }}
      />
    </Container>
  )
}