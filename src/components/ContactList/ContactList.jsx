import PropTypes from "prop-types";
import IconButton from "../IconButton";
// import { connect } from 'react-redux';
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/phonebook/phonebook-operations";
import { getVisibleContacts } from "../../redux/phonebook/phonebook-selectors";
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = useCallback(
    (contactId) => dispatch(deleteContact(contactId)),
    [dispatch]
  );

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} value={number} className={styles.item}>
          <p className={styles.text}>
            {name}: {number}
          </p>
          <IconButton
            onClick={() => onDeleteContact(id)}
            aria-label="Delete contact"
          >
            <DeleteIcon width="24" height="24" fill="#fff" />
          </IconButton>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};

// const mapStateToProps = state => ({
//  contacts: phonebookSelectors.getVisibleContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//  onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);