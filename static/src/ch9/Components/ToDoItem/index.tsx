import React, { Component } from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../Button';


const Container = Styled.div`
  display: flex;
  border-bottom: 1px solid #BDBDBD;
  align-items: center;
  margin: 10px;
  padding: 10px;
`
const Label = Styled(Link)`
  flex: 1;
  font-size: 16px;
  margin-right: 20px;
  text-decoration: none;
`

interface Props {
  readonly id: number;
  readonly label: string;
  readonly onDelete?:() => void;
}

export const ToDoItem = ({id, label, onDelete}: Props) => {
  return(
    <Container>
      <Label
        to={`/detail/${id}`}
      >{label}</Label>
      <Button
        label="Delete"
        backgroundColor="#FF1744"
        hoverColor="#F01440"
        onClick={onDelete}
      />
    </Container>
  )
}