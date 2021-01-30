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

const EnoteDueDate: React.FC<Props> = ({ values, baseField, handleChangeValues }) => (
  <Field
    disabled={!values.paymentDate}
    name="enoteDueDate"
    label="eNote Due Date"
    component={Input.Date}
    min={values.paymentDate}
    validate={validations.isRequired()}
    onChange={(value: string) => {
      if (!!values.paymentDate && value) {
        const newMaturity = formHelpers.calculateMaturity(
          new Date(values.paymentDate),
          new Date(value),
        );

        const recalculatedValues = formHelpers.onMaturityChange(
          { ...values, enoteDueDate: value, maturity: newMaturity },
          baseField,
        );

        if (recalculatedValues) {
          handleChangeValues(recalculatedValues);
        }
      } else {
        handleChangeValues({ ...values, enoteDueDate: value });
      }
    }}
  />
);

export default EnoteDueDate;
