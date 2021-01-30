import React from 'react';

import { Field, Input } from 'src/components';

import { FormProps } from '../details-form';
import * as formHelpers from './field.utils';

interface Props {
  disabled: boolean;
  values: FormProps;
  baseField: formHelpers.AvailableCalculations | undefined;
  handleBaseFieldChange: (name: formHelpers.AvailableCalculations) => void;
  handleChangeValue: (field: string, value: string | number) => void;
}

const AgioValue: React.FC<Props> = ({
  values,
  baseField,
  disabled,
  handleBaseFieldChange,
  handleChangeValue,
}) => (
  <Field
    disabled={disabled}
    baseField={baseField}
    name="agioValue"
    label="Agio CHF"
    component={Input.Currency}
    currency="CHF"
    onChange={(agioValue: string) => {
      handleBaseFieldChange('agioValue');

      const recalculatedValues = formHelpers.BASE_FIELD_CALCULATIONS.agioValue({
        ...values,
        agioValue: Number(agioValue),
      });

      handleChangeValue('agioValue', Number(agioValue));
      handleChangeValue('agioPct', recalculatedValues.agioPct);
      handleChangeValue('aprPct', recalculatedValues.aprPct);
      handleChangeValue('enoteFaceValue', recalculatedValues.enoteFaceValue);
    }}
  />
);

export default AgioValue;
