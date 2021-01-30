import React, { PropsWithChildren } from 'react';
import { Formik, Form as FormikForm, FormikErrors } from 'formik';

interface FormData<T> {
  values: T;
  errors: FormikErrors<T>;
}

interface FormActions<T> {
  setFieldValue: (field: string, value: string | number) => void;
  setValues: (values: T) => void;
}
interface Props<T> {
  handleSubmit: (values: T) => void;
  initialValues: T;
  children: (d: FormData<T>, a: FormActions<T>) => JSX.Element;
}

const Form = <T,>({
  handleSubmit,
  initialValues,
  children,
}: PropsWithChildren<Props<T>>): JSX.Element => (
  <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    {({ values, errors, setFieldValue, setValues }) => (
      <FormikForm>{children({ values, errors }, { setFieldValue, setValues })}</FormikForm>
    )}
  </Formik>
);

export default Form;
