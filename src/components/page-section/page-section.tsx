import React from 'react';

import { Box } from 'src/core';

import { SectionContainer, SectionLabel } from './components';

interface Props {
  label: string;
}

const FormSection: React.FC<Props> = ({ label, children }) => {
  return (
    <SectionContainer>
      <SectionLabel>{label}</SectionLabel>
      <Box display="flex" flexWrap="wrap">
        {children}
      </Box>
    </SectionContainer>
  );
};

export default FormSection;
