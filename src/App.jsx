import { useState, useEffect } from "react";

import contacts from "./components/contacts.json";

import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  const [сontacts, setContacts] = useState(() => {
    const users = contacts;
    if (window.localStorage.getItem("user")) {
      return JSON.parse(window.localStorage.getItem("user"));
    }
    return users;
  });

  const [filter, setFilter] = useState("");
  function handleClick(user) {
    setContacts((prevValue) => {
      return [...prevValue, user];
    });
  }

  const deleteUser = (userId) => {
    setContacts((prevValue) => {
      return prevValue.filter((list) => list.id !== userId);
    });
  };

  useEffect(() => {
    window.localStorage.setItem("user", JSON.stringify(сontacts));
  }, [сontacts]);

  const check = сontacts.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <button
        type="click"
        onClick={() => {
          window.localStorage.clear();
        }}
      >
        clear localStorage
      </button>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleClick} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={check} onDelete={deleteUser} />
    </>
  );
};

export default App;
