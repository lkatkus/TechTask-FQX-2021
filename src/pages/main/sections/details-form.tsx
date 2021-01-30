import React from 'react';

import { Box } from 'src/core';
import { FormBlock } from 'src/container';
import { Button, Field, Form, FormSection, Input } from 'src/components';

import { calculateMaturity, calculateDueDate } from './details-form.utils';

interface FormProps {
  financingAmount: number;
  paymentDate: string;
  enoteDueDate: string;
  maturity: any;
  agioPct: any;
  agioValue: any;
  aprPct: any;
  enoteFaceValue: any;
}

const initialFormValues = {
  financingAmount: 0,
  paymentDate: '',
  enoteDueDate: '',
  maturity: '',
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
    {({ values }, { setFieldValue }) => (
      <React.Fragment>
        <FormBlock number={1} label="Details">
          <FormSection label="Financing terms">
            <Box width="100%" mb={10}>
              <Field name="financingAmount" label="Financing Amount" component={Input.Text} />
            </Box>
            <Box width="100%">
              <Field
                name="paymentDate"
                label="Payment date"
                component={Input.Date}
                max={values.paymentDate}
                onBlur={() => {
                  if (!!values.paymentDate && !!values.enoteDueDate) {
                    const newMaturity = calculateMaturity(
                      new Date(values.paymentDate),
                      new Date(values.enoteDueDate),
                    );

                    setFieldValue('maturity', newMaturity);
                  } else if (!!values.paymentDate && values.maturity > 0) {
                    const newDueDate = calculateDueDate(
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
                    const newMaturity = calculateMaturity(
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
                    const newDueDate = calculateDueDate(
                      new Date(values.paymentDate),
                      values.maturity,
                    );

                    setFieldValue('enoteDueDate', newDueDate);
                  }
                }}
              />
            </Box>
            <Box width={['100%', '25%']} mb={10} pr={[0, 10]}>
              <Field name="agioPct" label="Agio %" component={Input.Text} />
            </Box>
            <Box width={['100%', '25%']} mb={10} pr={[0, 10]}>
              <Field name="agioValue" label="Agio CHF" component={Input.Text} />
            </Box>
            <Box width={['100%', '50%']} mb={10} pl={[0, 10]}>
              <Field name="aprPct" label="APR %" component={Input.Text} />
            </Box>
            <Box width="100%">
              <Field name="enoteFaceValue" label="eNote Face Value" component={Input.Text} />
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
