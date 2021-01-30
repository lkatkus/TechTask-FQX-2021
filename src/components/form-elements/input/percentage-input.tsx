import React from 'react';
import { FieldInputProps } from 'formik';

import { StyledInput } from './components';

interface Props {
  field: FieldInputProps<any>;
}

const PercentageInput: React.FC<Props> = ({ field, ...rest }) => {
  return <StyledInput type="number" step="0.01" {...field} {...rest} />;
};

export default PercentageInput;
