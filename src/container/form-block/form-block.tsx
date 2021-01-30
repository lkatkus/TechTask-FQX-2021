import React from 'react';

interface Props {
  label: string;
  number: number;
}

const FormBlock: React.FC<Props> = ({ label, number, children }) => {
  return (
    <div>
      <div>
        {number} {label}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default FormBlock;
