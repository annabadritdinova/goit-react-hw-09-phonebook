import React from 'react';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIsAuthenticated } from '../redux/auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 400,
    fontSize: 20,
    color: 'white',
  },
  activeLink: {
    color: 'white',
  },
};

export default function Navigation() {
  const isLogged = useSelector(getIsAuthenticated);
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>

      {isLogged && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

Navigation.defaultProps = {
  isLogged: false,
};

Navigation.propTypes = {
  isLogged: PropTypes.bool,
};

// const mapStateToProps = state => ({
//  isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(Navigation);