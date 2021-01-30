import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  background-color: blue;
  text-transform: uppercase;

  &:disabled {
    background: #dddddd;
    cursor: not-allowed;
  }
`;

interface Props {
  type: 'submit' | 'button';
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ type, label, disabled, onClick }) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {label}
    </StyledButton>
  );
};

export default Button;
