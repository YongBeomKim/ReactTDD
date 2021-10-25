import React from 'react';
import styled from 'styled-components';
import { InputContainer } from '../style/App-style';

interface Props {
  readonly placeholder?: string;
  readonly onChange?: (text: string) => void;
}

const InputBox = styled.input`
  flex: 1;
  font-size: 16px;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #BDBDBD;
  outline: none;
`

export const Input = ({
  placeholder = "텍스트를 입력하세요",
  onChange,
}: Props) => {
  return (
    <InputBox 
      placeholder={placeholder} 
      onChange={(event) => {
        if(typeof onChange === 'function') {
          onChange(event.target.value);
        }
      }}
    />
  );
}