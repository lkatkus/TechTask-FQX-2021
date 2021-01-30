import React from 'react';
import { FieldInputProps } from 'formik';

import { StyledInput } from './components';

interface Props {
  hasError?: boolean;
  field: FieldInputProps<any>;
}

const TextInput: React.FC<Props> = ({ hasError, field, ...rest }) => {
  return <StyledInput type="number" hasError={hasError} {...field} {...rest} />;
};

export default TextInput;
