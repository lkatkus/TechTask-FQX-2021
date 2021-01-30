import React from 'react';

import { StyledInput } from './components';

interface Props {
  // @TODO fix typings
  field: any;
}

const TextInput: React.FC<Props> = ({ field, ...rest }) => {
  return <StyledInput type="text" {...field} {...rest} />;
};

export default TextInput;
