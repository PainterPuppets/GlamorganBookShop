import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import AppComponent from './components/index';


export default () => {
  return (
    <BrowserRouter>
        <Route path="/" component={AppComponent}/>
    </BrowserRouter>
  )
}