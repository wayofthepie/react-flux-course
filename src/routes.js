'use strict';

import React from 'react';
import { Redirect, Router, Route, Link, IndexRoute } from 'react-router';
let About = require('./components/about/aboutPage');

let onEnter = (nextState, transition, callback) => {
  if(!confirm('Are you sure?')) {
    transition.abort();
  } else {
    callback();
  }
};

let routes = (
  <Route path='/' component={require('./components/app')} >
    <IndexRoute component={require('./components/homePage')} />
    <Route path='authors' component={require('./components/authors/authorPage')} />
    <Route path='about' component={About} onEnter={onEnter} />
    <Redirect from='about-us' to='about' />
    <Route path='*' component={require('./components/notFound')} />
  </Route>
);

module.exports = routes;