import React from 'react';
import { Field as FormikField } from 'formik';

import { FieldContainer } from './components';

interface Props {
  label: string;
  name: string;
  component: any;
}

const Field: React.FC<Props> = ({ label, name, component }) => (
  <FieldContainer>
    <div>{label}</div>
    <FormikField name={name} component={component} />
  </FieldContainer>
);

export default Field;
