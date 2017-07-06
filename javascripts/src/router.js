import React from 'react';
import ReactDOM from 'react-dom';

import { IndexRoute } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom'
import HomepageLayout from './homepage/containers/HomepageLayout';
import HomepageContainer from './homepage/containers/HomepageContainer';


export default () => {
  return (
    <BrowserRouter>
        <Route path="/" component={HomepageLayout} />
        {/*<Route path="/book/:id" component={User}/>*/}
    </BrowserRouter>
  )
}