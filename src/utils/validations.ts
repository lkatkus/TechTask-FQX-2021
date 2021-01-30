import { isEmpty, isNil } from 'ramda';

export const isRequired = (errorMessage = 'This field is required') => (
  value: string | number,
): string | undefined => {
  if (isEmpty(value) || isNil(value)) {
    return errorMessage;
  }
};

export const isMore = (b: number, errorMessage: string) => (a: number): string | undefined => {
  if (a <= b) {
    return errorMessage;
  }
};
