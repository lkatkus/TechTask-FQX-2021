import React from 'react';

import { Field, Input } from 'src/components';
import * as validations from 'src/utils/validations';

const FinancingAmount: React.FC = () => (
  <Field
    name="financingAmount"
    label="Financing Amount (Purchase Price)"
    component={Input.Currency}
    currency="CHF"
    validate={validations.isMore(0, 'Financing Amount cannot be less than 0')}
  />
);

export default FinancingAmount;
