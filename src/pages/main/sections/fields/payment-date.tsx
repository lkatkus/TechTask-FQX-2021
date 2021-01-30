import React from 'react';

import { Field, Input } from 'src/components';

import { FormProps } from '../details-form';
import * as formHelpers from './field.utils';

interface Props {
  values: FormProps;
  handleChangeValue: (name: string, value: any) => void;
}

const PaymentDate: React.FC<Props> = ({ values, handleChangeValue }) => (
  <Field
    name="paymentDate"
    label="Payment date"
    component={Input.Date}
    max={values.enoteDueDate}
    onBlur={() => {
      if (!!values.paymentDate && !!values.enoteDueDate) {
        const newMaturity = formHelpers.calculateMaturity(
          new Date(values.paymentDate),
          new Date(values.enoteDueDate),
        );

        handleChangeValue('maturity', newMaturity);
      } else if (!!values.paymentDate && values.maturity > 0) {
        const newDueDate = formHelpers.calculateDueDate(
          new Date(values.paymentDate),
          values.maturity,
        );

        handleChangeValue('enoteDueDate', newDueDate);
      }
    }}
  />
);

export default PaymentDate;
