/**
 *
 */
'use strict';

import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {

  render() {
    return (
      <div className='jumbotron'>
        <h1>Pluralsight Admin</h1>
        <p>Something something ... react?</p>
        <Link to='about' className='btn btn-primary btn-lg'>Learn more</Link>
      </div>
    );
  }
}

module.exports = Home;
