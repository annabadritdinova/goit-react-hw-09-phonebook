import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function PublicRoute({ children, redirectTo, ...routeProps }) {
  const isLoggedIn = useSelector(getIsAuthenticated);

  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}

// const mapStateToProps = state => ({
//  isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PublicRoute);