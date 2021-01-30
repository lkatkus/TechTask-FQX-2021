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

const AgioValue: React.FC<Props> = ({
  values,
  baseField,
  disabled,
  handleBaseFieldChange,
  handleChangeValues,
}) => (
  <Field
    disabled={disabled}
    baseField={baseField}
    name="agioValue"
    label="Agio CHF"
    component={Input.Currency}
    currency="CHF"
    onBlur={() => {
      handleBaseFieldChange('agioValue');

      if (values.financingAmount > 0 && values.agioValue > 0 && values.maturity > 0) {
        handleChangeValues(formHelpers.BASE_FIELD_CALCULATIONS.agioValue(values));
      }
    }}
  />
);

export default AgioValue;
