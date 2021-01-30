import React from 'react';

import { Field, Input } from 'src/components';

import { FormProps } from '../details-form';
import * as formHelpers from './field.utils';

interface Props {
  values: FormProps;
  handleChangeValue: (name: string, value: any) => void;
}

const EnoteDueDate: React.FC<Props> = ({ values, handleChangeValue }) => (
  <Field
    disabled={!values.paymentDate}
    name="enoteDueDate"
    label="eNote Due Date"
    component={Input.Date}
    min={values.paymentDate}
    onBlur={() => {
      if (!!values.paymentDate && !!values.enoteDueDate) {
        const newMaturity = formHelpers.calculateMaturity(
          new Date(values.paymentDate),
          new Date(values.enoteDueDate),
        );

        handleChangeValue('maturity', newMaturity);
      }
    }}
  />
);

export default EnoteDueDate;
