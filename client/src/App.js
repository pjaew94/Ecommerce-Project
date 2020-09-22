import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";


import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import AdminRegister from "./components/auth/AdminRegister";
import RootRegister from "./components/auth/RootRegister";
import Dashboard from "./components/layout/Dashboard";
import Alert from './components/layout/Alert'

import setAuthToken from './utils/setAuthToken'
import { loadUser } from './actions/auth'

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  },[])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Login} />
          <Alert />
          <Switch>
            {/* <Navbar /> */}
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/adminregister" component={AdminRegister} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
