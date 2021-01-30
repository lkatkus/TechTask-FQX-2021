import React from 'react';

interface Props {
  label: string;
}

const FormSection: React.FC<Props> = ({ label, children }) => {
  return (
    <div>
      <div>{label}</div>
      <div>{children}</div>
    </div>
  );
};

export default FormSection;
