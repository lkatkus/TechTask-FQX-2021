import React from 'react';

import { Field, Input } from 'src/components';

import { FormProps } from '../details-form';
import * as formHelpers from './field.utils';

interface Props {
  values: FormProps;
  baseField: formHelpers.AvailableCalculations | undefined;
  handleChangeValues: (values: FormProps) => void;
}

const PaymentDate: React.FC<Props> = ({ values, baseField, handleChangeValues }) => (
  <Field
    disabled={!values.paymentDate}
    baseField={baseField}
    name="maturity"
    label="Maturity"
    component={Input.Number}
    onBlur={() => {
      const recalculatedValues = formHelpers.onMaturityChange(values, baseField);

      if (recalculatedValues) {
        handleChangeValues(recalculatedValues);
      }
    }}
  />
);

export default PaymentDate;
