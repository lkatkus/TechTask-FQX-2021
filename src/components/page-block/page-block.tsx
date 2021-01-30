import React from 'react';

import { BlockContainer, BlockLabel, BlockTag } from './components';

interface Props {
  label: string;
  number?: number;
}

const FormBlock: React.FC<Props> = ({ label, number, children }) => (
  <BlockContainer>
    {number && <BlockTag>{number}</BlockTag>}
    {label && <BlockLabel>{label}</BlockLabel>}
    {children}
  </BlockContainer>
);

export default FormBlock;
