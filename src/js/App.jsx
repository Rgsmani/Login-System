import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import '../scss/app';

import Header from './partials/navigation/header';
import Dashborad from './views/Dashborad';
import Login from './views/Login';
import SignUp from './views/SignUp';
import InvalidLogin from './views/InvalidLogin';

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Header />

            <Switch>
              <Route exact path="/" component={Dashborad} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/invalidlogin" component={InvalidLogin} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }

}