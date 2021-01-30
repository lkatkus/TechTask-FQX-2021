import React from 'react';

import { FormBlock } from 'src/container';
import { Button, Field, Form, FormSection, Input } from 'src/components';

interface FormProps {
  financingAmount: any;
  paymentDate: any;
  enoteDueDate: any;
  maturity: any;
  agioPct: any;
  agioValue: any;
  aprPct: any;
  enoteFaceValue: any;
}

const initialFormValues = {
  financingAmount: '',
  paymentDate: '',
  enoteDueDate: '',
  maturity: '',
  agioPct: '',
  agioValue: '',
  aprPct: '',
  enoteFaceValue: '',
};

const Main: React.FC = () => {
  return (
    <div>
      <Form<FormProps>
        initialValues={initialFormValues}
        handleSubmit={(values) => {
          // @TODO handle submit
          console.log('SUBMIT', values);
        }}
      >
        {({ values }) => (
          <React.Fragment>
            <FormBlock number={1} label="Details">
              <FormSection label="Financing terms">
                <Field name="financingAmount" label="Financing Amount" component={Input.Text} />
                <Field name="paymentDate" label="Payment date" component={Input.Text} />
              </FormSection>

              <FormSection label="Enote terms">
                <Field name="enoteDueDate" label="eNote Due Date" component={Input.Text} />
                <Field name="maturity" label="Maturity" component={Input.Text} />
                <Field name="agioPct" label="Agio %" component={Input.Text} />
                <Field name="agioValue" label="Agio CHF" component={Input.Text} />
                <Field name="aprPct" label="APR %" component={Input.Text} />
                <Field name="enoteFaceValue" label="eNote Face Value" component={Input.Text} />
              </FormSection>
            </FormBlock>

            <div>{JSON.stringify(values)}</div>

            <Button type="submit" label="Continue" />
          </React.Fragment>
        )}
      </Form>
    </div>
  );
};

export default Main;
