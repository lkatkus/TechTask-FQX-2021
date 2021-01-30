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

const AgioPct: React.FC<Props> = ({
  values,
  baseField,
  disabled,
  handleBaseFieldChange,
  handleChangeValues,
}) => (
  <Field
    disabled={disabled}
    baseField={baseField}
    name="agioPct"
    label="Agio %"
    component={Input.Percentage}
    onBlur={() => {
      handleBaseFieldChange('agioPct');
      handleChangeValues(formHelpers.BASE_FIELD_CALCULATIONS.agioPct(values));
    }}
  />
);

export default AgioPct;
