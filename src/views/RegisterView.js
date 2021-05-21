import React, { useState } from "react";
// import { connect } from 'react-redux';
import { register } from "../redux/auth/auth-operations";
import { useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";

const styles = {
  form: {
    width: 320,
    marginLeft: "auto",
    marginRight: "auto",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        return;
      case "email":
        setEmail(value);
        return;
      case "password":
        setPassword(value);
        return;

      default:
        return alert(`something went wrong`);
    }
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <p className={styles.title}>Register your new account</p>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          <p className={styles.text}>Username</p>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          <p className={styles.text}>Email address</p>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          <p className={styles.text}>Password</p>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />

        <Button type="submit" variant="contained">
          Create account
        </Button>
      </form>
    </div>
  );
}

// const mapDispatchToProps = {
//  onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);