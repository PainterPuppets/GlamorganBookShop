import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, IndexRoute } from 'react-router-dom'
import HomepageLayout from './homepage/containers/HomepageLayout';
import BookDetailContainer from './homepage/containers/BookDetailContainer';


export default () => {
  return (
    <BrowserRouter>
      <Route path="/" component={HomepageLayout} />
      {/*<IndexRoute />*/}
      {/*<Route path="/book/:id" component={BookDetailContainer} />*/}
      {/*</Route>*/}
    </BrowserRouter>
  )
}