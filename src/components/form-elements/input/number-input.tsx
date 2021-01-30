import React from 'react';

import { StyledInput } from './components';

interface Props {
  hasError?: boolean;
  // @TODO fix typings
  field: any;
}

const TextInput: React.FC<Props> = ({ hasError, field, ...rest }) => {
  return <StyledInput type="number" hasError={hasError} {...field} {...rest} />;
};

export default TextInput;
