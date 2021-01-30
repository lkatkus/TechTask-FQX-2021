import React from 'react';
import { Field as FormikField } from 'formik';

import { FieldContainer, FieldLabel } from './components';

interface Props {
  label: string;
  name: string;
  component: any;
  min?: any;
  max?: any;
  currency?: string;
  onBlur?: () => void;
  baseField?: string;
}

const Field: React.FC<Props> = ({ label, name, component, baseField, ...rest }) => (
  <FieldContainer isBaseField={baseField === name}>
    <FieldLabel>{label}</FieldLabel>
    <FormikField name={name} component={component} {...rest} />
  </FieldContainer>
);

export default Field;
