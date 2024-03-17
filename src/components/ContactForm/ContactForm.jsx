import { nanoid } from "nanoid";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function ContactForm({ onSubmit }) {
  function handleSubmit(values, actions) {
    onSubmit({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });

    actions.resetForm();
  }

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!!")
      .required("Required"),
  });

  const nameId = useId();
  const pfoneId = useId();

  return (
    <Formik
      validationSchema={FeedbackSchema}
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={css.disp}>
        <label htmlFor={nameId}>Name</label>
        <Field className={css.inputText} type="text" name="name" id={nameId} />
        <ErrorMessage className={css.error} name="name" as="span" />
        <label htmlFor={pfoneId}>Number</label>
        <Field
          className={css.inputTel}
          type="tel"
          name="number"
          id={pfoneId}
          placeholder="+380*********"
        />
        <ErrorMessage className={css.error} name="number" as="span" />
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;

// function ContactForm({ onLogin }) {
//   function handleSubmit(e) {
//     e.preventDefault();
//     const form = e.target;
//     const valueName = e.target.elements.name.value;
//     const valuePhone = e.target.elements.phone.value;
//     onLogin({
//       id: nanoid(),
//       name: valueName,
//       number: valuePhone,
//     });

//     form.reset();
//   }

//   return (
//     <form onSubmit={handleSubmit} className={css.disp}>
//       <label htmlFor="name">Name</label>
//       <input className={css.inputText} type="text" name="name" />
//       <label htmlFor="phone">Number</label>
//       <input className={css.inputTel} type="tel" name="phone" />
//       <button className={css.button} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// }
