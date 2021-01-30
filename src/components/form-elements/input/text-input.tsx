import React from 'react';

interface Props {
  // @TODO fix typings
  field: any;
}

const TextInput: React.FC<Props> = ({ field }) => {
  return <input type="text" {...field} />;
};

export default TextInput;
