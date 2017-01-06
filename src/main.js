/**
 *
 */
'use strict';

import React from "react";
import { Router, browserHistory } from 'react-router';
let ReactDOM = require('react-dom');
let routes = require('./routes');
let InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app'));
