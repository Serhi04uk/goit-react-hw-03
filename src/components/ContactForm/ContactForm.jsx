import { nanoid } from "nanoid";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function ContactForm({ onLogin }) {
  function handleSubmit(values, actions) {
    console.log(values);
    // e.preventDefault();
    // const form = e.target;
    // const valueName = e.target.elements.name.value;
    // const valuePhone = e.target.elements.phone.value;
    onLogin({
      id: nanoid(),
      name: values.name,
      number: values.phone,
    });

    actions.resetForm();
  }

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phone: Yup.number()
      .min(99999999999, "Too Short!")
      .max(999999999999, "Too Long!!")
      .required("Required"),
  });

  return (
    <Formik
      validationSchema={FeedbackSchema}
      initialValues={{ name: "", phone: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={css.disp}>
        <label htmlFor="name">Name</label>
        <Field className={css.inputText} type="text" name="name" id={useId()} />
        <ErrorMessage className={css.error} name="name" as="span" />
        <label htmlFor="phone">Number</label>
        <Field
          className={css.inputTel}
          type="tel"
          name="phone"
          id={useId()}
          placeholder="+380*********"
        />
        <ErrorMessage className={css.error} name="phone" as="span" />
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
