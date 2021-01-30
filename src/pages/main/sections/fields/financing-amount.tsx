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

const FinancingAmount: React.FC<Props> = ({ values, baseField, handleChangeValues }) => (
  <Field
    name="financingAmount"
    label="Financing Amount (Purchase Price)"
    component={Input.Currency}
    currency="CHF"
    validate={validations.isMore(0, 'Financing Amount cannot be less than 0')}
    onChange={(financingAmount: string) => {
      const recalculatedValues = formHelpers.onMaturityChange(
        { ...values, financingAmount: Number(financingAmount) },
        baseField,
      );

      if (recalculatedValues) {
        handleChangeValues(recalculatedValues);
      }
    }}
  />
);

export default FinancingAmount;
