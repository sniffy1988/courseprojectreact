import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import * as Pages from "./screens";
import { Header, Footer } from "./components";
import { getUser } from "./store/selectors/userSelectors";
import PrivateRoute from "./HOCs/PrivateRoute";

class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <Router>
        <div className='ui container'>
          <Header user={user} />
          <div className='main'>
            <Switch>
              <Route path='/' exact component={Pages.MainPage} />
              <Route path='/login' component={Pages.LoginPage} />
              <Route path='/sign-up' component={Pages.RegisterPage} />
              <Route path='/reset-password' component={Pages.ResetPassword} />
              <PrivateRoute
                path='/profile'
                component={Pages.ProfilePage}
                user={user}
              />
              <PrivateRoute
                path='/books'
                exact
                component={Pages.BooksPage}
                user={user}
              />
              <PrivateRoute
                path='/books/:id'
                component={Pages.BookPage}
                user={user}
              />
              <PrivateRoute
                path='/books/new'
                component={Pages.AddBookPage}
                user={user}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(
  state => {
    return {
      user: getUser(state)
    };
  },
  null
)(App);
