import React from 'react';

import { Field, Input } from 'src/components';
import * as validations from 'src/utils/validations';

import { FormProps } from '../details-form';
import * as formHelpers from './field.utils';

interface Props {
  values: FormProps;
  baseField?: formHelpers.AvailableCalculations | undefined;
  handleChangeValues: (values: FormProps) => void;
}

const PaymentDate: React.FC<Props> = ({ values, baseField, handleChangeValues }) => (
  <Field
    disabled={!values.paymentDate}
    baseField={baseField}
    name="maturity"
    label="Maturity"
    component={Input.Number}
    validate={validations.isMore(0, 'Maturity cannot be less than 0')}
    onChange={(maturity: string) => {
      const recalculatedValues = formHelpers.onMaturityChange(
        { ...values, maturity: Number(maturity) },
        baseField,
      );

      if (recalculatedValues) {
        handleChangeValues(recalculatedValues);
      }
    }}
  />
);

export default PaymentDate;
