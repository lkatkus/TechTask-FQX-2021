import React from 'react';
import { FieldInputProps } from 'formik';
import { isValid, format } from 'date-fns';

import { StyledInput } from './components';

interface Props {
  field: FieldInputProps<any>;
}

const DateInput: React.FC<Props> = ({ field, ...rest }) => {
  const parsedValue = isValid(new Date(field.value))
    ? format(new Date(field.value), 'yyyy-MM-dd')
    : field.value;

  return <StyledInput type="date" {...field} {...rest} value={parsedValue} />;
};

export default DateInput;
