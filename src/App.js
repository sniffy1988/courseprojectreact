import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import * as Pages from "./screens";

class App extends Component {
  render() {
    return (
      <Router>
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
      </Router>
    );
  }
}

export default App;
