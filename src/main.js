/**
 *
 */
'use strict';

import React from "react";
import { Router, browserHistory } from 'react-router';
const ReactDOM = require('react-dom');
const routes = require('./routes');

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app'));
