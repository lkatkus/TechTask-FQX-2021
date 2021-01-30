import React from 'react';

import { Box } from 'src/core';

import { StyledInput } from './components';

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
