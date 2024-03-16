import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

function ContactList({ contacts, onDelete }) {
  return (
    <>
      <ul>
        {contacts.map((contact) => {
          return (
            <li className={css.flex} key={contact.id}>
              <Contact
                name={contact.name}
                telephone={contact.number}
                onDelete={onDelete}
                id={contact.id}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ContactList;
