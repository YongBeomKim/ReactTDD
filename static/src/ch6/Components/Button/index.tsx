import React from "react";
import Styled from "styled-components";


// ContainerProps 정의하기
interface ContainerProps {
  readonly backgroundColor: string;
  readonly hoverColor: string;
}


const Container = Styled.div<ContainerProps>`
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0,0,0,.2);
  }
`;

const Label = Styled.div`
  color: #ffffff;
  font-size: 16px;
`

interface Props {
  readonly label: string;
  readonly backgroundColor?: string;
  readonly hoverColor?: string;
  readonly onClick?: () => void;
}


// Props : 부모에게 전달받는 모든 데이터 컨트롤 매개변수
export const Button = ({
  label,
  backgroundColor = '#304FFE',
  hoverColor = '#1E40FF',
  onClick,
}: Props) => {
  return (
    <Container 
      backgroundColor = {backgroundColor}
      hoverColor = {hoverColor}
      onClick = {onClick}
    >
      <Label>{label}</Label>
    </Container>

  )
}