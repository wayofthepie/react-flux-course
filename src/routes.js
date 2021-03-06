'use strict';

import React from 'react';
import { Redirect, Router, Route, Link, IndexRoute } from 'react-router';
let About = require('./components/about/aboutPage');

// A sample transition to.
let onEnter = (nextState, transition, callback) => {
  if(!confirm('Are you sure?')) {
    transition.abort();
  } else {
    callback();
  }
};

// A sample transition from.
let onLeave = (prevState) => {
  if(!confirm('Are you sure?')) {
    console.log(prevState);
  }
};

let routes = (
  <Route path='/' component={require('./components/app')} >
    <IndexRoute component={require('./components/homePage')} />
    <Route path='authors' component={require('./components/authors/authorPage')} />
    <Route path='author' component={require('./components/authors/manageAuthorPage')} />
    <Route name='manageAuthor' path='author/:id' component={require('./components/authors/manageAuthorPage')} />
    <Route path='about' component={About} onEnter={onEnter} onLeave={onLeave} />
    <Redirect from='about-us' to='about' />
    <Route path='*' component={require('./components/notFound')} />
  </Route>
);

module.exports = routes;