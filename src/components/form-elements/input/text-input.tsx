import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
`;

interface Props {
  // @TODO fix typings
  field: any;
}

const TextInput: React.FC<Props> = ({ field, ...rest }) => {
  return <StyledInput type="text" {...field} {...rest} />;
};

export default TextInput;
