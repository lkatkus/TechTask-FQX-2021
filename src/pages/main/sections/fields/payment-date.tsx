import React from 'react';

import { Field, Input } from 'src/components';
import * as validations from 'src/utils/validations';

import { FormProps } from '../details-form';
import * as formHelpers from './field.utils';

interface Props {
  values: FormProps;
  baseField: formHelpers.AvailableCalculations | undefined;
  handleChangeValues: (values: FormProps) => void;
}

const PaymentDate: React.FC<Props> = ({ values, baseField, handleChangeValues }) => (
  <Field
    name="paymentDate"
    label="Payment date"
    component={Input.Date}
    max={values.enoteDueDate}
    validate={validations.isRequired()}
    onChange={(value: string) => {
      if (!!value && !!values.enoteDueDate) {
        const newMaturity = formHelpers.calculateMaturity(
          new Date(value),
          new Date(values.enoteDueDate),
        );

        const recalculatedValues = formHelpers.onMaturityChange(
          { ...values, paymentDate: value, maturity: newMaturity },
          baseField,
        );

        if (recalculatedValues) {
          handleChangeValues(recalculatedValues);
        }
      } else {
        handleChangeValues({ ...values, paymentDate: value });
      }
    }}
  />
);

export default PaymentDate;
