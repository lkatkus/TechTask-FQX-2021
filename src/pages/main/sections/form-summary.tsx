import React from 'react';

interface Props {
  noteValues: any;
}

const FormSummary: React.FC<Props> = ({ noteValues }) => {
  return (
    <div>
      <div>FormSummary</div>
      <div>{JSON.stringify(noteValues)}</div>
    </div>
  );
};

export default FormSummary;
