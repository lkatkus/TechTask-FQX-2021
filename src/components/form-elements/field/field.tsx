import React from 'react';
import { useField } from 'formik';

import { FieldContainer, FieldLabel, FieldError } from './components';

interface Props {
  disabled?: boolean;
  label: string;
  name: string;
  component: any;
  min?: any;
  max?: any;
  currency?: string;
  onBlur?: () => void;
  onChange?: (e: any) => void;
  baseField?: string;
  validate?: (value: any) => string | void;
}

const Field: React.FC<Props> = ({
  label,
  name,
  validate,
  component: Component,
  baseField,
  onChange,
  ...rest
}) => {
  const [field, meta] = useField({ name, validate });

  console.log(meta);

  return (
    <FieldContainer isBaseField={baseField === name} hasError={!!meta.error && !!meta.touched}>
      <FieldLabel>{label}</FieldLabel>
      <Component
        hasError={meta.error && meta.touched}
        field={field}
        onChange={(e: React.ChangeEvent<any>) => {
          if (onChange) {
            onChange(e.target.value);
          } else {
            field.onChange(e);
          }
        }}
        {...rest}
      />
      <FieldError name={name} />
    </FieldContainer>
  );
};

export default Field;
