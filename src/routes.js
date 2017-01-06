'use strict';

import React from 'react';
import { Router, Route, Link, IndexRoute } from 'react-router';

let routes = (
  <Route path='/' component={require('./components/app')} >
    <IndexRoute component={require('./components/homePage')} />
    <Route path='authors' component={require('./components/authors/authorPage')} />
    <Route path='about' component={require('./components/about/aboutPage')} />
  </Route>
);

module.exports = routes;