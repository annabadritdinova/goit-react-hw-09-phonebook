import React, { useState } from "react";
// import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import { logIn } from "../redux/auth/auth-operations";
import Button from "@material-ui/core/Button";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 15,
  },
};

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    name === "email" ? setEmail(value) : setPassword(value);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <p className={styles.title}>Log in</p>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
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
          Sign in
        </Button>
      </form>
    </div>
  );
}

// const mapDispatchToProps = {
//  onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);
