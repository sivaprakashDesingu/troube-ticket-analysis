import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Login from "./container/Login";
import Dashboard from "./container/Dashboard";
import './assest/styles/master.css'
const App = () => {
  const [loggedIn, setloggedIn] = useState(false);

  function callbackFunction(childData) {
    setloggedIn(childData);
  }

  return (
    <div className="trouble-ticket-app">
      <Router>
        <Switch>
          <Route path="/dashboard">
            {loggedIn ? <Dashboard /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            {loggedIn ? (
              <Redirect to="/dashboard" />
            ) : (
              <Login parentCallback={callbackFunction} />
            )}
          </Route>
        </Switch>
      </Router>
    </div>

  );
};

export default App;
