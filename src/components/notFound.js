/**
 *
 */
'use strict';

import React from 'react';
import { Link } from 'react-router';

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Page not found.</h1>
        <p>Whoops! This is not the page you were looking for.</p>
        <p><Link to='/'>Back to Home</Link></p>
      </div>
    );
  }
}

module.exports = NotFoundPage;