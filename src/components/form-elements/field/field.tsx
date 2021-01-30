import React from 'react';
import { Field as FormikField } from 'formik';

import { FieldContainer } from './components';

interface Props {
  label: string;
  name: string;
  component: any;
  min?: any;
  max?: any;
  onBlur?: () => void;
}

const Field: React.FC<Props> = ({ label, name, component, ...rest }) => (
  <FieldContainer>
    <div>{label}</div>
    <FormikField name={name} component={component} {...rest} />
  </FieldContainer>
);

export default Field;
