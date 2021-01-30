import React, { useState } from 'react';

import { Box } from 'src/core';
import { FormBlock } from 'src/container';
import { Button, Field, Form, FormSection, Input } from 'src/components';

import * as formHelpers from './details-form.utils';

export interface FormProps {
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

const Main: React.FC = () => {
  const [baseField, setBaseField] = useState<formHelpers.AvailableCalculations>();

  return (
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

                      setFieldValue('enoteDueDate', newDueDate);
                    }

                    if (baseField) {
                      const recalculatedValues = formHelpers.calculateRelated(values, baseField);

                      if (recalculatedValues) {
                        setValues(recalculatedValues);
                      }
                    }
                  }}
                />
              </Box>
              <Box width={['100%', '25%']} mb={10} pr={[0, 10]}>
                <Field
                  baseField={baseField}
                  name="agioPct"
                  label="Agio %"
                  component={Input.Percentage}
                  onBlur={() => {
                    setBaseField('agioPct');
                    setValues(formHelpers.BASE_FIELD_CALCULATIONS.agioPct(values));
                  }}
                />
              </Box>
              <Box width={['100%', '25%']} mb={10} pr={[0, 10]}>
                <Field
                  baseField={baseField}
                  name="agioValue"
                  label="Agio CHF"
                  component={Input.Currency}
                  currency="CHF"
                  onBlur={() => {
                    setBaseField('agioValue');

                    if (values.financingAmount > 0 && values.agioValue > 0 && values.maturity > 0) {
                      setValues(formHelpers.BASE_FIELD_CALCULATIONS.agioValue(values));
                    }
                  }}
                />
              </Box>
              <Box width={['100%', '50%']} mb={10} pl={[0, 10]}>
                <Field
                  baseField={baseField}
                  name="aprPct"
                  label="APR %"
                  component={Input.Percentage}
                  onBlur={() => {
                    setBaseField('aprPct');
                    setValues(formHelpers.BASE_FIELD_CALCULATIONS.aprPct(values));
                  }}
                />
              </Box>
              <Box width="100%">
                <Field
                  baseField={baseField}
                  name="enoteFaceValue"
                  label="eNote Face Value"
                  component={Input.Currency}
                  currency="CHF"
                  onBlur={() => {
                    setBaseField('enoteFaceValue');

                    if (
                      values.financingAmount > 0 &&
                      values.enoteFaceValue > 0 &&
                      values.enoteFaceValue > values.financingAmount
                    ) {
                      setValues(formHelpers.BASE_FIELD_CALCULATIONS.enoteFaceValue(values));
                    }
                  }}
                />
              </Box>
            </FormSection>

            <Button type="submit" label="Continue" />
          </FormBlock>
        </React.Fragment>
      )}
    </Form>
  );
};

export default Main;
