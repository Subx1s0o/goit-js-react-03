import { Formik, Field, Form } from "formik";
import { nanoid } from "nanoid";

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
      <Formik initialValues={{ name: "", phone: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="name" />
          <Field type="yext" name="phone" />
          <button type="submit">add </button>
        </Form>
      </Formik>
    </div>
  );
}
