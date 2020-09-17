import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Navbar from "./components/layout/Navbar";
import Login from './components/auth/Login';
import AdminRegister from './components/auth/AdminRegister';
import RootRegister from './components/auth/RootRegister';
import Dashboard from './components/layout/Dashboard'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Login} />
        <Switch>
          {/* <Navbar /> */}
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path='/adminregister' component={AdminRegister} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
