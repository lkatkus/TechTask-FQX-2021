import React from 'react';

import { Field, Input } from 'src/components';

import { FormProps } from '../details-form';
import * as formHelpers from './field.utils';

interface Props {
  values: FormProps;
  baseField: formHelpers.AvailableCalculations | undefined;
  handleChangeValue: (name: string, value: any) => void;
  handleChangeValues: (values: FormProps) => void;
}

const PaymentDate: React.FC<Props> = ({
  values,
  baseField,
  handleChangeValue,
  handleChangeValues,
}) => (
  <Field
    disabled={!values.paymentDate}
    baseField={baseField}
    name="maturity"
    label="Maturity"
    component={Input.Number}
    onBlur={() => {
      if (!!values.paymentDate && values.maturity > 0) {
        const newDueDate = formHelpers.calculateDueDate(
          new Date(values.paymentDate),
          values.maturity,
        );

        handleChangeValue('enoteDueDate', newDueDate);
      }

      if (baseField) {
        const recalculatedValues = formHelpers.calculateRelated(values, baseField);

        if (recalculatedValues) {
          handleChangeValues(recalculatedValues);
        }
      }
    }}
  />
);

export default PaymentDate;
