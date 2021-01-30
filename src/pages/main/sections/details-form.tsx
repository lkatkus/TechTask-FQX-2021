import React, { useState } from 'react';

import { Box } from 'src/core';
import { FormBlock } from 'src/container';
import { Button, Form, FormSection } from 'src/components';

import {
  FinancingAmount,
  Maturity,
  EnoteDueDate,
  AgioPct,
  AgioValue,
  AprPct,
  EnoteFaceValue,
  PaymentDate,
  AvailableCalculations,
} from './fields';

export interface FormProps {
  financingAmount: number;
  paymentDate: string;
  enoteDueDate: string;
  maturity: number;
  agioPct: number;
  agioValue: number;
  aprPct: number;
  enoteFaceValue: number;
}

const initialFormValues = {
  financingAmount: 0,
  paymentDate: '',
  enoteDueDate: '',
  maturity: 0,
  agioPct: 0,
  agioValue: 0,
  aprPct: 0,
  enoteFaceValue: 0,
};

interface Props {
  handleSubmit: (values: FormProps) => void;
}

const Main: React.FC<Props> = ({ handleSubmit }) => {
  const [baseField, setBaseField] = useState<AvailableCalculations | undefined>();

  return (
    <Form<FormProps> initialValues={initialFormValues} handleSubmit={handleSubmit}>
      {({ values }, { setValues }) => {
        const isDisabled = !values.maturity;

        return (
          <React.Fragment>
            <FormBlock number={1} label="Details">
              <FormSection label="Financing terms">
                <Box width="100%" mb={10}>
                  <FinancingAmount />
                </Box>
                <Box width="100%">
                  <PaymentDate
                    baseField={baseField}
                    values={values}
                    handleChangeValues={setValues}
                  />
                </Box>
              </FormSection>

              <FormSection label="Enote terms">
                <Box width={['100%', '50%']} mb={10} pr={[0, 10]}>
                  <EnoteDueDate
                    baseField={baseField}
                    values={values}
                    handleChangeValues={setValues}
                  />
                </Box>
                <Box width={['100%', '50%']} mb={10} pl={[0, 10]}>
                  <Maturity values={values} baseField={baseField} handleChangeValues={setValues} />
                </Box>
                <Box width={['100%', '25%']} mb={10} pr={[0, 10]}>
                  <AgioPct
                    disabled={isDisabled}
                    values={values}
                    baseField={baseField}
                    handleBaseFieldChange={(name) => setBaseField(name)}
                    handleChangeValues={setValues}
                  />
                </Box>
                <Box width={['100%', '25%']} mb={10} pr={[0, 10]}>
                  <AgioValue
                    disabled={isDisabled}
                    values={values}
                    baseField={baseField}
                    handleBaseFieldChange={setBaseField}
                    handleChangeValues={setValues}
                  />
                </Box>
                <Box width={['100%', '50%']} mb={10} pl={[0, 10]}>
                  <AprPct
                    disabled={isDisabled}
                    values={values}
                    baseField={baseField}
                    handleBaseFieldChange={setBaseField}
                    handleChangeValues={setValues}
                  />
                </Box>
                <Box width="100%">
                  <EnoteFaceValue
                    disabled={isDisabled}
                    values={values}
                    baseField={baseField}
                    handleBaseFieldChange={setBaseField}
                    handleChangeValues={setValues}
                  />
                </Box>
              </FormSection>

              <Button type="submit" label="Continue" />
            </FormBlock>
          </React.Fragment>
        );
      }}
    </Form>
  );
};

export default Main;
