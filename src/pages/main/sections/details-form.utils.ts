import { addDays, differenceInCalendarDays, isValid } from 'date-fns';

export const calculateMaturity = (paymentDate: Date, enoteDueDate: Date): number | void => {
  if (isValid(paymentDate) && isValid(enoteDueDate)) {
    return differenceInCalendarDays(enoteDueDate, paymentDate);
  }

  return undefined;
};

export const calculateDueDate = (paymentDate: Date, maturity: number): Date => {
  return addDays(paymentDate, maturity);
};
