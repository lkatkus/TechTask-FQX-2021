import React from 'react';

import { Field, Input } from 'src/components';
import * as validations from 'src/utils/validations';

import { FormProps } from '../details-form';
import * as formHelpers from './field.utils';

interface Props {
  disabled: boolean;
  values: FormProps;
  baseField: formHelpers.AvailableCalculations | undefined;
  handleBaseFieldChange: (name: formHelpers.AvailableCalculations) => void;
  handleChangeValue: any;
}

const EnoteFaceValue: React.FC<Props> = ({
  values,
  baseField,
  disabled,
  handleBaseFieldChange,
  handleChangeValue,
}) => (
  <Field
    disabled={disabled}
    baseField={baseField}
    name="enoteFaceValue"
    label="eNote Face Value"
    component={Input.Currency}
    currency="CHF"
    validate={validations.isMore(
      values.financingAmount,
      'eNote Face Value must be bigger than Financing Amount',
    )}
    onChange={(enoteFaceValue: string) => {
      handleBaseFieldChange('enoteFaceValue');

      const recalculatedValues = formHelpers.BASE_FIELD_CALCULATIONS.enoteFaceValue({
        ...values,
        enoteFaceValue: Number(enoteFaceValue),
      });

      handleChangeValue('enoteFaceValue', enoteFaceValue);
      handleChangeValue('agioPct', recalculatedValues.agioPct);
      handleChangeValue('agioValue', recalculatedValues.agioValue);
      handleChangeValue('aprPct', recalculatedValues.aprPct);
    }}
  />
);

export default EnoteFaceValue;
