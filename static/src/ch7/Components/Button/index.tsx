import React, { Component } from "react";
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

// this.props : Props 속성들을 구조분해 할당
export class Button extends Component<Props> {
  render() {
    const {
      label,
      backgroundColor = '#304FFE',
      hoverColor = '#1E4oFF',
      onClick,
    } = this.props; 

    return (
      <Container
        backgroundColor={backgroundColor}
        hoverColor={hoverColor}
        onClick={onClick}
      >
        <Label>{label}</Label>
      </Container>
    );
  }
}