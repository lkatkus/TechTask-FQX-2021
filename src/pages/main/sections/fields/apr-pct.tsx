import React from 'react';

import { Field, Input } from 'src/components';

import { FormProps } from '../details-form';
import * as formHelpers from './field.utils';

interface Props {
  disabled: boolean;
  values: FormProps;
  baseField: formHelpers.AvailableCalculations | undefined;
  handleBaseFieldChange: (name: formHelpers.AvailableCalculations) => void;
  handleChangeValues: (values: FormProps) => void;
}

const AprPct: React.FC<Props> = ({
  values,
  baseField,
  disabled,
  handleBaseFieldChange,
  handleChangeValues,
}) => (
  <Field
    disabled={disabled}
    baseField={baseField}
    name="aprPct"
    label="APR %"
    component={Input.Percentage}
    onBlur={() => {
      handleBaseFieldChange('aprPct');
      handleChangeValues(formHelpers.BASE_FIELD_CALCULATIONS.aprPct(values));
    }}
  />
);

export default AprPct;
