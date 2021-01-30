import React from 'react';

import { Field, Input } from 'src/components';

import { FormProps } from '../details-form';
import * as formHelpers from './field.utils';

interface Props {
  values: FormProps;
  baseField: formHelpers.AvailableCalculations | undefined;
  handleChangeValues: (values: FormProps) => void;
}

const EnoteDueDate: React.FC<Props> = ({ values, baseField, handleChangeValues }) => (
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

        const recalculatedValues = formHelpers.onMaturityChange(
          { ...values, maturity: newMaturity },
          baseField,
        );

        if (recalculatedValues) {
          handleChangeValues(recalculatedValues);
        }
      }
    }}
  />
);

export default EnoteDueDate;
