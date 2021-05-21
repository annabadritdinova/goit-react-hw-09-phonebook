// import { connect } from 'react-redux';
import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";
import PropTypes from "prop-types";
import * as phonebookActions from "../../redux/phonebook/phonebook-actions";
import styles from "./Filter.module.css";

export default function Filter() {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();

  const onChange = useCallback(
    (e) => dispatch(phonebookActions.changeFilter(e.currentTarget.value)),
    [dispatch]
  );

  return (
    <label className={styles.label}>
      Find contacts by name
      <br />
      <input
        type="text"
        value={value}
        placeholder="Find"
        onChange={onChange}
        className={styles.input}
      />
    </label>
  );
}

Filter.defaultProps = {
  value: "",
};

Filter.propTypes = {
  value: PropTypes.string,
};

// const mapStateToProps = state => ({
//  value: getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//  onChange: e => dispatch(phonebookActions.changeFilter(e.currentTarget.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);