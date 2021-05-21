import React, { Suspense, useEffect, lazy } from "react";
import { Switch } from "react-router";
import { useDispatch } from "react-redux";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
// import { connect } from 'react-redux';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { getCurrentUser } from "./redux/auth/auth-operations";
import PrivateRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";

const HomeView = lazy(() => import("./views/HomeView"));

const RegisterView = lazy(() => import("./views/RegisterView"));

const LoginView = lazy(() => import("./views/LoginView"));

const PhonebookView = lazy(() => import("./views/PhonebookView"));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <div className="App">
      <>
        <AppBar />
        <Suspense
          fallback={
            <Loader type="Oval" color="#00BFFF" height={50} width={50} />
          }
        >
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />

            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterView}
            />

            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginView}
            />

            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={PhonebookView}
            />
          </Switch>
        </Suspense>
      </>
    </div>
  );
}

// const mapDispatchToProps = {
//  onGetCurrentUser: getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
