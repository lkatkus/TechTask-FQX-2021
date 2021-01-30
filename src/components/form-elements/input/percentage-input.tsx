import React from 'react';
import styled from 'styled-components';

import { StyledInput } from './components';

interface Props {
  // @TODO fix typings
  field: any;
}

const PercentageInput: React.FC<Props> = ({ field, ...rest }) => {
  return <StyledInput type="number" {...field} {...rest} />;
};

export default PercentageInput;
