import React from "react";
// import { connect } from 'react-redux';
import { useSelector } from "react-redux";
import Navigation from "../Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import BackgroundHeader from "../../images/BackgroundHeader.png";

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundImage: `url(${BackgroundHeader})`,
    width: "100%",
    height: 75,
    paddingRight: 25,
    paddingLeft: 25,
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(getIsAuthenticated);
  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

// const mapStateToProps = state => ({
//  isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(AppBar);
