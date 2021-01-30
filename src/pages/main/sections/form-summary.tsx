import React from 'react';

import { Box } from 'src/core';
import { Button, PageBlock } from 'src/components';

import { FormProps } from './details-form';

const LABELS = {
  financingAmount: 'Financing Amount (Purchase Price)',
  paymentDate: 'Payment date',
  enoteDueDate: 'eNote Due Date',
  maturity: 'Maturity (days)',
  agioPct: 'Agio %',
  agioValue: 'Agio CHF',
  aprPct: 'APR %',
  enoteFaceValue: 'eNote Face Value',
};

interface Props {
  noteValues: FormProps;
  handleReset: () => void;
}

const FormSummary: React.FC<Props> = ({ handleReset, noteValues }) => (
  <PageBlock label="Form summary">
    {(Object.keys(noteValues) as Array<keyof FormProps>).map((key) => (
      <Box key={key} display="flex" justifyContent="space-between" mb={10}>
        <Box width="30%">{LABELS[key]}</Box>
        <Box>-</Box>
        <Box width="60%">{noteValues[key]}</Box>
      </Box>
    ))}
    <Box mt={20}>
      <Button type="button" label="Try again" onClick={handleReset} />
    </Box>
  </PageBlock>
);

export default FormSummary;
