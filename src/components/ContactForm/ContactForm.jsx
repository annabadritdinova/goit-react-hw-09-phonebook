import React, { useState, useCallback } from "react";
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/phonebook/phonebook-operations";
import { getContacts } from "../../redux/phonebook/phonebook-selectors";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [newContact, setNewContact] = useState({ name: "", number: "" });

  const allContacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      setNewContact({ ...newContact, [name]: value });
    },
    [newContact]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const existingContact = allContacts.find(
        (contact) =>
          contact.name.toLowerCase() === newContact.name.toLowerCase()
      );

      if (existingContact) {
        return alert(`${existingContact.name} is already in your contacts`);
      }
      dispatch(addContact(newContact));
      setNewContact({ name: "", number: "" });
    },
    [allContacts, dispatch, newContact]
  );

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.formItem}>
        Name
        <input
          type="text"
          name="name"
          value={newContact.name}
          placeholder="Сontact name"
          onChange={handleChange}
          className={styles.input}
        />
      </label>

      <label className={styles.formItem}>
        Number
        <input
          type="tel"
          name="number"
          value={newContact.number}
          placeholder="Сontact number"
          onChange={handleChange}
          className={styles.input}
        />
      </label>
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}

// const mapStateToProps = state => ({
//  contacts: phonebookSelectors.getVisibleContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
// onSubmit: text => dispatch(phonebookOperations.addContact(text)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
