import { addDays, differenceInCalendarDays, isValid } from 'date-fns';

import { FormProps } from './details-form';

export const BASE_FIELD_CALCULATIONS = {
  agioPct: (values: FormProps): FormProps => {
    const newAgioValue = calculateAgioValueFromAgioPct(values.agioPct, values.financingAmount);
    const newAprPct = calculateAprPct(values.agioPct, values.maturity);
    const newEnoteValue = calculateEnoteValue(values.financingAmount, newAgioValue);

    const recalculatedValues: FormProps = {
      ...values,
      enoteFaceValue: newEnoteValue,
      agioValue: newAgioValue,
      aprPct: newAprPct,
    };

    return recalculatedValues;
  },
  agioValue: (values: FormProps) => {
    const newAgioPct = calculateAgioPct(values.agioValue, values.financingAmount);
    const newAprPct = calculateAprPct(newAgioPct, values.maturity);
    const newEnoteValue = calculateEnoteValue(values.financingAmount, values.agioValue);

    const recalculatedValues: FormProps = {
      ...values,
      enoteFaceValue: newEnoteValue,
      agioPct: newAgioPct,
      aprPct: newAprPct,
    };

    return recalculatedValues;
  },
  aprPct: (values: FormProps) => {
    const newAgioPct = calculateAgioPctFromAprPct(values.aprPct, values.maturity);
    const newAgioValue = calculateAgioValueFromAgioPct(newAgioPct, values.financingAmount);
    const newEnoteValue = calculateEnoteValue(values.financingAmount, newAgioValue);

    const recalculatedValues: FormProps = {
      ...values,
      enoteFaceValue: newEnoteValue,
      agioValue: newAgioValue,
      agioPct: newAgioPct,
    };

    return recalculatedValues;
  },
  enoteFaceValue: (values: FormProps) => {
    const newAgioValue = calculateAgioValue(values.enoteFaceValue, values.financingAmount);
    const newAgioPct = calculateAgioPct(newAgioValue, values.financingAmount);
    const newAprPct = calculateAprPct(newAgioPct, values.maturity);

    const recalculatedValues: FormProps = {
      ...values,
      agioValue: newAgioValue,
      agioPct: newAgioPct,
      aprPct: newAprPct,
    };

    return recalculatedValues;
  },
};

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

export type AvailableCalculations = 'agioPct' | 'agioValue' | 'aprPct' | 'enoteFaceValue';

export const calculateRelated = (
  values: FormProps,
  baseField: AvailableCalculations,
): FormProps | void => {
  if (BASE_FIELD_CALCULATIONS[baseField]) {
    return BASE_FIELD_CALCULATIONS[baseField](values);
  }
};
