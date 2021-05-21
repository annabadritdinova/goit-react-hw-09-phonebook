import { Route, Redirect } from 'react-router-dom';
import React from 'react';
// import { connect } from 'react-redux';
import { getToken } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ children, redirectTo, ...routeProps }) {
  const token = useSelector(getToken);
  return (
    <Route {...routeProps}>
      {Boolean(token) ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}

// const mapStateToProps = state => ({
//  isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);