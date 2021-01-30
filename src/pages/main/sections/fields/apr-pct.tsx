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

const AprPct: React.FC<Props> = ({
  values,
  baseField,
  disabled,
  handleBaseFieldChange,
  handleChangeValue,
}) => (
  <Field
    disabled={disabled}
    baseField={baseField}
    name="aprPct"
    label="APR %"
    component={Input.Percentage}
    onChange={(aprPct: string) => {
      handleBaseFieldChange('aprPct');

      const recalculatedValues = formHelpers.BASE_FIELD_CALCULATIONS.aprPct({
        ...values,
        aprPct: Number(aprPct),
      });

      handleChangeValue('aprPct', Number(aprPct));
      handleChangeValue('agioPct', recalculatedValues.agioPct);
      handleChangeValue('agioPct', recalculatedValues.agioPct);
      handleChangeValue('enoteFaceValue', recalculatedValues.enoteFaceValue);
    }}
  />
);

export default AprPct;
