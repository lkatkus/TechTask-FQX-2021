import React, { PropsWithChildren } from 'react';
import { Formik, Form as FormikForm, FormikErrors } from 'formik';

interface FormData<T> {
  values: T;
  errors: FormikErrors<T>;
  touched: any;
}

interface FormActions<T> {
  setFieldValue: any;
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
    {({ values, errors, touched, setFieldValue, setValues }) => (
      <FormikForm>{children({ values, errors, touched }, { setFieldValue, setValues })}</FormikForm>
    )}
  </Formik>
);

export default Form;
