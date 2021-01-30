import React from 'react';

import { Box } from 'src/core';
import { FormBlock } from 'src/container';
import { Button, Field, Form, FormSection, Input } from 'src/components';

import * as formHelpers from './details-form.utils';

interface FormProps {
  financingAmount: number;
  paymentDate: string;
  enoteDueDate: string;
  maturity: number;
  agioPct: any;
  agioValue: any;
  aprPct: any;
  enoteFaceValue: any;
}

const initialFormValues = {
  financingAmount: 10000,
  paymentDate: '2020-11-26',
  enoteDueDate: '2020-12-18',
  maturity: 22,
  agioPct: '',
  agioValue: '',
  aprPct: '',
  enoteFaceValue: '',
};

const Main: React.FC = () => (
  <Form<FormProps>
    initialValues={initialFormValues}
    handleSubmit={(values) => {
      // @TODO handle submit
      console.log('SUBMIT', values);
    }}
  >
    {({ values }, { setFieldValue, setValues }) => (
      <React.Fragment>
        <FormBlock number={1} label="Details">
          <FormSection label="Financing terms">
            <Box width="100%" mb={10}>
              <Field
                name="financingAmount"
                label="Financing Amount (Purchase Price)"
                component={Input.Currency}
                currency="CHF"
              />
            </Box>
            <Box width="100%">
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

                    setFieldValue('maturity', newMaturity);
                  } else if (!!values.paymentDate && values.maturity > 0) {
                    const newDueDate = formHelpers.calculateDueDate(
                      new Date(values.paymentDate),
                      values.maturity,
                    );

                    setFieldValue('enoteDueDate', newDueDate);
                  }
                }}
              />
            </Box>
          </FormSection>

          <FormSection label="Enote terms">
            <Box width={['100%', '50%']} mb={10} pr={[0, 10]}>
              <Field
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

                    setFieldValue('maturity', newMaturity);
                  }
                }}
              />
            </Box>
            <Box width={['100%', '50%']} mb={10} pl={[0, 10]}>
              <Field
                name="maturity"
                label="Maturity"
                component={Input.Number}
                onBlur={() => {
                  if (!!values.paymentDate && values.maturity > 0) {
                    const newDueDate = formHelpers.calculateDueDate(
                      new Date(values.paymentDate),
                      values.maturity,
                    );

                    setFieldValue('enoteDueDate', newDueDate);
                  }
                }}
              />
            </Box>
            <Box width={['100%', '25%']} mb={10} pr={[0, 10]}>
              <Field
                name="agioPct"
                label="Agio %"
                component={Input.Percentage}
                onBlur={() => {
                  const newAgioValue = formHelpers.calculateAgioValueFromAgioPct(
                    values.agioPct,
                    values.financingAmount,
                  );
                  const newEnoteValue = formHelpers.calculateEnoteValue(
                    values.financingAmount,
                    newAgioValue,
                  );
                  const newAprPct = formHelpers.calculateAprPct(values.agioPct, values.maturity);

                  setValues({
                    ...values,
                    enoteFaceValue: newEnoteValue,
                    agioValue: newAgioValue,
                    aprPct: newAprPct,
                  });
                }}
              />
            </Box>
            <Box width={['100%', '25%']} mb={10} pr={[0, 10]}>
              <Field
                name="agioValue"
                label="Agio CHF"
                component={Input.Currency}
                currency="CHF"
                onBlur={() => {
                  if (values.financingAmount > 0 && values.agioValue > 0 && values.maturity > 0) {
                    const newEnoteValue = formHelpers.calculateEnoteValue(
                      values.financingAmount,
                      values.agioValue,
                    );
                    const newAgioPct = formHelpers.calculateAgioPct(
                      values.agioValue,
                      values.financingAmount,
                    );
                    const newAprPct = formHelpers.calculateAprPct(newAgioPct, values.maturity);

                    setValues({
                      ...values,
                      enoteFaceValue: newEnoteValue,
                      agioPct: newAgioPct,
                      aprPct: newAprPct,
                    });
                  }
                }}
              />
            </Box>
            <Box width={['100%', '50%']} mb={10} pl={[0, 10]}>
              <Field
                name="aprPct"
                label="APR %"
                component={Input.Percentage}
                onBlur={() => {
                  const newAgioPct = formHelpers.calculateAgioPctFromAprPct(
                    values.aprPct,
                    values.maturity,
                  );
                  const newAgioValue = formHelpers.calculateAgioValueFromAgioPct(
                    newAgioPct,
                    values.financingAmount,
                  );
                  const newEnoteValue = formHelpers.calculateEnoteValue(
                    values.financingAmount,
                    newAgioValue,
                  );

                  setValues({
                    ...values,
                    enoteFaceValue: newEnoteValue,
                    agioValue: newAgioValue,
                    agioPct: newAgioPct,
                  });
                }}
              />
            </Box>
            <Box width="100%">
              <Field
                name="enoteFaceValue"
                label="eNote Face Value"
                component={Input.Currency}
                currency="CHF"
                onBlur={() => {
                  if (
                    values.financingAmount > 0 &&
                    values.enoteFaceValue > 0 &&
                    values.enoteFaceValue > values.financingAmount
                  ) {
                    const newAgioValue = formHelpers.calculateAgioValue(
                      values.enoteFaceValue,
                      values.financingAmount,
                    );

                    setFieldValue('agioValue', newAgioValue);
                  }
                }}
              />
            </Box>
          </FormSection>

          <Button type="submit" label="Continue" />
        </FormBlock>

        {JSON.stringify(values)}
      </React.Fragment>
    )}
  </Form>
);

export default Main;
