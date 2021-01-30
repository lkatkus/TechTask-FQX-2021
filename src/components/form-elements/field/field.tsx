import React from 'react';
import { Field as FormikField } from 'formik';

interface Props {
  label: string;
  name: string;
  component: any;
}

const Field: React.FC<Props> = ({ label, name, component }) => {
  return (
    <div>
      <div>{label}</div>
      <FormikField name={name} component={component} />
    </div>
  );
};

export default Field;
