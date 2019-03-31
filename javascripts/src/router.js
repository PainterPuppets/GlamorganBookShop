import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, IndexRoute, Redirect, Switch } from 'react-router-dom'
import HomepageLayout from './homepage/containers/HomepageLayout';
import LoginPage from './login/LoginPage';
import BookDetailContainer from './homepage/containers/BookDetailContainer';


export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />

        <Route exact path="/profile" component={LoginPage} />
        <Route exact path="/book" component={LoginPage} />

        <Route path="/" component={HomepageLayout} />
      </Switch>
    </BrowserRouter>
  )
}