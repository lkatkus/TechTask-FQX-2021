import React from 'react';

interface Props {
  type: 'submit' | 'button';
  label: string;
}

const Button: React.FC<Props> = ({ type, label }) => {
  return <button type={type}>{label}</button>;
};

export default Button;
