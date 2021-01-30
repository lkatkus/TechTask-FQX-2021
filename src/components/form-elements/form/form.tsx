import React from 'react';

interface Props {
  // @TODO add proper typings
  handleSubmit: () => void;
}

const Form: React.FC<Props> = ({ handleSubmit, children }) => {
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
