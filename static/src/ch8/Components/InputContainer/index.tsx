import React from "react";
import Styled from "styled-components";
import { Button } from "../Button";
import { Input } from "../Input";



const Container = Styled.div`
  display: flex;
`;

interface Props {
  readonly toDo?: string;
  readonly onChange?: (text: string) => void;
  readonly onAdd?: () => void;
}

export const InputContainer = ({toDo, onChange, onAdd}: Props) => {
  return(
    <Container>
      <Input
        placeholder="Insert To do."
        value={toDo}
        onChange={onChange}
      />
      <Button 
        label="Add"
        onClick={onAdd}
      />
    </Container>
  )
}