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

export const calculateAgioValue = (enoteFaceValue: number, financingAmount: number): number => {
  return enoteFaceValue - financingAmount;
};

export const calculateAgioValueFromAgioPct = (agioPct: number, financingAmount: number): number => {
  return (agioPct / 100) * financingAmount;
};

export const calculateEnoteValue = (financingAmount: number, agioValue: number): number => {
  return financingAmount + agioValue;
};

export const calculateAgioPct = (agioValue: number, financingAmount: number): number => {
  return (agioValue / financingAmount) * 100;
};

export const calculateAgioPctFromAprPct = (aprPct: number, maturity: number): number => {
  return (aprPct / 360) * maturity;
};

export const calculateAprPct = (agioPct: number, maturity: number): number => {
  return (agioPct / maturity) * 360;
};
