import React from 'react';
import styled from 'styled-components';

import { Box } from 'src/core';

const StyledInput = styled.input`
  width: 100%;
`;

interface Props {
  // @TODO fix typings
  field: any;
  currency: string;
}

const TextInput: React.FC<Props> = ({ field, currency, ...rest }) => {
  return (
    <Box display="flex" alignItems="center">
      {currency && <Box mr={10}>{currency}</Box>}
      <StyledInput type="number" {...field} {...rest} />
    </Box>
  );
};

export default TextInput;
