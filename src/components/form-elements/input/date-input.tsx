import React from 'react';
import styled from 'styled-components';
import { isValid, format } from 'date-fns';

const StyledInput = styled.input`
  width: 100%;
`;

interface Props {
  // @TODO fix typings
  field: any;
}

const DateInput: React.FC<Props> = ({ field, ...rest }) => {
  const parsedValue = isValid(new Date(field.value))
    ? format(new Date(field.value), 'yyyy-MM-dd')
    : field.value;

  return <StyledInput type="date" {...field} {...rest} value={parsedValue} />;
};

export default DateInput;
