import React, { Component } from 'react';
import Styled from 'styled-components';


const InputBox = Styled.input`
  flex: 1;
  font-size: 16px;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #BDBDBD;
  outline: none;
`

interface Props {
  readonly value?: string;
  readonly placeholder?: string;
  readonly onChange?: (text: string) => void;
  // readonly onChange?: () => void;
}

export class Input extends Component<Props> {
  render() {
    const { value, placeholder, onChange } = this.props;
    return (
      <InputBox
        value={value}
        placeholder={placeholder}
        onChange={(event) => {
          if(typeof onChange == 'function') {
            onChange(event.target.value);
          }
        }}
      />
    )
  }
}