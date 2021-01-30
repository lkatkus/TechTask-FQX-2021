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

const AgioPct: React.FC<Props> = ({
  values,
  baseField,
  disabled,
  handleBaseFieldChange,
  handleChangeValue,
}) => (
  <Field
    disabled={disabled}
    baseField={baseField}
    name="agioPct"
    label="Agio %"
    component={Input.Percentage}
    onChange={(agioPct: string) => {
      handleBaseFieldChange('agioPct');

      const recalculatedValues = formHelpers.BASE_FIELD_CALCULATIONS.agioPct({
        ...values,
        agioPct: Number(agioPct),
      });

      handleChangeValue('agioPct', Number(agioPct));
      handleChangeValue('agioValue', recalculatedValues.agioValue);
      handleChangeValue('aprPct', recalculatedValues.aprPct);
      handleChangeValue('enoteFaceValue', recalculatedValues.enoteFaceValue);
    }}
  />
);

export default AgioPct;
