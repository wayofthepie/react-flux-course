/**
 *
 */
'use strict';

import React from 'react';
const Header = require('./common/header');

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className='container-fluid'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

module.exports = App;