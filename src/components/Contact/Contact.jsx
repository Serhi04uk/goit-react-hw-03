import css from "./Contact.module.css";

function Contact({ name, telephone, onDelete, id }) {
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{telephone}</p>
      </div>
      <button className={css.but} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}

export default Contact;
