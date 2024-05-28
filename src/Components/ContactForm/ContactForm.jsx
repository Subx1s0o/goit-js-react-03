import { Formik, Field, Form, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import css from "./contactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(15, "Too Long!")
    .required("Required")
    .matches(/^[A-Za-z\s]+$/, "Name can only contain english letters"),
  phone: Yup.string()
    .min(4, "Too Short!")
    .max(30, "Too Long!")
    .required("Required")
    .matches(/^\d+$/, "Phone must be a number"),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, { resetForm }) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.phone,
    });
    resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{ name: "", phone: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isValid }) => (
          <Form className={css.form}>
            <label className={css.label} htmlFor="name">
              Name
              <Field id="name" type="text" name="name" />
              <ErrorMessage
                name="name"
                component="div"
                className={css.errors}
              />
            </label>

            <label className={css.label} htmlFor="phone">
              Phone
              <Field id="phone" type="text" name="phone" />
              <ErrorMessage
                name="phone"
                component="div"
                className={css.errors}
              />
            </label>

            <button type="submit" disabled={!isValid}>
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
