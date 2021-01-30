import styled from 'styled-components';

interface StyledInputProps {
  hasError?: boolean;
}

export default styled.input<StyledInputProps>`
  width: 100%;
  padding: 5px;
  color: ${({ hasError }) => (hasError ? 'red' : undefined)};
  border-color: ${({ hasError }) => (hasError ? 'red' : undefined)};
`;
