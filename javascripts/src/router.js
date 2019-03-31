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
        <Route path="/" component={HomepageLayout} />
        {/*<IndexRoute />*/}
        {/*<Route path="/book/:id" component={BookDetailContainer} />*/}
        {/*</Route>*/}

      </Switch>
    </BrowserRouter>
  )
}