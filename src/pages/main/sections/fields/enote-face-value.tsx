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

const EnoteFaceValue: React.FC<Props> = ({
  values,
  baseField,
  disabled,
  handleBaseFieldChange,
  handleChangeValues,
}) => (
  <Field
    disabled={disabled}
    baseField={baseField}
    name="enoteFaceValue"
    label="eNote Face Value"
    component={Input.Currency}
    currency="CHF"
    onBlur={() => {
      handleBaseFieldChange('enoteFaceValue');

      if (values.financingAmount > 0 && values.enoteFaceValue > 0) {
        handleChangeValues(formHelpers.BASE_FIELD_CALCULATIONS.enoteFaceValue(values));
      }
    }}
  />
);

export default EnoteFaceValue;
