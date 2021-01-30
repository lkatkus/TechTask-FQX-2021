import React from 'react';

import { Field, Input } from 'src/components';

const FinancingAmount: React.FC = () => (
  <Field
    name="financingAmount"
    label="Financing Amount (Purchase Price)"
    component={Input.Currency}
    currency="CHF"
  />
);

export default FinancingAmount;
