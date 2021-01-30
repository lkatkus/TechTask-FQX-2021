import React from 'react';
import { FieldInputProps } from 'formik';

import { Box } from 'src/core';

import { StyledInput } from './components';

interface Props {
  field: FieldInputProps<any>;
  currency: string;
}

const TextInput: React.FC<Props> = ({ field, currency, ...rest }) => {
  return (
    <Box display="flex" alignItems="center">
      {currency && <Box mr={10}>{currency}</Box>}
      <StyledInput type="number" step="1" {...field} {...rest} />
    </Box>
  );
};

export default TextInput;
