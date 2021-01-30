import React from 'react';
import { ErrorMessage } from 'formik';
import styled from 'styled-components';

const StyledError = styled.div`
  color: red;
  margin-top: 5px;
`;

interface Props {
  name: string;
}

const FieldError: React.FC<Props> = ({ name }) => {
  return <ErrorMessage name={name}>{(error) => <StyledError>{error}</StyledError>}</ErrorMessage>;
};

export default FieldError;
