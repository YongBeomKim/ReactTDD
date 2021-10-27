import React, { useContext, useState } from "react";
import Styled from "styled-components";
import { ToDoListContext } from "../../Contexts";
import { Button } from "../Button";
import { Input } from "../Input";



const Container = Styled.div`
  display: flex;
`;


export const InputContainer = () => {
  const [toDo, setToDo] = useState('');
  const { addToDo} = useContext(ToDoListContext);
  
  return(
    <Container>
      <Input
        placeholder="Insert To do."
        value={toDo}
        onChange={setToDo}
      />
      <Button 
        label="Add"
        onClick={() => {
          addToDo(toDo);
          setToDo('');
        }}
      />
    </Container>
  )
}