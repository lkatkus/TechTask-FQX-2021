import styled from 'styled-components';

interface Props {
  isBaseField: boolean;
}

export default styled.div<Props>`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 10px;
  background-color: ${({ isBaseField }) => (isBaseField ? 'lightblue' : undefined)};
`;
