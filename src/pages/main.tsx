import React from 'react';

import { FormBlock } from 'src/container';
import { Button, Field, Form, FormSection } from 'src/components';

const Main: React.FC = () => {
  return (
    <div>
      <Form
        handleSubmit={() => {
          // @TODO handle submit
          console.log('SUBMIT');
        }}
      >
        <FormBlock number={1} label="Details">
          <FormSection label="Financing terms">
            <Field label="Financing Amount" />
            <Field label="Payment date" />
          </FormSection>

          <FormSection label="Enote terms">
            <Field label="eNote Due Date" />
            <Field label="Maturity" />
            <Field label="Agio %" />
            <Field label="Agio CHF" />
            <Field label="APR %" />
            <Field label="eNote Face Value" />
          </FormSection>
        </FormBlock>
        <Button type="submit" label="Continue" />
      </Form>
    </div>
  );
};

export default Main;
