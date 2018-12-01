import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import * as Pages from "./screens";
import { Header, Footer } from "./components";
import { getUser } from "./store/selectors/userSelectors";

class App extends Component {
  render() {
    const { user } = this.props;
    return (
      <Router>
        <div className='ui container'>
          <Header user={user} />
          <Switch>
            <Route path='/' exact component={Pages.MainPage} />
            <Route path='/login' component={Pages.LoginPage} />
            <Route path='/sign-up' component={Pages.RegisterPage} />
            <Route path='/reset-password' component={Pages.ResetPassword} />
            <Route path='/profile' component={Pages.ProfilePage} />
            <Route path='/books' exact component={Pages.BooksPage} />
            <Route path='/books/:id' component={Pages.BookPage} />
            <Route path='/books/new' component={Pages.AddBookPage} />
          </Switch>
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
