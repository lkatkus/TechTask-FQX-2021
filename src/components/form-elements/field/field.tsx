import React from 'react';

interface Props {
  label: string;
}

const Field: React.FC<Props> = ({ label }) => {
  return <div>{label}</div>;
};

export default Field;
