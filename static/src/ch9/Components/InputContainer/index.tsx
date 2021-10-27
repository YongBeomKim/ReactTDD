import React, { useContext, useState } from "react";
import Styled from "styled-components";
import { ToDoListContext } from "../../Contexts";
import { Button } from "../Button";
import { Input } from "../Input";


const Container = Styled.div`
  display: flex;
`;


interface Props {
  readonly onAdd?: () => void;
}


export const InputContainer = ({onAdd}: Props) => {
  const [toDo, setToDo] = useState('');
  const { addToDo } = useContext(ToDoListContext);
  
  return(
    <Container>
      <Input
        placeholder="Insert To do."
        value={toDo}
        onChange={setToDo}
      />
      <Button

        // 기본적 기능 : 텍스트 추가 
        label="Adding Text"
        onClick={() => {
          addToDo(toDo);
          setToDo('');

          // 부가적 기능
          // Pages/Add/index.tsx
          // :: 부모 컴포넌트 함수객체를 onClick 이벤트와 연결
          if (toDo && typeof onAdd === 'function') {
            onAdd();
          }
        }}
      />
    </Container>
  )
}