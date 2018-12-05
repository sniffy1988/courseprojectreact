import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import * as Pages from "./screens";
import { Header, Footer } from "./components";
import { getUserId } from "./store/selectors/userSelectors";
import PrivateRoute from "./HOCs/PrivateRoute";

class App extends Component {
  render() {
    const { userId } = this.props;
    return (
      <Router>
        <div className='ui container'>
          <Header userId={userId} />
          <div className='main'>
            <Switch>
              <Route path='/' exact component={Pages.MainPage} />
              <Route path='/logout' component={Pages.Logout} />
              <Route path='/login' component={Pages.LoginPage} />
              <Route path='/sign-up' component={Pages.RegisterPage} />
              <Route path='/reset-password' component={Pages.ResetPassword} />
              <PrivateRoute
                path='/profile'
                component={Pages.ProfilePage}
                userId={userId}
              />
              <PrivateRoute
                path='/books'
                exact
                component={Pages.BooksPage}
                userId={userId}
              />
              <PrivateRoute
                path='/books/:id'
                exact
                component={Pages.BookPage}
                userId={userId}
              />
              <PrivateRoute
                path='/books/new'
                component={Pages.AddBookPage}
                userId={userId}
              />
              <PrivateRoute
                path='/books/:id/edit'
                component={Pages.AddBookPage}
                userId={userId}
              />
              <PrivateRoute
                path='/books/new'
                component={Pages.AddBookPage}
                userId={userId}
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
    return { userId: getUserId(state) };
  },
  null
)(App);
