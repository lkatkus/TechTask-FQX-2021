import React, { PropsWithChildren } from 'react';
import { Formik, Form as FormikForm, FormikErrors } from 'formik';

interface FormData<T> {
  values: T;
  errors: FormikErrors<T>;
}
interface Props<T> {
  handleSubmit: (values: T) => void;
  initialValues: T;
  children: (d: FormData<T>) => JSX.Element;
}

const Form = <T,>({
  handleSubmit,
  initialValues,
  children,
}: PropsWithChildren<Props<T>>): JSX.Element => (
  <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    {({ values, errors }) => <FormikForm>{children({ values, errors })}</FormikForm>}
  </Formik>
);

export default Form;
